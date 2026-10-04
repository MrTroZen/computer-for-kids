import type { PlayerProgress } from "@/features/progress/types";

export const playerProgress: PlayerProgress = {
  version: 1,
  level: 1,
  xp: 120,
  xpToNextLevel: 500,
  currentWorldId: "hardware-lab",
  completedLessonIds: [],
  unlockedAchievementIds: [],
  streakDays: 3,
};
