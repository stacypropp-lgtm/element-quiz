import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clockPeriods } from '../data/bodyclock'
import BookCTA from '../components/BookCTA'

const SIZE = 320
const CENTER = SIZE / 2
const OUTER_R = 140
const INNER_R = 70
const LABEL_R = 108

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function arcPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
) {
  const outerStart = polarToCartesian(cx, cy, outerR, startAngle)
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle)
  const innerStart = polarToCartesian(cx, cy, innerR, endAngle)
  const innerEnd = polarToCartesian(cx, cy, innerR, startAngle)
  const largeArc = endAngle - startAngle > 180 ? 1 : 0

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${innerEnd.x} ${innerEnd.y}`,
    'Z',
  ].join(' ')
}

/** Map startHour to clock angle. Midnight (hour 0/24) = 0 degrees (12 o'clock). Each hour = 15 degrees. */
function hourToAngle(hour: number) {
  // 23 => -15, 0 => 0, 1 => 15, etc.
  return ((hour % 24) * 360) / 24
}

const WAKE_TIMES = [
  { label: '11 PM – 1 AM', index: 11 },
  { label: '1 – 3 AM', index: 0 },
  { label: '3 – 5 AM', index: 1 },
]

export default function BodyClock() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-cream pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-8 pb-4 px-4 text-center"
      >
        <h1 className="font-serif text-3xl text-forest mb-2">
          The TCM Organ Clock
        </h1>
        <p className="text-sm text-forest/70 max-w-md mx-auto leading-relaxed">
          In Chinese Medicine, Qi flows through each organ system in two-hour
          waves over 24 hours. Tap a segment to discover what your body is doing
          — and what symptoms mean.
        </p>
      </motion.div>

      {/* Clock */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex justify-center px-4 py-4"
      >
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full max-w-[360px] drop-shadow-lg"
        >
          {/* Subtle outer glow */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="shadow">
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Background circle */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={OUTER_R + 6}
            fill="none"
            stroke="#2D5A3D"
            strokeWidth="1"
            opacity="0.15"
          />

          {/* Segments */}
          {clockPeriods.map((period, i) => {
            const startAngle = hourToAngle(period.startHour)
            const endAngle = startAngle + 30
            const midAngle = startAngle + 15
            const isSelected = selected === i
            const d = arcPath(CENTER, CENTER, OUTER_R, INNER_R, startAngle, endAngle)
            const labelPos = polarToCartesian(CENTER, CENTER, LABEL_R, midAngle)
            const emojiPos = polarToCartesian(CENTER, CENTER, LABEL_R - 18, midAngle)

            return (
              <g
                key={i}
                onClick={() => setSelected(isSelected ? null : i)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`${period.organ}: ${period.time}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(isSelected ? null : i)
                  }
                }}
              >
                {/* Segment path */}
                <motion.path
                  d={d}
                  fill={period.color}
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth={isSelected ? 2 : 0.5}
                  initial={false}
                  animate={{
                    opacity: selected === null || isSelected ? 1 : 0.45,
                    scale: isSelected ? 1.06 : 1,
                  }}
                  whileHover={{ opacity: 1, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                  filter={isSelected ? 'url(#glow)' : undefined}
                />

                {/* Emoji */}
                <motion.text
                  x={emojiPos.x}
                  y={emojiPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="13"
                  initial={false}
                  animate={{
                    opacity: selected === null || isSelected ? 1 : 0.4,
                  }}
                  style={{ pointerEvents: 'none' }}
                >
                  {period.emoji}
                </motion.text>

                {/* Organ label */}
                <motion.text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="7"
                  fontWeight="600"
                  initial={false}
                  animate={{
                    opacity: selected === null || isSelected ? 1 : 0.35,
                  }}
                  style={{ pointerEvents: 'none', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {period.organ}
                </motion.text>
              </g>
            )
          })}

          {/* Center circle */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={INNER_R - 2}
            fill="#FAF6F0"
            stroke="#2D5A3D"
            strokeWidth="0.5"
            opacity="0.9"
          />

          {/* Center text */}
          <text
            x={CENTER}
            y={CENTER - 10}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#2D5A3D"
            fontSize="10"
            fontWeight="600"
          >
            24-Hour
          </text>
          <text
            x={CENTER}
            y={CENTER + 4}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#2D5A3D"
            fontSize="10"
            fontWeight="600"
          >
            Organ Clock
          </text>
          <text
            x={CENTER}
            y={CENTER + 18}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#2D5A3D"
            fontSize="7"
            opacity="0.6"
          >
            Tap a segment
          </text>

          {/* Hour tick marks and labels around the outside */}
          {Array.from({ length: 12 }).map((_, i) => {
            const hour = (i * 2) % 24
            const angle = (i * 30)
            const outerTick = polarToCartesian(CENTER, CENTER, OUTER_R + 3, angle)
            const innerTick = polarToCartesian(CENTER, CENTER, OUTER_R - 2, angle)
            const labelPoint = polarToCartesian(CENTER, CENTER, OUTER_R + 14, angle)
            const displayHour = hour === 0 ? '12a' : hour < 12 ? `${hour}a` : hour === 12 ? '12p' : `${hour - 12}p`

            return (
              <g key={`tick-${i}`}>
                <line
                  x1={innerTick.x}
                  y1={innerTick.y}
                  x2={outerTick.x}
                  y2={outerTick.y}
                  stroke="#2D5A3D"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <text
                  x={labelPoint.x}
                  y={labelPoint.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#2D5A3D"
                  fontSize="7"
                  opacity="0.55"
                  fontWeight="500"
                >
                  {displayHour}
                </text>
              </g>
            )
          })}
        </svg>
      </motion.div>

      {/* Selected Segment Detail */}
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="mx-4 overflow-hidden"
          >
            <div
              className="rounded-2xl p-5 border"
              style={{
                backgroundColor: `${clockPeriods[selected].color}10`,
                borderColor: `${clockPeriods[selected].color}30`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{clockPeriods[selected].emoji}</span>
                <div>
                  <h2 className="font-serif text-xl text-forest">
                    {clockPeriods[selected].organ}
                  </h2>
                  <p
                    className="text-xs font-medium"
                    style={{ color: clockPeriods[selected].color }}
                  >
                    {clockPeriods[selected].time}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xs font-semibold text-forest/50 uppercase tracking-wider mb-1">
                    Function
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    {clockPeriods[selected].function}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-forest/50 uppercase tracking-wider mb-1">
                    Symptoms & Signs
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    {clockPeriods[selected].symptoms}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-forest/50 uppercase tracking-wider mb-1">
                    Advice
                  </h3>
                  <p className="text-sm text-forest/80 leading-relaxed">
                    {clockPeriods[selected].advice}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* "When Do You Wake Up?" Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-10 px-4"
      >
        <h2 className="font-serif text-xl text-forest text-center mb-2">
          When Do You Wake Up?
        </h2>
        <p className="text-sm text-forest/60 text-center mb-4 max-w-sm mx-auto">
          Waking at the same time each night? It could reveal which organ needs
          support. Tap a time to learn more.
        </p>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {WAKE_TIMES.map(({ label, index }) => {
            const period = clockPeriods[index]
            const isActive = selected === index
            return (
              <motion.button
                key={index}
                onClick={() => setSelected(isActive ? null : index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all text-left ${
                  isActive
                    ? 'border-forest/30 bg-forest/5 shadow-md'
                    : 'border-forest/10 bg-white/60 hover:bg-white/80'
                }`}
              >
                <span className="text-2xl">{period.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-forest">
                    {label}
                  </p>
                  <p className="text-xs text-forest/60">
                    {period.organ} — {period.function.split(',')[0]}
                  </p>
                </div>
                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-forest/40 text-sm"
                >
                  ▼
                </motion.span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Book CTA */}
      <div className="mt-10">
        <BookCTA />
      </div>
    </div>
  )
}
