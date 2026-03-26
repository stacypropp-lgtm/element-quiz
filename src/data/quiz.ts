export type Element = 'wood' | 'fire' | 'earth' | 'metal' | 'water'

export interface QuizOption {
  text: string
  element: Element
}

export interface QuizQuestion {
  id: number
  question: string
  options: QuizOption[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When you're stressed, you tend to:",
    options: [
      { text: 'Get irritable, snap at people, clench your jaw', element: 'wood' },
      { text: 'Talk faster, laugh nervously, get scattered', element: 'fire' },
      { text: 'Overthink, worry in loops, comfort eat', element: 'earth' },
      { text: 'Withdraw, get quiet, organize something', element: 'metal' },
      { text: 'Freeze, feel paralyzed, want to hide under the covers', element: 'water' },
    ],
  },
  {
    id: 2,
    question: 'Your ideal weekend looks like:',
    options: [
      { text: 'Something physical — hiking, a project, anything with forward motion', element: 'wood' },
      { text: 'A party, a new restaurant, an adventure with friends', element: 'fire' },
      { text: 'Cooking for people, a farmers market, something cozy', element: 'earth' },
      { text: 'A clean house, a good book, quality over quantity', element: 'metal' },
      { text: 'Alone time near water — bath, lake, ocean, or just doing nothing', element: 'water' },
    ],
  },
  {
    id: 3,
    question: 'The emotion you struggle with most:',
    options: [
      { text: 'Anger or frustration', element: 'wood' },
      { text: 'Anxiety or restlessness', element: 'fire' },
      { text: 'Worry or overthinking', element: 'earth' },
      { text: 'Grief or sadness', element: 'metal' },
      { text: 'Fear or insecurity', element: 'water' },
    ],
  },
  {
    id: 4,
    question: 'People would describe you as:',
    options: [
      { text: 'Driven, decisive, sometimes intense', element: 'wood' },
      { text: 'Warm, charismatic, the life of the room', element: 'fire' },
      { text: 'Nurturing, reliable, the one everyone comes to', element: 'earth' },
      { text: 'Organized, refined, detail-oriented', element: 'metal' },
      { text: 'Deep, introspective, wise beyond your years', element: 'water' },
    ],
  },
  {
    id: 5,
    question: 'Your biggest health complaint tends to be:',
    options: [
      { text: 'Tension headaches, tight neck/shoulders, eye strain', element: 'wood' },
      { text: 'Heart palpitations, insomnia, feeling wired', element: 'fire' },
      { text: 'Bloating, digestive issues, fatigue after eating', element: 'earth' },
      { text: 'Sinus problems, dry skin, catching every cold', element: 'metal' },
      { text: 'Low back pain, feeling cold, low energy or libido', element: 'water' },
    ],
  },
  {
    id: 6,
    question: 'When you eat, you tend to crave:',
    options: [
      { text: 'Sour things — pickles, citrus, vinegar', element: 'wood' },
      { text: 'Bitter things — dark chocolate, coffee, arugula', element: 'fire' },
      { text: 'Sweet things — bread, pasta, comfort food', element: 'earth' },
      { text: 'Spicy things — hot sauce, garlic, ginger', element: 'metal' },
      { text: 'Salty things — chips, soy sauce, miso', element: 'water' },
    ],
  },
  {
    id: 7,
    question: 'Your sleep pattern:',
    options: [
      { text: "Trouble falling asleep — mind won't stop planning", element: 'wood' },
      { text: 'Light sleeper, vivid dreams, sometimes wake up sweating', element: 'fire' },
      { text: 'Sleep fine but wake up groggy, could nap anytime', element: 'earth' },
      { text: 'Wake up between 3-5 AM, hard to fall back asleep', element: 'metal' },
      { text: "Sleep too much or can't sleep at all — extremes", element: 'water' },
    ],
  },
  {
    id: 8,
    question: "In a group project, you're the one who:",
    options: [
      { text: 'Takes charge and sets the direction', element: 'wood' },
      { text: 'Energizes the group and keeps morale up', element: 'fire' },
      { text: "Makes sure everyone's heard and fed", element: 'earth' },
      { text: 'Creates the system, the spreadsheet, the timeline', element: 'metal' },
      { text: 'Asks the deep question no one else thought of', element: 'water' },
    ],
  },
  {
    id: 9,
    question: 'Your body tends to run:',
    options: [
      { text: 'Hot and tense', element: 'wood' },
      { text: 'Hot and restless', element: 'fire' },
      { text: 'Damp and heavy', element: 'earth' },
      { text: 'Dry and cool', element: 'metal' },
      { text: 'Cold and sluggish', element: 'water' },
    ],
  },
  {
    id: 10,
    question: 'The season you feel WORST in:',
    options: [
      { text: 'Spring', element: 'wood' },
      { text: 'Summer', element: 'fire' },
      { text: 'Late summer/seasonal transitions', element: 'earth' },
      { text: 'Autumn', element: 'metal' },
      { text: 'Winter', element: 'water' },
    ],
  },
  {
    id: 11,
    question: "When you cry, it's usually because of:",
    options: [
      { text: "Frustration — you're not sad, you're MAD", element: 'wood' },
      { text: 'Overwhelm — too much emotion all at once', element: 'fire' },
      { text: "Empathy — someone else's pain hits you hard", element: 'earth' },
      { text: 'Loss — letting go of something or someone', element: 'metal' },
      { text: 'Feeling alone or existentially heavy', element: 'water' },
    ],
  },
  {
    id: 12,
    question: 'Your voice tends to be:',
    options: [
      { text: 'Loud, commanding, sometimes sharp', element: 'wood' },
      { text: 'Animated, laughing, musical', element: 'fire' },
      { text: 'Warm, singing, soothing', element: 'earth' },
      { text: 'Clear, measured, sometimes monotone', element: 'metal' },
      { text: 'Quiet, low, groaning or sighing', element: 'water' },
    ],
  },
  {
    id: 13,
    question: 'Your face tends to show:',
    options: [
      { text: 'A greenish or ruddy tint, especially when angry', element: 'wood' },
      { text: 'Flushing or redness, especially on the cheeks', element: 'fire' },
      { text: 'A yellowish or sallow tone, especially around the mouth', element: 'earth' },
      { text: 'Pale or white complexion', element: 'metal' },
      { text: 'Dark circles under the eyes', element: 'water' },
    ],
  },
  {
    id: 14,
    question: 'Your relationship style:',
    options: [
      { text: 'Passionate, direct, sometimes confrontational', element: 'wood' },
      { text: 'Intense, exciting, sometimes overwhelming', element: 'fire' },
      { text: 'Devoted, stable, sometimes smothering', element: 'earth' },
      { text: 'Loyal, structured, sometimes distant', element: 'metal' },
      { text: 'Deep, private, sometimes hard to read', element: 'water' },
    ],
  },
  {
    id: 15,
    question: "When you're at your WORST, you:",
    options: [
      { text: 'Explode — rage, shouting, slamming things', element: 'wood' },
      { text: "Spiral — manic energy, can't sit still, overshare", element: 'fire' },
      { text: "Collapse — shut down, eat everything, can't move", element: 'earth' },
      { text: 'Isolate — cut people off, become rigid and cold', element: 'metal' },
      { text: 'Disappear — withdraw completely, feel hopeless', element: 'water' },
    ],
  },
  {
    id: 16,
    question: 'The compliment that would mean the most to you:',
    options: [
      { text: '"You\'re so capable and strong"', element: 'wood' },
      { text: '"You make everything more fun"', element: 'fire' },
      { text: '"I don\'t know what I\'d do without you"', element: 'earth' },
      { text: '"You have impeccable taste/standards"', element: 'metal' },
      { text: '"You see things no one else sees"', element: 'water' },
    ],
  },
  {
    id: 17,
    question: 'Your typical workout:',
    options: [
      { text: 'Competitive — running, martial arts, something to WIN', element: 'wood' },
      { text: 'Fun and social — dance, group fitness, pickup games', element: 'fire' },
      { text: 'Gentle — walking, yoga, swimming', element: 'earth' },
      { text: 'Structured — weight training with a program, cycling with data', element: 'metal' },
      { text: 'Meditative — tai chi, yin yoga, or honestly... none', element: 'water' },
    ],
  },
  {
    id: 18,
    question: 'Your biggest fear deep down:',
    options: [
      { text: 'Being powerless or trapped', element: 'wood' },
      { text: 'Being abandoned or unloved', element: 'fire' },
      { text: 'Being unnecessary or forgotten', element: 'earth' },
      { text: 'Being flawed or impure', element: 'metal' },
      { text: 'Being annihilated or ceasing to exist', element: 'water' },
    ],
  },
  {
    id: 19,
    question: 'If your body could talk, it would say:',
    options: [
      { text: '"Let me MOVE. Stop sitting here."', element: 'wood' },
      { text: '"I need connection and stimulation!"', element: 'fire' },
      { text: '"Feed me and let me rest. Please."', element: 'earth' },
      { text: '"Give me space to breathe. Literally."', element: 'metal' },
      { text: '"I\'m tired. I need warmth and safety."', element: 'water' },
    ],
  },
  {
    id: 20,
    question: 'The quote that resonates most:',
    options: [
      { text: '"The only way out is through."', element: 'wood' },
      { text: '"Life is either a daring adventure or nothing at all."', element: 'fire' },
      { text: '"Home is not a place, it\'s a feeling."', element: 'earth' },
      { text: '"Less is more."', element: 'metal' },
      { text: '"Still waters run deep."', element: 'water' },
    ],
  },
]

export function shuffleOptions(options: QuizOption[]): QuizOption[] {
  const shuffled = [...options]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function calculateResults(answers: Record<number, Element>): { primary: Element; secondary: Element; scores: Record<Element, number> } {
  const scores: Record<Element, number> = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 }
  Object.values(answers).forEach(element => { scores[element]++ })

  const sorted = (Object.entries(scores) as [Element, number][]).sort((a, b) => b[1] - a[1])
  return {
    primary: sorted[0][0],
    secondary: sorted[1][0],
    scores,
  }
}
