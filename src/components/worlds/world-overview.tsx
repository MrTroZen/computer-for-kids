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
      <Link className="back-link" href="/">Back to learning journey</Link>
      <header className="world-heading">
        <div>
          <p className="eyebrow">WORLD {String(world.number).padStart(2, "0")}</p>
          <h1>{world.title}</h1>
          <p>{world.description}</p>
        </div>
        <div className="world-summary" aria-label={`${completion}% of ${world.title} complete`}>
          <strong>{completion}%</strong>
          <span>complete</span>
        </div>
      </header>

      <div className="mission-section">
        <h2>Missions</h2>
        <ol className="mission-list">
          {world.lessons.map((lesson) => {
            const status = getLessonStatus(lesson, progress);
            const icon = status === "completed" ? <Check /> : status === "locked" ? <LockKeyhole /> : <Circle />;
            const content = (
              <>
                <span className={`mission-marker status-${status}`}>{icon}</span>
                <span className="mission-copy">
                  <span>MISSION {lesson.number}</span>
                  <strong>{lesson.title}</strong>
                  <small>{lesson.description}</small>
                </span>
                <span className="mission-xp">{lesson.xpReward} XP</span>
              </>
            );

            return (
              <li key={lesson.id}>
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
