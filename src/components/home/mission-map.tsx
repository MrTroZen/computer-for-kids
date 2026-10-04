"use client";

import Link from "next/link";
import { Check, Circle, LockKeyhole } from "lucide-react";
import { worlds } from "@/data/worlds";
import { useProgress } from "@/features/progress/progress-provider";
import { getWorldCompletion, getWorldStatus } from "@/features/progress/selectors";
import type { ProgressStatus } from "@/features/worlds/types";

const statusLabels: Record<ProgressStatus, string> = {
  available: "READY",
  "in-progress": "ACTIVE",
  completed: "POWERED UP",
  locked: "LOCKED",
};

function StatusIcon({ status }: { status: ProgressStatus }) {
  if (status === "completed") return <Check aria-hidden="true" />;
  if (status === "locked") return <LockKeyhole aria-hidden="true" />;
  return <Circle aria-hidden="true" />;
}

export function MissionMap() {
  const { progress, actions } = useProgress();
  const level = Math.floor(progress.xp / 500) + 1;
  const currentMission = worlds.find((world) => world.id === progress.currentWorldId) ?? worlds[0];

  return (
    <section className="journey-page hero-hq">
      <header className="journey-heading hero-hq-heading">
        <div>
          <p className="eyebrow">HERO HQ · SYSTEM READY</p>
          <h1>Welcome back, Eesa.</h1>
          <p>Your next tech mission is ready.</p>
        </div>
        <div className="hq-signal" aria-hidden="true">EB//01</div>
      </header>

      <div className="hero-dashboard">
        <div><span>HERO LEVEL</span><strong>{level}</strong></div>
        <div className="hq-xp"><span>HERO PROGRESS</span><strong>{progress.xp} XP</strong><span className="hq-xp-track"><span style={{ width: `${(progress.xp % 500) / 5}%` }} /></span></div>
        <div><span>CURRENT MISSION</span><strong>{currentMission.title}</strong></div>
      </div>

      <div className="mission-map-title"><span>MISSION MAP</span><small>Unlock your tech powers</small></div>

      <ol className="journey-path" aria-label="Eesa Byte mission map">
        {worlds.map((world) => {
          const status = getWorldStatus(world, progress);
          const completion = getWorldCompletion(world, progress);
          const content = (
            <>
              <span className={`path-marker status-${status}`}><StatusIcon status={status} /></span>
              <span className="path-content">
                <span className="world-kicker">MISSION {String(world.number).padStart(2, "0")}</span>
                <strong>{world.title}</strong>
                <span className="world-description">{world.description}</span>
                <span className="world-progress" aria-label={`${completion}% complete`}>
                  <span className="world-progress-track"><span style={{ width: `${completion}%` }} /></span>
                  <span>{completion}%</span>
                </span>
              </span>
              <span className={`path-status status-${status}`}><StatusIcon status={status} />{statusLabels[status]}</span>
            </>
          );

          return (
            <li className={`journey-item status-${status}`} key={world.id}>
              {status === "locked" ? (
                <div className="journey-link is-disabled" aria-label={`${world.title}, locked`}>{content}</div>
              ) : (
                <Link className="journey-link" href={`/worlds/${world.slug}`} onClick={() => actions.setCurrentWorld(world.id)}>{content}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
