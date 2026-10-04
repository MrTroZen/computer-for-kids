import Link from "next/link";
import { Check } from "lucide-react";

export function MissionComplete({ xpReward, alreadyCompleted }: { xpReward: number; alreadyCompleted: boolean }) {
  return (
    <div className="mission-complete">
      <span className="complete-check"><Check aria-hidden="true" /></span>
      <p className="eyebrow">MISSION COMPLETE</p>
      <h1>Meet the Computer</h1>
      <p>You followed information through a complete computer system.</p>

      <div className="complete-flow" aria-label="Input, process, store, output">
        <span>INPUT</span><b>→</b><span>PROCESS</span><b>→</b><span>STORE</span><b>→</b><span>OUTPUT</span>
      </div>

      <p className="xp-award">{alreadyCompleted ? "XP already collected" : `+${xpReward} XP`}</p>
      <div className="complete-actions">
        <Link className="lesson-button primary" href="/worlds/hardware#mission-2">Continue to Mission 2</Link>
        <Link className="lesson-button secondary" href="/worlds/hardware">Back to Hardware Lab</Link>
      </div>
    </div>
  );
}
