# Consumer Wellness App — "What's Your Element?"

## Overview
Build a beautiful, mobile-first React + TypeScript + Vite + Tailwind PWA consumer wellness app for Herbal Rhymes. This is a marketing funnel app — it should be so good people share their results on social media, which drives traffic back to the book purchase pages.

**Author:** Dr. Stacy Propp, DACM, L.Ac.
**Brand:** Herbal Rhymes (herbalrhymes.com)
**Design vibe:** Premium wellness — think Headspace meets Goop. Warm, sophisticated, NOT clinical. Rich earth tones, watercolor textures, elegant typography.

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- React Router (with basename support for GitHub Pages subdirectory deployment)
- PWA with service worker
- No backend — all client-side
- LocalStorage for saving quiz results

## Color Palette
- Deep forest green: #22573E (primary)
- Warm cream: #FDF8F0 (background)
- Burnished gold: #C4973B (accent)
- Soft sage: #8BAF8B
- Deep burgundy: #8B3A3A (Fire element)
- Ocean blue: #3A5F8B (Water element)
- Rich earth: #8B6914 (Earth element)
- Silver: #A8A8A8 (Metal element)
- Forest green: #3A8B3A (Wood element)

## Features (5 interactive tools)

### 1. 🌲🔥🌍🪙🌊 Five Element Personality Quiz (THE MAIN FEATURE)
20 carefully written questions about personality, emotions, body tendencies, sleep, cravings, stress response. Each question has 5 options mapped to Wood/Fire/Earth/Metal/Water.

**Questions (use these exact questions):**

1. When you're stressed, you tend to:
   - (Wood) Get irritable, snap at people, clench your jaw
   - (Fire) Talk faster, laugh nervously, get scattered
   - (Earth) Overthink, worry in loops, comfort eat
   - (Metal) Withdraw, get quiet, organize something
   - (Water) Freeze, feel paralyzed, want to hide under the covers

2. Your ideal weekend looks like:
   - (Wood) Something physical — hiking, a project, anything with forward motion
   - (Fire) A party, a new restaurant, an adventure with friends
   - (Earth) Cooking for people, a farmers market, something cozy
   - (Metal) A clean house, a good book, quality over quantity
   - (Water) Alone time near water — bath, lake, ocean, or just doing nothing

3. The emotion you struggle with most:
   - (Wood) Anger or frustration
   - (Fire) Anxiety or restlessness
   - (Earth) Worry or overthinking
   - (Metal) Grief or sadness
   - (Water) Fear or insecurity

4. People would describe you as:
   - (Wood) Driven, decisive, sometimes intense
   - (Fire) Warm, charismatic, the life of the room
   - (Earth) Nurturing, reliable, the one everyone comes to
   - (Metal) Organized, refined, detail-oriented
   - (Water) Deep, introspective, wise beyond your years

5. Your biggest health complaint tends to be:
   - (Wood) Tension headaches, tight neck/shoulders, eye strain
   - (Fire) Heart palpitations, insomnia, feeling wired
   - (Earth) Bloating, digestive issues, fatigue after eating
   - (Metal) Sinus problems, dry skin, catching every cold
   - (Water) Low back pain, feeling cold, low energy or libido

6. When you eat, you tend to crave:
   - (Wood) Sour things — pickles, citrus, vinegar
   - (Fire) Bitter things — dark chocolate, coffee, arugula
   - (Earth) Sweet things — bread, pasta, comfort food
   - (Metal) Spicy things — hot sauce, garlic, ginger
   - (Water) Salty things — chips, soy sauce, miso

7. Your sleep pattern:
   - (Wood) Trouble falling asleep — mind won't stop planning
   - (Fire) Light sleeper, vivid dreams, sometimes wake up sweating
   - (Earth) Sleep fine but wake up groggy, could nap anytime
   - (Metal) Wake up between 3-5 AM, hard to fall back asleep
   - (Water) Sleep too much or can't sleep at all — extremes

8. In a group project, you're the one who:
   - (Wood) Takes charge and sets the direction
   - (Fire) Energizes the group and keeps morale up
   - (Earth) Makes sure everyone's heard and fed
   - (Metal) Creates the system, the spreadsheet, the timeline
   - (Water) Asks the deep question no one else thought of

9. Your body tends to run:
   - (Wood) Hot and tense
   - (Fire) Hot and restless
   - (Earth) Damp and heavy
   - (Metal) Dry and cool
   - (Water) Cold and sluggish

10. The season you feel WORST in:
    - (Wood) Spring
    - (Fire) Summer
    - (Earth) Late summer/seasonal transitions
    - (Metal) Autumn
    - (Water) Winter

11. When you cry, it's usually because of:
    - (Wood) Frustration — you're not sad, you're MAD
    - (Fire) Overwhelm — too much emotion all at once
    - (Earth) Empathy — someone else's pain hits you hard
    - (Metal) Loss — letting go of something or someone
    - (Water) Feeling alone or existentially heavy

12. Your voice tends to be:
    - (Wood) Loud, commanding, sometimes sharp
    - (Fire) Animated, laughing, musical
    - (Earth) Warm, singing, soothing
    - (Metal) Clear, measured, sometimes monotone
    - (Water) Quiet, low, groaning or sighing

13. Your face tends to show:
    - (Wood) A greenish or ruddy tint, especially when angry
    - (Fire) Flushing or redness, especially on the cheeks
    - (Earth) A yellowish or sallow tone, especially around the mouth
    - (Metal) Pale or white complexion
    - (Water) Dark circles under the eyes

14. Your relationship style:
    - (Wood) Passionate, direct, sometimes confrontational
    - (Fire) Intense, exciting, sometimes overwhelming
    - (Earth) Devoted, stable, sometimes smothering
    - (Metal) Loyal, structured, sometimes distant
    - (Water) Deep, private, sometimes hard to read

15. When you're at your WORST, you:
    - (Wood) Explode — rage, shouting, slamming things
    - (Fire) Spiral — manic energy, can't sit still, overshare
    - (Earth) Collapse — shut down, eat everything, can't move
    - (Metal) Isolate — cut people off, become rigid and cold
    - (Water) Disappear — withdraw completely, feel hopeless

16. The compliment that would mean the most to you:
    - (Wood) "You're so capable and strong"
    - (Fire) "You make everything more fun"
    - (Earth) "I don't know what I'd do without you"
    - (Metal) "You have impeccable taste/standards"
    - (Water) "You see things no one else sees"

17. Your typical workout:
    - (Wood) Competitive — running, martial arts, something to WIN
    - (Fire) Fun and social — dance, group fitness, pickup games
    - (Earth) Gentle — walking, yoga, swimming
    - (Metal) Structured — weight training with a program, cycling with data
    - (Water) Meditative — tai chi, yin yoga, or honestly... none

18. Your biggest fear deep down:
    - (Wood) Being powerless or trapped
    - (Fire) Being abandoned or unloved
    - (Earth) Being unnecessary or forgotten
    - (Metal) Being flawed or impure
    - (Water) Being annihilated or ceasing to exist

19. If your body could talk, it would say:
    - (Wood) "Let me MOVE. Stop sitting here."
    - (Fire) "I need connection and stimulation!"
    - (Earth) "Feed me and let me rest. Please."
    - (Metal) "Give me space to breathe. Literally."
    - (Water) "I'm tired. I need warmth and safety."

20. The quote that resonates most:
    - (Wood) "The only way out is through."
    - (Fire) "Life is either a daring adventure or nothing at all."
    - (Earth) "Home is not a place, it's a feeling."
    - (Metal) "Less is more."
    - (Water) "Still waters run deep."

**Result profiles for each element must include:**
- Element name, emoji, season, organ system, emotion, flavor, color
- "When You're Balanced" personality description
- "When You're Imbalanced" personality description
- "Your Body Talking" — specific symptoms and what they mean
- "What Your Acupuncturist Would Say" — one funny, direct quote
- Self-Help Toolkit:
  - Acupoint to press (with location description)
  - Ear seed placement points
  - Gua sha technique
  - Cupping placement
  - Tea/drink recommendation
  - Movement recommendation
- Two-element combo descriptions for the top 2 elements

**UI for quiz:**
- One question per screen with smooth transitions/animations
- Progress bar at top
- Randomize answer order per question (so Wood isn't always first)
- Beautiful result page with element artwork/gradient
- "Share Your Result" buttons (copy link, share to social)
- "Retake Quiz" option
- Show primary + secondary element

### 2. 👅 Tongue Reading Self-Check
Visual interactive guide to TCM tongue diagnosis for consumers.
- Illustration of a tongue with labeled zones
- Clickable/tappable areas for: color, coating, shape, moisture, cracks
- Each selection reveals what it means in TCM
- "My Tongue Profile" summary at the end
- Categories:
  - **Color:** Pale (Qi/Blood deficiency), Red (Heat), Dark Red (severe Heat), Purple (Blood stasis), Blue-purple (Cold stagnation)
  - **Coating:** Thin white (normal), Thick white (Cold/Dampness), Yellow (Heat), Gray/Black (severe Heat or Cold), No coating (Yin deficiency), Greasy (Dampness/Phlegm)
  - **Shape:** Swollen (Dampness/Qi deficiency), Thin (Blood/Yin deficiency), Teeth marks (Qi deficiency/Dampness), Stiff (Heat/Wind), Trembling (Qi deficiency)
  - **Moisture:** Wet (Yang deficiency/Dampness), Dry (Yin deficiency/Heat), Sticky (Dampness/Phlegm)
  - **Cracks:** Center (Stomach Yin deficiency), Horizontal (Yin deficiency), Tip (Heart), Scattered (general Yin deficiency)

### 3. 🕐 Body Clock Decoder
Interactive 24-hour TCM organ clock.
- Beautiful circular clock visualization
- Each 2-hour segment shows the organ, its function, and what symptoms during that time mean
- Tap a time period to see details
- "When Do You Wake Up?" quick-select for the most popular use case (nighttime waking)
- Time periods:
  - 1-3 AM: Liver (anger, frustration, alcohol processing, PMS, eye problems)
  - 3-5 AM: Lung (grief, breathing issues, skin problems, waking with sadness)
  - 5-7 AM: Large Intestine (elimination time, constipation, letting go)
  - 7-9 AM: Stomach (peak digestion, eat your biggest meal)
  - 9-11 AM: Spleen (transformation, mental clarity, overthinking)
  - 11 AM-1 PM: Heart (joy, connection, take a break)
  - 1-3 PM: Small Intestine (sorting, decision-making, afternoon slump = Heart deficiency)
  - 3-5 PM: Bladder (energy dip, hydrate, second wind)
  - 5-7 PM: Kidney (reserves replenish, rest, fear/anxiety peak)
  - 7-9 PM: Pericardium (emotional protection, intimacy, winding down)
  - 9-11 PM: Triple Burner (thermoregulation, should be falling asleep)
  - 11 PM-1 AM: Gallbladder (decision processing, must be asleep for optimal function)

### 4. 🍫 Craving Translator
Simple, fun, visually appealing lookup tool.
- Grid or card layout of common cravings
- Tap a craving to see the TCM meaning + what to eat/do instead
- Cravings to include:
  - Chocolate → Heart/Magnesium, try cacao ceremony or dark chocolate
  - Salty → Kidney deficiency, try bone broth, seaweed, black beans
  - Sweet → Spleen Qi deficiency, try sweet potato, squash, warm oats
  - Sour → Liver needs soothing, try lemon water, pickled vegetables
  - Spicy → Lung needs stimulation, try ginger tea, radishes
  - Ice/Cold drinks → Stomach Heat, try cucumber, watermelon, mint tea
  - Bread/Carbs → Spleen Dampness, try roasted root vegetables
  - Coffee → Kidney Yang/Adrenal depletion, try matcha, ginseng tea
  - Cheese → Spleen Dampness + comfort seeking, try warm congee
  - Alcohol → Liver Qi stagnation, try exercise or LV3 acupressure
  - Red meat → Blood deficiency, try dark leafy greens + beets
  - Fried food → Gallbladder/Liver Heat, try bitter greens

### 5. 😢 Emotion-Organ Connection
Self-assessment that maps emotional patterns to organ systems.
- Rate 5 emotions on a 1-5 scale (how much they dominate your daily life)
  - Anger/Frustration → Liver
  - Anxiety/Overjoy → Heart
  - Worry/Overthinking → Spleen
  - Grief/Sadness → Lung
  - Fear/Insecurity → Kidney
- Visual radar/spider chart showing your emotional profile
- Results show which organ system needs the most attention
- For each result: foods, activities, acupoint, and tea that help

## Navigation
- Bottom tab bar (mobile) with 5 icons:
  - 🌿 Elements (quiz)
  - 👅 Tongue
  - 🕐 Clock
  - 🍫 Cravings
  - 😢 Emotions
- Smooth page transitions
- Home/landing page with app description and "Start the Quiz" CTA

## Book Integration (IMPORTANT — this is a sales funnel)
- Every result page includes a subtle but clear call-to-action:
  - "Get the full breakdown in the book" with cover images and buy links
  - Amazon link (placeholder for now): https://amazon.com/dp/PLACEHOLDER
  - Website: https://herbalrhymes.com
- Don't make it feel spammy — make it feel like "there's so much more where this came from"

## Social Sharing
- "Share Your Result" button on quiz results
- Generates a shareable URL with result encoded (e.g., ?result=fire)
- If someone opens the URL, they see the result page + "Take the quiz yourself" CTA
- Copy-to-clipboard fallback
- Share text: "I'm a [Element] type! 🌲🔥🌍🪙🌊 Take the Five Element quiz to discover yours → [URL]"

## Deployment
- GitHub Pages to stacypropp-lgtm/element-quiz (new repo)
- Set vite base to '/element-quiz/'
- BrowserRouter basename='/element-quiz'
- Service worker with correct base paths
- Include GitHub Actions deploy workflow

## Quality Bar
- MUST be mobile-first and look premium
- Smooth animations (use CSS transitions or Framer Motion)
- Accessible (keyboard navigation, screen reader labels)
- Fast load (lazy load non-quiz pages)
- All TCM content must be accurate (standard Five Element theory, Deadman/Maciocia/Bensky references)
- No placeholder content — everything must be real, complete, and polished

## Disclaimer
Include a small footer disclaimer on every page:
"This app is for educational and entertainment purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider. Created by Dr. Stacy Propp, DACM, L.Ac."
