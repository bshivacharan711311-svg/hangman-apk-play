import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "fr" | "de" | "pt" | "ar";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    title: "Hangman",
    subtitle: "Guess the word before it's too late!",
    startPlaying: "Start Playing",
    howToPlay: "How to Play:",
    instruction1: "Guess letters to reveal the hidden word",
    instruction2: "You have 6 chances to guess wrong",
    instruction3: "Win by guessing the word before it's too late!",
    chooseGroup: "Choose Your Group",
    selectDifficulty: "Select a difficulty level to start",
    levels: "Levels",
    level: "Level",
    group: "Group",
    hint: "Hint",
    remainingChances: "Remaining Chances",
    lettersUsed: "Letters used",
    congratulations: "Congratulations!",
    youWon: "You Won!",
    gameOver: "Game Over!",
    theWordWas: "The word was",
    playAgain: "Play Again",
    nextLevel: "Next Level",
    backToLevels: "Back to Levels",
    home: "Home",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    veryHard: "Very Hard"
  },
  es: {
    title: "Ahorcado",
    subtitle: "¡Adivina la palabra antes de que sea tarde!",
    startPlaying: "Comenzar a Jugar",
    howToPlay: "Cómo Jugar:",
    instruction1: "Adivina letras para revelar la palabra oculta",
    instruction2: "Tienes 6 oportunidades para equivocarte",
    instruction3: "¡Gana adivinando la palabra antes de que sea tarde!",
    chooseGroup: "Elige Tu Grupo",
    selectDifficulty: "Selecciona un nivel de dificultad para comenzar",
    levels: "Niveles",
    level: "Nivel",
    group: "Grupo",
    hint: "Pista",
    remainingChances: "Oportunidades Restantes",
    lettersUsed: "Letras usadas",
    congratulations: "¡Felicitaciones!",
    youWon: "¡Ganaste!",
    gameOver: "¡Juego Terminado!",
    theWordWas: "La palabra era",
    playAgain: "Jugar de Nuevo",
    nextLevel: "Siguiente Nivel",
    backToLevels: "Volver a Niveles",
    home: "Inicio",
    easy: "Fácil",
    medium: "Medio",
    hard: "Difícil",
    veryHard: "Muy Difícil"
  },
  fr: {
    title: "Pendu",
    subtitle: "Devinez le mot avant qu'il ne soit trop tard!",
    startPlaying: "Commencer à Jouer",
    howToPlay: "Comment Jouer:",
    instruction1: "Devinez les lettres pour révéler le mot caché",
    instruction2: "Vous avez 6 chances de vous tromper",
    instruction3: "Gagnez en devinant le mot avant qu'il ne soit trop tard!",
    chooseGroup: "Choisissez Votre Groupe",
    selectDifficulty: "Sélectionnez un niveau de difficulté pour commencer",
    levels: "Niveaux",
    level: "Niveau",
    group: "Groupe",
    hint: "Indice",
    remainingChances: "Chances Restantes",
    lettersUsed: "Lettres utilisées",
    congratulations: "Félicitations!",
    youWon: "Vous Avez Gagné!",
    gameOver: "Jeu Terminé!",
    theWordWas: "Le mot était",
    playAgain: "Rejouer",
    nextLevel: "Niveau Suivant",
    backToLevels: "Retour aux Niveaux",
    home: "Accueil",
    easy: "Facile",
    medium: "Moyen",
    hard: "Difficile",
    veryHard: "Très Difficile"
  },
  de: {
    title: "Galgenmännchen",
    subtitle: "Errate das Wort, bevor es zu spät ist!",
    startPlaying: "Spielen Beginnen",
    howToPlay: "Spielanleitung:",
    instruction1: "Errate Buchstaben, um das versteckte Wort zu enthüllen",
    instruction2: "Du hast 6 Versuche zu irren",
    instruction3: "Gewinne, indem du das Wort errätst, bevor es zu spät ist!",
    chooseGroup: "Wähle Deine Gruppe",
    selectDifficulty: "Wähle einen Schwierigkeitsgrad zum Starten",
    levels: "Stufen",
    level: "Stufe",
    group: "Gruppe",
    hint: "Hinweis",
    remainingChances: "Verbleibende Versuche",
    lettersUsed: "Verwendete Buchstaben",
    congratulations: "Glückwunsch!",
    youWon: "Du Hast Gewonnen!",
    gameOver: "Spiel Vorbei!",
    theWordWas: "Das Wort war",
    playAgain: "Nochmal Spielen",
    nextLevel: "Nächste Stufe",
    backToLevels: "Zurück zu Stufen",
    home: "Startseite",
    easy: "Einfach",
    medium: "Mittel",
    hard: "Schwer",
    veryHard: "Sehr Schwer"
  },
  pt: {
    title: "Forca",
    subtitle: "Adivinhe a palavra antes que seja tarde demais!",
    startPlaying: "Começar a Jogar",
    howToPlay: "Como Jogar:",
    instruction1: "Adivinhe letras para revelar a palavra escondida",
    instruction2: "Você tem 6 chances de errar",
    instruction3: "Ganhe adivinhando a palavra antes que seja tarde!",
    chooseGroup: "Escolha Seu Grupo",
    selectDifficulty: "Selecione um nível de dificuldade para começar",
    levels: "Níveis",
    level: "Nível",
    group: "Grupo",
    hint: "Dica",
    remainingChances: "Chances Restantes",
    lettersUsed: "Letras usadas",
    congratulations: "Parabéns!",
    youWon: "Você Ganhou!",
    gameOver: "Fim de Jogo!",
    theWordWas: "A palavra era",
    playAgain: "Jogar Novamente",
    nextLevel: "Próximo Nível",
    backToLevels: "Voltar aos Níveis",
    home: "Início",
    easy: "Fácil",
    medium: "Médio",
    hard: "Difícil",
    veryHard: "Muito Difícil"
  },
  ar: {
    title: "شنق",
    subtitle: "!خمن الكلمة قبل فوات الأوان",
    startPlaying: "ابدأ اللعب",
    howToPlay: ":كيفية اللعب",
    instruction1: "خمن الحروف للكشف عن الكلمة المخفية",
    instruction2: "لديك 6 فرص للخطأ",
    instruction3: "!اربح بتخمين الكلمة قبل فوات الأوان",
    chooseGroup: "اختر مجموعتك",
    selectDifficulty: "حدد مستوى الصعوبة للبدء",
    levels: "مستويات",
    level: "مستوى",
    group: "مجموعة",
    hint: "تلميح",
    remainingChances: "الفرص المتبقية",
    lettersUsed: "الحروف المستخدمة",
    congratulations: "!تهانينا",
    youWon: "!لقد فزت",
    gameOver: "!انتهت اللعبة",
    theWordWas: "الكلمة كانت",
    playAgain: "العب مرة أخرى",
    nextLevel: "المستوى التالي",
    backToLevels: "العودة إلى المستويات",
    home: "الصفحة الرئيسية",
    easy: "سهل",
    medium: "متوسط",
    hard: "صعب",
    veryHard: "صعب جدا"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};