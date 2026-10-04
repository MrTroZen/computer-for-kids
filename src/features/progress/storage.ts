import type { StudentProgress } from "./types";

export const PROGRESS_STORAGE_KEY = "computer-for-kids:progress";

export interface ProgressStorage {
  load(): StudentProgress | null;
  save(progress: StudentProgress): void;
  clear(): void;
}

export const localProgressStorage: ProgressStorage = {
  load() {
    if (typeof window === "undefined") return null;
    const saved = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!saved) return null;
    try {
      return JSON.parse(saved) as StudentProgress;
    } catch {
      return null;
    }
  },
  save(progress) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
    }
  },
  clear() {
    if (typeof window !== "undefined") window.localStorage.removeItem(PROGRESS_STORAGE_KEY);
  },
};
