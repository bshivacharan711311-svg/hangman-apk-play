import { Button } from "@/components/ui/button";
import { GROUPS } from "@/data/levels";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle2 } from "lucide-react";
import { useGameProgress } from "@/hooks/useGameProgress";

interface GroupSelectionProps {
  onSelectGroup: (groupId: string) => void;
}

const difficultyConfig = {
  easy: { color: "bg-secondary", emoji: "😊", label: "easy" },
  medium: { color: "bg-primary", emoji: "🎯", label: "medium" },
  hard: { color: "bg-accent", emoji: "🔥", label: "hard" },
  "very-hard": { color: "bg-destructive", emoji: "💀", label: "veryHard" },
};

export const GroupSelection = ({ onSelectGroup }: GroupSelectionProps) => {
  const { t } = useLanguage();
  const { isGroupUnlocked, getCompletedLevelsCount } = useGameProgress();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-6 animate-fade-in relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="text-center space-y-6 max-w-7xl w-full">
        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-6xl font-black gradient-text">
            {t("chooseGroup")}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            {t("selectDifficulty")}
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4 mt-8">
          {GROUPS.map((group) => {
            const config = difficultyConfig[group.difficulty];
            const unlocked = isGroupUnlocked(group.id);
            const completedCount = getCompletedLevelsCount(group.id);
            const isFullyCompleted = completedCount === 10;

            return (
              <Button
                key={group.id}
                variant="outline"
                onClick={() => unlocked && onSelectGroup(group.id)}
                disabled={!unlocked}
                className={`h-auto p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 transition-all border-2 ${
                  unlocked
                    ? "border-primary/20 hover:border-primary/60 hover:scale-105 card-glow bg-card/80"
                    : "border-muted/50 bg-muted/20 cursor-not-allowed opacity-60"
                } backdrop-blur-sm group relative`}
              >
                {!unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-lg">
                    <Lock className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                
                {isFullyCompleted && (
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                )}

                <div className="text-2xl md:text-3xl mb-1 group-hover:scale-110 transition-transform">
                  {config.emoji}
                </div>
                <div className={`text-3xl md:text-4xl font-black ${unlocked ? 'text-primary group-hover:gradient-text' : 'text-muted-foreground'} transition-all`}>
                  {group.id}
                </div>
                <Badge className={`${unlocked ? config.color : 'bg-muted'} text-white text-xs px-2 py-0.5`}>
                  {t(config.label)}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  {completedCount > 0 ? `${completedCount}/10` : `10 ${t("levels")}`}
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
