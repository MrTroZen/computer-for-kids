"use client";

import Link from "next/link";
import { Check, Circle, LockKeyhole } from "lucide-react";
import { worlds } from "@/data/worlds";
import { useProgress } from "@/features/progress/progress-provider";
import { getWorldCompletion, getWorldStatus } from "@/features/progress/selectors";
import type { ProgressStatus } from "@/features/worlds/types";

const statusLabels: Record<ProgressStatus, string> = {
  available: "Available",
  "in-progress": "In progress",
  completed: "Completed",
  locked: "Locked",
};

function StatusIcon({ status }: { status: ProgressStatus }) {
  if (status === "completed") return <Check aria-hidden="true" />;
  if (status === "locked") return <LockKeyhole aria-hidden="true" />;
  return <Circle aria-hidden="true" />;
}

export function MissionMap() {
  const { progress, actions } = useProgress();

  return (
    <section className="journey-page">
      <header className="journey-heading">
        <p className="eyebrow">LEARNING JOURNEY</p>
        <h1>Learn how computers work</h1>
        <p>Move through each world at your own pace. Your progress is saved on this device.</p>
      </header>

      <ol className="journey-path" aria-label="Computer skills learning journey">
        {worlds.map((world) => {
          const status = getWorldStatus(world, progress);
          const completion = getWorldCompletion(world, progress);
          const content = (
            <>
              <span className={`path-marker status-${status}`}><StatusIcon status={status} /></span>
              <span className="path-content">
                <span className="world-kicker">WORLD {String(world.number).padStart(2, "0")}</span>
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
