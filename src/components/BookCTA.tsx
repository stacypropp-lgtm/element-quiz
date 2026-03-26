import { motion } from 'framer-motion'

export default function BookCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-8 mx-4 p-6 rounded-2xl bg-forest/5 border border-forest/10"
    >
      <p className="font-serif text-lg text-forest mb-2">
        There's so much more where this came from
      </p>
      <p className="text-sm text-forest/70 mb-4 leading-relaxed">
        Dive deeper into Five Element theory, tongue diagnosis, organ clock wisdom, and personalized herbal remedies in the book by Dr. Stacy Propp, DACM, L.Ac.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://amazon.com/dp/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-forest text-cream text-sm font-medium transition-all hover:bg-forest-light hover:scale-[1.02] active:scale-[0.98]"
        >
          📖 Get the Book on Amazon
        </a>
        <a
          href="https://herbalrhymes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-forest/20 text-forest text-sm font-medium transition-all hover:bg-forest/5 hover:scale-[1.02] active:scale-[0.98]"
        >
          🌿 Visit Herbal Rhymes
        </a>
      </div>
    </motion.div>
  )
}
