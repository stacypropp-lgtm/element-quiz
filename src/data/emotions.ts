export interface EmotionOrgan {
  emotion: string
  organ: string
  emoji: string
  element: string
  color: string
  description: string
  foods: string
  activities: string
  acupoint: string
  tea: string
}

export const emotionOrgans: EmotionOrgan[] = [
  {
    emotion: 'Anger / Frustration',
    organ: 'Liver',
    emoji: '😤',
    element: 'Wood',
    color: '#3A8B3A',
    description: 'When anger and frustration dominate your emotional landscape, your Liver is calling for attention. The Liver governs the smooth flow of Qi (energy) throughout your body, and when that flow gets stuck — from stress, unexpressed emotions, or feeling trapped — anger is the result. Your Liver is like a general that needs a clear battlefield: when things are blocked, it fights. The good news? Anger is just stuck energy that needs to move.',
    foods: 'Leafy greens (especially dandelion greens and arugula), beets, artichokes, citrus fruits, sprouts, celery, and green apples. The sour flavor soothes the Liver — add lemon or apple cider vinegar to meals. Avoid excess alcohol, fried foods, and heavy red meat which generate Liver Heat.',
    activities: 'Vigorous exercise is your number one prescription — running, hiking, martial arts, or any movement that lets you push against something. Screaming into a pillow is surprisingly effective TCM advice. Journaling angry thoughts and then physically destroying the paper. Side stretches and twisting yoga poses open the Liver channel. Walking in nature, especially among trees.',
    acupoint: 'LV3 (Tai Chong) — between the big toe and second toe, about 1.5 inches up from the webbing. Press firmly for 2 minutes per side. This is the single most important point for moving Liver Qi. Combine with LI4 (in the web between thumb and index finger) for the "Four Gates" — a powerful combination that moves Qi throughout the entire body.',
    tea: 'Chrysanthemum tea cools Liver Heat. Peppermint tea moves stuck Liver Qi. Rose bud tea gently soothes the Liver while lifting the spirit. Lemon balm (melissa) calms Liver Wind. Milk thistle tea protects and nourishes the Liver. Avoid coffee when anger is high — it generates more Heat.',
  },
  {
    emotion: 'Anxiety / Overjoy',
    organ: 'Heart',
    emoji: '😰',
    element: 'Fire',
    color: '#8B3A3A',
    description: "In TCM, the Heart houses the Shen — your spirit, consciousness, and emotional center. When the Heart is disturbed, anxiety arises not from your mind but from your spirit feeling unsettled. 'Overjoy' doesn't mean happiness — it means a manic, scattered quality where you can't settle, can't focus, and bounce from stimulation to stimulation. Your Heart is like a candle flame: when it's steady, it illuminates everything beautifully. When it flickers, so does your sense of self.",
    foods: 'Red foods nourish the Heart by color correspondence: watermelon, cherries, goji berries, red dates (jujubes), tomatoes. Longan fruit is the quintessential Heart-nourishing food. Dark chocolate (in small amounts) provides beneficial bitter flavor. Oats calm the spirit. Avoid excessive caffeine, alcohol, and spicy food which agitate Heart fire.',
    activities: 'Meditation is the gold standard for Heart balance — even 5 minutes of sitting with your attention on your heartbeat. Laughing (genuine, belly laughing) is medicine for the Heart. Social connection with people who feel safe. Swimming cools Heart fire. Calligraphy or painting (slow, focused creative work). Avoid overstimulation: reduce news, social media, and multitasking.',
    acupoint: 'HT7 (Shen Men / Spirit Gate) — on the wrist crease, pinky side, in the depression just medial to the tendon. Press gently for 1-2 minutes per side, especially before bed. This point calms the spirit powerfully. PC6 (Nei Guan / Inner Pass) — 3 finger-widths above the inner wrist crease, between the tendons — calms anxiety, settles nausea, and protects the Heart.',
    tea: 'Jujube seed (suan zao ren) tea is the premier Heart-calming herb. Lavender tea settles the spirit. Passionflower and chamomile before bed. Longan and red date tea nourishes Heart blood. Rose bud tea gently opens the Heart without agitating it. Reishi mushroom tea calms the Shen deeply.',
  },
  {
    emotion: 'Worry / Overthinking',
    organ: 'Spleen',
    emoji: '😟',
    element: 'Earth',
    color: '#8B6914',
    description: "The Spleen in TCM is responsible for 'transformation and transportation' — not just of food, but of thoughts and information. When the Spleen is weak, thinking becomes circular: you chew on the same worry over and over without ever digesting it into a decision or action. It's mental bloating. Just as a weak Spleen can't transform food (causing physical bloating), it can't transform thoughts (causing mental fog and rumination). The worry then further weakens the Spleen, creating a downward spiral.",
    foods: 'Warm, cooked, naturally sweet foods are your medicine: sweet potato, squash, carrots, oats, rice, and root vegetables. Congee (rice porridge) is the single best Spleen food. Warming spices: ginger, cinnamon, cardamom, fennel. Small, regular meals rather than large ones. Strictly avoid: excessive raw foods, cold drinks, dairy, sugar, and greasy foods — all generate Dampness that bogs down the Spleen.',
    activities: 'Singing activates the Spleen channel and breaks the worry cycle (the Spleen opens to the mouth). Gentle, rhythmic exercise: walking, tai chi, gentle yoga. Cooking for yourself or others (Earth element self-care). Earthing/grounding: walk barefoot on grass or soil. Set a timer for worry: give yourself 10 minutes to worry fully, then stop. Physical touch: hugs, massage, warmth.',
    acupoint: 'ST36 (Zu San Li / Leg Three Miles) — 4 finger-widths below the kneecap, 1 finger-width lateral to the shinbone. Press firmly for 2-3 minutes per side. This is THE point for building Qi and strengthening digestion of both food and thoughts. SP6 (San Yin Jiao) — 4 finger-widths above the inner ankle — nourishes the Spleen and calms the mind. (Avoid SP6 during pregnancy.)',
    tea: 'Ginger and jujube date tea — warming and deeply nourishing. Astragalus (huang qi) tea builds Spleen Qi. Cinnamon bark tea warms the digestive fire. Licorice root tea (in moderation) harmonizes and sweetens naturally. Chamomile soothes both worry and digestion. Avoid green tea and peppermint when the Spleen is very weak — they can be too cooling.',
  },
  {
    emotion: 'Grief / Sadness',
    organ: 'Lung',
    emoji: '😢',
    element: 'Metal',
    color: '#A8A8A8',
    description: "The Lungs govern grief in TCM — the emotion of loss, letting go, and releasing what no longer serves you. When grief dominates, it constricts the Lungs: breathing becomes shallow, the chest feels heavy, and the voice gets quiet. The Lungs are about boundaries — the skin (which the Lungs govern) is your boundary with the world, and grief is what happens when that boundary is breached by loss. Unprocessed grief gets stored in the chest like sediment, slowly suffocating your vitality.",
    foods: 'White and pungent foods nourish the Lungs: pear (the #1 Lung food), white mushrooms, garlic, onions, radish, ginger, white rice. Honey moistens the Lungs. Almonds and pine nuts support Lung Yin. Chicken soup is genuinely medicinal for the Lungs (your grandmother was right). Avoid excessive dairy which creates Phlegm that congests the Lungs.',
    activities: 'Crying. Seriously — the Lungs need to release, and crying is the mechanism. Allow yourself to grieve fully. Deep breathing exercises: box breathing (4-4-4-4), diaphragmatic breathing, or simply sighing deeply. Singing or chanting opens the Lungs and moves stuck grief. Decluttering your physical space (the Metal element is about letting go of excess). Walking in clean, fresh air.',
    acupoint: 'LU7 (Lie Que / Broken Sequence) — cross your wrists with thumbs up, your index finger lands on a depression on the opposite wrist near the thumb side. Press for 1-2 minutes per side. Opens the chest, stimulates the Lungs, and helps process grief. LU1 (Zhong Fu) — in the depression below the outer end of the collarbone — press gently when the chest feels heavy with sadness.',
    tea: 'White tea with pear slices — moistening and soothing. Mullein leaf tea opens the airways and supports Lung tissue. Thyme tea is antibacterial and Lung-opening. Lily bulb (bai he) tea moistens Lung Yin and calms the spirit. Eucalyptus tea clears the airways. Add honey to any of these for extra Lung nourishment.',
  },
  {
    emotion: 'Fear / Insecurity',
    organ: 'Kidney',
    emoji: '😨',
    element: 'Water',
    color: '#3A5F8B',
    description: "The Kidneys house your Zhi — your willpower, drive, and courage to face the unknown. When Kidney Qi is depleted, fear fills the vacuum. This isn't just anxiety (which is Heart) — it's a deeper, more primal fear: fear of failure, fear of the dark, fear of death, fear of not having enough. In TCM, the Kidneys are your root — the foundation everything else stands on. When the foundation is shaky, everything above it trembles. Fear makes you freeze because your deepest energy has no reserves left to mobilize.",
    foods: 'Black and dark foods nourish the Kidneys by color correspondence: black beans, black sesame seeds, blackberries, seaweed, dark mushrooms, walnuts (shaped like kidneys). Bone broth rebuilds Kidney essence. Eggs nourish Kidney Jing. Warming foods: lamb, cinnamon, star anise, cloves. Salty flavor in moderation (miso, sea salt, tamari). Avoid excessive cold, raw foods, and too much caffeine which deplete the Kidneys.',
    activities: 'Rest. Real rest — not scrolling, not Netflix, but genuinely doing nothing and allowing your reserves to rebuild. Warm baths with Epsom salts. Gentle movement only: tai chi, qi gong, restorative yoga, slow walking. Spending time near water (baths, ocean, lakes). Going to bed early (before 10 PM). Foot massage, especially on the sole. Meditation on groundedness and safety. Absolutely avoid: overwork, over-exercise, staying up late, and extreme cold exposure.',
    acupoint: 'KD1 (Yong Quan / Bubbling Spring) — on the sole of the foot, in the depression when the toes curl, about 1/3 from toes to heel. Press firmly or roll a tennis ball for 2-3 minutes per side. This point grounds fear and draws energy downward. KD3 (Tai Xi) — in the depression between the inner ankle bone and Achilles tendon — the master point for tonifying Kidney Qi. Warm these points with a warm compress for extra benefit.',
    tea: 'Black sesame and walnut tea — deeply nourishing for Kidney essence. Goji berry and chrysanthemum tea nourishes Kidney Yin. He Shou Wu (fo-ti root) tea rebuilds Kidney Jing. Ginger and cinnamon tea warms Kidney Yang. Rehmannia root tea (shu di huang) is the premier Kidney Yin tonic. Bone broth — technically not tea, but sip it like one.',
  },
]
