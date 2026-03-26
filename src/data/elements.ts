import type { Element } from './quiz'

export interface ElementProfile {
  name: string
  element: Element
  emoji: string
  season: string
  organs: string
  emotion: string
  flavor: string
  color: string
  colorHex: string
  gradientFrom: string
  gradientTo: string
  balanced: string
  imbalanced: string
  bodyTalking: string
  acupuncturistQuote: string
  selfHelp: {
    acupoint: string
    earSeeds: string
    guaSha: string
    cupping: string
    tea: string
    movement: string
  }
}

export const elementProfiles: Record<Element, ElementProfile> = {
  wood: {
    name: 'Wood',
    element: 'wood',
    emoji: '🌲',
    season: 'Spring',
    organs: 'Liver & Gallbladder',
    emotion: 'Anger',
    flavor: 'Sour',
    color: 'Green',
    colorHex: '#3A8B3A',
    gradientFrom: '#2D6B2D',
    gradientTo: '#5CAB5C',
    balanced: "You're a natural leader — visionary, decisive, and unstoppable when you have a goal. You're the one making plans, setting direction, and inspiring others through sheer force of will. Your creativity flows like sap in spring, and you bring fresh ideas and bold energy to everything you touch. You're generous, principled, and fiercely protective of the people you love.",
    imbalanced: "When your Wood energy gets stuck, so does your temper. You become irritable, controlling, and rigid — my way or the highway. Frustration simmers under the surface and erupts as snapping, eye-rolling, or full-blown rage. You push through when your body is begging you to stop, clench your jaw in your sleep, and mistake burnout for weakness.",
    bodyTalking: "Tension headaches that wrap around your temples, tight neck and shoulders that feel like armor, eye strain or floaters, TMJ or jaw clenching, tendon and ligament issues, PMS with irritability and breast tenderness, waking between 1-3 AM with a racing mind. Your Liver is shouting: 'I need to move, stretch, and release!'",
    acupuncturistQuote: "\"Your Liver Qi is so stagnant I could park a car in it. When's the last time you did something that wasn't on a to-do list?\"",
    selfHelp: {
      acupoint: "LV3 (Tai Chong) — the 'Great Surge.' Find the webbing between your big toe and second toe, then slide your finger up about 1.5 inches until you feel a tender depression between the metatarsal bones. Press firmly for 1-2 minutes per side. This point moves stuck Liver Qi like nothing else — it's the acupuncture equivalent of a deep exhale.",
      earSeeds: "Place ear seeds on the Liver point (right side of the ear, in the lower portion of the concha), the Shen Men point (triangular fossa) for calming, and the Sympathetic point to release tension. Press each seed 3-5 times daily.",
      guaSha: "Use a gua sha tool along the sides of your neck and across the tops of your shoulders, always stroking downward and outward. Focus on the gallbladder channel that runs along the sides of your head and neck. Use medium-firm pressure with oil. This releases the tension your Wood element stores like a vault.",
      cupping: "Place cups along the upper back and shoulders (the trapezius area), and along the sides of the spine between the shoulder blades. This region corresponds to the Liver and Gallbladder back-shu points. Even 10 minutes of cupping here can release weeks of accumulated tension.",
      tea: "Chrysanthemum and goji berry tea — cooling, liver-soothing, and good for your eyes. Peppermint tea is also excellent for moving stuck Liver Qi. Add lemon for the sour flavor your Wood element craves.",
      movement: "You NEED movement that has a direction — hiking with a destination, running a route, martial arts with forms. Avoid staying still. Yoga with twists is especially therapeutic for your Liver. Dancing freely (not choreographed) helps move stuck Qi. The key: move with purpose but also learn to stretch, not just push.",
    },
  },
  fire: {
    name: 'Fire',
    element: 'fire',
    emoji: '🔥',
    season: 'Summer',
    organs: 'Heart & Small Intestine',
    emotion: 'Joy (and anxiety)',
    flavor: 'Bitter',
    color: 'Red',
    colorHex: '#8B3A3A',
    gradientFrom: '#7A2E2E',
    gradientTo: '#B85555',
    balanced: "You're magnetic — the kind of person who lights up a room just by walking in. Your warmth is genuine, your laugh is contagious, and you have an extraordinary gift for making others feel seen and loved. You're passionate, expressive, and full of creative spark. Connection is your superpower, and your enthusiasm is genuinely infectious.",
    imbalanced: "When your Fire flares up, anxiety takes the wheel. You talk too fast, laugh when nothing's funny, and can't sit still. Your mind races from idea to idea without landing. You overshare, overcommit, and then crash hard. Insomnia keeps you up because your Heart can't settle, and you confuse being busy with being alive.",
    bodyTalking: "Heart palpitations or a fluttery chest, insomnia (especially trouble falling asleep), vivid or disturbing dreams, red face or flushing with emotion, anxiety that lives in your chest, tongue tip that's red or has small red dots, night sweats. Your Heart is whispering: 'Slow down. I need calm and connection, not stimulation.'",
    acupuncturistQuote: "\"Your Heart fire is so high you could toast marshmallows on your pulse. Have you tried sitting still for five minutes without checking your phone?\"",
    selfHelp: {
      acupoint: "HT7 (Shen Men) — the 'Spirit Gate.' Find the crease on the pinky side of your wrist — it's in the small depression just inside the tendon you can feel there. Press gently for 1-2 minutes per side, especially before bed. This point calms the spirit, settles anxiety, and helps your Heart find its natural rhythm again.",
      earSeeds: "Place ear seeds on the Heart point (center of the concha), Shen Men (triangular fossa) for deep calming, and the Subcortex point for nervous system regulation. Press gently 3-5 times daily, especially when you feel anxiety building.",
      guaSha: "Gently scrape along the inner forearm from elbow to wrist, following the Heart channel. Use light to medium pressure — Fire types are often sensitive. Also try gentle gua sha on the upper chest and décolletage area to open the chest and release emotional holding.",
      cupping: "Light cupping on the upper back between the shoulder blades, particularly around the Heart back-shu point (BL15, between T5-T6). Use gentle suction — Fire types do better with less intensity. Flash cupping (quick on-and-off) works beautifully here.",
      tea: "Chrysanthemum and lotus seed tea — cooling for Heart fire. Rose bud tea calms the spirit and gently moves Qi. Passionflower or chamomile before bed. The bitter flavor (like dark chocolate or dandelion root tea) actually nourishes your Heart in small amounts.",
      movement: "Dance, especially with music that moves you emotionally. Social exercise like group classes or partner sports. Swimming cools your Fire beautifully. The key is joyful movement — not punishing cardio. Laughing yoga is literally medicine for you. End every workout with 5 minutes of stillness to let your Heart settle.",
    },
  },
  earth: {
    name: 'Earth',
    element: 'earth',
    emoji: '🌍',
    season: 'Late Summer',
    organs: 'Spleen & Stomach',
    emotion: 'Worry',
    flavor: 'Sweet',
    color: 'Yellow',
    colorHex: '#8B6914',
    gradientFrom: '#7A5A0F',
    gradientTo: '#B8892A',
    balanced: "You're the heart of every group — the nurturer, the mediator, the one who remembers everyone's birthday and shows up with soup when someone's sick. Your empathy is profound, your loyalty is unshakeable, and you create a sense of home wherever you go. People feel safe around you because you genuinely care, and your warmth is never performative.",
    imbalanced: "When your Earth energy gets bogged down, you become a worry machine — looping thoughts that go nowhere, obsessive 'what ifs,' and a need to be needed that borders on codependency. You give until you're empty, then resent that no one fills you back up. Comfort eating becomes a coping mechanism, and your digestion reflects your emotional state: bloated, heavy, stuck.",
    bodyTalking: "Bloating and gas after meals, sugar cravings that feel desperate, fatigue that's worse after eating, bruising easily, feeling heavy or waterlogged, loose stools or IBS that flares with worry, brain fog that makes thinking feel like wading through mud. Your Spleen is pleading: 'Stop worrying and start nourishing — me, not just everyone else.'",
    acupuncturistQuote: "\"Your Spleen Qi is so deficient that even your worry is tired. When's the last time you did something for yourself that wasn't disguised as doing it for someone else?\"",
    selfHelp: {
      acupoint: "SP6 (San Yin Jiao) — the 'Three Yin Intersection.' Find the inner ankle bone, then measure four finger-widths up the inner leg, just behind the shinbone. Press firmly for 1-2 minutes per side. This point tonifies the Spleen, calms the mind, and nourishes blood. (Avoid during pregnancy.) Also try ST36 (Zu San Li) — four finger-widths below the kneecap, one finger-width lateral to the shinbone. This is THE point for building energy and strengthening digestion.",
      earSeeds: "Place ear seeds on the Spleen point (upper portion of the concha), Stomach point (near the root of the ear canal), and Shen Men for calming worry. Press each 3-5 times daily, especially before meals to support digestion.",
      guaSha: "Gently scrape along the inner lower legs from knee to ankle, following the Spleen channel. Also try gentle circular gua sha on the abdomen in a clockwise direction around the navel — this supports digestion and moves stagnant Qi in the middle burner.",
      cupping: "Place cups on the abdomen around the navel (with proper training), and on the back at the Spleen back-shu point (BL20, between T11-T12) and Stomach back-shu point (BL21, between T12-L1). Gentle to medium suction. This warms and tonifies your digestive fire.",
      tea: "Ginger and jujube date tea — warming, sweet (the good kind), and deeply nourishing for your Spleen. Cinnamon bark tea supports your digestive fire. Astragalus root tea builds Qi. Avoid iced drinks and raw foods when your digestion feels weak — your Spleen likes things warm.",
      movement: "Walking after meals (even 10 minutes) is the single best thing you can do. Gentle yoga focusing on twists and core engagement. Tai chi's slow, grounding movements are perfect for Earth types. Gardening counts as exercise AND therapy for you. The key: consistent, moderate movement — not intensity, not competition, just steady nourishment.",
    },
  },
  metal: {
    name: 'Metal',
    element: 'metal',
    emoji: '🪙',
    season: 'Autumn',
    organs: 'Lung & Large Intestine',
    emotion: 'Grief',
    flavor: 'Spicy/Pungent',
    color: 'White',
    colorHex: '#A8A8A8',
    gradientFrom: '#8A8A8A',
    gradientTo: '#C8C8C8',
    balanced: "You're the one with standards — refined taste, clear boundaries, and an eye for quality that borders on the divine. Your ability to discern, organize, and create order from chaos is a genuine gift. You value integrity, beauty in simplicity, and doing things right. Your loyalty runs deep, and when you let someone into your inner circle, it means everything.",
    imbalanced: "When Metal energy gets rigid, you become the critic — of yourself and everyone else. Perfectionism paralyzes you, and nothing is ever good enough. You isolate behind walls of 'I'm fine,' holding grief in your chest like a stone. Letting go feels impossible — of objects, of people, of the way things 'should' be. Your breathing gets shallow, your skin gets dry, and your colon gets... uncooperative.",
    bodyTalking: "Chronic sinus congestion or post-nasal drip, dry skin that no moisturizer fixes, catching every cold that goes around, constipation or difficulty letting go (literally), shallow breathing or sighing, skin conditions like eczema, asthma or tightness in the chest, waking between 3-5 AM. Your Lungs are asking: 'Let me grieve. Let me breathe. Let me release what no longer serves.'",
    acupuncturistQuote: "\"Your Lung Qi is so constrained that your grief has its own zip code. What are you holding onto that your body is trying to let go of?\"",
    selfHelp: {
      acupoint: "LU7 (Lie Que) — the 'Broken Sequence.' Cross your wrists with thumbs up — where your index finger lands on the opposite wrist, slide slightly toward the thumb side into a small depression. Press for 1-2 minutes per side. This point opens the chest, stimulates the Lungs, and helps release grief. It's also the master point of the Conception Vessel — it connects you to your deeper emotions.",
      earSeeds: "Place ear seeds on the Lung point (lower concha, near the heart point), Shen Men for emotional release, and the Large Intestine point to support letting go. Press 3-5 times daily, especially during moments of sadness or when you feel constricted.",
      guaSha: "Scrape along the upper back and across the tops of the lungs (the area between the spine and shoulder blades, from the base of the neck outward). Also gently scrape along the outer forearm from elbow to wrist following the Lung channel. This opens the chest and helps move stuck grief.",
      cupping: "Place cups across the upper back, particularly the Lung back-shu point (BL13, between T3-T4). This is one of the most satisfying cupping placements — it opens the chest, clears the Lungs, and often triggers an emotional release. Medium suction for 10-15 minutes.",
      tea: "White tea with a slice of pear — moistening, cooling, and perfect for dry Lungs. Mullein leaf tea opens the airways. Licorice root tea (in moderation) moistens and soothes. Add a pinch of ginger for the pungent flavor your Metal element needs to stimulate circulation in the Lungs.",
      movement: "Breathwork is your number one medicine — try box breathing (4 counts in, 4 hold, 4 out, 4 hold) or alternate nostril breathing. Structured exercise like weight training or cycling with metrics satisfies your love of precision. Swimming (controlled breathing + rhythmic movement) is ideal. The key: anything that deepens your breath and helps you practice letting go on the exhale.",
    },
  },
  water: {
    name: 'Water',
    element: 'water',
    emoji: '🌊',
    season: 'Winter',
    organs: 'Kidney & Bladder',
    emotion: 'Fear',
    flavor: 'Salty',
    color: 'Black/Dark Blue',
    colorHex: '#3A5F8B',
    gradientFrom: '#2E4D73',
    gradientTo: '#5A80A8',
    balanced: "You're the philosopher, the old soul, the one who sees beneath the surface of everything. Your depth is extraordinary — you understand things intuitively that others need to be taught. You're resilient in a quiet, enduring way, like water that wears through stone. Your wisdom comes from a willingness to sit with darkness, to go deep, and to trust the unseen. You conserve your energy for what truly matters.",
    imbalanced: "When Water energy gets depleted, fear takes over — not just nervousness, but a deep existential dread that something terrible is coming. You withdraw from life, feel bone-tired no matter how much you sleep, and lose your drive entirely. Your willpower evaporates. You feel cold all the time, your lower back aches, and everything feels like it requires more energy than you have.",
    bodyTalking: "Low back pain that's worse with fatigue, feeling cold to your core (cold hands, cold feet, cold everything), low libido or reproductive issues, frequent urination or nighttime urination, premature aging or early gray hair, weak knees or ankles, dark circles under your eyes that never go away, thinning hair. Your Kidneys are whispering: 'I'm running on empty. I need rest, warmth, and deep nourishment.'",
    acupuncturistQuote: "\"Your Kidney Qi is so depleted your body is writing checks your adrenals can't cash. When's the last time you went to bed before 10 PM and didn't feel guilty about it?\"",
    selfHelp: {
      acupoint: "KD1 (Yong Quan) — the 'Bubbling Spring.' Find the depression on the sole of your foot, about one-third of the way from the toes to the heel, in the center. Press firmly or roll a tennis ball under your foot for 2-3 minutes per side. This point draws energy downward, calms fear, and nourishes your deepest reserves. Also try KD3 (Tai Xi) — in the depression between the inner ankle bone and the Achilles tendon — the premier point for tonifying Kidney Qi.",
      earSeeds: "Place ear seeds on the Kidney point (upper concha, near the antihelix), Shen Men for calming fear, and the Adrenal point (lower tragus) for energy support. Press gently 3-5 times daily. These points are especially helpful during the afternoon energy dip.",
      guaSha: "Gently scrape along the lower back on either side of the spine, over the kidney area (L2-L4). Use warming oil (sesame is traditional). Also try gentle gua sha on the soles of the feet. The key with Water types: gentle pressure, warming oil, slow strokes. Your body responds to nourishment, not force.",
      cupping: "Place cups on the lower back over the Kidney back-shu point (BL23, between L2-L3) and the Ming Men point (GV4, between L2-L3 on the midline). This area is the seat of your vital fire. Warm the cups first or use moxa cupping if available. Medium suction, 10-15 minutes. This is deeply restorative.",
      tea: "Black sesame and walnut tea — deeply nourishing for Kidney essence. Goji berry and chrysanthemum tea nourishes Kidney Yin. Ginger and cinnamon tea warms Kidney Yang. He Shou Wu (fo-ti root) tea is the classic Kidney tonic. Bone broth counts as medicine for you — sip it daily if you can.",
      movement: "Tai chi and qi gong are your gold standard — slow, meditative movements that build energy rather than spend it. Swimming in warm water, gentle walking in nature, restorative yoga. The critical thing: Water types must NEVER exercise to exhaustion. Your reserves are precious. Build energy, don't burn it. Rest is productive for you — never feel guilty about it.",
    },
  },
}

export interface ElementCombo {
  elements: [Element, Element]
  description: string
}

export const elementCombos: ElementCombo[] = [
  { elements: ['wood', 'fire'], description: "Wood-Fire: You're a force of nature — driven AND magnetic. You have the vision of Wood with the charisma of Fire. You're the entrepreneur, the activist, the one who starts movements. Watch out for burnout: your engine runs hot and your accelerator is stuck on 'go.' Your challenge is learning that rest isn't laziness — it's strategy." },
  { elements: ['wood', 'earth'], description: "Wood-Earth: The achiever with a heart. You have Wood's drive paired with Earth's deep care for others. You're the one building something meaningful — not for ego, but because you genuinely want to help. Your challenge: you take on too much because you can't say no to a cause OR a person in need." },
  { elements: ['wood', 'metal'], description: "Wood-Metal: Visionary precision. You have Wood's forward drive with Metal's exacting standards. You don't just have goals — you have systems to achieve them. You're the architect, the strategist, the reformer. Your challenge: perfectionism meets impatience, and nothing — including yourself — ever meets your standards." },
  { elements: ['wood', 'water'], description: "Wood-Water: Quiet power. You have Wood's determination rooted in Water's deep wisdom. You're the person who thinks carefully, then acts decisively. Like a tree with deep roots, you're hard to shake. Your challenge: you can swing between pushing too hard and withdrawing completely." },
  { elements: ['fire', 'earth'], description: "Fire-Earth: The warm center. You have Fire's radiance paired with Earth's nurturing soul. You're everyone's favorite person — genuinely warm, endlessly giving, and fun to be around. You're the host, the connector, the one who makes everyone feel like family. Your challenge: you give until you're empty, then wonder why you feel resentful." },
  { elements: ['fire', 'metal'], description: "Fire-Metal: Passion meets precision. You have Fire's creative spark with Metal's discriminating eye. You're the artist, the curator, the one who creates beauty with intention. Your taste is impeccable and your enthusiasm is genuine. Your challenge: you oscillate between 'everything is amazing!' and 'nothing is good enough.'" },
  { elements: ['fire', 'water'], description: "Fire-Water: Steam power. You have Fire's warmth sitting atop Water's depth — a combination that creates tremendous emotional intelligence. You feel deeply AND express fully. You're the therapist, the poet, the one who understands the full spectrum of human experience. Your challenge: emotional extremes that can feel like a roller coaster." },
  { elements: ['earth', 'metal'], description: "Earth-Metal: Grounded refinement. You have Earth's warmth with Metal's discernment. You're the one who creates beautiful, comfortable spaces and meaningful traditions. Your care is expressed through quality — you don't just show up, you show up with the perfect thing. Your challenge: worry meets perfectionism, and you can get stuck trying to make everything just right." },
  { elements: ['earth', 'water'], description: "Earth-Water: Deep nurturer. You have Earth's caregiving nature rooted in Water's profound empathy. You feel everything — yours and everyone else's. You're the counselor, the healer, the one people trust with their deepest secrets. Your challenge: absorbing others' pain, exhausting your reserves, and forgetting you need care too." },
  { elements: ['metal', 'water'], description: "Metal-Water: The sage. You have Metal's clarity paired with Water's depth. You see through illusions, value truth over comfort, and have a quiet authority that commands respect. You're the philosopher, the minimalist, the one who needs very little but understands very much. Your challenge: isolation that masquerades as independence, and a tendency to hold everything in." },
]

export function getComboDescription(primary: Element, secondary: Element): string {
  const combo = elementCombos.find(
    c =>
      (c.elements[0] === primary && c.elements[1] === secondary) ||
      (c.elements[0] === secondary && c.elements[1] === primary)
  )
  return combo?.description ?? ''
}
