import { Button } from "@/components/ui/button";
import { GROUPS } from "@/data/levels";

interface GroupSelectionProps {
  onSelectGroup: (groupId: string) => void;
}

export const GroupSelection = ({ onSelectGroup }: GroupSelectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="text-center space-y-8 max-w-2xl w-full">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Choose Your Group
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a difficulty level to start
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {GROUPS.map((group) => (
            <Button
              key={group.id}
              variant="outline"
              size="lg"
              onClick={() => onSelectGroup(group.id)}
              className="h-auto p-6 flex flex-col items-start gap-2 hover:scale-105 transition-transform border-2 border-primary/20 hover:border-primary/50"
            >
              <div className="text-3xl font-black text-primary">
                Group {group.id}
              </div>
              <div className="text-sm text-muted-foreground text-left">
                {group.name.split(" - ")[1]}
              </div>
              <div className="text-xs text-muted-foreground">
                10 Levels
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
