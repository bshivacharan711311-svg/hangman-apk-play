import { useState, useEffect } from "react";

export interface GameProgress {
  completedLevels: Record<string, Set<number>>; // groupId -> set of completed level numbers
  unlockedGroups: Set<string>; // set of unlocked group IDs
}

const STORAGE_KEY = "hangman_game_progress";

const loadProgress = (): GameProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        completedLevels: Object.fromEntries(
          Object.entries(parsed.completedLevels || {}).map(([key, value]) => [
            key,
            new Set(value as number[]),
          ])
        ),
        unlockedGroups: new Set(parsed.unlockedGroups || ["A"]),
      };
    }
  } catch (error) {
    console.error("Failed to load progress:", error);
  }
  
  // Default: only Group A is unlocked
  return {
    completedLevels: {},
    unlockedGroups: new Set(["A"]),
  };
};

const saveProgress = (progress: GameProgress) => {
  try {
    const toSave = {
      completedLevels: Object.fromEntries(
        Object.entries(progress.completedLevels).map(([key, value]) => [
          key,
          Array.from(value),
        ])
      ),
      unlockedGroups: Array.from(progress.unlockedGroups),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
};

export const useGameProgress = () => {
  const [progress, setProgress] = useState<GameProgress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markLevelComplete = (groupId: string, level: number) => {
    setProgress((prev) => {
      const newCompletedLevels = { ...prev.completedLevels };
      if (!newCompletedLevels[groupId]) {
        newCompletedLevels[groupId] = new Set();
      }
      newCompletedLevels[groupId] = new Set([...newCompletedLevels[groupId], level]);

      // Check if all 10 levels are completed
      const newUnlockedGroups = new Set(prev.unlockedGroups);
      if (newCompletedLevels[groupId].size === 10) {
        // Unlock next group
        const nextGroupCode = String.fromCharCode(groupId.charCodeAt(0) + 1);
        if (nextGroupCode <= "Z") {
          newUnlockedGroups.add(nextGroupCode);
        }
      }

      return {
        completedLevels: newCompletedLevels,
        unlockedGroups: newUnlockedGroups,
      };
    });
  };

  const isGroupUnlocked = (groupId: string): boolean => {
    return progress.unlockedGroups.has(groupId);
  };

  const isLevelCompleted = (groupId: string, level: number): boolean => {
    return progress.completedLevels[groupId]?.has(level) || false;
  };

  const getCompletedLevelsCount = (groupId: string): number => {
    return progress.completedLevels[groupId]?.size || 0;
  };

  const resetProgress = () => {
    setProgress({
      completedLevels: {},
      unlockedGroups: new Set(["A"]),
    });
  };

  return {
    progress,
    markLevelComplete,
    isGroupUnlocked,
    isLevelCompleted,
    getCompletedLevelsCount,
    resetProgress,
  };
};