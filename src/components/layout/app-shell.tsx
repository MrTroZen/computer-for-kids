"use client";

import Link from "next/link";
import { useProgress } from "@/features/progress/progress-provider";
import { EesaByteLogo } from "@/components/brand/eesa-byte-logo";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();
  const level = Math.floor(progress.xp / 500) + 1;
  const levelXp = progress.xp % 500;

  return (
    <div className="app-frame">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Eesa Byte Hero HQ">
          <EesaByteLogo compact />
        </Link>
        <div className="hero-status" aria-label={`Level ${level}, ${progress.xp} experience points`}>
          <span>LEVEL {level}</span>
          <span className="header-xp-track"><span style={{ width: `${(levelXp / 500) * 100}%` }} /></span>
          <strong>{progress.xp} XP</strong>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
