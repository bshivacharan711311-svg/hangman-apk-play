export type Level = {
  word: string;
  hint: string;
};

export type Group = {
  id: string;
  name: string;
  levels: Level[];
};

export const GROUPS: Group[] = [
  {
    id: "A",
    name: "Group A - Beginner",
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
    name: "Group C - Medium",
    levels: [
      { word: "ELEPHANT", hint: "Large animal with a trunk" },
      { word: "RAINBOW", hint: "Appears in sky after rain" },
      { word: "BIRTHDAY", hint: "Annual celebration of birth" },
      { word: "SUNSHINE", hint: "Bright light from the sun" },
      { word: "BUTTERFLY", hint: "Colorful flying insect" },
      { word: "CHOCOLATE", hint: "Sweet treat loved by many" },
      { word: "UMBRELLA", hint: "Keeps you dry in rain" },
      { word: "MOUNTAIN", hint: "Very tall landform" },
      { word: "DINOSAUR", hint: "Extinct prehistoric creature" },
      { word: "TREASURE", hint: "Hidden valuable items" }
    ]
  },
  {
    id: "D",
    name: "Group D - Hard",
    levels: [
      { word: "ADVENTURE", hint: "Exciting journey or experience" },
      { word: "HAPPINESS", hint: "Feeling of joy and contentment" },
      { word: "PLAYGROUND", hint: "Place where children play" },
      { word: "FRIENDSHIP", hint: "Close bond between people" },
      { word: "CELEBRATION", hint: "Party or special event" },
      { word: "IMAGINATION", hint: "Creative thinking ability" },
      { word: "WONDERFUL", hint: "Extremely good or amazing" },
      { word: "BUTTERFLY", hint: "Insect with colorful wings" },
      { word: "COMPUTER", hint: "Electronic device for work" },
      { word: "VACATION", hint: "Time off for travel and rest" }
    ]
  },
  {
    id: "E",
    name: "Group E - Expert",
    levels: [
      { word: "ACHIEVEMENT", hint: "Success or accomplishment" },
      { word: "ENTHUSIASM", hint: "Great excitement and energy" },
      { word: "INTELLIGENCE", hint: "Ability to learn and understand" },
      { word: "MAGNIFICENT", hint: "Extremely beautiful or impressive" },
      { word: "PERSEVERANCE", hint: "Continuing despite difficulty" },
      { word: "EXTRAORDINARY", hint: "Very unusual or remarkable" },
      { word: "REVOLUTIONARY", hint: "Causing major change" },
      { word: "TRANSFORMATION", hint: "Complete change in form" },
      { word: "UNDERSTANDING", hint: "Ability to comprehend" },
      { word: "BREATHTAKING", hint: "Extremely impressive or beautiful" }
    ]
  }
];
