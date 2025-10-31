import { Button } from "@/components/ui/button";
import { GROUPS } from "@/data/levels";
import { ArrowLeft } from "lucide-react";

interface LevelSelectionProps {
  groupId: string;
  onSelectLevel: (level: number) => void;
  onBack: () => void;
}

export const LevelSelection = ({ groupId, onSelectLevel, onBack }: LevelSelectionProps) => {
  const group = GROUPS.find(g => g.id === groupId);

  if (!group) return null;

  return (
    <div className="min-h-screen flex flex-col p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-black text-primary">Group {group.id}</h1>
          <p className="text-sm text-muted-foreground">{group.name.split(" - ")[1]}</p>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl w-full">
          {group.levels.map((_, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              onClick={() => onSelectLevel(index + 1)}
              className="h-24 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform border-2 border-primary/20 hover:border-primary/50"
            >
              <div className="text-2xl font-black text-primary">
                {index + 1}
              </div>
              <div className="text-xs text-muted-foreground">
                Level
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
