"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ListOrdered,
  Maximize,
  Minimize,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export type TeachingSlide = {
  title: string;
  description: string;
  visual: React.ReactNode;
};

export function SlideDeck({ topic, slides }: { topic: string; slides: TeachingSlide[] }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [showJumpMenu, setShowJumpMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slide = slides[index];

  function next() {
    if (index === slides.length - 1) {
      router.push("/");
    } else {
      setIndex((current) => current + 1);
    }
  }

  function previous() {
    if (index > 0) {
      setIndex((current) => current - 1);
    }
  }

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();
      // Do not intercept keyboard shortcuts if typing inside input / textarea / editable
      if (tagName === "input" || tagName === "textarea" || target?.isContentEditable) {
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        if (index < slides.length - 1) {
          setIndex((i) => i + 1);
        } else {
          router.push("/");
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (index > 0) {
          setIndex((i) => i - 1);
        }
      } else if (e.key === "Escape") {
        if (showJumpMenu) {
          e.preventDefault();
          setShowJumpMenu(false);
        } else if (!document.fullscreenElement) {
          router.push("/");
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, slides.length, showJumpMenu, router]);

  // Fullscreen tracking
  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  return (
    <section className="slide-deck">
      <header className="deck-header">
        <Link href="/" className="deck-back" title="Back to Topics">
          <ArrowLeft aria-hidden="true" />
          <span>Back to Topics</span>
        </Link>
        <strong>{topic}</strong>
        <div className="deck-header-actions">
          <button
            type="button"
            className="deck-slide-counter-btn"
            onClick={() => setShowJumpMenu((prev) => !prev)}
            title="Click to view all slides"
            aria-expanded={showJumpMenu}
            aria-label={`Slide ${index + 1} of ${slides.length}. Click to jump to a slide`}
          >
            <span>{index + 1} / {slides.length}</span>
            <ListOrdered className="deck-action-icon" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="deck-fullscreen-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen (Esc)" : "Presentation Fullscreen"}
            aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="deck-action-icon" aria-hidden="true" />
            ) : (
              <Maximize className="deck-action-icon" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* SLIDE JUMP MENU MODAL */}
      {showJumpMenu && (
        <div className="slide-jump-overlay" onClick={() => setShowJumpMenu(false)}>
          <div
            className="slide-jump-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${topic} slide index`}
          >
            <div className="slide-jump-header">
              <div className="slide-jump-title-wrap">
                <ListOrdered className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <strong>{topic} &mdash; Slide Contents</strong>
              </div>
              <button
                type="button"
                className="slide-jump-close"
                onClick={() => setShowJumpMenu(false)}
                aria-label="Close slide contents"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="slide-jump-list">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  className={`slide-jump-item${i === index ? " is-active" : ""}`}
                  onClick={() => {
                    setIndex(i);
                    setShowJumpMenu(false);
                  }}
                >
                  <span className="slide-jump-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="slide-jump-name">{s.title}</span>
                  {i === index && <span className="slide-jump-badge">CURRENT</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <article className="teaching-slide" key={index}>
        <div className="slide-title">
          <p className="eyebrow">{topic}</p>
          <h1>{slide.title}</h1>
        </div>
        <div className="slide-visual">{slide.visual}</div>
        <p className="slide-explanation">{slide.description}</p>
      </article>

      <footer className="deck-controls">
        <button
          type="button"
          onClick={previous}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft /> Previous
        </button>

        <div className="deck-keyboard-hint" aria-hidden="true">
          <span><kbd>←</kbd> Previous</span>
          <span className="keyboard-divider">•</span>
          <span>Next <kbd>→</kbd></span>
        </div>

        <button
          className="is-primary"
          type="button"
          onClick={next}
          aria-label={index === slides.length - 1 ? "Finish topic" : "Next slide"}
        >
          {index === slides.length - 1 ? "Finish" : "Next"}
          <ChevronRight />
        </button>
      </footer>
    </section>
  );
}
