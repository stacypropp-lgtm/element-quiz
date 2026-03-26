import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const elements = [
  { emoji: '🌲', name: 'Wood', desc: 'The Visionary', color: 'bg-wood/10 text-wood' },
  { emoji: '🔥', name: 'Fire', desc: 'The Spark', color: 'bg-burgundy/10 text-burgundy' },
  { emoji: '🌍', name: 'Earth', desc: 'The Nurturer', color: 'bg-earth-brown/10 text-earth-brown' },
  { emoji: '🪙', name: 'Metal', desc: 'The Refiner', color: 'bg-silver/20 text-forest' },
  { emoji: '🌊', name: 'Water', desc: 'The Philosopher', color: 'bg-ocean/10 text-ocean' },
]

const tools = [
  { to: '/tongue', emoji: '👅', name: 'Tongue Reader', desc: 'See what your tongue reveals about your health' },
  { to: '/clock', emoji: '🕐', name: 'Body Clock', desc: 'Decode why you wake at 3 AM' },
  { to: '/cravings', emoji: '🍫', name: 'Craving Translator', desc: 'What your cravings really mean' },
  { to: '/emotions', emoji: '😢', name: 'Emotion-Organ Map', desc: 'Connect feelings to organ systems' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Landing() {
  return (
    <div className="max-w-2xl mx-auto px-4 pt-12 pb-8">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <div className="text-5xl mb-4">🌲🔥🌍🪙🌊</div>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-forest mb-4 leading-tight">
          What's Your Element?
        </h1>
        <p className="text-forest/70 text-lg leading-relaxed max-w-md mx-auto mb-2">
          Discover your Five Element type — the ancient Chinese medicine framework that explains your personality, health patterns, and emotional tendencies.
        </p>
        <p className="text-forest/50 text-sm">
          By Dr. Stacy Propp, DACM, L.Ac. &middot;{' '}
          <a
            href="https://herbalrhymes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-forest/70 transition-colors"
          >
            Herbal Rhymes
          </a>
        </p>
      </motion.div>

      {/* Quiz CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="mb-12"
      >
        <Link
          to="/quiz"
          className="block w-full max-w-sm mx-auto text-center px-8 py-4 rounded-2xl bg-forest text-cream font-semibold text-lg shadow-xl shadow-forest/20 transition-all hover:bg-forest-light hover:scale-[1.02] hover:shadow-2xl hover:shadow-forest/30 active:scale-[0.98]"
        >
          Take the Five Element Quiz
        </Link>
        <p className="text-center text-forest/40 text-xs mt-3">20 questions &middot; 3 minutes &middot; surprisingly accurate</p>
      </motion.div>

      {/* Five Elements Preview */}
      <motion.div variants={container} initial="hidden" animate="show" className="mb-12">
        <h2 className="font-serif text-2xl text-forest text-center mb-6">The Five Elements</h2>
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {elements.map(el => (
            <motion.div
              key={el.name}
              variants={item}
              className={`${el.color} rounded-xl p-3 text-center`}
            >
              <div className="text-2xl sm:text-3xl mb-1">{el.emoji}</div>
              <div className="font-semibold text-xs sm:text-sm">{el.name}</div>
              <div className="text-[10px] sm:text-xs opacity-70 hidden sm:block">{el.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Other Tools */}
      <motion.div variants={container} initial="hidden" animate="show" className="mb-8">
        <h2 className="font-serif text-2xl text-forest text-center mb-6">Explore More Tools</h2>
        <div className="grid grid-cols-2 gap-3">
          {tools.map(tool => (
            <motion.div key={tool.to} variants={item}>
              <Link
                to={tool.to}
                className="block p-4 rounded-xl bg-white/60 border border-forest/8 transition-all hover:bg-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="text-2xl mb-2">{tool.emoji}</div>
                <div className="font-semibold text-sm text-forest">{tool.name}</div>
                <div className="text-xs text-forest/50 mt-1 leading-snug">{tool.desc}</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center px-4 py-6 rounded-2xl bg-forest/5"
      >
        <p className="text-sm text-forest/70 leading-relaxed">
          Five Element theory is one of the oldest frameworks in Traditional Chinese Medicine, used for over 2,000 years to understand the interconnection between our bodies, emotions, and the natural world. This app brings that wisdom to your fingertips.
        </p>
        <a
          href="https://herbalrhymes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs text-gold font-medium hover:underline"
        >
          Learn more at herbalrhymes.com →
        </a>
      </motion.div>
    </div>
  )
}
