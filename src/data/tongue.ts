export interface TongueOption {
  label: string
  meaning: string
}

export interface TongueCategory {
  name: string
  description: string
  options: TongueOption[]
}

export const tongueCategories: TongueCategory[] = [
  {
    name: 'Color',
    description: 'The overall color of your tongue body reveals the state of your blood, Qi, and internal temperature.',
    options: [
      { label: 'Pale', meaning: 'Qi and Blood deficiency — your body may not be producing enough energy or circulating blood effectively. Common signs include fatigue, dizziness, pale complexion, and feeling cold. Nourish with warm, cooked foods rich in iron (beets, dark leafy greens) and blood-building herbs like dang gui.' },
      { label: 'Red', meaning: 'Internal Heat — your body is running hot. This can manifest as feeling warm, thirst, irritability, insomnia, or constipation. Cool down with foods like cucumber, watermelon, pear, and chrysanthemum tea. Reduce spicy, fried, and alcohol consumption.' },
      { label: 'Dark Red', meaning: 'Severe Heat — more intense than a red tongue, suggesting deeper-level heat that may have entered the blood level. Watch for skin rashes, restlessness, nosebleeds, or heavy menstrual bleeding. Seek acupuncture or herbal guidance for this pattern.' },
      { label: 'Purple', meaning: 'Blood stasis — circulation is impaired, and blood isn\'t moving freely. May show up as fixed pain, dark menstrual clots, varicose veins, or dark spots on the skin. Movement, turmeric, and acupuncture are your allies.' },
      { label: 'Blue-Purple', meaning: 'Cold stagnation — cold has penetrated deeply and frozen circulation. You may feel cold to your core, with sharp or fixed pain that improves with warmth. Warming therapies (moxibustion, ginger, cinnamon) are essential.' },
    ],
  },
  {
    name: 'Coating',
    description: 'The tongue coating reflects the state of your digestive system and the presence of pathogenic factors.',
    options: [
      { label: 'Thin White', meaning: 'Normal and healthy! A thin, white coating that you can see the tongue body through indicates that your Stomach and Spleen are functioning well. Your digestion is in good shape — keep doing what you\'re doing.' },
      { label: 'Thick White', meaning: 'Cold and Dampness — your digestive system is struggling with cold or damp conditions. You may feel heavy, bloated, or have loose stools. Warm, cooked foods and ginger tea can help. Avoid raw, cold, and dairy-heavy foods.' },
      { label: 'Yellow', meaning: 'Heat in the Stomach or intestines — your digestive tract is inflamed or overheated. Symptoms may include acid reflux, bad breath, constipation, or feeling hot after eating. Cool, bitter foods (dandelion greens, green tea) help clear this heat.' },
      { label: 'Gray/Black', meaning: 'Severe Heat or extreme Cold — this is a more serious pattern that suggests a deeper imbalance. A dry gray/black coating suggests severe Heat burning fluids. A wet gray/black coating suggests extreme interior Cold. Either way, professional guidance is recommended.' },
      { label: 'No Coating', meaning: 'Yin deficiency — your body\'s cooling, moistening fluids are depleted. You may experience dry mouth, night sweats, hot flashes, or a feeling of heat in your palms and soles. Nourish Yin with pear, lily bulb, and avoid excessive spicy or drying foods.' },
      { label: 'Greasy', meaning: 'Dampness and Phlegm — your body is struggling to transform fluids properly, creating a thick, turbid accumulation. You may feel foggy-headed, heavy, or have sinus congestion and loose stools. Reduce dairy, sugar, fried foods, and eat more bitter and aromatic foods like barley and citrus peel.' },
    ],
  },
  {
    name: 'Shape',
    description: 'The shape and texture of your tongue body reveal information about fluid metabolism and Qi strength.',
    options: [
      { label: 'Swollen', meaning: 'Dampness and Qi deficiency — your body is retaining fluids and your vital energy is low. The tongue may look puffy, pale, and enlarged. You may feel heavy, bloated, and fatigued. Support your Spleen with warm foods, gentle exercise, and avoid excessive raw or cold foods.' },
      { label: 'Thin', meaning: 'Blood and Yin deficiency — your body\'s nourishing fluids and blood are depleted. You may feel dry, have difficulty sleeping, and look pale or thin. Focus on blood-building foods like bone broth, beets, and dark berries. Rest is essential.' },
      { label: 'Teeth Marks', meaning: 'Qi deficiency with Dampness — scalloped edges on the tongue from pressing against your teeth indicate that your Spleen Qi isn\'t strong enough to hold things in place. Fatigue, easy bruising, and loose stools are common. Strengthen digestion with cooked vegetables, congee, and astragalus tea.' },
      { label: 'Stiff', meaning: 'Heat or internal Wind — a tongue that feels stiff or doesn\'t move freely can indicate Heat agitating the tendons or internal Wind. May accompany high blood pressure, dizziness, or tremors. Cooling, calming herbs and foods are helpful. Seek professional guidance for persistent stiffness.' },
      { label: 'Trembling', meaning: 'Qi deficiency — a tongue that trembles or quivers when extended shows that Qi is too weak to hold the tongue steady. Deep fatigue, weak voice, and shortness of breath often accompany this. Rest, gentle movement, and Qi-building foods (sweet potato, mushrooms, oats) are key.' },
    ],
  },
  {
    name: 'Moisture',
    description: 'The moisture level of your tongue reveals the balance between Yin (fluids) and Yang (warmth) in your body.',
    options: [
      { label: 'Wet/Slippery', meaning: 'Yang deficiency and Dampness — your body\'s warming function is weak, allowing fluids to accumulate. You may feel cold, heavy, puffy, and waterlogged. Edema, loose stools, and low energy are common. Warm your center with ginger, cinnamon, and cooked foods. Avoid cold beverages and excessive fluid intake.' },
      { label: 'Dry', meaning: 'Yin deficiency or Heat consuming fluids — your body is running hot and dry. Thirst, dry skin, constipation, and a scratchy throat are common. Nourish fluids with pear, honey (in moderation), lily bulb, and moistening foods. Avoid excessive caffeine, alcohol, and spicy food.' },
      { label: 'Sticky', meaning: 'Dampness and Phlegm — the moisture has a thick, glue-like quality indicating that fluids are not transforming properly. Brain fog, sinus congestion, heavy limbs, and a greasy sensation in the mouth are typical. Aromatic, transforming foods like cardamom, tangerine peel, and barley can help.' },
    ],
  },
  {
    name: 'Cracks',
    description: 'Cracks on the tongue surface indicate areas where Yin (fluid/nourishment) is depleted in specific organ systems.',
    options: [
      { label: 'Center Crack', meaning: 'Stomach Yin deficiency — a crack running down the center of the tongue indicates that the Stomach\'s fluids are depleted. You may experience dry mouth, thirst, poor appetite, or a burning sensation in the stomach. Nourish with congee, pear, and honey. Avoid skipping meals and eating spicy food.' },
      { label: 'Horizontal Cracks', meaning: 'Yin deficiency — small horizontal lines across the tongue surface suggest a general depletion of nourishing fluids. Dryness, heat sensations, and restlessness may accompany this. Focus on Yin-nourishing foods: black sesame, walnuts, avocado, and adequate rest.' },
      { label: 'Crack at Tip', meaning: 'Heart Yin or Blood deficiency — a crack at the very tip of the tongue points to the Heart system. Anxiety, insomnia, palpitations, and dream-disturbed sleep are common. Nourish Heart blood with longan fruit, jujube dates, and calming herbs like suan zao ren (jujube seed).' },
      { label: 'Scattered Cracks', meaning: 'General Yin deficiency — many small cracks scattered across the tongue surface indicate that Yin is depleted system-wide. This is common with aging, chronic illness, or prolonged stress. Full Yin-nourishment protocol: rest, moistening foods, stress reduction, and time. Your body needs rebuilding at the deepest level.' },
    ],
  },
]
