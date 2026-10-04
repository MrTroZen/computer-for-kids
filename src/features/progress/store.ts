import { initialProgress } from "@/data/player-progress";
import { progressService } from "./service";
import type { ProgressActions, StudentProgress } from "./types";

type Listener = () => void;

let current = initialProgress;
let hydrated = false;
let hydrationQueued = false;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((listener) => listener());
}

function update(updater: (progress: StudentProgress) => StudentProgress) {
  const next = updater(current);
  if (next === current) return;
  current = next;
  progressService.save(current);
  emit();
}

function appendUnique(values: string[], value: string) {
  return values.includes(value) ? values : [...values, value];
}

const actions: ProgressActions = {
  setCurrentWorld: (worldId) => update((progress) => ({ ...progress, currentWorldId: worldId, currentLessonId: null })),
  setCurrentLesson: (lessonId) => update((progress) => ({ ...progress, currentLessonId: lessonId })),
  completeLesson: (lessonId, xpReward) => update((progress) => progress.completedLessonIds.includes(lessonId) ? progress : ({ ...progress, xp: progress.xp + xpReward, completedLessonIds: appendUnique(progress.completedLessonIds, lessonId) })),
  completeWorld: (worldId, xpReward) => update((progress) => progress.completedWorldIds.includes(worldId) ? progress : ({ ...progress, xp: progress.xp + xpReward, completedWorldIds: appendUnique(progress.completedWorldIds, worldId) })),
  unlockAchievement: (achievementId) => update((progress) => ({ ...progress, achievementIds: appendUnique(progress.achievementIds, achievementId) })),
  resetProgress: () => {
    current = progressService.reset();
    emit();
  },
};

function queueHydration() {
  if (hydrated || hydrationQueued) return;
  hydrationQueued = true;
  queueMicrotask(() => {
    current = progressService.load();
    hydrated = true;
    hydrationQueued = false;
    emit();
  });
}

export const progressStore = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    queueHydration();
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return current;
  },
  getServerSnapshot() {
    return initialProgress;
  },
  getHydrated() {
    return hydrated;
  },
  actions,
};
