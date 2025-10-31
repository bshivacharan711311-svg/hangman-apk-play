import { useState } from "react";
import { HomeScreen } from "@/components/game/HomeScreen";
import { GroupSelection } from "@/components/game/GroupSelection";
import { LevelSelection } from "@/components/game/LevelSelection";
import { GameScreen } from "@/components/game/GameScreen";

const Index = () => {
  const [screen, setScreen] = useState<"home" | "groups" | "levels" | "game">("home");
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroup(groupId);
    setScreen("levels");
  };

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
    setScreen("game");
  };

  const handleNextLevel = () => {
    if (selectedLevel < 10) {
      setSelectedLevel(prev => prev + 1);
    } else {
      setScreen("levels");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {screen === "home" && (
        <HomeScreen onStartGame={() => setScreen("groups")} />
      )}
      {screen === "groups" && (
        <GroupSelection onSelectGroup={handleSelectGroup} />
      )}
      {screen === "levels" && (
        <LevelSelection
          groupId={selectedGroup}
          onSelectLevel={handleSelectLevel}
          onBack={() => setScreen("groups")}
        />
      )}
      {screen === "game" && (
        <GameScreen
          groupId={selectedGroup}
          level={selectedLevel}
          onHomeClick={() => setScreen("home")}
          onNextLevel={handleNextLevel}
          onBackToLevels={() => setScreen("levels")}
        />
      )}
    </div>
  );
};

export default Index;
