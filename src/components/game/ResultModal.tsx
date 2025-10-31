import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Trophy, XCircle, Home, RotateCcw, ArrowRight } from "lucide-react";

interface ResultModalProps {
  isOpen: boolean;
  gameStatus: "playing" | "won" | "lost";
  word: string;
  onPlayAgain: () => void;
  onHome: () => void;
  onNextLevel?: () => void;
}

export const ResultModal = ({
  isOpen,
  gameStatus,
  word,
  onPlayAgain,
  onHome,
  onNextLevel,
}: ResultModalProps) => {
  const isWin = gameStatus === "won";

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md border-4">
        <div className="text-center space-y-6 py-4">
          {/* Icon */}
          <div className="flex justify-center animate-scale-in">
            {isWin ? (
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                <Trophy className="w-14 h-14 text-primary" />
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-destructive/20 flex items-center justify-center">
                <XCircle className="w-14 h-14 text-destructive" />
              </div>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h2 className={`text-4xl font-black ${isWin ? 'text-primary' : 'text-destructive'}`}>
              {isWin ? "🎉 You Won! 🎉" : "Game Over!"}
            </h2>
            {isWin ? (
              <p className="text-lg text-muted-foreground">
                Congratulations! You guessed the word!
              </p>
            ) : (
              <div className="space-y-1">
                <p className="text-lg text-muted-foreground">
                  The word was:
                </p>
                <p className="text-3xl font-bold text-primary tracking-wider">
                  {word}
                </p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            {onNextLevel && isWin && (
              <Button
                variant="game"
                size="lg"
                onClick={onNextLevel}
                className="w-full"
              >
                Next Level
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
            <Button
              variant={onNextLevel && isWin ? "outline" : "game"}
              size="lg"
              onClick={onPlayAgain}
              className={`w-full ${onNextLevel && isWin ? 'border-2' : ''}`}
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Play Again
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onHome}
              className="w-full border-2"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Levels
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
