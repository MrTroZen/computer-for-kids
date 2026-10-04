import type { PlayerProgress } from "./types";

const STORAGE_KEY = "bytebound:progress";

export const progressStorage = {
  load(fallback: PlayerProgress): PlayerProgress {
    if (typeof window === "undefined") return fallback;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return fallback;
    try { return JSON.parse(saved) as PlayerProgress; } catch { return fallback; }
  },
  save(progress: PlayerProgress) {
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  },
};
