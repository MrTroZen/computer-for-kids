"use client";

import Link from "next/link";
import { Check, Circle, LockKeyhole } from "lucide-react";
import type { WorldDefinition } from "@/features/worlds/types";
import { useProgress } from "@/features/progress/progress-provider";
import { getLessonStatus, getWorldCompletion } from "@/features/progress/selectors";

export function WorldOverview({ world }: { world: WorldDefinition }) {
  const { progress, actions } = useProgress();
  const completion = getWorldCompletion(world, progress);

  return (
    <section className="world-page">
      <Link className="back-link" href="/">Back to Hero HQ</Link>
      <header className="world-heading">
        <div>
          <p className="eyebrow">MISSION {String(world.number).padStart(2, "0")} · TECH POWER</p>
          <h1>{world.title}</h1>
          <p>{world.description}</p>
        </div>
        <div className="world-summary" aria-label={`${completion}% of ${world.title} complete`}>
          <strong>{completion}%</strong>
          <span>POWER CHARGED</span>
        </div>
      </header>

      <div className="mission-section">
        <h2>Tech Challenges</h2>
        <ol className="mission-list">
          {world.lessons.map((lesson) => {
            const status = getLessonStatus(lesson, progress);
            const icon = status === "completed" ? <Check /> : status === "locked" ? <LockKeyhole /> : <Circle />;
            const content = (
              <>
                <span className={`mission-marker status-${status}`}>{icon}</span>
                <span className="mission-copy">
                  <span>CHALLENGE {String(lesson.number).padStart(2, "0")}</span>
                  <strong>{lesson.title}</strong>
                  <small>{lesson.description}</small>
                </span>
                <span className="mission-xp">{lesson.xpReward} XP</span>
              </>
            );

            return (
              <li id={`mission-${lesson.number}`} key={lesson.id}>
                {status === "locked" ? (
                  <div className="mission-row is-disabled" aria-label={`${lesson.title}, locked`}>{content}</div>
                ) : (
                  <Link className="mission-row" href={`/worlds/${world.slug}/${lesson.slug}`} onClick={() => actions.setCurrentLesson(lesson.id)}>{content}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
