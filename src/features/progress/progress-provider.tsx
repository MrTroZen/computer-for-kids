"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { progressStore } from "./store";
import type { ProgressActions, StudentProgress } from "./types";

type ProgressContextValue = {
  progress: StudentProgress;
  hydrated: boolean;
  actions: ProgressActions;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const progress = useSyncExternalStore(progressStore.subscribe, progressStore.getSnapshot, progressStore.getServerSnapshot);

  return <ProgressContext.Provider value={{ progress, hydrated: progressStore.getHydrated(), actions: progressStore.actions }}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error("useProgress must be used inside ProgressProvider");
  return value;
}
