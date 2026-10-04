"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useState } from "react";

export type TeachingSlide = {
  title: string;
  description: string;
  visual: React.ReactNode;
};

export function SlideDeck({ topic, slides }: { topic: string; slides: TeachingSlide[] }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  function next() {
    if (index === slides.length - 1) router.push("/");
    else setIndex((current) => current + 1);
  }

  return (
    <section className="slide-deck">
      <header className="deck-header">
        <Link href="/" className="deck-back"><Home aria-hidden="true" /> Back</Link>
        <strong>{topic}</strong>
        <span>{index + 1} / {slides.length}</span>
      </header>

      <article className="teaching-slide" key={index}>
        <div className="slide-title"><p className="eyebrow">{topic}</p><h1>{slide.title}</h1></div>
        <div className="slide-visual">{slide.visual}</div>
        <p className="slide-explanation">{slide.description}</p>
      </article>

      <footer className="deck-controls">
        <button type="button" onClick={() => setIndex((current) => current - 1)} disabled={index === 0}><ChevronLeft /> Previous</button>
        <button className="is-primary" type="button" onClick={next}>{index === slides.length - 1 ? "Finish" : "Next"}<ChevronRight /></button>
      </footer>
    </section>
  );
}
