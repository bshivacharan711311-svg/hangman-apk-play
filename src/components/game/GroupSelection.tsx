import { Button } from "@/components/ui/button";
import { GROUPS } from "@/data/levels";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";

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
            return (
              <Button
                key={group.id}
                variant="outline"
                onClick={() => onSelectGroup(group.id)}
                className="h-auto p-4 md:p-6 flex flex-col items-center gap-2 md:gap-3 hover:scale-105 transition-all border-2 border-primary/20 hover:border-primary/60 card-glow bg-card/80 backdrop-blur-sm group"
              >
                <div className="text-2xl md:text-3xl mb-1 group-hover:scale-110 transition-transform">
                  {config.emoji}
                </div>
                <div className="text-3xl md:text-4xl font-black text-primary group-hover:gradient-text transition-all">
                  {group.id}
                </div>
                <Badge className={`${config.color} text-white text-xs px-2 py-0.5`}>
                  {t(config.label)}
                </Badge>
                <div className="text-xs text-muted-foreground">
                  10 {t("levels")}
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
