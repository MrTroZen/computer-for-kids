"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Bug,
  Check,
  Code2,
  FileCode,
  FileImage,
  Folder,
  Globe,
  Home,
  Laptop,
  Palette,
  Play,
  RefreshCw,
  RotateCcw,
  Save,
  Sparkles,
  Terminal,
  User,
  Wrench,
  Zap,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

export function CodingPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "What is Code?",
      description: "Code is a set of instructions we give a computer.",
      visual: <WhatIsCodeSlide />,
    },
    {
      title: "Code → Result",
      description: "Change the code and you change what the computer does.",
      visual: <CodeToResultSlide />,
    },
    {
      title: "HTML",
      description: "HTML gives a webpage its structure and content.",
      visual: <HtmlStructureSlide />,
    },
    {
      title: "CSS",
      description: "CSS controls how a webpage looks.",
      visual: <CssStylingSlide />,
    },
    {
      title: "JavaScript",
      description: "JavaScript can make a webpage respond and do things.",
      visual: <JavaScriptBehaviourSlide />,
    },
    {
      title: "All Three Together",
      description: "HTML builds structure. CSS adds style. JavaScript brings behaviour.",
      visual: <AllThreeTogetherSlide />,
    },
    {
      title: "Website Files",
      description: "A website can be made from files on your computer.",
      visual: <WebsiteFilesSlide />,
    },
    {
      title: "Edit → Save → Refresh",
      description: "Developers change code and check the result.",
      visual: <EditSaveRefreshSlide />,
    },
    {
      title: "Bugs",
      description: "A bug is a problem that makes code behave incorrectly.",
      visual: <BugsSlide />,
    },
    {
      title: "Build Something",
      description: "Now you know what the main parts of a website do.",
      visual: <BuildSomethingSlide />,
    },
  ];

  return <SlideDeck topic="Coding" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — WHAT IS CODE?
   ========================================================================== */
function WhatIsCodeSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
      <div className="flex items-center justify-between w-full gap-2 flex-wrap">
        {/* HUMAN */}
        <div className="connect-step-node">
          <User className="w-8 h-8 text-blue-600" />
          <strong>HUMAN</strong>
          <small className="text-[10px] text-slate-500">You with an idea</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        {/* INSTRUCTIONS */}
        <div className="connect-step-node is-active">
          <Terminal className="w-8 h-8 text-slate-800" />
          <strong>INSTRUCTIONS</strong>
          <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
            SHOW &ldquo;Hello Eesa&rdquo;
          </span>
        </div>

        <span className="connect-arrow">&rarr;</span>

        {/* COMPUTER */}
        <div className="connect-step-node">
          <Laptop className="w-8 h-8 text-blue-600" />
          <strong>COMPUTER</strong>
          <small className="text-[10px] text-slate-500">Follows exact steps</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        {/* RESULT */}
        <div className="connect-step-node">
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <strong>RESULT</strong>
          <span className="font-black text-sm text-slate-900">HELLO EESA</span>
        </div>
      </div>

      <div className="p-4 bg-white border-2 border-slate-900 rounded-lg text-xs font-semibold text-slate-800 text-center w-full max-w-xl">
        Computers don&apos;t think on their own &mdash; they follow the instructions we write. Those instructions are called code!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — CODE → RESULT
   ========================================================================== */
function CodeToResultSlide() {
  const [headingText, setHeadingText] = useState("Hello Eesa!");

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="code-split-stage">
        {/* CODE EDITOR */}
        <div className="code-editor-box">
          <div className="code-editor-topbar">
            <span>index.html &mdash; Code Editor</span>
            <span className="text-yellow-400">HTML</span>
          </div>
          <div className="code-editor-content">
            <span className="text-slate-500">&lt;!-- Change the text below --&gt;</span>
            <br />
            <span className="text-blue-400">&lt;h1&gt;</span>
            <span className="text-yellow-300 font-bold">{headingText}</span>
            <span className="text-blue-400">&lt;/h1&gt;</span>
          </div>
          <div className="p-3 bg-slate-900 border-t border-slate-700 flex gap-2">
            <button
              type="button"
              className="explorer-btn is-accent"
              onClick={() => setHeadingText("Welcome to Eesa Byte!")}
            >
              <Code2 className="w-3.5 h-3.5" /> Set: &ldquo;Welcome to Eesa Byte!&rdquo;
            </button>
            <button
              type="button"
              className="explorer-btn text-white bg-slate-800"
              onClick={() => setHeadingText("Hello Eesa!")}
            >
              Reset
            </button>
          </div>
        </div>

        {/* RESULT BROWSER */}
        <div className="code-rendered-box">
          <div className="code-rendered-topbar">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Browser Result (Preview)</span>
          </div>
          <div className="code-rendered-body">
            <h1 className="text-2xl font-black text-slate-900 m-0 animate-fadeIn">
              {headingText}
            </h1>
          </div>
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        Change the code on the left, and the computer instantly updates the result on the right!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — HTML
   ========================================================================== */
function HtmlStructureSlide() {
  const [activeTag, setActiveTag] = useState<"h1" | "p" | "button">("h1");

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="code-split-stage">
        {/* HTML CODE WITH CLICKABLE TAGS */}
        <div className="code-editor-box">
          <div className="code-editor-topbar">
            <span>Structure &amp; Content</span>
            <span className="text-yellow-400">Click a tag below:</span>
          </div>
          <div className="code-editor-content flex flex-col gap-2">
            <button
              type="button"
              className={`code-tag-line${activeTag === "h1" ? " is-active" : ""}`}
              onClick={() => setActiveTag("h1")}
            >
              <span>
                <span className="text-blue-400">&lt;h1&gt;</span>
                <span className="text-white font-bold">Eesa Byte</span>
                <span className="text-blue-400">&lt;/h1&gt;</span>
              </span>
              <span className="text-xs text-yellow-400">&larr; Heading Tag</span>
            </button>

            <button
              type="button"
              className={`code-tag-line${activeTag === "p" ? " is-active" : ""}`}
              onClick={() => setActiveTag("p")}
            >
              <span>
                <span className="text-blue-400">&lt;p&gt;</span>
                <span className="text-white">My first website</span>
                <span className="text-blue-400">&lt;/p&gt;</span>
              </span>
              <span className="text-xs text-yellow-400">&larr; Paragraph Tag</span>
            </button>

            <button
              type="button"
              className={`code-tag-line${activeTag === "button" ? " is-active" : ""}`}
              onClick={() => setActiveTag("button")}
            >
              <span>
                <span className="text-blue-400">&lt;button&gt;</span>
                <span className="text-white">Click Me</span>
                <span className="text-blue-400">&lt;/button&gt;</span>
              </span>
              <span className="text-xs text-yellow-400">&larr; Button Tag</span>
            </button>
          </div>
        </div>

        {/* RENDERED BROWSER PAGE WITH HIGHLIGHT */}
        <div className="code-rendered-box">
          <div className="code-rendered-topbar">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Rendered Webpage</span>
          </div>
          <div className="code-rendered-body flex flex-col gap-3">
            <div className={`rendered-highlight-item${activeTag === "h1" ? " is-target" : ""}`}>
              <h1 className="text-2xl font-black text-slate-900 m-0">Eesa Byte</h1>
            </div>

            <div className={`rendered-highlight-item${activeTag === "p" ? " is-target" : ""}`}>
              <p className="text-sm text-slate-600 m-0">My first website</p>
            </div>

            <div className={`rendered-highlight-item${activeTag === "button" ? " is-target" : ""}`}>
              <button type="button" className="px-3 py-1 bg-slate-200 border border-slate-400 rounded text-xs font-bold">
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 p-3 bg-white border-2 border-slate-900 rounded text-xs font-bold shadow-sm">
        <span className="px-2 py-0.5 bg-blue-600 text-white rounded">HTML</span>
        <span>=</span>
        <span className="text-blue-700">STRUCTURE &amp; CONTENT</span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-600">HTML defines what text, headings, and buttons exist on the page.</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — CSS
   ========================================================================== */
function CssStylingSlide() {
  const [cssOn, setCssOn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className={`demo-button${!cssOn ? "" : " opacity-50"}`}
          onClick={() => setCssOn(false)}
        >
          WITHOUT CSS (Plain HTML)
        </button>
        <button
          type="button"
          className={`demo-button${cssOn ? "" : " opacity-50"}`}
          onClick={() => setCssOn(true)}
        >
          <Palette /> ADD CSS (Style On)
        </button>
      </div>

      <div className="code-rendered-box w-full max-w-xl">
        <div className="code-rendered-topbar flex justify-between">
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Webpage Preview</span>
          </span>
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${cssOn ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"}`}>
            {cssOn ? "CSS ON (Styled)" : "CSS OFF (Default)"}
          </span>
        </div>

        <div
          className={`p-8 transition-all duration-300 flex flex-col items-center gap-4 text-center ${cssOn ? "bg-blue-50/70 border-t-4 border-blue-600 shadow-inner" : "bg-white"}`}
        >
          <h1
            className={`m-0 transition-all ${cssOn ? "text-3xl font-black text-blue-600 tracking-wide uppercase" : "text-xl font-normal text-black font-serif underline"}`}
          >
            Eesa Byte
          </h1>

          <p className={`m-0 transition-all ${cssOn ? "text-sm text-slate-700 font-semibold" : "text-xs text-black font-serif"}`}>
            My first website
          </p>

          <button
            type="button"
            className={`transition-all cursor-pointer ${cssOn ? "px-6 py-2.5 bg-blue-600 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-md border-2 border-slate-900 hover:bg-red-500" : "px-3 py-0.5 bg-slate-100 border border-black text-xs font-serif text-black"}`}
          >
            Click Me
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-md text-center text-xs font-bold">
        <div className="p-2.5 bg-white border-2 border-slate-900 rounded">
          <strong className="text-blue-600 block">HTML</strong>
          <span className="text-slate-600">WHAT IS THERE</span>
        </div>
        <div className="p-2.5 bg-white border-2 border-slate-900 rounded">
          <strong className="text-amber-500 block">CSS</strong>
          <span className="text-slate-600">HOW IT LOOKS</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — JAVASCRIPT
   ========================================================================== */
function JavaScriptBehaviourSlide() {
  const [jsOn, setJsOn] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleButtonClick() {
    if (jsOn) {
      setClicked(true);
    }
  }

  function handleReset() {
    setClicked(false);
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className={`demo-button${!jsOn ? "" : " opacity-50"}`}
          onClick={() => {
            setJsOn(false);
            setClicked(false);
          }}
        >
          JAVASCRIPT OFF
        </button>
        <button
          type="button"
          className={`demo-button${jsOn ? "" : " opacity-50"}`}
          onClick={() => setJsOn(true)}
        >
          <Zap /> ADD JAVASCRIPT (Interactive)
        </button>
      </div>

      <div className="code-rendered-box w-full max-w-xl">
        <div className="code-rendered-topbar flex justify-between">
          <span>Webpage with Interactive Button</span>
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${jsOn ? "bg-amber-100 text-amber-800" : "bg-slate-200 text-slate-700"}`}>
            {jsOn ? "JAVASCRIPT ENABLED" : "NO JAVASCRIPT"}
          </span>
        </div>

        <div className="p-8 bg-slate-50 flex flex-col items-center gap-4 text-center">
          <button
            type="button"
            className="px-6 py-2.5 bg-blue-600 text-white font-black text-sm uppercase rounded-lg shadow border-2 border-slate-900 cursor-pointer active:scale-95"
            onClick={handleButtonClick}
          >
            CLICK ME
          </button>

          <div className="min-h-[50px] flex items-center justify-center">
            {clicked && jsOn ? (
              <div className="px-4 py-2 bg-yellow-300 border-2 border-slate-900 rounded font-black text-base text-slate-900 animate-fadeIn flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>HELLO EESA! 🎉</span>
              </div>
            ) : (
              <span className="text-xs text-slate-400 italic">
                {jsOn ? "Click the button above!" : "(Nothing happens when clicked without JavaScript)"}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 w-full max-w-lg text-center text-xs font-bold">
        <div className="p-2 bg-white border-2 border-slate-900 rounded">
          <span className="text-blue-600 block">HTML</span>
          <span>STRUCTURE</span>
        </div>
        <div className="p-2 bg-white border-2 border-slate-900 rounded">
          <span className="text-amber-500 block">CSS</span>
          <span>STYLE</span>
        </div>
        <div className="p-2 bg-yellow-200 border-2 border-slate-900 rounded">
          <span className="text-slate-900 block font-black">JAVASCRIPT</span>
          <span>BEHAVIOUR</span>
        </div>
      </div>

      {clicked && (
        <button type="button" className="explorer-btn" onClick={handleReset}>
          <RotateCcw /> Replay Click
        </button>
      )}
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — ALL THREE TOGETHER
   ========================================================================== */
function AllThreeTogetherSlide() {
  const [htmlOn, setHtmlOn] = useState(true);
  const [cssOn, setCssOn] = useState(false);
  const [jsOn, setJsOn] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  function handleAction() {
    if (jsOn && htmlOn) {
      setMessageVisible(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* 3 SWITCHES */}
      <div className="trio-switches-shelf">
        <button
          type="button"
          className={`trio-switch-btn${htmlOn ? " is-active" : ""}`}
          onClick={() => setHtmlOn((h) => !h)}
        >
          HTML: {htmlOn ? "ON" : "OFF"}
        </button>
        <button
          type="button"
          className={`trio-switch-btn${cssOn ? " is-active" : ""}`}
          onClick={() => setCssOn((c) => !c)}
        >
          CSS: {cssOn ? "ON" : "OFF"}
        </button>
        <button
          type="button"
          className={`trio-switch-btn${jsOn ? " is-active" : ""}`}
          onClick={() => {
            setJsOn((j) => !j);
            setMessageVisible(false);
          }}
        >
          JAVASCRIPT: {jsOn ? "ON" : "OFF"}
        </button>
      </div>

      {/* RENDERED CANVAS */}
      <div className="code-rendered-box w-full max-w-xl">
        <div className="code-rendered-topbar flex justify-between">
          <span>Webpage Result</span>
          <span className="font-mono text-xs text-slate-500">
            HTML ({htmlOn ? "✓" : "✗"}) &bull; CSS ({cssOn ? "✓" : "✗"}) &bull; JS ({jsOn ? "✓" : "✗"})
          </span>
        </div>

        <div
          className={`p-8 min-h-[220px] flex flex-col items-center justify-center gap-3 text-center transition-all ${cssOn ? "bg-gradient-to-b from-blue-50 to-white" : "bg-white"}`}
        >
          {!htmlOn ? (
            <span className="text-xs text-slate-400 italic">
              (HTML is turned OFF &mdash; there is no structure or content on screen!)
            </span>
          ) : (
            <>
              <h1 className={`m-0 transition-all ${cssOn ? "text-2xl font-black text-blue-600 uppercase" : "text-xl font-normal text-black font-serif"}`}>
                Rocket Launch
              </h1>
              <p className={`m-0 transition-all ${cssOn ? "text-xs text-slate-600 font-bold" : "text-xs text-black font-serif"}`}>
                Counting down to launch.
              </p>
              <button
                type="button"
                className={`transition-all cursor-pointer ${cssOn ? "px-5 py-2 bg-red-500 text-white font-black text-xs uppercase rounded-lg shadow-sm border-2 border-slate-900 hover:bg-red-600" : "px-3 py-1 bg-slate-100 border border-black text-xs"}`}
                onClick={handleAction}
              >
                LAUNCH ROCKET 🚀
              </button>

              {messageVisible && (
                <div className="p-2 bg-emerald-100 border border-emerald-500 rounded text-xs font-bold text-emerald-900 animate-fadeIn">
                  🚀 BLAST OFF! Powered by JavaScript behavior!
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 w-full max-w-lg text-center text-xs font-bold">
        <div className="p-2 bg-white border-2 border-slate-900 rounded">
          <strong className="text-blue-600 block">HTML</strong>
          <span>Structure</span>
        </div>
        <div className="p-2 bg-white border-2 border-slate-900 rounded">
          <strong className="text-amber-500 block">CSS</strong>
          <span>Style</span>
        </div>
        <div className="p-2 bg-white border-2 border-slate-900 rounded">
          <strong className="text-emerald-600 block">JavaScript</strong>
          <span>Behaviour</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — WEBSITE FILES
   ========================================================================== */
type WebsiteFileId = "html" | "css" | "js" | "images";

function WebsiteFilesSlide() {
  const [selectedFile, setSelectedFile] = useState<WebsiteFileId>("html");

  return (
    <div className="project-files-stage">
      {/* FILE LIST */}
      <div className="project-file-list">
        <div className="flex items-center gap-1.5 font-bold text-xs text-slate-500 border-b border-slate-200 pb-2">
          <Folder className="w-4 h-4 text-amber-500" /> my-website/
        </div>

        <button
          type="button"
          className={`project-file-btn${selectedFile === "html" ? " is-active" : ""}`}
          onClick={() => setSelectedFile("html")}
        >
          <FileCode className="w-4 h-4 text-orange-500" />
          <span>index.html</span>
        </button>

        <button
          type="button"
          className={`project-file-btn${selectedFile === "css" ? " is-active" : ""}`}
          onClick={() => setSelectedFile("css")}
        >
          <Palette className="w-4 h-4 text-blue-500" />
          <span>style.css</span>
        </button>

        <button
          type="button"
          className={`project-file-btn${selectedFile === "js" ? " is-active" : ""}`}
          onClick={() => setSelectedFile("js")}
        >
          <Zap className="w-4 h-4 text-yellow-500" />
          <span>script.js</span>
        </button>

        <button
          type="button"
          className={`project-file-btn${selectedFile === "images" ? " is-active" : ""}`}
          onClick={() => setSelectedFile("images")}
        >
          <FileImage className="w-4 h-4 text-purple-500" />
          <span>images/</span>
        </button>
      </div>

      {/* INSPECTION DETAILS */}
      <div className="p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col justify-center gap-3">
        {selectedFile === "html" && (
          <div>
            <strong className="text-base text-blue-700 block uppercase">index.html</strong>
            <span className="text-xs font-bold text-slate-500 block mb-2">Webpage Structure &amp; Content</span>
            <p className="text-xs text-slate-700 m-0 leading-relaxed font-mono bg-slate-50 p-3 rounded border border-slate-200">
              &lt;h1&gt;Welcome&lt;/h1&gt;<br />
              &lt;p&gt;This file holds all your words, titles, and buttons.&lt;/p&gt;
            </p>
          </div>
        )}

        {selectedFile === "css" && (
          <div>
            <strong className="text-base text-amber-600 block uppercase">style.css</strong>
            <span className="text-xs font-bold text-slate-500 block mb-2">Appearance, Colors &amp; Layout</span>
            <p className="text-xs text-slate-700 m-0 leading-relaxed font-mono bg-slate-50 p-3 rounded border border-slate-200">
              h1 &#123; color: blue; font-size: 24px; &#125;<br />
              button &#123; background: gold; border-radius: 8px; &#125;
            </p>
          </div>
        )}

        {selectedFile === "js" && (
          <div>
            <strong className="text-base text-yellow-600 block uppercase">script.js</strong>
            <span className="text-xs font-bold text-slate-500 block mb-2">Behaviour &amp; Interactivity</span>
            <p className="text-xs text-slate-700 m-0 leading-relaxed font-mono bg-slate-50 p-3 rounded border border-slate-200">
              button.onclick = function() &#123;<br />
              &nbsp;&nbsp;alert(&ldquo;Hello Eesa!&rdquo;);<br />
              &#125;;
            </p>
          </div>
        )}

        {selectedFile === "images" && (
          <div>
            <strong className="text-base text-purple-600 block uppercase">images/ Folder</strong>
            <span className="text-xs font-bold text-slate-500 block mb-2">Media &amp; Graphic Assets</span>
            <p className="text-xs text-slate-700 m-0 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
              Contains pictures like logo.png, hero-avatar.jpg, and icon.svg that display on your website!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — EDIT → SAVE → REFRESH
   ========================================================================== */
function EditSaveRefreshSlide() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      {/* 4 STEPS WORKFLOW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        <div className={`online-pipeline-card${step >= 1 ? " is-active" : ""}`}>
          <Code2 className="w-8 h-8 text-blue-600" />
          <strong className="text-sm uppercase">1. EDIT</strong>
          <span className="font-mono text-[11px] text-slate-700">Change code</span>
        </div>

        <div className={`online-pipeline-card${step >= 2 ? " is-active" : ""}`}>
          <Save className="w-8 h-8 text-emerald-600" />
          <strong className="text-sm uppercase">2. SAVE</strong>
          <span className="font-mono text-[11px] text-slate-700">Ctrl + S</span>
        </div>

        <div className={`online-pipeline-card${step >= 3 ? " is-active" : ""}`}>
          <RefreshCw className="w-8 h-8 text-amber-500" />
          <strong className="text-sm uppercase">3. REFRESH</strong>
          <span className="font-mono text-[11px] text-slate-700">Reload browser</span>
        </div>

        <div className={`online-pipeline-card${step >= 4 ? " is-active" : ""}`}>
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <strong className="text-sm uppercase">4. SEE RESULT</strong>
          <span className="font-mono text-[11px] text-slate-700">Updated page!</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className="demo-button"
          onClick={() => setStep((s) => (s < 4 ? s + 1 : 1))}
        >
          <Play /> {step < 4 ? `NEXT STEP (${step}/4)` : "REPLAY WORKFLOW"}
        </button>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800">
        This is the rhythm of web developers: Edit your code &rarr; Save the file &rarr; Refresh the browser &rarr; Enjoy the result!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — BUGS
   ========================================================================== */
function BugsSlide() {
  const [fixed, setFixed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <div className="w-full p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-4">
        {/* CODE SNIPPET */}
        <div className="p-3 bg-slate-900 text-white font-mono text-sm rounded border-2 border-slate-700 flex justify-between items-center">
          <div>
            {!fixed ? (
              <span>
                <span className="text-red-400">&lt;button&gt;Click Me&lt;/button</span>
                <span className="text-yellow-400 animate-pulse font-black"> [?]</span>
              </span>
            ) : (
              <span>
                <span className="text-emerald-400">&lt;button&gt;Click Me&lt;/button&gt;</span>
                <span className="text-emerald-300 font-bold"> ✓ FIXED!</span>
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400">{fixed ? "Clean syntax" : "Syntax error"}</span>
        </div>

        {/* DIAGNOSTIC */}
        {!fixed ? (
          <div className="p-3 bg-red-100 border border-red-400 rounded text-xs text-red-900 flex items-center gap-2">
            <Bug className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span>A bug occurred! Missing the closing &gt; bracket at the end of the button tag.</span>
          </div>
        ) : (
          <div className="p-3 bg-emerald-100 border border-emerald-400 rounded text-xs text-emerald-900 flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Bug solved! Added the missing &gt; bracket. The button now renders perfectly!</span>
          </div>
        )}

        <button
          type="button"
          className="demo-button w-max self-center"
          onClick={() => setFixed((f) => !f)}
        >
          <Wrench /> {fixed ? "SHOW THE BUG AGAIN" : "FIX THE CODE"}
        </button>
      </div>

      {/* 4-PHASE DEBUGGING MINDSET */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white border-2 border-slate-900 rounded text-xs font-bold shadow-sm flex-wrap">
        <span className="text-red-600 font-black">1. BUG FOUND</span>
        <span>&rarr;</span>
        <span className="text-blue-700">2. FIND PROBLEM</span>
        <span>&rarr;</span>
        <span className="text-amber-600">3. FIX CODE</span>
        <span>&rarr;</span>
        <span className="text-emerald-700">4. TRY AGAIN!</span>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Bugs are completely normal in coding. Every developer in the world fixes bugs every day!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — BUILD SOMETHING
   ========================================================================== */
function BuildSomethingSlide() {
  const [helloCount, setHelloCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
      {/* FINISHED MINI WEBSITE PREVIEW */}
      <div className="code-rendered-box w-full">
        <div className="code-rendered-topbar flex justify-between">
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>Eesa&apos;s First Website</span>
          </span>
          <span className="text-xs text-emerald-700 font-bold">Live Demonstration</span>
        </div>

        <div className="p-6 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center gap-3 text-center">
          <h2 className="text-xl font-black text-blue-900 m-0 uppercase tracking-wide">
            Eesa&apos;s Tech Lab
          </h2>
          <p className="text-xs text-slate-700 m-0 font-medium">
            Hello! I&apos;m Eesa. Welcome to my web laboratory!
          </p>

          <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 flex flex-col gap-1 w-full max-w-xs">
            <span className="text-blue-600 font-bold">Things I Like:</span>
            <span>&bull; Building with computers</span>
            <span>&bull; Playing fun games</span>
            <span>&bull; Learning cool new tech skills</span>
          </div>

          <button
            type="button"
            className="demo-button mt-1"
            onClick={() => setHelloCount((c) => c + 1)}
          >
            SAY HELLO! 👋
          </button>

          {helloCount > 0 && (
            <div className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded animate-fadeIn">
              Hi Eesa! Welcome to coding! (Clicked {helloCount} times)
            </div>
          )}
        </div>
      </div>

      {/* FORMULA */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white border-2 border-slate-900 rounded text-xs font-bold shadow-sm">
        <span className="text-blue-600">HTML (Content)</span>
        <span>+</span>
        <span className="text-amber-500">CSS (Style)</span>
        <span>+</span>
        <span className="text-emerald-600">JavaScript (Action)</span>
        <span>=</span>
        <span className="text-slate-900 font-black">YOUR OWN WEBSITE!</span>
      </div>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
