import { useState } from "react";
import { HomeScreen } from "@/components/game/HomeScreen";
import { GameScreen } from "@/components/game/GameScreen";

const Index = () => {
  const [screen, setScreen] = useState<"home" | "game">("home");

  return (
    <div className="min-h-screen bg-background">
      {screen === "home" ? (
        <HomeScreen onStartGame={() => setScreen("game")} />
      ) : (
        <GameScreen onHomeClick={() => setScreen("home")} />
      )}
    </div>
  );
};

export default Index;
