import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HangmanSVG } from "./HangmanSVG";
import { ResultModal } from "./ResultModal";
import { Home } from "lucide-react";
import { GROUPS } from "@/data/levels";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface GameScreenProps {
  groupId: string;
  level: number;
  onHomeClick: () => void;
  onNextLevel: () => void;
  onBackToLevels: () => void;
}

export const GameScreen = ({ groupId, level, onHomeClick, onNextLevel, onBackToLevels }: GameScreenProps) => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [shake, setShake] = useState(false);

  const group = GROUPS.find(g => g.id === groupId);
  const currentLevel = group?.levels[level - 1];
  const isLastLevel = level === 10;

  // Initialize game
  useEffect(() => {
    if (currentLevel) {
      setWord(currentLevel.word);
      setHint(currentLevel.hint);
      setGuessedLetters(new Set());
      setWrongGuesses(0);
      setGameStatus("playing");
      setShake(false);
    }
  }, [groupId, level, currentLevel]);

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

  const handlePlayAgain = () => {
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
            <div className="text-xs font-medium text-muted-foreground">
              Group {groupId} - Level {level}
            </div>
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
        onPlayAgain={handlePlayAgain}
        onHome={onBackToLevels}
        onNextLevel={gameStatus === "won" && !isLastLevel ? onNextLevel : undefined}
      />
    </>
  );
};
