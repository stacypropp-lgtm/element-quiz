import { useState, useEffect, useMemo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { quizQuestions, shuffleOptions, calculateResults, type Element } from '../data/quiz'
import { elementProfiles, getComboDescription } from '../data/elements'
import ShareButton from '../components/ShareButton'
import BookCTA from '../components/BookCTA'

const elementGradients: Record<Element, string> = {
  wood: 'from-wood/20 to-sage/10',
  fire: 'from-burgundy/20 to-gold/10',
  earth: 'from-earth-brown/20 to-gold/10',
  metal: 'from-silver/20 to-cream',
  water: 'from-ocean/20 to-forest/10',
}

const selfHelpLabels: Record<string, string> = {
  acupoint: 'Acupoint',
  earSeeds: 'Ear Seeds',
  guaSha: 'Gua Sha',
  cupping: 'Cupping',
  tea: 'Tea',
  movement: 'Movement',
}

const selfHelpEmojis: Record<string, string> = {
  acupoint: '📍',
  earSeeds: '🫘',
  guaSha: '🪨',
  cupping: '🫙',
  tea: '🍵',
  movement: '🧘',
}

export default function Quiz() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, Element>>({})
  const [showResult, setShowResult] = useState(false)
  const [direction, setDirection] = useState(1)
  const [result, setResult] = useState<{
    primary: Element
    secondary: Element
    scores: Record<Element, number>
  } | null>(null)

  // Check for shared result in URL
  const sharedResult = searchParams.get('result') as Element | null
  const isSharedResult =
    sharedResult && ['wood', 'fire', 'earth', 'metal', 'water'].includes(sharedResult)

  // Memoize shuffled options for each question so they stay stable during the session
  const shuffledQuestions = useMemo(
    () => quizQuestions.map((q) => ({ ...q, options: shuffleOptions(q.options) })),
    []
  )

  // Load saved results from localStorage on mount
  useEffect(() => {
    if (isSharedResult) return
    const saved = localStorage.getItem('quiz-result')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.primary && parsed.secondary) {
          setResult(parsed)
          setShowResult(true)
        }
      } catch {
        // ignore invalid saved data
      }
    }
  }, [isSharedResult])

  const handleAnswer = useCallback(
    (questionId: number, element: Element) => {
      const newAnswers = { ...answers, [questionId]: element }
      setAnswers(newAnswers)

      if (currentQuestion < quizQuestions.length - 1) {
        setDirection(1)
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1)
        }, 300)
      } else {
        // Quiz complete
        const calculated = calculateResults(newAnswers)
        setResult(calculated)
        localStorage.setItem('quiz-result', JSON.stringify(calculated))
        setTimeout(() => {
          setShowResult(true)
        }, 300)
      }
    },
    [answers, currentQuestion]
  )

  const handleRetake = useCallback(() => {
    setAnswers({})
    setCurrentQuestion(0)
    setShowResult(false)
    setResult(null)
    setDirection(1)
    localStorage.removeItem('quiz-result')
    setSearchParams({})
  }, [setSearchParams])

  const handleGoBack = useCallback(() => {
    if (currentQuestion > 0) {
      setDirection(-1)
      setCurrentQuestion((prev) => prev - 1)
    }
  }, [currentQuestion])

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100

  // Shared result view
  if (isSharedResult) {
    const profile = elementProfiles[sharedResult]
    return (
      <div className={`min-h-screen bg-gradient-to-b ${elementGradients[sharedResult]}`}>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-6xl mb-4">{profile.emoji}</p>
            <h1 className="font-serif text-4xl text-forest mb-2">
              Someone got {profile.name}!
            </h1>
            <p className="text-forest/60 text-sm">
              Their Five Element personality type
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 text-center"
          >
            <p className="text-forest/80 leading-relaxed mb-8">
              {profile.balanced}
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setSearchParams({})
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-forest text-cream font-medium shadow-lg shadow-forest/20 transition-colors hover:bg-forest-light"
            >
              Take the quiz yourself
            </motion.button>
          </motion.div>

          <BookCTA />
        </div>
      </div>
    )
  }

  // Result view
  if (showResult && result) {
    const profile = elementProfiles[result.primary]
    const secondaryProfile = elementProfiles[result.secondary]
    const comboDescription = getComboDescription(result.primary, result.secondary)

    return (
      <div className={`min-h-screen bg-gradient-to-b ${elementGradients[result.primary]}`}>
        {/* Progress bar - complete */}
        <div className="sticky top-0 z-50 h-1 bg-cream/50">
          <motion.div
            className="h-full bg-forest"
            initial={{ width: `${progress}%` }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="max-w-2xl mx-auto px-4 py-12">
          {/* Element header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
            className="text-center mb-10"
          >
            <motion.p
              className="text-7xl mb-4"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {profile.emoji}
            </motion.p>
            <h1 className="font-serif text-4xl md:text-5xl text-forest mb-2">
              You are {profile.name}
            </h1>
            <p className="text-forest/50 text-sm">
              with a touch of {secondaryProfile.emoji} {secondaryProfile.name}
            </p>
          </motion.div>

          {/* Attribute grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10"
          >
            {[
              { label: 'Season', value: profile.season },
              { label: 'Organs', value: profile.organs },
              { label: 'Emotion', value: profile.emotion },
              { label: 'Flavor', value: profile.flavor },
              { label: 'Color', value: profile.color },
            ].map((attr, i) => (
              <motion.div
                key={attr.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <p className="text-[10px] uppercase tracking-widest text-forest/40 mb-1">
                  {attr.label}
                </p>
                <p className="text-sm font-medium text-forest">{attr.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* When You're Balanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6"
          >
            <h2 className="font-serif text-xl text-forest mb-3">
              When You're Balanced
            </h2>
            <p className="text-forest/80 text-sm leading-relaxed">
              {profile.balanced}
            </p>
          </motion.div>

          {/* When You're Imbalanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6"
          >
            <h2 className="font-serif text-xl text-forest mb-3">
              When You're Imbalanced
            </h2>
            <p className="text-forest/80 text-sm leading-relaxed">
              {profile.imbalanced}
            </p>
          </motion.div>

          {/* Your Body Talking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6"
          >
            <h2 className="font-serif text-xl text-forest mb-3">
              Your Body Talking
            </h2>
            <p className="text-forest/80 text-sm leading-relaxed">
              {profile.bodyTalking}
            </p>
          </motion.div>

          {/* Acupuncturist Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6 border border-white/30"
          >
            <h2 className="font-serif text-xl text-forest mb-3">
              What Your Acupuncturist Would Say
            </h2>
            <p className="text-forest/80 text-sm leading-relaxed italic">
              {profile.acupuncturistQuote}
            </p>
          </motion.div>

          {/* Self-Help Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-6"
          >
            <h2 className="font-serif text-2xl text-forest mb-5 text-center">
              Your Self-Help Toolkit
            </h2>
            <div className="space-y-4">
              {(Object.keys(selfHelpLabels) as Array<keyof typeof selfHelpLabels>).map(
                (key, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{selfHelpEmojis[key]}</span>
                      <h3 className="font-medium text-forest text-sm uppercase tracking-wide">
                        {selfHelpLabels[key]}
                      </h3>
                    </div>
                    <p className="text-forest/75 text-sm leading-relaxed">
                      {profile.selfHelp[key as keyof typeof profile.selfHelp]}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Two-element combo */}
          {comboDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8"
            >
              <h2 className="font-serif text-xl text-forest mb-1">
                Your Elemental Combo
              </h2>
              <p className="text-forest/40 text-xs mb-3">
                {profile.emoji} {profile.name} + {secondaryProfile.emoji}{' '}
                {secondaryProfile.name}
              </p>
              <p className="text-forest/80 text-sm leading-relaxed">
                {comboDescription}
              </p>
            </motion.div>
          )}

          {/* Share + Retake */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <ShareButton element={result.primary} secondary={result.secondary} />
            <button
              onClick={handleRetake}
              className="text-forest/50 text-sm font-medium hover:text-forest transition-colors underline underline-offset-4 decoration-forest/20 hover:decoration-forest/40"
            >
              Retake Quiz
            </button>
          </motion.div>

          <BookCTA />
        </div>
      </div>
    )
  }

  // Quiz view
  const question = shuffledQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-sage/10 flex flex-col">
      {/* Progress bar */}
      <div className="sticky top-0 z-50 h-1 bg-cream/50">
        <motion.div
          className="h-full bg-forest"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-4 py-8">
        {/* Question counter + back button */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleGoBack}
            disabled={currentQuestion === 0}
            className="text-forest/40 hover:text-forest disabled:opacity-0 transition-all text-sm flex items-center gap-1"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <span className="text-xs text-forest/40 font-medium tracking-wide">
            {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>

        {/* Question + Options */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={question.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-forest text-center mb-8 leading-snug">
                {question.question}
              </h2>

              <div className="space-y-3">
                {question.options.map((option, i) => {
                  const isSelected = answers[question.id] === option.element
                  return (
                    <motion.button
                      key={`${question.id}-${option.element}`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(question.id, option.element)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 text-sm leading-relaxed ${
                        isSelected
                          ? 'bg-forest/10 border-forest/30 text-forest shadow-sm'
                          : 'bg-white/70 backdrop-blur-sm border-white/40 text-forest/80 hover:bg-white hover:border-forest/15 hover:shadow-sm'
                      }`}
                    >
                      {option.text}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
