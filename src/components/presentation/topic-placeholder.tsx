import Link from "next/link";
import { ArrowLeft, Presentation } from "lucide-react";

export function TopicPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="topic-placeholder">
      <Presentation aria-hidden="true" />
      <p className="eyebrow">EESA BYTE</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <small>Visual slides for this topic will be added later.</small>
      <Link href="/"><ArrowLeft /> Back to topics</Link>
    </section>
  );
}
