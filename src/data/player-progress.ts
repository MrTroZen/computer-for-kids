import { PROGRESS_VERSION, type StudentProgress } from "@/features/progress/types";

export const initialProgress: StudentProgress = {
  version: PROGRESS_VERSION,
  xp: 120,
  completedLessonIds: [],
  completedWorldIds: [],
  achievementIds: [],
  currentWorldId: "hardware-lab",
  currentLessonId: null,
};
