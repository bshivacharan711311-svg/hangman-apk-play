export type Level = {
  word: string;
  hint: string;
};

export type Group = {
  id: string;
  name: string;
  difficulty: "easy" | "medium" | "hard" | "very-hard";
  levels: Level[];
};

export const GROUPS: Group[] = [
  // EASY: Groups A-E
  {
    id: "A",
    name: "Group A - Beginner",
    difficulty: "easy",
    levels: [
      { word: "CAT", hint: "A furry pet that meows" },
      { word: "DOG", hint: "A loyal pet that barks" },
      { word: "SUN", hint: "Bright star in the sky" },
      { word: "TREE", hint: "Tall plant with leaves" },
      { word: "BOOK", hint: "You read this" },
      { word: "FISH", hint: "Swims in water" },
      { word: "MOON", hint: "Glows at night" },
      { word: "STAR", hint: "Twinkles in the sky" },
      { word: "BALL", hint: "Round toy to play with" },
      { word: "BIRD", hint: "Animal that flies" }
    ]
  },
  {
    id: "B",
    name: "Group B - Easy",
    difficulty: "easy",
    levels: [
      { word: "APPLE", hint: "Red or green fruit" },
      { word: "HOUSE", hint: "Place where you live" },
      { word: "WATER", hint: "Clear liquid you drink" },
      { word: "HAPPY", hint: "Feeling of joy" },
      { word: "FLOWER", hint: "Colorful plant that blooms" },
      { word: "SCHOOL", hint: "Place to learn" },
      { word: "FRIEND", hint: "Someone you like" },
      { word: "GARDEN", hint: "Place with plants" },
      { word: "COOKIE", hint: "Sweet baked treat" },
      { word: "RABBIT", hint: "Fluffy animal with long ears" }
    ]
  },
  {
    id: "C",
    name: "Group C - Easy",
    difficulty: "easy",
    levels: [
      { word: "CLOUD", hint: "Fluffy white in the sky" },
      { word: "HEART", hint: "Symbol of love" },
      { word: "SMILE", hint: "Happy expression" },
      { word: "MUSIC", hint: "Pleasant sounds" },
      { word: "LIGHT", hint: "Opposite of dark" },
      { word: "DREAM", hint: "What you see when sleeping" },
      { word: "BEACH", hint: "Sandy place by water" },
      { word: "QUEEN", hint: "Royal female ruler" },
      { word: "PLANT", hint: "Living green thing" },
      { word: "PAINT", hint: "Colorful art liquid" }
    ]
  },
  {
    id: "D",
    name: "Group D - Easy",
    difficulty: "easy",
    levels: [
      { word: "CHAIR", hint: "You sit on this" },
      { word: "TABLE", hint: "Furniture for eating" },
      { word: "BREAD", hint: "Baked food staple" },
      { word: "RIVER", hint: "Water that flows" },
      { word: "BUTTERFLY", hint: "Colorful flying insect" },
      { word: "BALLOON", hint: "Floats with air" },
      { word: "PENCIL", hint: "Write with this" },
      { word: "ORANGE", hint: "Citrus fruit" },
      { word: "CANDLE", hint: "Wax with flame" },
      { word: "WINDOW", hint: "See through this" }
    ]
  },
  {
    id: "E",
    name: "Group E - Easy",
    difficulty: "easy",
    levels: [
      { word: "ROCKET", hint: "Flies to space" },
      { word: "ISLAND", hint: "Land surrounded by water" },
      { word: "PLANET", hint: "Earth is one" },
      { word: "FINGER", hint: "You have ten of these" },
      { word: "BOTTLE", hint: "Container for liquid" },
      { word: "CAMERA", hint: "Takes pictures" },
      { word: "CIRCUS", hint: "Show with clowns" },
      { word: "CASTLE", hint: "Where kings live" },
      { word: "BRIDGE", hint: "Crosses over water" },
      { word: "BUBBLE", hint: "Soap sphere" }
    ]
  },
  // MEDIUM: Groups F-N
  {
    id: "F",
    name: "Group F - Medium",
    difficulty: "medium",
    levels: [
      { word: "ELEPHANT", hint: "Large animal with trunk" },
      { word: "RAINBOW", hint: "Appears after rain" },
      { word: "BIRTHDAY", hint: "Annual celebration" },
      { word: "SUNSHINE", hint: "Bright light from sun" },
      { word: "CHOCOLATE", hint: "Sweet brown treat" },
      { word: "UMBRELLA", hint: "Keeps you dry" },
      { word: "MOUNTAIN", hint: "Very tall landform" },
      { word: "DINOSAUR", hint: "Extinct creature" },
      { word: "TREASURE", hint: "Hidden valuables" },
      { word: "PRINCESS", hint: "Royal daughter" }
    ]
  },
  {
    id: "G",
    name: "Group G - Medium",
    difficulty: "medium",
    levels: [
      { word: "KEYBOARD", hint: "Computer typing device" },
      { word: "TRIANGLE", hint: "Three-sided shape" },
      { word: "SANDWICH", hint: "Food between bread" },
      { word: "BACKPACK", hint: "Carry on your back" },
      { word: "CALENDAR", hint: "Shows dates and months" },
      { word: "ELEVATOR", hint: "Goes up and down" },
      { word: "FOOTBALL", hint: "Sport with round ball" },
      { word: "COMPUTER", hint: "Electronic device" },
      { word: "HOSPITAL", hint: "Place for healing" },
      { word: "SUITCASE", hint: "Luggage for travel" }
    ]
  },
  {
    id: "H",
    name: "Group H - Medium",
    difficulty: "medium",
    levels: [
      { word: "ADVENTURE", hint: "Exciting journey" },
      { word: "HAPPINESS", hint: "Feeling of joy" },
      { word: "PLAYGROUND", hint: "Children play here" },
      { word: "FRIENDSHIP", hint: "Close bond" },
      { word: "TELESCOPE", hint: "See stars with this" },
      { word: "AQUARIUM", hint: "Tank for fish" },
      { word: "NECKLACE", hint: "Jewelry for neck" },
      { word: "MOSQUITO", hint: "Buzzing insect" },
      { word: "CHAMPION", hint: "Winner of contest" },
      { word: "FIREWORK", hint: "Explodes in sky" }
    ]
  },
  {
    id: "I",
    name: "Group I - Medium",
    difficulty: "medium",
    levels: [
      { word: "VACATION", hint: "Time off for travel" },
      { word: "SKELETON", hint: "All your bones" },
      { word: "PIRATE", hint: "Sails the seas" },
      { word: "MONSTER", hint: "Scary creature" },
      { word: "VOLCANO", hint: "Mountain with lava" },
      { word: "DOLPHIN", hint: "Smart sea mammal" },
      { word: "DIAMOND", hint: "Precious gem" },
      { word: "THUNDER", hint: "Loud sky sound" },
      { word: "GLACIER", hint: "Large ice mass" },
      { word: "PHANTOM", hint: "Ghost-like being" }
    ]
  },
  {
    id: "J",
    name: "Group J - Medium",
    difficulty: "medium",
    levels: [
      { word: "BLIZZARD", hint: "Heavy snowstorm" },
      { word: "CROCODILE", hint: "Large reptile" },
      { word: "BUTTERFLY", hint: "Winged insect" },
      { word: "KANGAROO", hint: "Australian hopper" },
      { word: "PARACHUTE", hint: "Safe fall device" },
      { word: "STARFISH", hint: "Five-armed sea creature" },
      { word: "GIRAFFE", hint: "Tallest animal" },
      { word: "MUSHROOM", hint: "Forest fungus" },
      { word: "PASSPORT", hint: "Travel document" },
      { word: "PYRAMID", hint: "Egyptian structure" }
    ]
  },
  {
    id: "K",
    name: "Group K - Medium",
    difficulty: "medium",
    levels: [
      { word: "MARATHON", hint: "Long distance race" },
      { word: "OCTOPUS", hint: "Eight-armed creature" },
      { word: "PENGUIN", hint: "Bird that swims" },
      { word: "EMERALD", hint: "Green precious stone" },
      { word: "TORNADO", hint: "Spinning windstorm" },
      { word: "UNICORN", hint: "Mythical horse" },
      { word: "FLAMINGO", hint: "Pink bird" },
      { word: "LEOPARD", hint: "Spotted wild cat" },
      { word: "CAROUSEL", hint: "Spinning ride" },
      { word: "FOUNTAIN", hint: "Water feature" }
    ]
  },
  {
    id: "L",
    name: "Group L - Medium",
    difficulty: "medium",
    levels: [
      { word: "LAVENDER", hint: "Purple fragrant flower" },
      { word: "PUMPKIN", hint: "Orange Halloween vegetable" },
      { word: "SAXOPHONE", hint: "Jazz wind instrument" },
      { word: "CHANDELIER", hint: "Hanging light fixture" },
      { word: "WOLVERINE", hint: "Fierce animal" },
      { word: "ARCHITECT", hint: "Building designer" },
      { word: "BLUEBERRY", hint: "Small blue fruit" },
      { word: "FLAMINGO", hint: "Long-legged pink bird" },
      { word: "PLATYPUS", hint: "Duck-billed mammal" },
      { word: "GAZELLE", hint: "Swift antelope" }
    ]
  },
  {
    id: "M",
    name: "Group M - Medium",
    difficulty: "medium",
    levels: [
      { word: "AVALANCHE", hint: "Snow slide disaster" },
      { word: "CHAMELEON", hint: "Color-changing lizard" },
      { word: "DRAGONFLY", hint: "Flying insect" },
      { word: "HARMONICA", hint: "Mouth organ" },
      { word: "LABYRINTH", hint: "Complex maze" },
      { word: "MAGICIAN", hint: "Performs tricks" },
      { word: "NAUTILUS", hint: "Spiral-shelled sea creature" },
      { word: "ORCHESTRA", hint: "Musical ensemble" },
      { word: "PEACOCK", hint: "Bird with fancy tail" },
      { word: "SOMBRERO", hint: "Mexican hat" }
    ]
  },
  {
    id: "N",
    name: "Group N - Medium",
    difficulty: "medium",
    levels: [
      { word: "BAMBOO", hint: "Panda's favorite food" },
      { word: "GLACIER", hint: "Massive ice formation" },
      { word: "LANTERN", hint: "Portable light" },
      { word: "MEERKAT", hint: "Standing small mammal" },
      { word: "OBELISK", hint: "Tall stone pillar" },
      { word: "RACCOON", hint: "Masked night animal" },
      { word: "SCARLET", hint: "Bright red color" },
      { word: "TERMITE", hint: "Wood-eating insect" },
      { word: "VANILLA", hint: "Popular ice cream flavor" },
      { word: "WINDMILL", hint: "Spinning building" }
    ]
  },
  // HARD: Groups O-P
  {
    id: "O",
    name: "Group O - Hard",
    difficulty: "hard",
    levels: [
      { word: "CELEBRATION", hint: "Special party event" },
      { word: "IMAGINATION", hint: "Creative thinking" },
      { word: "WONDERFUL", hint: "Extremely amazing" },
      { word: "MYSTERIOUS", hint: "Full of mystery" },
      { word: "SPECTACULAR", hint: "Visually impressive" },
      { word: "CONSTELLATION", hint: "Star pattern in sky" },
      { word: "EXPEDITION", hint: "Journey for discovery" },
      { word: "MARVELOUS", hint: "Causing wonder" },
      { word: "NAVIGATION", hint: "Finding your way" },
      { word: "QUARTERBACK", hint: "Football position" }
    ]
  },
  {
    id: "P",
    name: "Group P - Hard",
    difficulty: "hard",
    levels: [
      { word: "ARCHAEOLOGY", hint: "Study of ancient artifacts" },
      { word: "CRYSTALLINE", hint: "Clear like crystal" },
      { word: "ENCYCLOPEDIA", hint: "Book of knowledge" },
      { word: "KALEIDOSCOPE", hint: "Colorful tube toy" },
      { word: "MAGNIFICENT", hint: "Grand and impressive" },
      { word: "PECULIAR", hint: "Strange or unusual" },
      { word: "QUARANTINE", hint: "Isolation period" },
      { word: "RENAISSANCE", hint: "Cultural rebirth period" },
      { word: "SILHOUETTE", hint: "Dark shape outline" },
      { word: "TROPOSPHERE", hint: "Lowest atmosphere layer" }
    ]
  },
  // VERY HARD: Groups Q-Z
  {
    id: "Q",
    name: "Group Q - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "ACHIEVEMENT", hint: "Success accomplishment" },
      { word: "ENTHUSIASM", hint: "Great excitement" },
      { word: "INTELLIGENCE", hint: "Learning ability" },
      { word: "PERSEVERANCE", hint: "Continuing despite difficulty" },
      { word: "EXTRAORDINARY", hint: "Remarkably unusual" },
      { word: "REVOLUTIONARY", hint: "Causing major change" },
      { word: "TRANSFORMATION", hint: "Complete change" },
      { word: "UNDERSTANDING", hint: "Ability to comprehend" },
      { word: "BREATHTAKING", hint: "Extremely impressive" },
      { word: "CIVILIZATION", hint: "Advanced society" }
    ]
  },
  {
    id: "R",
    name: "Group R - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "PHILOSOPHICAL", hint: "Relating to philosophy" },
      { word: "SYNCHRONIZATION", hint: "Coordinated timing" },
      { word: "PERPENDICULAR", hint: "At right angles" },
      { word: "QUINTESSENTIAL", hint: "Most perfect example" },
      { word: "MYTHOLOGICAL", hint: "Relating to myths" },
      { word: "CHARACTERISTIC", hint: "Distinguishing feature" },
      { word: "BIODIVERSITY", hint: "Variety of life" },
      { word: "SOPHISTICATED", hint: "Refined and complex" },
      { word: "COMMEMORATION", hint: "Act of remembering" },
      { word: "MEDITERRANEAN", hint: "Sea between continents" }
    ]
  },
  {
    id: "S",
    name: "Group S - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "UNPREDICTABLE", hint: "Cannot be foreseen" },
      { word: "INCONCEIVABLE", hint: "Impossible to imagine" },
      { word: "METAMORPHOSIS", hint: "Complete transformation" },
      { word: "PRONUNCIATION", hint: "Way to say words" },
      { word: "PHARMACEUTICAL", hint: "Medicine related" },
      { word: "REHABILITATION", hint: "Process of recovery" },
      { word: "UNCONDITIONAL", hint: "Without conditions" },
      { word: "INSTANTANEOUS", hint: "Happening immediately" },
      { word: "AUTHENTICITY", hint: "Being genuine" },
      { word: "CONCENTRATION", hint: "Focused attention" }
    ]
  },
  {
    id: "T",
    name: "Group T - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "UNQUESTIONABLE", hint: "Beyond doubt" },
      { word: "SOPHISTICATED", hint: "Highly developed" },
      { word: "CHOREOGRAPHER", hint: "Dance creator" },
      { word: "ARCHAEOLOGICAL", hint: "Ancient artifacts study" },
      { word: "CINEMATOGRAPHY", hint: "Film photography art" },
      { word: "ENTREPRENEURSHIP", hint: "Starting businesses" },
      { word: "REVOLUTIONARY", hint: "Groundbreaking change" },
      { word: "EXTRATERRESTRIAL", hint: "Beyond Earth" },
      { word: "CONSTELLATION", hint: "Star group pattern" },
      { word: "COMPASSIONATE", hint: "Showing sympathy" }
    ]
  },
  {
    id: "U",
    name: "Group U - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "HETEROGENEOUS", hint: "Diverse in character" },
      { word: "EXPONENTIALLY", hint: "Rapid increase rate" },
      { word: "INDISPENSABLE", hint: "Absolutely necessary" },
      { word: "MAGNIFICATION", hint: "Making larger" },
      { word: "REVOLUTIONARY", hint: "Bringing major change" },
      { word: "ORCHESTRATION", hint: "Arranging music" },
      { word: "JUXTAPOSITION", hint: "Placing side by side" },
      { word: "MANIFESTATION", hint: "Clear appearance" },
      { word: "CONSTELLATION", hint: "Star formation" },
      { word: "INFRASTRUCTURE", hint: "Basic facilities" }
    ]
  },
  {
    id: "V",
    name: "Group V - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "UNFORGETTABLE", hint: "Impossible to forget" },
      { word: "COUNTERCLOCKWISE", hint: "Opposite rotation" },
      { word: "THERMODYNAMICS", hint: "Heat and energy study" },
      { word: "PROCRASTINATION", hint: "Delaying tasks" },
      { word: "SEMICONDUCTOR", hint: "Electronic material" },
      { word: "PHOTOSYNTHESIS", hint: "Plant food making" },
      { word: "UNPARALLELED", hint: "Having no equal" },
      { word: "CHRONOLOGICAL", hint: "Time sequence order" },
      { word: "GRAVITATIONAL", hint: "Relating to gravity" },
      { word: "PHILOSOPHICAL", hint: "Wisdom seeking" }
    ]
  },
  {
    id: "W",
    name: "Group W - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "CRYSTALLIZATION", hint: "Forming crystals" },
      { word: "BIODEGRADABLE", hint: "Natural decomposition" },
      { word: "DISCRIMINATION", hint: "Unfair treatment" },
      { word: "RECONNAISSANCE", hint: "Military observation" },
      { word: "CONTROVERSIAL", hint: "Causing disagreement" },
      { word: "UNPRECEDENTED", hint: "Never done before" },
      { word: "ENTREPRENEURIAL", hint: "Business minded" },
      { word: "REVOLUTIONARY", hint: "Dramatically new" },
      { word: "SIMULTANEOUSLY", hint: "At same time" },
      { word: "CONSCIOUSNESS", hint: "State of awareness" }
    ]
  },
  {
    id: "X",
    name: "Group X - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "OVERWHELMINGLY", hint: "To great degree" },
      { word: "UNPREDICTABILITY", hint: "Cannot be forecast" },
      { word: "ELECTROMAGNETIC", hint: "Physics force field" },
      { word: "INCOMPREHENSIBLE", hint: "Cannot understand" },
      { word: "TRANSCONTINENTAL", hint: "Across continents" },
      { word: "QUINTESSENTIALLY", hint: "Most perfectly" },
      { word: "UNDERESTIMATED", hint: "Valued too low" },
      { word: "ARCHAEOLOGICAL", hint: "Ancient study" },
      { word: "DISPROPORTIONATE", hint: "Not in balance" },
      { word: "EXTRAORDINARY", hint: "Remarkably unusual" }
    ]
  },
  {
    id: "Y",
    name: "Group Y - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "MISUNDERSTANDING", hint: "Wrong interpretation" },
      { word: "COUNTERPRODUCTIVE", hint: "Opposite effect" },
      { word: "INTERCHANGEABLE", hint: "Can swap places" },
      { word: "DISPROPORTIONATELY", hint: "Unequally distributed" },
      { word: "INDISTINGUISHABLE", hint: "Cannot tell apart" },
      { word: "MULTIDIMENSIONAL", hint: "Many aspects" },
      { word: "UNCONVENTIONAL", hint: "Not traditional" },
      { word: "SIMULTANEOUSLY", hint: "Same time occurrence" },
      { word: "ANTHROPOLOGICAL", hint: "Human study" },
      { word: "UNCHARACTERISTIC", hint: "Not typical" }
    ]
  },
  {
    id: "Z",
    name: "Group Z - Very Hard",
    difficulty: "very-hard",
    levels: [
      { word: "EXTRAORDINARILY", hint: "Remarkably unusual way" },
      { word: "INCOMPREHENSIBILITY", hint: "Cannot be understood" },
      { word: "MULTIDISCIPLINARY", hint: "Many fields combined" },
      { word: "UNDERAPPRECIATED", hint: "Not valued enough" },
      { word: "CHARACTERISTICALLY", hint: "In typical manner" },
      { word: "DISPROPORTIONATELY", hint: "Not fairly balanced" },
      { word: "INTERCONNECTEDNESS", hint: "All linked together" },
      { word: "UNQUESTIONABLY", hint: "Without any doubt" },
      { word: "COUNTERINTUITIVE", hint: "Opposite of expected" },
      { word: "OVERWHELMINGLY", hint: "To crushing degree" }
    ]
  }
];