import Link from "next/link";
import { Bot, Cloud, Code2, Computer, Cpu, MousePointer2, Rocket, Router, Search, ShieldCheck } from "lucide-react";
import { topics } from "@/data/topics";

const icons = {
  computer: Computer,
  cpu: Cpu,
  mouse: MousePointer2,
  router: Router,
  cloud: Cloud,
  shield: ShieldCheck,
  search: Search,
  bot: Bot,
  code: Code2,
  rocket: Rocket,
};

export function TopicDirectory() {
  return (
    <section className="topic-home">
      <header className="topic-hero">
        <p className="eyebrow">EESA BYTE</p>
        <h1>Hi Eesa.</h1>
        <p>What should we explore today?</p>
      </header>

      <nav className="topic-grid" aria-label="Teaching topics">
        {topics.map((topic) => {
          const Icon = icons[topic.icon];
          return (
            <Link className={`topic-tile${topic.ready ? " is-ready" : ""}`} href={`/topics/${topic.slug}`} key={topic.slug}>
              <span className="topic-number">{String(topic.number).padStart(2, "0")}</span>
              <span className="topic-icon"><Icon aria-hidden="true" /></span>
              <span className="topic-copy"><strong>{topic.title}</strong><small>{topic.description}</small></span>
              <span className="topic-open">{topic.ready ? "OPEN" : "PREVIEW"}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
