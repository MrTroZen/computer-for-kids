export const PROGRESS_VERSION = 1;

export type StudentProgress = {
  version: number;
  xp: number;
  completedLessonIds: string[];
  completedWorldIds: string[];
  achievementIds: string[];
  currentWorldId: string | null;
  currentLessonId: string | null;
};

export type ProgressActions = {
  setCurrentWorld: (worldId: string) => void;
  setCurrentLesson: (lessonId: string) => void;
  completeLesson: (lessonId: string, xpReward: number) => void;
  completeWorld: (worldId: string, xpReward: number) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
};
