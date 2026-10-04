"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  CheckCheck,
  FileText,
  Globe,
  GraduationCap,
  HelpCircle,
  Home,
  Lightbulb,
  Play,
  Search,
  X,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

export function SearchLearningPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "Finding Information",
      description: "The internet can help you find answers.",
      visual: <FindingInfoSlide />,
    },
    {
      title: "Search Better",
      description: "Clear searches usually give better results.",
      visual: <SearchBetterSlide />,
    },
    {
      title: "Search Results",
      description: "Look at the title, website, and description before clicking.",
      visual: <SearchResultsSlide />,
    },
    {
      title: "Ads vs Results",
      description: "Some search results are advertisements.",
      visual: <AdsVsResultsSlide />,
    },
    {
      title: "Check the Source",
      description: "Check where information comes from.",
      visual: <CheckTheSourceSlide />,
    },
    {
      title: "Don't Trust One Page",
      description: "Important information is worth checking in more than one place.",
      visual: <DontTrustOnePageSlide />,
    },
    {
      title: "Learn, Don't Just Copy",
      description: "Finding an answer is not the same as learning it.",
      visual: <LearnDontCopySlide />,
    },
    {
      title: "Search & Learning Overview",
      description: "Ask good questions, check sources, and understand in your own words.",
      visual: <SearchOverviewSlide />,
    },
  ];

  return <SlideDeck topic="Searching & Learning" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — FINDING INFORMATION
   ========================================================================== */
function FindingInfoSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      {/* QUESTION HERO */}
      <div className="p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm text-center w-full">
        <span className="text-xs font-black uppercase text-blue-600 tracking-wider">
          A CURIOSITY OR HOMEWORK QUESTION
        </span>
        <h2 className="text-xl md:text-2xl font-black text-slate-900 m-2">
          &ldquo;Why is the sky blue?&rdquo;
        </h2>
      </div>

      {/* 4-STEP PIPELINE */}
      <div className="flex items-center justify-between w-full gap-2 flex-wrap">
        <div className="connect-step-node is-active">
          <HelpCircle className="w-8 h-8 text-blue-600" />
          <strong>1. Question</strong>
          <small className="text-[10px] text-slate-500">What you want to know</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node">
          <Search className="w-8 h-8 text-amber-500" />
          <strong>2. Search Engine</strong>
          <small className="text-[10px] text-slate-500">Finds relevant web pages</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node">
          <Globe className="w-8 h-8 text-emerald-600" />
          <strong>3. Websites</strong>
          <small className="text-[10px] text-slate-500">Science articles &amp; guides</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node">
          <Lightbulb className="w-8 h-8 text-yellow-500" />
          <strong>4. Understanding</strong>
          <small className="text-[10px] text-slate-500">You learn the answer!</small>
        </div>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        The internet is like the world&apos;s biggest digital library. A good search opens the right book!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — SEARCH BETTER
   ========================================================================== */
type SearchLevel = "broad" | "better" | "best";

function SearchBetterSlide() {
  const [level, setLevel] = useState<SearchLevel>("best");

  return (
    <div className="search-refine-stage">
      {/* LEVEL BUTTONS */}
      <div className="search-level-selector">
        <button
          type="button"
          className={`explorer-btn${level === "broad" ? " is-accent" : ""}`}
          onClick={() => setLevel("broad")}
        >
          Level 1: Broad Keyword
        </button>
        <button
          type="button"
          className={`explorer-btn${level === "better" ? " is-accent" : ""}`}
          onClick={() => setLevel("better")}
        >
          Level 2: Specific Question
        </button>
        <button
          type="button"
          className={`explorer-btn${level === "best" ? " is-accent" : ""}`}
          onClick={() => setLevel("best")}
        >
          Level 3: Specific + Age Level
        </button>
      </div>

      {/* SEARCH INPUT BAR */}
      <div className="search-mock-bar">
        <Search className="w-5 h-5 text-blue-600" />
        <span className="font-mono text-sm font-bold text-slate-900">
          {level === "broad" && "computer"}
          {level === "better" && "how does computer RAM work"}
          {level === "best" && "how does computer RAM work for kids"}
        </span>
      </div>

      {/* RESULT PREVIEW */}
      <div className="p-4 bg-white border-2 border-slate-900 rounded-lg flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-black uppercase text-slate-500">SEARCH RESULTS RELEVANCE:</span>
          {level === "broad" && (
            <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-bold">
              10,000,000 mixed shopping, stores, history
            </span>
          )}
          {level === "better" && (
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-bold">
              Technical articles &amp; chip datasheets
            </span>
          )}
          {level === "best" && (
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-bold">
              ★ Perfect! Visual kid-friendly explanations
            </span>
          )}
        </div>

        <div className="text-xs text-slate-700 leading-relaxed">
          {level === "broad" &&
            "Typing just 'computer' is too broad! The search engine doesn't know if you want to buy a computer, fix one, or learn history."}
          {level === "better" &&
            "Better! 'how does computer RAM work' gives direct answers, but they might use very complex engineering words."}
          {level === "best" &&
            "Awesome! Adding 'for kids' or 'simple' tells the search engine to bring back clear diagrams, animations, and friendly explanations!"}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — SEARCH RESULTS
   ========================================================================== */
function SearchResultsSlide() {
  const [highlighted, setHighlighted] = useState<"title" | "url" | "desc">("title");

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {/* HIGHLIGHT TABS */}
      <div className="flex justify-center gap-2">
        <button
          type="button"
          className={`explorer-btn${highlighted === "title" ? " is-accent" : ""}`}
          onClick={() => setHighlighted("title")}
        >
          1. The Title
        </button>
        <button
          type="button"
          className={`explorer-btn${highlighted === "url" ? " is-accent" : ""}`}
          onClick={() => setHighlighted("url")}
        >
          2. The Website Address
        </button>
        <button
          type="button"
          className={`explorer-btn${highlighted === "desc" ? " is-accent" : ""}`}
          onClick={() => setHighlighted("desc")}
        >
          3. The Description Snippet
        </button>
      </div>

      {/* RESULT CARD */}
      <div className="search-result-card border-3 border-slate-900 shadow-sm">
        <span
          className={`search-result-url${highlighted === "url" ? " bg-yellow-200 px-1 rounded w-max" : ""}`}
        >
          https://sciencekids.test/space/moon-distance
        </span>
        <span
          className={`search-result-title text-base${highlighted === "title" ? " bg-yellow-200 px-1 rounded w-max" : ""}`}
        >
          How Far is the Moon? Easy Guide for Students
        </span>
        <p
          className={`search-result-snippet m-0 mt-1${highlighted === "desc" ? " bg-yellow-200 p-1 rounded" : ""}`}
        >
          The Moon is about 238,855 miles (384,400 km) away from Earth. Learn how long a rocket takes to get there with interactive diagrams...
        </p>
      </div>

      {/* EXPLANATION */}
      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800">
        {highlighted === "title" && "Title: Tells you what topic this specific web page covers."}
        {highlighted === "url" && "Website URL: Shows you who runs the website so you know if it is trusted."}
        {highlighted === "desc" && "Description: A quick sneak peek so you can see if it answers your question before clicking!"}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — ADS VS RESULTS
   ========================================================================== */
function AdsVsResultsSlide() {
  const [highlightAds, setHighlightAds] = useState(true);

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-600">Sample Search: &ldquo;best shoes for running&rdquo;</span>
        <button
          type="button"
          className={`explorer-btn${highlightAds ? " is-accent" : ""}`}
          onClick={() => setHighlightAds((h) => !h)}
        >
          {highlightAds ? "Hide Ad Highlights" : "Highlight Ads"}
        </button>
      </div>

      {/* AD RESULT */}
      <div className={`search-result-card${highlightAds ? " border-amber-400 bg-amber-50" : ""}`}>
        <div className="flex items-center gap-2">
          <span className="ad-tag-badge">Sponsored (Ad)</span>
          <span className="search-result-url">https://buy-shoes-fast.example</span>
        </div>
        <span className="search-result-title">Buy Super Sprint Shoes - 50% Off Today Only!</span>
        <p className="search-result-snippet m-0">
          Order shoes with next day delivery. Great prices on all sneaker sizes...
        </p>
      </div>

      {/* ORGANIC RESULT */}
      <div className="search-result-card">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
            Normal Result
          </span>
          <span className="search-result-url">https://runner-magazine.example/guide</span>
        </div>
        <span className="search-result-title">How Running Shoes Are Designed for Comfort</span>
        <p className="search-result-snippet m-0">
          Independent reviews and biomechanics guide explaining cushion and support...
        </p>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800">
        Companies pay to show &ldquo;Sponsored&rdquo; ads at the top. Ads are not automatically bad, but it is important to know which results are paid ads and which are normal answers!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — CHECK THE SOURCE
   ========================================================================== */
type SourceId = "blog" | "space" | "forum";

function CheckTheSourceSlide() {
  const [selectedSource, setSelectedSource] = useState<SourceId>("space");

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="text-center">
        <span className="text-xs font-bold text-slate-500 uppercase">RESEARCH QUESTION</span>
        <h3 className="m-0 text-base font-black text-slate-900">&ldquo;How far is the Moon from Earth?&rdquo;</h3>
      </div>

      <div className="source-check-grid">
        {/* RANDOM BLOG */}
        <div
          className={`source-card${selectedSource === "blog" ? " is-active" : ""}`}
          onClick={() => setSelectedSource("blog")}
        >
          <FileText className="w-8 h-8 text-amber-500" />
          <strong className="text-xs">Random Person&apos;s Blog</strong>
          <span className="text-[10px] text-slate-500">Personal opinions</span>
        </div>

        {/* SPACE ORG */}
        <div
          className={`source-card${selectedSource === "space" ? " is-active" : ""}`}
          onClick={() => setSelectedSource("space")}
        >
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <strong className="text-xs">Space Science Museum</strong>
          <span className="text-[10px] text-emerald-600 font-bold">Official Experts</span>
        </div>

        {/* FORUM */}
        <div
          className={`source-card${selectedSource === "forum" ? " is-active" : ""}`}
          onClick={() => setSelectedSource("forum")}
        >
          <HelpCircle className="w-8 h-8 text-purple-500" />
          <strong className="text-xs">Anonymous Forum Comment</strong>
          <span className="text-[10px] text-slate-500">Unverified user</span>
        </div>
      </div>

      {/* 3 SOURCE QUESTIONS */}
      <div className="w-full max-w-xl p-4 bg-white border-2 border-slate-900 rounded-lg flex flex-col gap-2">
        <span className="text-xs font-black uppercase text-blue-700">3 Source Check Questions:</span>
        <div className="text-xs text-slate-800 font-semibold flex flex-col gap-1">
          <span>1. Who made this? {selectedSource === "space" ? "✓ Astronomers & scientists" : "Unknown person"}</span>
          <span>2. Do they know this subject? {selectedSource === "space" ? "✓ Yes, they study space professionally" : "Not sure"}</span>
          <span>3. Is it up to date? {selectedSource === "space" ? "✓ Regularly reviewed" : "Could be outdated"}</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — DON'T TRUST ONE PAGE
   ========================================================================== */
function DontTrustOnePageSlide() {
  const [compared, setCompared] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col gap-1">
          <strong className="text-xs text-blue-700">Website A (Encyclopedia)</strong>
          <span className="text-xs text-slate-700 font-bold">&ldquo;About 384,400 km&rdquo;</span>
        </div>

        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col gap-1">
          <strong className="text-xs text-emerald-700">Website B (Space Agency)</strong>
          <span className="text-xs text-slate-700 font-bold">&ldquo;Average 238,855 miles&rdquo;</span>
        </div>

        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col gap-1">
          <strong className="text-xs text-purple-700">Website C (Science Book)</strong>
          <span className="text-xs text-slate-700 font-bold">&ldquo;About 384,400 kilometres&rdquo;</span>
        </div>
      </div>

      <button
        type="button"
        className="demo-button"
        onClick={() => setCompared((c) => !c)}
      >
        <CheckCheck /> {compared ? "HIDE COMPARISON" : "COMPARE SOURCES"}
      </button>

      {compared && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-lg text-center text-xs font-bold text-emerald-900 w-full">
          &check; All three trusted websites agree! (Miles and kilometres convert to the exact same distance). Now you can be confident the fact is true!
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — LEARN, DON'T JUST COPY
   ========================================================================== */
function LearnDontCopySlide() {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <div className="w-full p-4 bg-slate-50 border border-slate-300 rounded font-serif text-xs text-slate-600 leading-relaxed italic">
        &ldquo;Photosynthesis is a chemical process where chlorophyllic plant cells convert solar radiant energy into adenosine triphosphate...&rdquo;
      </div>

      {/* BAD VS GOOD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* COPYING (BAD) */}
        <div className="p-4 border-2 border-red-400 bg-red-50 rounded-lg flex flex-col items-center gap-2 text-center">
          <X className="w-8 h-8 text-red-600" />
          <strong className="text-xs font-black text-red-800 uppercase">COPY EVERYTHING (&times;)</strong>
          <p className="text-xs text-red-700 m-0">
            Copying and pasting words you don&apos;t understand doesn&apos;t teach your brain anything.
          </p>
        </div>

        {/* UNDERSTANDING (GOOD) */}
        <div className="p-4 border-2 border-emerald-400 bg-emerald-50 rounded-lg flex flex-col items-center gap-2 text-center">
          <Check className="w-8 h-8 text-emerald-600" />
          <strong className="text-xs font-black text-emerald-800 uppercase">
            EXPLAIN IN YOUR OWN WORDS (&check;)
          </strong>
          <p className="text-xs text-emerald-800 m-0 font-bold">
            &ldquo;Plants use sunlight to make food!&rdquo; Now you really understand it!
          </p>
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        Finding an answer is not the same as learning it. Use your own superhero brain to explain it!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — SEARCH OVERVIEW
   ========================================================================== */
function SearchOverviewSlide() {
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  function playFlow() {
    setPlaying(true);
    setActiveStep(1);
    const interval = setInterval(() => {
      setActiveStep((curr) => {
        if (curr >= 6) {
          clearInterval(interval);
          setPlaying(false);
          return 6;
        }
        return curr + 1;
      });
    }, 800);
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 w-full">
        {[
          { step: 1, label: "1. Question", icon: <HelpCircle className="w-6 h-6 text-blue-600" /> },
          { step: 2, label: "2. Good Search", icon: <Search className="w-6 h-6 text-amber-500" /> },
          { step: 3, label: "3. Results", icon: <Globe className="w-6 h-6 text-emerald-600" /> },
          { step: 4, label: "4. Check Source", icon: <GraduationCap className="w-6 h-6 text-purple-600" /> },
          { step: 5, label: "5. Compare", icon: <CheckCheck className="w-6 h-6 text-blue-600" /> },
          { step: 6, label: "6. Understand", icon: <Lightbulb className="w-6 h-6 text-yellow-500" /> },
        ].map((item) => (
          <div
            key={item.step}
            className={`p-3 bg-white border-2 border-slate-900 rounded text-center flex flex-col items-center gap-1 transition-all ${activeStep >= item.step ? "bg-yellow-200 border-blue-600 shadow-sm" : ""}`}
          >
            {item.icon}
            <strong className="text-[11px] font-black">{item.label}</strong>
          </div>
        ))}
      </div>

      <button type="button" className="demo-button" onClick={playFlow} disabled={playing}>
        <Play /> PLAY SEARCH JOURNEY
      </button>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
