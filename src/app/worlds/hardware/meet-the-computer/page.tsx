import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet the Computer — Hardware Lab",
  description: "Mission 1 of Hardware Lab.",
};

export default function MeetTheComputerPage() {
  return (
    <section className="lesson-placeholder">
      <p className="eyebrow">HARDWARE LAB · MISSION 1</p>
      <h1>Meet the Computer</h1>
      <p>Interactive lesson coming next.</p>
      <Link className="secondary-button" href="/worlds/hardware">Back to Hardware Lab</Link>
    </section>
  );
}
