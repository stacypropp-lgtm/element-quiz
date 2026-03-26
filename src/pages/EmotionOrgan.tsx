import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { emotionOrgans } from '../data/emotions'
import BookCTA from '../components/BookCTA'

const LEVELS = [1, 2, 3, 4, 5] as const
const CENTER_X = 150
const CENTER_Y = 150
const RADIUS = 120

function polarToCart(angle: number, radius: number) {
  // Start from top (-90deg) and go clockwise
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x: CENTER_X + radius * Math.cos(rad),
    y: CENTER_Y + radius * Math.sin(rad),
  }
}

function getAxisAngle(index: number) {
  return (360 / 5) * index
}

function pentagonPoints(radius: number): string {
  return Array.from({ length: 5 })
    .map((_, i) => {
      const { x, y } = polarToCart(getAxisAngle(i), radius)
      return `${x},${y}`
    })
    .join(' ')
}

export default function EmotionOrgan() {
  const [ratings, setRatings] = useState<number[]>([0, 0, 0, 0, 0])

  const allRated = ratings.every((r) => r > 0)

  const highestIndex = useMemo(() => {
    if (!allRated) return -1
    let maxVal = 0
    let maxIdx = 0
    ratings.forEach((r, i) => {
      if (r > maxVal) {
        maxVal = r
        maxIdx = i
      }
    })
    return maxIdx
  }, [ratings, allRated])

  const handleRate = (emotionIndex: number, level: number) => {
    setRatings((prev) => {
      const next = [...prev]
      next[emotionIndex] = level
      return next
    })
  }

  const dataPoints = useMemo(() => {
    return ratings.map((r, i) => {
      const val = r || 0
      const scaled = (val / 5) * RADIUS
      return polarToCart(getAxisAngle(i), scaled)
    })
  }, [ratings])

  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <div className="min-h-screen bg-cream pb-12">
      {/* Header */}
      <div className="px-4 pt-8 pb-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl text-forest mb-2"
        >
          😢 Emotion-Organ Connection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-forest/70 text-sm max-w-md mx-auto leading-relaxed"
        >
          How much does each emotion dominate your daily life? Rate each on a
          scale of 1-5.
        </motion.p>
      </div>

      {/* Radar Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center px-4 mb-6"
      >
        <svg viewBox="0 0 300 300" className="w-full max-w-xs">
          {/* Concentric pentagons */}
          {LEVELS.map((level) => (
            <polygon
              key={level}
              points={pentagonPoints((level / 5) * RADIUS)}
              fill="none"
              stroke="currentColor"
              className="text-forest/15"
              strokeWidth={level === 5 ? 1.5 : 0.75}
            />
          ))}

          {/* Axis lines */}
          {emotionOrgans.map((_, i) => {
            const { x, y } = polarToCart(getAxisAngle(i), RADIUS)
            return (
              <line
                key={i}
                x1={CENTER_X}
                y1={CENTER_Y}
                x2={x}
                y2={y}
                stroke="currentColor"
                className="text-forest/10"
                strokeWidth={0.75}
              />
            )
          })}

          {/* Data polygon */}
          <motion.polygon
            points={dataPolygon}
            fill="rgba(58, 139, 58, 0.15)"
            stroke="rgba(58, 139, 58, 0.7)"
            strokeWidth={2}
            strokeLinejoin="round"
            initial={false}
            animate={{ points: dataPolygon }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          />

          {/* Data points */}
          {dataPoints.map((point, i) => (
            <motion.circle
              key={i}
              r={ratings[i] > 0 ? 4 : 0}
              fill={emotionOrgans[i].color}
              stroke="white"
              strokeWidth={1.5}
              initial={false}
              animate={{ cx: point.x, cy: point.y, r: ratings[i] > 0 ? 4 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
          ))}

          {/* Axis labels */}
          {emotionOrgans.map((eo, i) => {
            const { x, y } = polarToCart(getAxisAngle(i), RADIUS + 22)
            const isTop = i === 0
            const isBottom = i === 2 || i === 3
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline={isTop ? 'auto' : isBottom ? 'hanging' : 'middle'}
                className="fill-forest text-[8px] font-medium"
              >
                {eo.emoji} {eo.organ}
              </text>
            )
          })}
        </svg>
      </motion.div>

      {/* Rating UI */}
      <div className="px-4 space-y-4 max-w-md mx-auto">
        {emotionOrgans.map((eo, i) => (
          <motion.div
            key={eo.organ}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            className="rounded-xl border border-forest/10 bg-white p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-lg mr-1.5">{eo.emoji}</span>
                <span className="font-serif text-forest font-medium">
                  {eo.emotion}
                </span>
              </div>
              <span className="text-xs text-forest/50 font-medium">
                {eo.organ} · {eo.element}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {LEVELS.map((level) => {
                const isSelected = ratings[i] === level
                return (
                  <button
                    key={level}
                    onClick={() => handleRate(i, level)}
                    className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 text-sm font-semibold"
                    style={{
                      borderColor: ratings[i] >= level ? eo.color : 'rgba(0,0,0,0.1)',
                      backgroundColor: isSelected ? eo.color : ratings[i] >= level ? `${eo.color}20` : 'transparent',
                      color: isSelected ? 'white' : ratings[i] >= level ? eo.color : 'rgba(0,0,0,0.3)',
                    }}
                    aria-label={`Rate ${eo.emotion} ${level} out of 5`}
                  >
                    {level}
                    {isSelected && (
                      <motion.span
                        layoutId={`ring-${i}`}
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: eo.color }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                )
              })}
              <span className="ml-auto text-xs text-forest/40">
                {ratings[i] === 0 ? 'tap to rate' : `${ratings[i]}/5`}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Results */}
      <AnimatePresence>
        {allRated && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="px-4 mt-8 max-w-md mx-auto"
          >
            {/* Primary result */}
            <div
              className="rounded-2xl p-5 mb-6 border"
              style={{
                borderColor: `${emotionOrgans[highestIndex].color}30`,
                backgroundColor: `${emotionOrgans[highestIndex].color}08`,
              }}
            >
              <p className="text-sm text-forest/60 mb-1 font-medium uppercase tracking-wide">
                Needs the most attention
              </p>
              <h2 className="font-serif text-2xl text-forest mb-1">
                {emotionOrgans[highestIndex].emoji}{' '}
                {emotionOrgans[highestIndex].organ} System
              </h2>
              <p className="text-sm text-forest/70 leading-relaxed">
                Your <strong>{emotionOrgans[highestIndex].emotion}</strong>{' '}
                score of {ratings[highestIndex]}/5 suggests your{' '}
                {emotionOrgans[highestIndex].organ} system may benefit from some
                extra care.
              </p>
            </div>

            {/* All organ results */}
            <div className="space-y-4">
              {emotionOrgans.map((eo, i) => (
                <motion.div
                  key={eo.organ}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-xl border border-forest/10 bg-white overflow-hidden"
                >
                  <div
                    className="px-4 py-3 flex items-center justify-between"
                    style={{ backgroundColor: `${eo.color}10` }}
                  >
                    <h3 className="font-serif text-forest font-medium">
                      {eo.emoji} {eo.organ}{' '}
                      <span className="text-forest/50 font-normal text-sm">
                        ({eo.emotion})
                      </span>
                    </h3>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: eo.color }}
                    >
                      {ratings[i]}/5
                    </span>
                  </div>
                  <div className="p-4 space-y-3 text-sm text-forest/80 leading-relaxed">
                    <div>
                      <p className="font-semibold text-forest mb-0.5">
                        🥗 Foods
                      </p>
                      <p>{eo.foods}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest mb-0.5">
                        🏃 Activities
                      </p>
                      <p>{eo.activities}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest mb-0.5">
                        📍 Acupoint
                      </p>
                      <p>{eo.acupoint}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest mb-0.5">
                        🍵 Tea
                      </p>
                      <p>{eo.tea}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <BookCTA />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
