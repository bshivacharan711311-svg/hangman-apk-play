import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HangmanSVG } from "./HangmanSVG";
import { ResultModal } from "./ResultModal";
import { Home } from "lucide-react";

const WORDS_WITH_HINTS = [
  { word: "ELEPHANT", hint: "Large animal with a trunk" },
  { word: "GIRAFFE", hint: "Tall animal with a long neck" },
  { word: "BUTTERFLY", hint: "Colorful flying insect" },
  { word: "RAINBOW", hint: "Appears in the sky after rain" },
  { word: "COMPUTER", hint: "Electronic device for work and games" },
  { word: "MOUNTAIN", hint: "Very tall natural landform" },
  { word: "TREASURE", hint: "Hidden valuable items" },
  { word: "ADVENTURE", hint: "Exciting journey or experience" },
  { word: "CHOCOLATE", hint: "Sweet treat loved by many" },
  { word: "BIRTHDAY", hint: "Annual celebration of your birth" },
  { word: "HAPPINESS", hint: "Feeling of joy and contentment" },
  { word: "UMBRELLA", hint: "Keeps you dry in the rain" },
  { word: "DINOSAUR", hint: "Extinct prehistoric creature" },
  { word: "SUNSHINE", hint: "Bright light from the sun" },
  { word: "PLAYGROUND", hint: "Place where children play" },
  { word: "FRIENDSHIP", hint: "Close bond between people" },
  { word: "VACATION", hint: "Time off for travel and rest" },
  { word: "CELEBRATION", hint: "Party or special event" },
  { word: "IMAGINATION", hint: "Creative thinking ability" },
  { word: "WONDERFUL", hint: "Extremely good or amazing" }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface GameScreenProps {
  onHomeClick: () => void;
}

export const GameScreen = ({ onHomeClick }: GameScreenProps) => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [shake, setShake] = useState(false);

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  // Check win/lose conditions
  useEffect(() => {
    if (word) {
      const wordLetters = new Set(word.split(""));
      const hasWon = Array.from(wordLetters).every(letter => guessedLetters.has(letter));
      
      if (hasWon && gameStatus === "playing") {
        setGameStatus("won");
      } else if (wrongGuesses >= 6 && gameStatus === "playing") {
        setGameStatus("lost");
      }
    }
  }, [guessedLetters, wrongGuesses, word, gameStatus]);

  const startNewGame = () => {
    const randomEntry = WORDS_WITH_HINTS[Math.floor(Math.random() * WORDS_WITH_HINTS.length)];
    setWord(randomEntry.word);
    setHint(randomEntry.hint);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setGameStatus("playing");
    setShake(false);
  };

  const handleGuess = (letter: string) => {
    if (guessedLetters.has(letter) || gameStatus !== "playing") return;

    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(letter);
    setGuessedLetters(newGuessedLetters);

    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const displayWord = word.split("").map(letter => 
    guessedLetters.has(letter) ? letter : "_"
  ).join(" ");

  const remainingGuesses = 6 - wrongGuesses;

  return (
    <>
      <div className="min-h-screen flex flex-col p-4 md:p-6 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onHomeClick}
            className="rounded-full"
          >
            <Home className="h-5 w-5" />
          </Button>
          <div className="text-center flex-1">
            <div className="text-sm font-medium text-muted-foreground">
              Remaining Chances
            </div>
            <div className={`text-2xl font-bold ${remainingGuesses <= 2 ? 'text-destructive' : 'text-primary'}`}>
              {remainingGuesses}
            </div>
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Game Content */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 max-w-2xl mx-auto w-full">
          {/* Hangman Figure */}
          <div className={`bg-card p-6 rounded-3xl shadow-lg border-2 border-primary/20 ${shake ? 'shake' : ''}`}>
            <HangmanSVG wrongGuesses={wrongGuesses} />
          </div>

          {/* Word Display */}
          <div className="bg-card p-6 rounded-3xl shadow-lg border-2 border-primary/20 w-full space-y-4">
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">Hint</div>
              <div className="text-lg text-foreground">{hint}</div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-center tracking-widest text-primary">
              {displayWord}
            </div>
          </div>

          {/* Keyboard */}
          <div className="w-full space-y-2">
            <div className="flex flex-wrap justify-center gap-2">
              {ALPHABET.map(letter => {
                const isGuessed = guessedLetters.has(letter);
                const isCorrect = isGuessed && word.includes(letter);
                const isWrong = isGuessed && !word.includes(letter);
                
                return (
                  <Button
                    key={letter}
                    variant="keyboard"
                    size="keyboard"
                    onClick={() => handleGuess(letter)}
                    disabled={isGuessed}
                    className={`
                      ${isCorrect ? 'bg-primary text-primary-foreground border-primary' : ''}
                      ${isWrong ? 'bg-destructive/20 text-destructive border-destructive' : ''}
                      ${isGuessed ? 'cursor-not-allowed' : 'hover:scale-110'}
                    `}
                  >
                    {letter}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Guessed Letters Info */}
          <div className="text-sm text-muted-foreground text-center">
            {guessedLetters.size > 0 && (
              <div>
                Letters used: {Array.from(guessedLetters).sort().join(", ")}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Result Modal */}
      <ResultModal
        isOpen={gameStatus !== "playing"}
        gameStatus={gameStatus}
        word={word}
        onPlayAgain={() => {
          startNewGame();
        }}
        onHome={onHomeClick}
      />
    </>
  );
};
