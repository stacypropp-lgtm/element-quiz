import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Element } from '../data/quiz'

interface ShareButtonProps {
  element: Element
  secondary?: Element
}

const elementEmojis: Record<Element, string> = {
  wood: '🌲',
  fire: '🔥',
  earth: '🌍',
  metal: '🪙',
  water: '🌊',
}

const elementNames: Record<Element, string> = {
  wood: 'Wood',
  fire: 'Fire',
  earth: 'Earth',
  metal: 'Metal',
  water: 'Water',
}

export default function ShareButton({ element, secondary }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = `${window.location.origin}/element-quiz/?result=${element}${secondary ? `&secondary=${secondary}` : ''}`
  const shareText = `I'm a ${elementEmojis[element]} ${elementNames[element]} type! 🌲🔥🌍🪙🌊 Take the Five Element quiz to discover yours →`

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "What's Your Element?", text: shareText, url: shareUrl })
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white font-medium text-sm shadow-lg shadow-gold/20 transition-colors hover:bg-gold-light"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Share Your Result
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-gold font-medium"
          >
            Link copied to clipboard!
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
