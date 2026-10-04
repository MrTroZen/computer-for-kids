"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type LessonShellProps = {
  stage: number;
  stageCount: number;
  stageTitle: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  hideNavigation?: boolean;
};

export function LessonShell({ stage, stageCount, stageTitle, children, onBack, onNext, nextLabel = "Continue", nextDisabled = false, hideNavigation = false }: LessonShellProps) {
  const progress = Math.round(((stage + 1) / stageCount) * 100);

  return (
    <section className="lesson-shell">
      <header className="lesson-header">
        <Link className="lesson-exit" href="/worlds/hardware">Tech Lab</Link>
        <div className="lesson-stage-meta">
          <span>POWER STEP {stage + 1} / {stageCount}</span>
          <strong>{stageTitle}</strong>
        </div>
        <span className="lesson-progress-value">{progress}%</span>
      </header>
      <div className="lesson-progress" aria-label={`${progress}% through the lesson`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="lesson-stage">{children}</div>

      {!hideNavigation && (
        <footer className="lesson-navigation">
          {onBack ? (
            <button className="lesson-button secondary" type="button" onClick={onBack}><ChevronLeft /> Back</button>
          ) : <span />}
          {onNext && (
            <button className="lesson-button primary" type="button" onClick={onNext} disabled={nextDisabled}>{nextLabel}<ChevronRight /></button>
          )}
        </footer>
      )}
    </section>
  );
}
