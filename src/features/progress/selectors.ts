import { learningConfig } from "@/config/learning";
import type { LessonDefinition } from "@/features/lessons/types";
import type { StudentProgress } from "./types";
import type { ProgressStatus, WorldDefinition } from "@/features/worlds/types";

export function getWorldStatus(world: WorldDefinition, progress: StudentProgress): ProgressStatus {
  if (progress.completedWorldIds.includes(world.id)) return "completed";
  const hasStarted = progress.currentWorldId === world.id && world.lessons.some((lesson) => progress.completedLessonIds.includes(lesson.id));
  if (hasStarted) return "in-progress";
  const prerequisiteMet = !world.requiredWorldId || progress.completedWorldIds.includes(world.requiredWorldId);
  return learningConfig.unlockAllWorldsForTesting || prerequisiteMet ? "available" : "locked";
}

export function getLessonStatus(lesson: LessonDefinition, progress: StudentProgress): ProgressStatus {
  if (progress.completedLessonIds.includes(lesson.id)) return "completed";
  if (progress.currentLessonId === lesson.id) return "in-progress";
  const prerequisiteMet = !lesson.prerequisiteLessonId || progress.completedLessonIds.includes(lesson.prerequisiteLessonId);
  return prerequisiteMet ? "available" : "locked";
}

export function getWorldCompletion(world: WorldDefinition, progress: StudentProgress) {
  if (world.lessons.length === 0) return 0;
  const completed = world.lessons.filter((lesson) => progress.completedLessonIds.includes(lesson.id)).length;
  return Math.round((completed / world.lessons.length) * 100);
}
