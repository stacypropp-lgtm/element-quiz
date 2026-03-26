import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tongueCategories } from '../data/tongue'
import BookCTA from '../components/BookCTA'

const categoryIcons: Record<string, string> = {
  Color: '🎨',
  Coating: '🧊',
  Shape: '🔷',
  Moisture: '💧',
  Cracks: '⚡',
}

function TongueSVG() {
  return (
    <svg
      viewBox="0 0 220 300"
      className="w-48 h-auto mx-auto"
      role="img"
      aria-label="Tongue diagram showing TCM organ zones"
    >
      {/* Tongue body */}
      <defs>
        <radialGradient id="tongueGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f4a0a0" />
          <stop offset="60%" stopColor="#e88888" />
          <stop offset="100%" stopColor="#d07070" />
        </radialGradient>
        <filter id="tongueShadow" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00000020" />
        </filter>
      </defs>

      {/* Main tongue shape */}
      <path
        d="M110 28 C155 28, 190 70, 192 130 C194 180, 185 230, 170 260 C155 282, 140 290, 110 292 C80 290, 65 282, 50 260 C35 230, 26 180, 28 130 C30 70, 65 28, 110 28Z"
        fill="url(#tongueGrad)"
        filter="url(#tongueShadow)"
        stroke="#c06060"
        strokeWidth="1.5"
      />

      {/* Center line (subtle) */}
      <line
        x1="110" y1="60" x2="110" y2="250"
        stroke="#c0707030"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {/* Zone labels */}
      {/* Tip - Heart */}
      <circle cx="110" cy="52" r="16" fill="#ffffff30" stroke="#ffffff50" strokeWidth="0.75" />
      <text x="110" y="48" textAnchor="middle" className="text-[7px] font-semibold fill-white/90">
        Heart
      </text>
      <text x="110" y="58" textAnchor="middle" className="text-[6px] fill-white/70">
        (Tip)
      </text>

      {/* Center - Spleen/Stomach */}
      <ellipse cx="110" cy="155" rx="32" ry="28" fill="#ffffff20" stroke="#ffffff40" strokeWidth="0.75" />
      <text x="110" y="150" textAnchor="middle" className="text-[7px] font-semibold fill-white/90">
        Spleen /
      </text>
      <text x="110" y="161" textAnchor="middle" className="text-[7px] font-semibold fill-white/90">
        Stomach
      </text>
      <text x="110" y="172" textAnchor="middle" className="text-[6px] fill-white/70">
        (Center)
      </text>

      {/* Left side - Liver/Gallbladder */}
      <ellipse cx="52" cy="140" rx="14" ry="30" fill="#ffffff18" stroke="#ffffff40" strokeWidth="0.75" />
      <text x="15" y="125" textAnchor="start" className="text-[6.5px] font-semibold fill-forest/70">
        Liver /
      </text>
      <text x="4" y="136" textAnchor="start" className="text-[6.5px] font-semibold fill-forest/70">
        Gallbladder
      </text>
      <text x="15" y="147" textAnchor="start" className="text-[5.5px] fill-forest/50">
        (Left side)
      </text>

      {/* Right side - Liver/Gallbladder */}
      <ellipse cx="168" cy="140" rx="14" ry="30" fill="#ffffff18" stroke="#ffffff40" strokeWidth="0.75" />
      <text x="205" y="125" textAnchor="end" className="text-[6.5px] font-semibold fill-forest/70">
        Liver /
      </text>
      <text x="216" y="136" textAnchor="end" className="text-[6.5px] font-semibold fill-forest/70">
        Gallbladder
      </text>
      <text x="205" y="147" textAnchor="end" className="text-[5.5px] fill-forest/50">
        (Right side)
      </text>

      {/* Back - Kidney */}
      <ellipse cx="110" cy="248" rx="30" ry="18" fill="#ffffff18" stroke="#ffffff40" strokeWidth="0.75" />
      <text x="110" y="246" textAnchor="middle" className="text-[7px] font-semibold fill-white/90">
        Kidney
      </text>
      <text x="110" y="257" textAnchor="middle" className="text-[6px] fill-white/70">
        (Back)
      </text>
    </svg>
  )
}

export default function TongueReader() {
  const [activeTab, setActiveTab] = useState(0)
  const [selections, setSelections] = useState<Record<string, string>>({})
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const activeCategory = tongueCategories[activeTab]

  function handleSelect(categoryName: string, optionLabel: string) {
    setSelections(prev => ({
      ...prev,
      [categoryName]: prev[categoryName] === optionLabel ? '' : optionLabel,
    }))
    setExpandedCard(
      expandedCard === `${categoryName}-${optionLabel}`
        ? null
        : `${categoryName}-${optionLabel}`
    )
  }

  const hasSelections = Object.values(selections).some(v => v)

  return (
    <div className="max-w-lg mx-auto px-4 pt-6 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-6"
      >
        <h1 className="font-serif text-2xl text-forest mb-1">Tongue Reader</h1>
        <p className="text-sm text-forest/60 leading-relaxed max-w-xs mx-auto">
          In TCM, your tongue is a mirror of your internal health. Examine yours and tap what you see.
        </p>
      </motion.div>

      {/* Tongue Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 py-6 bg-white/60 rounded-2xl border border-forest/8"
      >
        <TongueSVG />
        <p className="text-center text-[11px] text-forest/45 mt-3 px-4">
          Each area of the tongue corresponds to a different organ system in Traditional Chinese Medicine
        </p>
      </motion.div>

      {/* Category Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="flex gap-1.5 overflow-x-auto pb-2 mb-4 scrollbar-hide -mx-1 px-1"
      >
        {tongueCategories.map((cat, i) => {
          const isActive = activeTab === i
          const hasSelection = !!selections[cat.name]
          return (
            <button
              key={cat.name}
              onClick={() => {
                setActiveTab(i)
                setExpandedCard(null)
              }}
              className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-forest text-cream shadow-sm'
                  : 'bg-white/70 text-forest/60 hover:bg-white hover:text-forest/80'
              }`}
            >
              <span>{categoryIcons[cat.name]}</span>
              <span>{cat.name}</span>
              {hasSelection && !isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-gold absolute -top-0.5 -right-0.5" />
              )}
            </button>
          )
        })}
      </motion.div>

      {/* Category Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeCategory.name}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="text-xs text-forest/55 leading-relaxed mb-4 px-1"
        >
          {activeCategory.description}
        </motion.p>
      </AnimatePresence>

      {/* Option Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-2.5 mb-8"
        >
          {activeCategory.options.map((option, i) => {
            const cardKey = `${activeCategory.name}-${option.label}`
            const isSelected = selections[activeCategory.name] === option.label
            const isExpanded = expandedCard === cardKey

            return (
              <motion.button
                key={option.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                onClick={() => handleSelect(activeCategory.name, option.label)}
                className={`w-full text-left rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-forest/[0.06] border-forest/20 shadow-sm'
                    : 'bg-white/70 border-forest/8 hover:border-forest/15 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        scale: isSelected ? 1 : 0.9,
                        backgroundColor: isSelected
                          ? 'var(--color-forest)'
                          : 'transparent',
                      }}
                      transition={{ duration: 0.2 }}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-forest'
                          : 'border-forest/25'
                      }`}
                    >
                      {isSelected && (
                        <motion.svg
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          className="w-3 h-3 text-cream"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3.5 8.5L6.5 11.5L12.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      )}
                    </motion.div>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isSelected ? 'text-forest' : 'text-forest/75'
                      }`}
                    >
                      {option.label}
                    </span>
                  </div>
                  <motion.svg
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-4 h-4 text-forest/30 shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3.5 pt-0.5">
                        <div className="h-px bg-forest/8 mb-2.5" />
                        <p className="text-xs text-forest/65 leading-relaxed">
                          {option.meaning}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Tongue Profile Summary */}
      <AnimatePresence>
        {hasSelections && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-6 p-5 rounded-2xl bg-white/80 border border-forest/10 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-base">👅</span>
              <h2 className="font-serif text-base text-forest">My Tongue Profile</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tongueCategories.map(cat => {
                const selected = selections[cat.name]
                if (!selected) return null
                return (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest/[0.06] border border-forest/10"
                  >
                    <span className="text-xs">{categoryIcons[cat.name]}</span>
                    <span className="text-xs text-forest/50 font-medium">{cat.name}:</span>
                    <span className="text-xs text-forest font-semibold">{selected}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Summary insight */}
            {Object.values(selections).filter(Boolean).length >= 3 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 pt-3 border-t border-forest/8 text-xs text-forest/55 leading-relaxed"
              >
                You've examined {Object.values(selections).filter(Boolean).length} of 5 categories.
                Tap each meaning to understand what your tongue may be telling you, and explore the
                book for personalized herbal guidance.
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book CTA */}
      <BookCTA />
    </div>
  )
}
