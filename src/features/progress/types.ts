export type PlayerProgress = {
  version: number;
  level: number;
  xp: number;
  xpToNextLevel: number;
  currentWorldId: string;
  completedLessonIds: string[];
  unlockedAchievementIds: string[];
  streakDays: number;
};
