export interface Craving {
  name: string
  emoji: string
  organ: string
  meaning: string
  instead: string
  color: string
}

export const cravings: Craving[] = [
  {
    name: 'Chocolate',
    emoji: '🍫',
    organ: 'Heart',
    meaning: 'Your Heart is craving magnesium and the feel-good compounds in cacao (theobromine, phenylethylamine). In TCM, the Heart houses the spirit (Shen) — chocolate cravings often signal emotional emptiness or a need for joy and connection. The bitter flavor of true cacao actually nourishes the Heart.',
    instead: 'Try a cacao ceremony or switch to high-quality dark chocolate (70%+) eaten mindfully. Brew raw cacao nibs into a warm drink with cinnamon. Add magnesium-rich foods: pumpkin seeds, dark leafy greens, and almonds. Press HT7 (Spirit Gate) on the inner wrist to calm the Heart spirit.',
    color: '#8B3A3A',
  },
  {
    name: 'Salty Foods',
    emoji: '🧂',
    organ: 'Kidney',
    meaning: 'The salty flavor belongs to the Kidney system in Five Element theory. Craving salt signals that your deepest reserves — your Kidney Qi and essence (Jing) — are running low. This often accompanies adrenal fatigue, low back pain, fatigue, feeling cold, and low libido. Your body is literally asking for minerals to rebuild its foundation.',
    instead: 'Try bone broth (rich in minerals your Kidneys need), seaweed salad, miso soup, or black beans (the Kidney\'s food by color correspondence). Celtic sea salt or Himalayan pink salt in warm water provides minerals without the junk. Press KD3 (between inner ankle and Achilles tendon) to tonify Kidney Qi.',
    color: '#3A5F8B',
  },
  {
    name: 'Sweet Foods',
    emoji: '🍰',
    organ: 'Spleen',
    meaning: 'The sweet flavor belongs to the Spleen, and craving sweetness is the number one sign of Spleen Qi deficiency. Your body is asking for easily digestible energy because your Spleen is too weak to extract it from complex foods. Unfortunately, the refined sugar you\'re reaching for actually makes the Spleen weaker — creating a vicious cycle of craving, eating, crashing, and craving again.',
    instead: 'Satisfy the craving with naturally sweet, warm foods: roasted sweet potato, butternut squash, warm oats with cinnamon, or baked pear with honey. Congee (rice porridge) is the ultimate Spleen food. Avoid raw, cold, and iced foods which further weaken the Spleen. Press SP6 (4 finger-widths above inner ankle) to strengthen digestion.',
    color: '#8B6914',
  },
  {
    name: 'Sour Foods',
    emoji: '🍋',
    organ: 'Liver',
    meaning: 'The sour flavor astringes and contracts — it belongs to the Liver system. Craving sour signals that your Liver needs soothing. The Liver governs the smooth flow of Qi throughout the body, and when it\'s stagnant (from stress, frustration, or emotional suppression), it craves its own flavor to self-regulate. Sour gently softens and relaxes the Liver.',
    instead: 'Drink warm lemon water first thing in the morning — this is genuinely one of the best things you can do for Liver Qi. Enjoy pickled vegetables, apple cider vinegar (diluted), or a squeeze of lime on your food. Sour plum (umeboshi) is a traditional Liver remedy. Press LV3 (between big toe and second toe, 1.5 inches up) to move stuck Liver Qi.',
    color: '#3A8B3A',
  },
  {
    name: 'Spicy Foods',
    emoji: '🌶️',
    organ: 'Lung',
    meaning: 'The pungent/spicy flavor belongs to the Lung and Large Intestine system. Craving spice signals that your Lung Qi needs stimulation — it\'s trying to open the airways, stimulate circulation, and disperse stagnation. Spicy food makes you sweat and breathe deeply, which is exactly what congested Lungs need. Your body is self-medicating.',
    instead: 'Try fresh ginger tea (sliced ginger in hot water with honey) — warming without being inflammatory. Eat radishes, garlic, onions, and scallions, which disperse Lung Qi gently. Wasabi and horseradish clear the sinuses. Press LU7 (above the wrist on the thumb side) to open the chest and stimulate the Lungs.',
    color: '#A8A8A8',
  },
  {
    name: 'Ice & Cold Drinks',
    emoji: '🧊',
    organ: 'Stomach',
    meaning: 'Craving ice and cold drinks signals Stomach Heat — your digestive system is inflamed and overheated, and your body is instinctively trying to cool it down. Ironically, consuming cold actually weakens your digestive fire further, creating more heat in the long run. Signs include bad breath, bleeding gums, acid reflux, and constant hunger.',
    instead: 'Cool the Stomach with room-temperature or slightly cool (not iced) foods: cucumber, watermelon, celery, and mint tea. Coconut water is naturally cooling. Aloe vera juice soothes Stomach Heat. Avoid fried, greasy, and spicy foods that fuel the fire. Press ST44 (between 2nd and 3rd toes on top of the foot) to clear Stomach Heat.',
    color: '#3A5F8B',
  },
  {
    name: 'Bread & Carbs',
    emoji: '🍞',
    organ: 'Spleen',
    meaning: 'Like sweet cravings, carb cravings point to Spleen Dampness — your body is waterlogged, heavy, and struggling to transform food into usable energy. The Spleen craves quick energy because it can\'t efficiently process what it already has. Bread and pasta temporarily satisfy but ultimately create more Dampness, leading to more brain fog, bloating, and fatigue.',
    instead: 'Swap refined carbs for roasted root vegetables — sweet potato, parsnips, carrots, and beets give you that comforting, grounding feeling without the Dampness. Congee with ginger is the gold standard for draining Dampness while nourishing the Spleen. Barley tea is excellent for resolving Dampness. Avoid dairy and excessive raw foods.',
    color: '#8B6914',
  },
  {
    name: 'Coffee',
    emoji: '☕',
    organ: 'Kidney',
    meaning: 'Coffee addiction is one of the clearest signs of Kidney Yang and adrenal depletion in modern life. Your Kidneys are your body\'s battery, and coffee is like plugging into a power strip that\'s not connected to the wall — you feel a surge, but you\'re borrowing from tomorrow\'s energy. The bitter flavor briefly stimulates the Heart, but the caffeine depletes the Kidneys further.',
    instead: 'Try matcha — it provides calm, sustained energy without the cortisol spike. Ginseng tea rebuilds the Kidney Qi that coffee depletes. Roasted dandelion root tea tastes coffee-like while supporting the Liver. If you must have coffee, limit to one cup before noon and always eat first. Press KD1 (sole of the foot) to rebuild reserves from the ground up.',
    color: '#3A5F8B',
  },
  {
    name: 'Cheese',
    emoji: '🧀',
    organ: 'Spleen',
    meaning: 'Cheese cravings combine Spleen Dampness with emotional comfort-seeking. Dairy is the most Dampness-producing food category in TCM — it creates phlegm, congestion, and heaviness. Craving it usually means your Spleen is already damp AND you\'re looking for emotional grounding and warmth. Cheese is the edible equivalent of a weighted blanket.',
    instead: 'Try warm congee (rice porridge) with ginger and scallions — it provides the same warm, comforting feeling while actually resolving Dampness. Nutritional yeast gives a cheesy flavor without the Dampness. Roasted squash with tahini satisfies the creamy-savory craving. Cardamom and fennel tea help transform existing Dampness.',
    color: '#8B6914',
  },
  {
    name: 'Alcohol',
    emoji: '🍷',
    organ: 'Liver',
    meaning: 'Alcohol cravings are a Liver Qi stagnation alarm bell. The Liver governs the smooth flow of emotions, and when Qi gets stuck (from stress, frustration, repressed anger), alcohol temporarily releases it — that first-drink relaxation is literally your Liver Qi moving. But alcohol generates Heat and Dampness, making the stagnation worse the next day. It\'s a trap.',
    instead: 'The real prescription is vigorous exercise — it moves Liver Qi naturally. Press LV3 acupressure firmly for 2 minutes when the craving hits. Sour and bitter flavors (tonic water with lime, kombucha) can scratch the itch. Valerian or kava tea can provide relaxation without the Liver damage. Address the underlying frustration — what are you not expressing?',
    color: '#3A8B3A',
  },
  {
    name: 'Red Meat',
    emoji: '🥩',
    organ: 'Heart/Spleen',
    meaning: 'Craving red meat is your body\'s cry for Blood — specifically, the rich, iron-dense nourishment that builds and moves Blood in TCM. Blood deficiency shows up as fatigue, pale complexion, dizziness, dry skin, scanty periods, and anxiety. Women, vegetarians, and anyone who\'s been chronically stressed or undereating often develops this pattern.',
    instead: 'If you eat meat, honor the craving with high-quality, grass-fed red meat in moderation — your body knows what it needs. For plant-based Blood building: dark leafy greens (especially cooked spinach and kale), beets, blackstrap molasses, black sesame seeds, and dark berries. Cook with cast iron. Dang gui (angelica) tea is the queen of Blood-building herbs.',
    color: '#8B3A3A',
  },
  {
    name: 'Fried Food',
    emoji: '🍟',
    organ: 'Gallbladder/Liver',
    meaning: 'Craving fried food signals Gallbladder and Liver Heat — your hepatobiliary system is inflamed and, paradoxically, craving the very thing that makes it worse. The Gallbladder stores and secretes bile to digest fats, and when it\'s overheated, it creates a cycle of craving and aggravation. Skin breakouts, irritability, and a bitter taste in the mouth often accompany this.',
    instead: 'Eat bitter greens — arugula, dandelion greens, endive, and radicchio. The bitter flavor cools Liver and Gallbladder Heat directly. Artichokes are one of the best Gallbladder foods. Lemon juice in warm water every morning supports bile flow. Turmeric and milk thistle tea protect and cool the Liver. Avoid eating fried food after 7 PM when the Liver/Gallbladder are preparing for their nighttime work.',
    color: '#3A8B3A',
  },
]
