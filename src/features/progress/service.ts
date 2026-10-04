import { initialProgress } from "@/data/player-progress";
import { PROGRESS_VERSION, type StudentProgress } from "./types";
import { localProgressStorage, type ProgressStorage } from "./storage";

function isValidProgress(value: StudentProgress | null): value is StudentProgress {
  return Boolean(value && value.version === PROGRESS_VERSION && typeof value.xp === "number");
}

export function createProgressService(storage: ProgressStorage) {
  return {
    load(): StudentProgress {
      const stored = storage.load();
      return isValidProgress(stored) ? stored : initialProgress;
    },
    save(progress: StudentProgress) {
      storage.save(progress);
    },
    reset(): StudentProgress {
      storage.clear();
      return initialProgress;
    },
  };
}

export const progressService = createProgressService(localProgressStorage);
