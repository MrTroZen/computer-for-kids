"use client";

import { Award, BookOpen, Menu, Settings, UserRound, X } from "lucide-react";
import { useState } from "react";
import { playerProgress } from "@/data/player-progress";
import { ProgressBar } from "@/components/ui/progress-bar";

const navItems = [
  { label: "Learn", icon: BookOpen, active: true },
  { label: "Achievements", icon: Award },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-frame">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Bytebound home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Bytebound</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button className={active ? "nav-link is-active" : "nav-link"} key={label} type="button">
              <Icon size={18} strokeWidth={2.4} /> {label}
            </button>
          ))}
        </nav>

        <div className="player-progress">
          <div className="player-meta">
            <span>Level {playerProgress.level} · {playerProgress.xp} XP</span>
            <ProgressBar value={playerProgress.xp} max={playerProgress.xpToNextLevel} label="Player XP" />
          </div>
          <span className="profile-icon" aria-hidden="true"><UserRound size={18} /></span>
        </div>

        <button className="mobile-menu-button" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(({ label, icon: Icon }) => <button key={label} type="button"><Icon size={19} />{label}</button>)}
          <button type="button"><Settings size={19} />Settings</button>
        </nav>
      )}

      <main>{children}</main>
    </div>
  );
}
