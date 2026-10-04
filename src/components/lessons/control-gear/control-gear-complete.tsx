import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

export function ControlGearComplete({ xpReward, alreadyCompleted }: { xpReward: number; alreadyCompleted: boolean }) {
  return (
    <div className="mission-complete cg-complete">
      <span className="complete-check"><Check aria-hidden="true" /></span>
      <p className="eyebrow">TECH LAB // CONTROL GEAR COMPLETE</p>
      <h1>Input &amp; Output</h1>
      <p>Tech power unlocked. You can now trace information into and out of a computer.</p>
      <div className="cg-final-flow" aria-label="You, input devices, computer, output devices, you">
        <span>YOU</span><b>↓</b><span>INPUT DEVICES</span><b>↓</b><span>COMPUTER</span><b>↓</b><span>OUTPUT DEVICES</span><b>↓</b><span>YOU</span>
      </div>
      <div className="cg-complete-groups">
        <div><strong>INPUT</strong><span>Keyboard · Mouse · Microphone · Webcam</span></div>
        <div><strong>OUTPUT</strong><span>Monitor · Speakers · Printer</span></div>
      </div>
      <p className="xp-award">{alreadyCompleted ? "XP already collected" : `+${xpReward} XP`}</p>
      <div className="cg-next-unlock"><span>NEXT CHALLENGE UNLOCKED</span><strong>03 // UNDER THE ARMOR</strong></div>
      <div className="complete-actions">
        <Link className="lesson-button primary" href="/worlds/hardware#mission-3">Under the Armor <ChevronRight /></Link>
        <Link className="lesson-button secondary" href="/worlds/hardware">Back to Tech Lab</Link>
      </div>
    </div>
  );
}
