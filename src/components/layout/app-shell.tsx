"use client";

import Link from "next/link";
import { useProgress } from "@/features/progress/progress-provider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();

  return (
    <div className="app-frame">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Computer Lab home">
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>Computer Lab</span>
        </Link>
        <span className="xp-total" aria-label={`${progress.xp} experience points`}>{progress.xp} XP</span>
      </header>
      <main>{children}</main>
    </div>
  );
}
