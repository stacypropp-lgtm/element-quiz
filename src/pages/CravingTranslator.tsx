import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cravings } from '../data/cravings'
import BookCTA from '../components/BookCTA'

export default function CravingTranslator() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-cream pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 pt-10 pb-8 text-center"
      >
        <h1 className="font-serif text-3xl sm:text-4xl text-forest mb-3">
          🍫 Craving Translator
        </h1>
        <p className="text-forest/70 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          What your cravings are really telling you — according to Traditional Chinese Medicine
        </p>
      </motion.div>

      {/* Craving Cards Grid */}
      <div className="px-4 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {cravings.map((craving, index) => {
          const isExpanded = expandedIndex === index

          return (
            <motion.div
              key={craving.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              layout
              className={`rounded-2xl bg-white shadow-sm cursor-pointer overflow-hidden transition-colors duration-300 border-2 ${
                isExpanded ? 'col-span-2 md:col-span-3' : ''
              }`}
              style={{
                borderColor: isExpanded ? craving.color : 'transparent',
              }}
              onClick={() => toggle(index)}
            >
              {/* Card Header — always visible */}
              <motion.div
                layout="position"
                className="flex items-center gap-3 p-4"
              >
                <span className="text-3xl sm:text-4xl">{craving.emoji}</span>
                <div className="min-w-0">
                  <p className="font-serif text-base sm:text-lg text-forest font-semibold leading-tight">
                    {craving.name}
                  </p>
                  <p className="text-xs sm:text-sm text-forest/60 mt-0.5">
                    {craving.organ}
                  </p>
                </div>
              </motion.div>

              {/* Expanded Detail Panel */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 space-y-4">
                      <div className="h-px bg-forest/10" />

                      {/* Meaning */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-forest/50 mb-1.5">
                          What it means
                        </p>
                        <p className="text-sm text-forest/80 leading-relaxed">
                          {craving.meaning}
                        </p>
                      </div>

                      {/* Instead */}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-forest/50 mb-1.5">
                          What to do instead
                        </p>
                        <p className="text-sm text-forest/80 leading-relaxed">
                          {craving.instead}
                        </p>
                      </div>

                      <p className="text-xs text-forest/40 text-center pt-1">
                        Tap to close
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Book CTA */}
      <div className="max-w-4xl mx-auto mt-10">
        <BookCTA />
      </div>
    </div>
  )
}
