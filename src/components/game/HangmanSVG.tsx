interface HangmanSVGProps {
  wrongGuesses: number;
}

export const HangmanSVG = ({ wrongGuesses }: HangmanSVGProps) => {
  return (
    <svg
      viewBox="0 0 200 250"
      className="w-full max-w-[200px] mx-auto"
      role="img"
      aria-label={`Hangman figure with ${wrongGuesses} wrong guesses`}
    >
      {/* Gallows */}
      <line x1="10" y1="230" x2="150" y2="230" stroke="hsl(var(--foreground))" strokeWidth="4" />
      <line x1="50" y1="230" x2="50" y2="20" stroke="hsl(var(--foreground))" strokeWidth="4" />
      <line x1="50" y1="20" x2="130" y2="20" stroke="hsl(var(--foreground))" strokeWidth="4" />
      <line x1="130" y1="20" x2="130" y2="50" stroke="hsl(var(--foreground))" strokeWidth="4" />

      {/* Head */}
      {wrongGuesses >= 1 && (
        <circle
          cx="130"
          cy="70"
          r="20"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          fill="hsl(var(--accent))"
          className="animate-scale-in"
        />
      )}

      {/* Body */}
      {wrongGuesses >= 2 && (
        <line
          x1="130"
          y1="90"
          x2="130"
          y2="150"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          className="animate-scale-in"
        />
      )}

      {/* Left Arm */}
      {wrongGuesses >= 3 && (
        <line
          x1="130"
          y1="110"
          x2="100"
          y2="130"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          className="animate-scale-in"
        />
      )}

      {/* Right Arm */}
      {wrongGuesses >= 4 && (
        <line
          x1="130"
          y1="110"
          x2="160"
          y2="130"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          className="animate-scale-in"
        />
      )}

      {/* Left Leg */}
      {wrongGuesses >= 5 && (
        <line
          x1="130"
          y1="150"
          x2="110"
          y2="190"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          className="animate-scale-in"
        />
      )}

      {/* Right Leg */}
      {wrongGuesses >= 6 && (
        <line
          x1="130"
          y1="150"
          x2="150"
          y2="190"
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          className="animate-scale-in"
        />
      )}

      {/* Face - Eyes */}
      {wrongGuesses >= 1 && (
        <>
          <circle cx="122" cy="67" r="2" fill="hsl(var(--foreground))" className="animate-fade-in" />
          <circle cx="138" cy="67" r="2" fill="hsl(var(--foreground))" className="animate-fade-in" />
        </>
      )}

      {/* Face - Sad Mouth */}
      {wrongGuesses >= 6 && (
        <path
          d="M 120 78 Q 130 74 140 78"
          stroke="hsl(var(--foreground))"
          strokeWidth="2"
          fill="none"
          className="animate-fade-in"
        />
      )}
    </svg>
  );
};
