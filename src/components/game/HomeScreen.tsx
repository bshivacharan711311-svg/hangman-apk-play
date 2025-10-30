import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface HomeScreenProps {
  onStartGame: () => void;
}

export const HomeScreen = ({ onStartGame }: HomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="text-center space-y-8 max-w-md w-full">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-scale-in">
            Hangman
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Guess the word before it's too late!
          </p>
        </div>

        {/* Decorative Emoji */}
        <div className="text-6xl animate-bounce" style={{ animationDuration: '2s' }}>
          🎮
        </div>

        {/* Play Button */}
        <Button
          variant="game"
          size="xl"
          onClick={onStartGame}
          className="w-full max-w-xs mx-auto"
        >
          <Play className="mr-2 h-6 w-6" />
          Start Playing
        </Button>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-card rounded-2xl border-2 border-primary/20 space-y-2">
          <h3 className="font-bold text-primary">How to Play:</h3>
          <ul className="text-sm text-muted-foreground space-y-1 text-left">
            <li>• Guess letters to reveal the hidden word</li>
            <li>• You have 6 chances to guess wrong</li>
            <li>• Win by guessing the word before it's too late!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
