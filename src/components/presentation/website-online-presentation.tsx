"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bot,
  Cloud,
  Code2,
  FileCode,
  Folder,
  GitBranch,
  GitCommit,
  Globe,
  HardDrive,
  Home,
  Laptop,
  Pause,
  Play,
  Rocket,
  RotateCcw,
  Server,
  Smartphone,
  Sparkles,
  Tablet,
  Upload,
  Users,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

export function WebsiteOnlinePresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "Your Website Starts Here",
      description: "Your website starts as files on your computer.",
      visual: <WebsiteStartsHereSlide />,
    },
    {
      title: "Local Website",
      description: "A local website is running on your own computer.",
      visual: <LocalWebsiteSlide />,
    },
    {
      title: "What is Git?",
      description: "Git helps developers keep track of changes to their code.",
      visual: <WhatIsGitSlide />,
    },
    {
      title: "What is GitHub?",
      description: "GitHub can store and share code online.",
      visual: <WhatIsGitHubSlide />,
    },
    {
      title: "Local → GitHub",
      description: "Push sends your saved code changes to the online repository.",
      visual: <LocalToGitHubSlide />,
    },
    {
      title: "What is Hosting?",
      description: "Hosting puts your website on a computer that stays online.",
      visual: <WhatIsHostingSlide />,
    },
    {
      title: "Deploying",
      description: "Deploying means putting your website online.",
      visual: <DeployingSlide />,
    },
    {
      title: "Your Live Website",
      description: "Once it is online, other devices can visit it.",
      visual: <LiveWebsiteSlide />,
    },
    {
      title: "Updating a Website",
      description: "Developers repeat this process whenever they improve a website.",
      visual: <UpdatingWebsiteSlide />,
    },
    {
      title: "The Full Journey",
      description: "From an idea in your head to a real website live on the internet!",
      visual: <TheFullJourneySlide />,
    },
  ];

  return <SlideDeck topic="Putting a Website Online" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — YOUR WEBSITE STARTS HERE
   ========================================================================== */
function WebsiteStartsHereSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* LOCAL FILES */}
        <div className="p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <Folder className="w-5 h-5 text-amber-500" />
            <strong className="text-xs uppercase text-slate-700">my-website/ (On Eesa&apos;s Computer)</strong>
          </div>
          <div className="flex flex-col gap-2 font-mono text-xs font-bold text-slate-800">
            <span className="p-2 bg-slate-50 border rounded flex items-center gap-2">
              <FileCode className="w-4 h-4 text-orange-500" /> index.html
            </span>
            <span className="p-2 bg-slate-50 border rounded flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-500" /> style.css
            </span>
            <span className="p-2 bg-slate-50 border rounded flex items-center gap-2">
              <FileCode className="w-4 h-4 text-yellow-500" /> script.js
            </span>
          </div>
        </div>

        {/* LOCAL PREVIEW */}
        <div className="p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-3 justify-between">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700">
              <Globe className="w-4 h-4 text-blue-600" /> http://localhost:3000
            </div>
            <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
              LOCAL ONLY
            </span>
          </div>

          <div className="p-6 bg-slate-50 rounded border text-center flex flex-col items-center gap-2">
            <h3 className="m-0 text-lg font-black text-slate-900">Eesa&apos;s First Website</h3>
            <p className="m-0 text-xs text-slate-600">Running locally on your own machine.</p>
          </div>

          <div className="text-[11px] text-slate-500 font-semibold text-center">
            Only you can see this right now because it lives on your laptop!
          </div>
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        Every website begins as simple files right on your own computer desk!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — LOCAL WEBSITE
   ========================================================================== */
function LocalWebsiteSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* MY COMPUTER CAN REACH IT */}
        <div className="p-6 bg-emerald-50 border-3 border-emerald-500 rounded-lg flex flex-col items-center gap-3 text-center">
          <Laptop className="w-12 h-12 text-emerald-600" />
          <strong className="text-sm text-emerald-950 uppercase">Eesa&apos;s Laptop</strong>
          <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded font-black text-xs">
            ✓ WORKS HERE!
          </span>
          <p className="text-xs text-emerald-800 m-0 leading-relaxed">
            The website files are stored right on this laptop&apos;s SSD disk.
          </p>
        </div>

        {/* FRIEND'S COMPUTER CANNOT REACH IT */}
        <div className="p-6 bg-red-50 border-3 border-red-400 rounded-lg flex flex-col items-center gap-3 text-center">
          <Laptop className="w-12 h-12 text-red-500" />
          <strong className="text-sm text-red-950 uppercase">Friend&apos;s Computer / Phone</strong>
          <span className="px-3 py-1 bg-red-200 text-red-900 rounded font-black text-xs">
            &times; CANNOT REACH IT!
          </span>
          <p className="text-xs text-red-800 m-0 leading-relaxed">
            Your friend&apos;s computer is in a different house and cannot connect to your personal files.
          </p>
        </div>
      </div>

      {/* QUESTION */}
      <div className="p-4 bg-yellow-300 border-3 border-slate-900 rounded-xl text-center shadow-sm w-full max-w-lg">
        <strong className="text-sm font-black text-slate-950 uppercase block">
          THE BIG QUESTION:
        </strong>
        <span className="text-base font-extrabold text-blue-900">
          How do we put our website on the internet so everyone can see it? &rarr;
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — WHAT IS GIT?
   ========================================================================== */
function WhatIsGitSlide() {
  const [selectedVersion, setSelectedVersion] = useState<1 | 2 | 3>(3);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      {/* TIMELINE OF VERSIONS */}
      <div className="git-timeline-row">
        <button
          type="button"
          className={`git-commit-node cursor-pointer transition-all ${selectedVersion === 1 ? "is-savepoint ring-2 ring-emerald-500 scale-105" : ""}`}
          onClick={() => setSelectedVersion(1)}
        >
          <GitCommit className="w-6 h-6 text-emerald-600" />
          <strong className="text-xs font-mono">Version 1</strong>
          <span className="text-[10px] text-slate-500">First Title</span>
        </button>

        <span className="connect-arrow">&rarr;</span>

        <button
          type="button"
          className={`git-commit-node cursor-pointer transition-all ${selectedVersion === 2 ? "is-savepoint ring-2 ring-emerald-500 scale-105" : ""}`}
          onClick={() => setSelectedVersion(2)}
        >
          <GitCommit className="w-6 h-6 text-emerald-600" />
          <strong className="text-xs font-mono">Version 2</strong>
          <span className="text-[10px] text-slate-500">Added Colors</span>
        </button>

        <span className="connect-arrow">&rarr;</span>

        <button
          type="button"
          className={`git-commit-node cursor-pointer transition-all ${selectedVersion === 3 ? "is-savepoint ring-2 ring-emerald-500 scale-105" : ""}`}
          onClick={() => setSelectedVersion(3)}
        >
          <GitCommit className="w-6 h-6 text-emerald-600" />
          <strong className="text-xs font-mono">Version 3 (Now)</strong>
          <span className="text-[10px] text-slate-500">Added Button</span>
        </button>
      </div>

      {/* INSPECTION OF SELECTED COMMIT */}
      <div className="p-4 bg-white border-3 border-slate-900 rounded-lg w-full max-w-md text-center shadow-sm">
        <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">
          GIT SAVE POINT
        </span>
        <div className="text-sm font-black text-slate-900 mt-1">
          {selectedVersion === 1 && "Save Point 1: Created initial index.html file."}
          {selectedVersion === 2 && "Save Point 2: Styled with blue theme in style.css."}
          {selectedVersion === 3 && "Save Point 3: Added interactive click button in script.js."}
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800">
        Git is like a video game time machine! Whenever you make progress, Git creates a &ldquo;Save Point&rdquo; so you can never lose your work.
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — WHAT IS GITHUB?
   ========================================================================== */
function WhatIsGitHubSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* GIT (LOCAL) */}
        <div className="p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col items-center gap-3 text-center">
          <GitBranch className="w-10 h-10 text-orange-600" />
          <strong className="text-base uppercase text-slate-900">GIT (Tool)</strong>
          <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
            Runs on your computer
          </span>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            Git is the tool that records save points and tracks code changes on your laptop.
          </p>
        </div>

        {/* GITHUB (ONLINE) */}
        <div className="p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col items-center gap-3 text-center">
          <Cloud className="w-10 h-10 text-blue-600" />
          <strong className="text-base uppercase text-slate-900">GITHUB (Website)</strong>
          <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
            Lives in the cloud
          </span>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            GitHub is a safe online place where you store, backup, and share your Git code repositories.
          </p>
        </div>
      </div>

      {/* REPOSITORY CARD PREVIEW */}
      <div className="p-4 bg-slate-900 text-white border-3 border-slate-900 rounded-lg w-full max-w-md font-mono text-xs flex flex-col gap-2">
        <div className="flex items-center gap-2 border-b border-slate-700 pb-2">
          <Folder className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-yellow-300">eesa / eesa-first-website</span>
        </div>
        <span className="text-slate-400">Files stored online in GitHub cloud:</span>
        <span className="text-emerald-400">&bull; index.html</span>
        <span className="text-blue-400">&bull; style.css</span>
        <span className="text-yellow-400">&bull; script.js</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — LOCAL → GITHUB
   ========================================================================== */
function LocalToGitHubSlide() {
  const [pushed, setPushed] = useState(false);
  const [pushing, setPushing] = useState(false);

  function handlePush() {
    setPushing(true);
    setTimeout(() => {
      setPushing(false);
      setPushed(true);
    }, 1200);
  }

  function handleReset() {
    setPushed(false);
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div className="flex items-center justify-around w-full gap-4 flex-wrap">
        {/* LOCAL COMPUTER */}
        <div className="p-5 bg-white border-3 border-slate-900 rounded-lg flex flex-col items-center gap-2 text-center">
          <Laptop className="w-10 h-10 text-blue-600" />
          <strong className="text-xs uppercase">Eesa&apos;s Computer</strong>
          <span className="text-[11px] text-slate-500 font-mono">my-website/</span>
        </div>

        {/* PUSH ACTION */}
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            className="demo-button"
            onClick={handlePush}
            disabled={pushing || pushed}
          >
            <Upload /> {pushing ? "PUSHING..." : "PUSH CODE &rarr;"}
          </button>
          <span className="text-[10px] font-black uppercase text-slate-500">
            Sends files to cloud repo
          </span>
        </div>

        {/* GITHUB REPOSITORY */}
        <div className="p-5 bg-slate-900 text-white border-3 border-slate-900 rounded-lg flex flex-col items-center gap-2 text-center">
          <Cloud className="w-10 h-10 text-yellow-400" />
          <strong className="text-xs uppercase">GitHub Cloud</strong>
          <span className="text-[11px] text-slate-400 font-mono">eesa-first-website</span>
          {pushed && (
            <span className="text-[10px] font-bold text-emerald-400 animate-fadeIn">
              ✓ Received 3 files!
            </span>
          )}
        </div>
      </div>

      {pushed && (
        <div className="p-3 bg-emerald-50 border-2 border-emerald-400 rounded-lg text-center text-xs font-bold text-emerald-900 flex items-center justify-between w-full max-w-lg">
          <span>&check; Code pushed successfully to your GitHub repository!</span>
          <button type="button" className="explorer-btn" onClick={handleReset}>
            <RotateCcw /> Reset
          </button>
        </div>
      )}

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800">
        &ldquo;Pushing&rdquo; code takes the changes on your computer and sends them up to your online GitHub repository.
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — WHAT IS HOSTING?
   ========================================================================== */
function WhatIsHostingSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div className="flex items-center justify-between w-full gap-2 flex-wrap">
        {/* REPOSITORY */}
        <div className="connect-step-node">
          <Cloud className="w-8 h-8 text-blue-600" />
          <strong>GITHUB REPO</strong>
          <small className="text-[10px] text-slate-500">Stores code files</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        {/* HOSTING SERVER */}
        <div className="connect-step-node is-active">
          <Server className="w-8 h-8 text-yellow-500" />
          <strong>HOSTING SERVER</strong>
          <small className="text-[10px] text-slate-700 font-bold">Stays online 24/7</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        {/* INTERNET */}
        <div className="connect-step-node">
          <Globe className="w-8 h-8 text-emerald-600" />
          <strong>INTERNET</strong>
          <small className="text-[10px] text-slate-500">Worldwide network</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        {/* VISITORS */}
        <div className="connect-step-node">
          <Users className="w-8 h-8 text-purple-600" />
          <strong>VISITORS</strong>
          <small className="text-[10px] text-slate-500">Friends &amp; family</small>
        </div>
      </div>

      <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-xs font-semibold text-slate-800 text-center w-full max-w-xl">
        A hosting server is a computer in a data center that never turns off! It serves your website whenever anyone types your link.
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — DEPLOYING
   ========================================================================== */
function DeployingSlide() {
  const [deployStep, setDeployStep] = useState(0);
  const [deploying, setDeploying] = useState(false);

  useEffect(() => {
    if (!deploying) return;
    const timer = setInterval(() => {
      setDeployStep((curr) => {
        if (curr >= 4) {
          setDeploying(false);
          return 4;
        }
        return curr + 1;
      });
    }, 900);
    return () => clearInterval(timer);
  }, [deploying]);

  function startDeploy() {
    setDeployStep(1);
    setDeploying(true);
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <div className="deploy-build-box">
        <div className="text-yellow-400 font-bold border-b border-slate-700 pb-2 flex justify-between">
          <span>Hosting Service (e.g. Vercel)</span>
          <span>Deploy Log</span>
        </div>

        <div className={`deploy-step-line${deployStep >= 1 ? " is-done" : ""}`}>
          <span>{deployStep >= 1 ? "✓" : "○"} Step 1: Connecting to GitHub repository...</span>
        </div>

        <div className={`deploy-step-line${deployStep >= 2 ? " is-done" : deployStep === 1 ? " is-running" : ""}`}>
          <span>{deployStep >= 2 ? "✓" : "○"} Step 2: Reading HTML, CSS, and JavaScript files...</span>
        </div>

        <div className={`deploy-step-line${deployStep >= 3 ? " is-done" : deployStep === 2 ? " is-running" : ""}`}>
          <span>{deployStep >= 3 ? "✓" : "○"} Step 3: Building production bundle...</span>
        </div>

        <div className={`deploy-step-line${deployStep >= 4 ? " is-done" : deployStep === 3 ? " is-running" : ""}`}>
          <span>{deployStep >= 4 ? "✓" : "○"} Step 4: LIVE ON THE INTERNET!</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="demo-button"
          onClick={startDeploy}
          disabled={deploying}
        >
          <Rocket /> {deployStep === 4 ? "REPLAY DEPLOYMENT" : "DEPLOY WEBSITE"}
        </button>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Deploying takes your code from GitHub and publishes it to a live web address!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — YOUR LIVE WEBSITE
   ========================================================================== */
function LiveWebsiteSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      {/* DEMO LIVE URL BAR */}
      <div className="p-4 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-600" />
          <span className="font-mono text-sm font-bold text-blue-700">
            https://eesa-first-site.example
          </span>
        </div>
        <span className="text-[10px] font-black uppercase bg-yellow-200 text-slate-900 px-2 py-0.5 rounded">
          DEMO ADDRESS
        </span>
      </div>

      {/* ALL DEVICES OPENING IT */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col items-center gap-2">
          <Laptop className="w-8 h-8 text-blue-600" />
          <strong className="text-xs">Eesa&apos;s Computer</strong>
          <span className="text-[10px] text-emerald-700 font-bold">Opens page ✓</span>
        </div>

        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col items-center gap-2">
          <Laptop className="w-8 h-8 text-emerald-600" />
          <strong className="text-xs">Friend&apos;s Computer</strong>
          <span className="text-[10px] text-emerald-700 font-bold">Opens page ✓</span>
        </div>

        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col items-center gap-2">
          <Smartphone className="w-8 h-8 text-purple-600" />
          <strong className="text-xs">Phone</strong>
          <span className="text-[10px] text-emerald-700 font-bold">Opens page ✓</span>
        </div>

        <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-center flex flex-col items-center gap-2">
          <Tablet className="w-8 h-8 text-amber-500" />
          <strong className="text-xs">Tablet</strong>
          <span className="text-[10px] text-emerald-700 font-bold">Opens page ✓</span>
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        Once your site is deployed, anyone with your link can visit it from anywhere in the world!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — UPDATING A WEBSITE
   ========================================================================== */
function UpdatingWebsiteSlide() {
  const [updateStep, setUpdateStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setUpdateStep((curr) => {
        if (curr >= 6) {
          setPlaying(false);
          return 6;
        }
        return curr + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [playing]);

  function playUpdate() {
    setUpdateStep(1);
    setPlaying(true);
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      {/* 6-STEP UPDATE CYCLE */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 w-full">
        {[
          { step: 1, label: "1. Edit Code", icon: <Code2 className="w-6 h-6 text-blue-600" /> },
          { step: 2, label: "2. Save File", icon: <HardDrive className="w-6 h-6 text-emerald-600" /> },
          { step: 3, label: "3. Git Commit", icon: <GitCommit className="w-6 h-6 text-orange-500" /> },
          { step: 4, label: "4. Push", icon: <Upload className="w-6 h-6 text-purple-600" /> },
          { step: 5, label: "5. Deploy", icon: <Rocket className="w-6 h-6 text-yellow-500" /> },
          { step: 6, label: "6. Site Updates!", icon: <Sparkles className="w-6 h-6 text-emerald-600" /> },
        ].map((item) => (
          <div
            key={item.step}
            className={`p-3 bg-white border-2 border-slate-900 rounded text-center flex flex-col items-center gap-1 transition-all ${updateStep >= item.step ? "bg-yellow-200 border-blue-600 shadow-sm" : ""}`}
          >
            {item.icon}
            <strong className="text-[11px] font-black">{item.label}</strong>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="demo-button"
        onClick={playUpdate}
        disabled={playing}
      >
        <Play /> PLAY UPDATE CYCLE
      </button>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800">
        Whenever you want to add a new game, color, or photo to your website, you simply repeat these steps!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — THE FULL JOURNEY
   ========================================================================== */
function TheFullJourneySlide() {
  const [journeyStep, setJourneyStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setJourneyStep((curr) => {
        if (curr >= 8) {
          setPlaying(false);
          return 8;
        }
        return curr + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [playing]);

  function playJourney() {
    setJourneyStep(1);
    setPlaying(true);
  }

  function pauseJourney() {
    setPlaying(false);
  }

  function resetJourney() {
    setPlaying(false);
    setJourneyStep(0);
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      {/* FULL JOURNEY MAP */}
      <div className="full-journey-map">
        <div className={`journey-node-card${journeyStep >= 1 ? " is-highlighted" : ""}`}>
          <Sparkles className="text-yellow-500" />
          <span>1. IDEA</span>
          <small className="text-[10px] text-slate-500">Your Imagination</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 2 ? " is-highlighted" : ""}`}>
          <Code2 className="text-blue-600" />
          <span>2. CODE</span>
          <small className="text-[10px] text-slate-500">HTML + CSS + JS</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 3 ? " is-highlighted" : ""}`}>
          <Laptop className="text-slate-700" />
          <span>3. FILES</span>
          <small className="text-[10px] text-slate-500">On Computer</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 4 ? " is-highlighted" : ""}`}>
          <GitBranch className="text-orange-500" />
          <span>4. GIT</span>
          <small className="text-[10px] text-slate-500">Save Points</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 5 ? " is-highlighted" : ""}`}>
          <Cloud className="text-blue-500" />
          <span>5. GITHUB</span>
          <small className="text-[10px] text-slate-500">Online Repo</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 6 ? " is-highlighted" : ""}`}>
          <Server className="text-yellow-600" />
          <span>6. HOSTING</span>
          <small className="text-[10px] text-slate-500">24/7 Server</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 7 ? " is-highlighted" : ""}`}>
          <Globe className="text-emerald-600" />
          <span>7. INTERNET</span>
          <small className="text-[10px] text-slate-500">Live Website</small>
        </div>

        <div className={`journey-node-card${journeyStep >= 8 ? " is-highlighted" : ""}`}>
          <Users className="text-purple-600" />
          <span>8. VISITORS</span>
          <small className="text-[10px] text-slate-500">World Explores!</small>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className="demo-button"
          onClick={playJourney}
          disabled={playing}
        >
          <Play /> PLAY FULL JOURNEY
        </button>
        {playing && (
          <button type="button" className="deck-controls button" onClick={pauseJourney}>
            <Pause /> Pause
          </button>
        )}
        <button type="button" className="explorer-btn" onClick={resetJourney}>
          <RotateCcw /> Reset
        </button>
      </div>

      {/* AI + CODING HELPER PANEL */}
      <div className="ai-coder-panel">
        <Bot className="w-8 h-8 text-blue-600 flex-shrink-0" />
        <div className="text-xs text-blue-950 font-medium">
          <strong>AI Can Help You Code:</strong> Ask AI for code ideas or error explanations, but always read, understand, and test what it gives you!
        </div>
      </div>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO TOPICS
        </Link>
      </div>
    </div>
  );
}
