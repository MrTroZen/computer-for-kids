import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Code2,
  Cpu,
  Folder,
  Globe,
  Monitor,
  Search,
  Shield,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { topics } from "@/data/topics";

const icons = {
  computer: Monitor,
  cpu: Cpu,
  folder: Folder,
  globe: Globe,
  cloud: Cloud,
  shield: Shield,
  search: Search,
  sparkles: Sparkles,
  code: Code2,
  upload: UploadCloud,
};

export function TopicDirectory() {
  return (
    <section className="topic-home">
      <header className="topic-hero">
        <p className="eyebrow">EESA BYTE</p>
        <h1>Power Up Your Tech Skills</h1>
        <p>Pick something to explore.</p>
      </header>

      <nav className="topic-grid" aria-label="Teaching topics">
        {topics.map((topic) => {
          const Icon = icons[topic.icon as keyof typeof icons] || Monitor;
          return (
            <Link
              className="topic-tile is-ready"
              href={`/topics/${topic.slug}`}
              key={topic.slug}
            >
              <span className="topic-number">{String(topic.number).padStart(2, "0")}</span>
              <span className="topic-icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="topic-copy">
                <strong>{topic.title}</strong>
                <small>{topic.description}</small>
              </span>
              <span className="topic-open" aria-hidden="true">
                <ArrowRight className="w-4 h-4 inline" />
              </span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
