"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Brain,
  Check,
  CheckCheck,
  HelpCircle,
  Home,
  Lightbulb,
  Lock,
  MessageSquare,
  Pizza,
  RotateCcw,
  Search,
  Send,
  Shield,
  ShieldAlert,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

export function AiPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "What is AI?",
      description: "AI can work with information and generate responses.",
      visual: <WhatIsAiSlide />,
    },
    {
      title: "Talking to AI",
      description: "You can ask AI questions in normal words.",
      visual: <TalkingToAiSlide />,
    },
    {
      title: "Ask Better Questions",
      description: "Better instructions can give you more useful answers.",
      visual: <AskBetterQuestionsSlide />,
    },
    {
      title: "AI as a Teacher",
      description: "You can ask AI follow-up questions to understand better.",
      visual: <AiAsTeacherSlide />,
    },
    {
      title: "Ask AI to Explain",
      description: "AI can help make difficult ideas easier to understand.",
      visual: <AskAiToExplainSlide />,
    },
    {
      title: "Ask AI to Practice",
      description: "AI can help you practise.",
      visual: <AskAiToPracticeSlide />,
    },
    {
      title: "AI Can Be Wrong",
      description: "AI can sound confident and still be wrong.",
      visual: <AiCanBeWrongSlide />,
    },
    {
      title: "Check AI Answers",
      description: "Important answers should be checked.",
      visual: <CheckAiAnswersSlide />,
    },
    {
      title: "Privacy & AI",
      description: "Don't give AI private information.",
      visual: <PrivacyAiSlide />,
    },
    {
      title: "Using AI Well",
      description: "Use AI to help you think. Not to think for you.",
      visual: <UsingAiWellSlide />,
    },
  ];

  return <SlideDeck topic="AI" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — WHAT IS AI?
   ========================================================================== */
function WhatIsAiSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      {/* FLOW */}
      <div className="flex items-center justify-between w-full gap-2 flex-wrap">
        <div className="connect-step-node">
          <User className="w-8 h-8 text-blue-600" />
          <strong>YOU</strong>
          <small className="text-[10px] text-slate-500">Human asks question</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node">
          <MessageSquare className="w-8 h-8 text-amber-500" />
          <strong>PROMPT</strong>
          <small className="text-[10px] text-slate-500">Input instructions</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node is-active">
          <Bot className="w-8 h-8 text-blue-700" />
          <strong>AI MODEL</strong>
          <small className="text-[10px] text-slate-700 font-bold">Processes patterns</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node">
          <Lightbulb className="w-8 h-8 text-yellow-500" />
          <strong>RESPONSE</strong>
          <small className="text-[10px] text-slate-500">Generates text/image</small>
        </div>
      </div>

      <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-xs font-semibold text-slate-800 text-center w-full max-w-xl">
        AI is a powerful computer program that learns language patterns. It does not &ldquo;know everything&rdquo; and it is not a person!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — TALKING TO AI
   ========================================================================== */
function TalkingToAiSlide() {
  const [sent, setSent] = useState(false);

  return (
    <div className="ai-chat-window">
      <div className="p-3 bg-slate-900 text-white font-bold text-xs flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-yellow-400" /> Eesa Byte AI Assistant (Demonstration)
        </span>
        <span className="text-[10px] text-slate-400">Offline Simulation</span>
      </div>

      <div className="ai-chat-messages">
        {/* USER BUBBLE */}
        <div className="chat-bubble is-user">
          <strong>Eesa:</strong> &ldquo;What is RAM in a computer?&rdquo;
        </div>

        {/* AI BUBBLE */}
        {sent ? (
          <div className="chat-bubble is-ai animate-fadeIn">
            <strong className="text-blue-700 flex items-center gap-1 mb-1">
              <Bot className="w-4 h-4" /> AI Assistant:
            </strong>
            <span>
              RAM (Random Access Memory) is your computer&apos;s super-fast short-term memory! It holds the games, websites, and apps you are using right now so everything runs smoothly.
            </span>
          </div>
        ) : (
          <div className="self-start text-xs text-slate-400 italic py-2">
            Click SEND to see how AI responds...
          </div>
        )}
      </div>

      <div className="p-3 bg-white border-t border-slate-200 flex justify-between items-center">
        <span className="text-xs text-slate-500">Prompt: &ldquo;What is RAM?&rdquo;</span>
        <button
          type="button"
          className="demo-button"
          onClick={() => setSent((s) => !s)}
        >
          {sent ? <RotateCcw /> : <Send />}
          {sent ? "RESET CHAT" : "SEND QUESTION"}
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — ASK BETTER QUESTIONS
   ========================================================================== */
function AskBetterQuestionsSlide() {
  const [selectedPrompt, setSelectedPrompt] = useState<1 | 2>(2);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className={`explorer-btn${selectedPrompt === 1 ? " is-accent" : ""}`}
          onClick={() => setSelectedPrompt(1)}
        >
          Prompt 1: Too Vague
        </button>
        <button
          type="button"
          className={`explorer-btn${selectedPrompt === 2 ? " is-accent" : ""}`}
          onClick={() => setSelectedPrompt(2)}
        >
          Prompt 2: Clear &amp; Specific
        </button>
      </div>

      <div className="w-full p-4 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-3">
        {selectedPrompt === 1 ? (
          <>
            <div className="p-2.5 bg-amber-50 border border-amber-300 rounded text-xs font-bold text-amber-900">
              Prompt: &ldquo;Tell me about maths.&rdquo;
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 leading-relaxed max-h-36 overflow-auto">
              Mathematics is the abstract science of number, quantity, and space. It includes arithmetic, algebra, calculus, geometry, trigonometry, topology, statistical analysis, combinatorics, and discrete structures throughout history...
            </div>
            <span className="text-xs text-red-600 font-bold">
              Result: Huge wall of text! Too broad, not very helpful.
            </span>
          </>
        ) : (
          <>
            <div className="p-2.5 bg-emerald-50 border border-emerald-400 rounded text-xs font-bold text-emerald-900">
              Prompt: &ldquo;I&apos;m 11. Explain fractions using pizza.&rdquo;
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded text-xs text-emerald-950 leading-relaxed flex items-center gap-4">
              <Pizza className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <strong>Imagine a delicious 8-slice pizza! 🍕</strong>
                <p className="m-0 mt-1">
                  If you eat 2 slices, you ate <strong>2/8</strong> (two out of eight slices) of the pizza! Fractions simply show how many pieces you have out of the whole thing.
                </p>
              </div>
            </div>
            <span className="text-xs text-emerald-700 font-bold">
              Result: Crystal clear! Asking with age level and an analogy gave the perfect answer!
            </span>
          </>
        )}
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Tip: Tell the AI who you are, what you need, and ask for examples or analogies!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — AI AS A TEACHER
   ========================================================================== */
type AiTeacherAction = "explain" | "example" | "simpler" | "question";

function AiAsTeacherSlide() {
  const [action, setAction] = useState<AiTeacherAction>("explain");

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <div className="p-3 bg-white border-2 border-slate-900 rounded flex justify-between items-center">
        <span className="text-xs font-black uppercase text-blue-700">Topic: Gravity 🌍</span>
        <span className="text-[10px] text-slate-500 font-bold">Try different follow-ups below!</span>
      </div>

      <div className="ai-chips-shelf rounded-t-lg border-2 border-b-0 border-slate-900">
        <button
          type="button"
          className={`ai-chip-btn${action === "explain" ? " is-active" : ""}`}
          onClick={() => setAction("explain")}
        >
          EXPLAIN
        </button>
        <button
          type="button"
          className={`ai-chip-btn${action === "example" ? " is-active" : ""}`}
          onClick={() => setAction("example")}
        >
          GIVE EXAMPLE
        </button>
        <button
          type="button"
          className={`ai-chip-btn${action === "simpler" ? " is-active" : ""}`}
          onClick={() => setAction("simpler")}
        >
          MAKE IT SIMPLER
        </button>
        <button
          type="button"
          className={`ai-chip-btn${action === "question" ? " is-active" : ""}`}
          onClick={() => setAction("question")}
        >
          ASK ME A QUESTION
        </button>
      </div>

      <div className="p-6 bg-white border-2 border-slate-900 rounded-b-lg shadow-sm min-h-[140px] flex items-center justify-center text-center">
        {action === "explain" && (
          <p className="text-sm font-semibold text-slate-800 m-0">
            &ldquo;Gravity is an invisible pulling force that pulls objects toward each other. The bigger an object is, the stronger its pull!&rdquo;
          </p>
        )}
        {action === "example" && (
          <p className="text-sm font-semibold text-slate-800 m-0">
            &ldquo;Like when you drop an apple or a ball from your hand &mdash; Earth&apos;s giant gravity pulls it straight down to the floor!&rdquo;
          </p>
        )}
        {action === "simpler" && (
          <p className="text-sm font-semibold text-slate-800 m-0">
            &ldquo;Gravity is why our feet stay stuck to the ground instead of floating away into space!&rdquo;
          </p>
        )}
        {action === "question" && (
          <div className="flex flex-col gap-1">
            <span className="text-xs font-black text-blue-700 uppercase">Quiz Question:</span>
            <p className="text-sm font-semibold text-slate-800 m-0">
              &ldquo;The Moon is smaller than Earth. If you jumped on the Moon, would you jump higher or lower than on Earth?&rdquo;
            </p>
          </div>
        )}
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        You don&apos;t have to settle for the first answer. Ask AI to rephrase, give examples, or quiz you!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — ASK AI TO EXPLAIN
   ========================================================================== */
function AskAiToExplainSlide() {
  const [simplified, setSimplified] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <div className="w-full flex flex-col gap-3">
        {/* HARD EXPLANATION */}
        <div className="p-4 bg-slate-100 border-2 border-slate-300 rounded-lg">
          <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">
            Hard Textbook Definition:
          </span>
          <p className="text-xs text-slate-700 m-0 leading-relaxed font-serif">
            &ldquo;Quantum superposition denotes the fundamental principle of quantum mechanics wherein a physical system exists concurrently in multiple states prior to wave function collapse during measurement.&rdquo;
          </p>
        </div>

        {/* PROMPT BUTTON */}
        <div className="flex justify-center">
          <button
            type="button"
            className="demo-button"
            onClick={() => setSimplified((s) => !s)}
          >
            <Sparkles /> {simplified ? "SHOW HARD VERSION" : "PROMPT: 'EXPLAIN THIS LIKE I'M 11'"}
          </button>
        </div>

        {/* SIMPLIFIED AI EXPLANATION */}
        {simplified && (
          <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-lg flex flex-col gap-1 animate-fadeIn">
            <span className="text-[10px] font-black uppercase text-emerald-800">
              AI Friendly Explanation:
            </span>
            <p className="text-xs text-emerald-950 font-bold m-0 leading-relaxed">
              &ldquo;Think of a spinning coin on a table! While it is spinning fast, it is both heads and tails at the same time. Only when you stop it with your hand does it pick one side!&rdquo;
            </p>
          </div>
        )}
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        AI is a great translation tool for complicated ideas. Ask it to simplify whenever you get stuck!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — ASK AI TO PRACTICE
   ========================================================================== */
function AskAiToPracticeSlide() {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs font-bold text-blue-900">
        Prompt: &ldquo;Give me 3 multiplication questions for practice. Don&apos;t show answers yet!&rdquo;
      </div>

      <div className="math-practice-grid">
        <div className="math-item-box">
          <span>7 &times; 6 = </span>
          <span className="text-blue-600 font-black">{showAnswers ? "42" : "?"}</span>
        </div>

        <div className="math-item-box">
          <span>9 &times; 4 = </span>
          <span className="text-blue-600 font-black">{showAnswers ? "36" : "?"}</span>
        </div>

        <div className="math-item-box">
          <span>8 &times; 7 = </span>
          <span className="text-blue-600 font-black">{showAnswers ? "56" : "?"}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="demo-button"
          onClick={() => setShowAnswers((a) => !a)}
        >
          {showAnswers ? "HIDE ANSWERS" : "SHOW ANSWERS"}
        </button>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        AI can generate practice questions on any topic &mdash; maths, science, French words, or coding trivia!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — AI CAN BE WRONG
   ========================================================================== */
function AiCanBeWrongSlide() {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <div className="w-full p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-3">
        <div className="p-2.5 bg-blue-50 border border-blue-200 rounded font-bold text-xs text-blue-900">
          User asks: &ldquo;How many days are in a week?&rdquo;
        </div>

        <div className="p-4 bg-slate-50 border-2 border-red-300 rounded text-xs leading-relaxed flex flex-col gap-2">
          <strong className="text-slate-900 flex items-center gap-1.5">
            <Bot className="w-4 h-4 text-blue-600" /> AI Confident Answer:
          </strong>
          <span className="text-slate-800 font-medium">
            &ldquo;There are <strong>8 days</strong> in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, and Funday.&rdquo;
          </span>

          <div className="mt-2 p-2 bg-red-100 border border-red-500 rounded text-red-900 font-black text-xs flex items-center gap-2">
            <X className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>❌ COMPLETELY WRONG! There are only 7 days in a week.</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-red-100 border-2 border-red-500 rounded text-red-900 font-black text-xs text-center">
        AI can sound completely confident and still be totally wrong! This is called an &ldquo;AI hallucination&rdquo;.
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — CHECK AI ANSWERS
   ========================================================================== */
function CheckAiAnswersSlide() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
      <div className="flex items-center justify-between w-full gap-2 flex-wrap">
        <div className="connect-step-node">
          <Bot className="w-8 h-8 text-blue-600" />
          <strong>AI ANSWER</strong>
          <small className="text-[10px] text-slate-500">Fast first draft</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node is-active">
          <Search className="w-8 h-8 text-amber-500" />
          <strong>CROSS-CHECK</strong>
          <small className="text-[10px] text-slate-500">Verify facts</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className="connect-step-node">
          <CheckCheck className="w-8 h-8 text-emerald-600" />
          <strong>TRUSTED SOURCES</strong>
          <small className="text-[10px] text-slate-500">Books, Adults, NASA</small>
        </div>
      </div>

      <button
        type="button"
        className="demo-button"
        onClick={() => setChecked((c) => !c)}
      >
        <Check /> {checked ? "RESET CHECK" : "VERIFY WITH REAL BOOK / ADULT"}
      </button>

      {checked && (
        <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-lg text-center text-xs font-bold text-emerald-900 w-full max-w-xl">
          &check; Checked in our science book and with our teacher! Now we know the fact is 100% true!
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — PRIVACY & AI
   ========================================================================== */
function PrivacyAiSlide() {
  const [shielded, setShielded] = useState(true);

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <div className="p-4 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-3">
        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <strong className="text-xs uppercase">Things NEVER To Type Into AI</strong>
          </div>
          <button
            type="button"
            className={`explorer-btn${shielded ? " is-accent" : ""}`}
            onClick={() => setShielded((s) => !s)}
          >
            <Shield className="w-3.5 h-3.5" />
            {shielded ? "PRIVACY SHIELD ON" : "TOGGLE SHIELD"}
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {[
            "Your Passwords or PIN codes",
            "Your Home Address or School Name",
            "Your Phone Number",
            "Family Private Secrets or Bank Details",
          ].map((item) => (
            <div
              key={item}
              className={`safety-item-row${shielded ? " is-shielded" : ""}`}
            >
              <span>{item}</span>
              {shielded && (
                <span className="shield-overlay-badge">
                  <Lock className="w-3 h-3" /> PROTECTED
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 bg-red-100 border-2 border-red-500 rounded text-red-900 font-black text-xs text-center">
        Don&apos;t give AI private information. Treat AI chats like public spaces!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — USING AI WELL
   ========================================================================== */
function UsingAiWellSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      {/* 6-STEP GOOD USE PIPELINE */}
      <div className="flex items-center justify-between w-full gap-1 flex-wrap">
        <div className="connect-step-node">
          <User className="w-6 h-6 text-blue-600" />
          <strong className="text-xs">1. YOU</strong>
        </div>
        <span className="connect-arrow">&rarr;</span>
        <div className="connect-step-node">
          <HelpCircle className="w-6 h-6 text-amber-500" />
          <strong className="text-xs">2. ASK CLEARLY</strong>
        </div>
        <span className="connect-arrow">&rarr;</span>
        <div className="connect-step-node">
          <Bot className="w-6 h-6 text-blue-700" />
          <strong className="text-xs">3. AI ANSWERS</strong>
        </div>
        <span className="connect-arrow">&rarr;</span>
        <div className="connect-step-node">
          <Brain className="w-6 h-6 text-purple-600" />
          <strong className="text-xs">4. UNDERSTAND</strong>
        </div>
        <span className="connect-arrow">&rarr;</span>
        <div className="connect-step-node is-active">
          <CheckCheck className="w-6 h-6 text-emerald-600" />
          <strong className="text-xs">5. CHECK FACTS</strong>
        </div>
      </div>

      {/* BIG GOLDEN TAKEAWAY MESSAGE */}
      <div className="p-6 bg-yellow-300 border-4 border-slate-900 rounded-xl text-center shadow-lg w-full max-w-2xl">
        <span className="text-xs font-black uppercase tracking-widest text-slate-800 block mb-1">
          THE GOLDEN RULE OF AI
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-slate-950 m-0 leading-tight">
          USE AI TO HELP YOU THINK.
          <br />
          <span className="text-red-600">NOT TO THINK FOR YOU.</span>
        </h2>
      </div>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
