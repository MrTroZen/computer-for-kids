"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Bookmark,
  Check,
  Compass,
  Download,
  Film,
  Globe,
  GraduationCap,
  History,
  Laptop,
  Pause,
  Play,
  RotateCcw,
  Router,
  Search,
  Server,
  Smartphone,
  Star,
  Tablet,
  Upload,
  Wifi,
  Zap,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";
import { WindowFrame } from "@/components/computer-ui";

export function InternetPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "What is the Internet?",
      description: "The internet connects computers and devices around the world.",
      visual: <WhatIsInternetSlide />,
    },
    {
      title: "Connecting to the Internet",
      description: "Your device needs a connection to reach the internet.",
      visual: <ConnectingSlide />,
    },
    {
      title: "Router & Wi-Fi",
      description: "Wi-Fi connects your device to the router without a cable.",
      visual: <RouterWifiSlide />,
    },
    {
      title: "Browser vs Search Engine",
      description: "A browser is an app to open websites. A search engine helps you find things.",
      visual: <BrowserVsSearchSlide />,
    },
    {
      title: "Websites & URLs",
      description: "A URL is the address of something on the web.",
      visual: <WebsitesUrlsSlide />,
    },
    {
      title: "How a Website Reaches You",
      description: "You ask for a website. A server sends it back.",
      visual: <HowWebsiteReachesSlide />,
    },
    {
      title: "Servers",
      description: "A server is a computer that provides information or services to other computers.",
      visual: <ServersSlide />,
    },
    {
      title: "Download vs Upload",
      description: "Download = internet to device. Upload = device to internet.",
      visual: <DownloadUploadSlide />,
    },
    {
      title: "Tabs, History & Bookmarks",
      description: "Bookmarks save websites you want to visit again.",
      visual: <TabsHistoryBookmarksSlide />,
    },
    {
      title: "Internet Overview",
      description: "Devices, routers, servers, and the web work together across the globe.",
      visual: <InternetOverviewSlide />,
    },
  ];

  return <SlideDeck topic="Internet" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — WHAT IS THE INTERNET?
   ========================================================================== */
function WhatIsInternetSlide() {
  const [animating, setAnimating] = useState(false);

  return (
    <div className="network-stage">
      {/* TOP DEVICES */}
      <div className="network-devices-row">
        <div className={`network-device-card${animating ? " is-active" : ""}`}>
          <Laptop />
          <b>Laptop</b>
        </div>
        <div className={`network-device-card${animating ? " is-active" : ""}`}>
          <Smartphone />
          <b>Phone</b>
        </div>
        <div className={`network-device-card${animating ? " is-active" : ""}`}>
          <Tablet />
          <b>Tablet</b>
        </div>
      </div>

      {/* CENTER INTERNET GLOBE */}
      <div className={`network-core-globe${animating ? " is-animating" : ""}`}>
        <Globe />
        {animating && (
          <div className="absolute inset-0 flex items-center justify-around pointer-events-none">
            <span className="packet-dot packet-animating" />
            <span className="packet-dot packet-animating" style={{ animationDelay: "0.3s" }} />
          </div>
        )}
      </div>
      <div className="text-center font-black tracking-widest text-sm text-blue-300 uppercase">
        GLOBAL INTERNET NETWORK
      </div>

      {/* BOTTOM SERVERS */}
      <div className="network-devices-row">
        <div className={`network-device-card${animating ? " is-active" : ""}`}>
          <Server />
          <b>Web Server</b>
        </div>
        <div className={`network-device-card${animating ? " is-active" : ""}`}>
          <Server />
          <b>Video Server</b>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center mt-2">
        <button
          type="button"
          className="demo-button"
          onClick={() => setAnimating((a) => !a)}
        >
          {animating ? <Pause /> : <Play />}
          {animating ? "PAUSE DATA FLOW" : "PLAY DATA FLOW"}
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — CONNECTING TO THE INTERNET
   ========================================================================== */
function ConnectingSlide() {
  const [step, setStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((curr) => {
        if (curr >= 4) {
          setIsPlaying(false);
          return 4;
        }
        return curr + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  function playFlow() {
    setStep(1);
    setIsPlaying(true);
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="connect-pipeline">
        <div className={`connect-step-node${step >= 1 ? " is-active" : ""}`}>
          <Laptop />
          <strong>1. Eesa&apos;s Computer</strong>
          <small className="text-xs text-slate-500">Device turns on Wi-Fi</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${step >= 2 ? " is-active" : ""}`}>
          <Wifi className="text-blue-600" />
          <strong>2. Wi-Fi Signal</strong>
          <small className="text-xs text-slate-500">Radio waves travel</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${step >= 3 ? " is-active" : ""}`}>
          <Router className="text-amber-500" />
          <strong>3. Home Router</strong>
          <small className="text-xs text-slate-500">Directs traffic</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${step >= 4 ? " is-active" : ""}`}>
          <Globe className="text-emerald-600" />
          <strong>4. Internet</strong>
          <small className="text-xs text-emerald-700 font-bold">ONLINE ✓</small>
        </div>
      </div>

      <div className="flex gap-3">
        <button type="button" className="demo-button" onClick={playFlow} disabled={isPlaying}>
          <Play /> PLAY CONNECTION
        </button>
        <button
          type="button"
          className="explorer-btn"
          onClick={() => {
            setIsPlaying(false);
            setStep(1);
          }}
        >
          <RotateCcw /> Reset
        </button>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Step {step} of 4:{" "}
        {step === 1 && "Eesa's computer prepares to send and receive data."}
        {step === 2 && "The signal travels through the air as Wi-Fi radio waves."}
        {step === 3 && "The router receives the signal and sends it through the broadband wire."}
        {step === 4 && "You are connected to the global internet!"}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — ROUTER & WI-FI
   ========================================================================== */
function RouterWifiSlide() {
  const [mode, setMode] = useState<"wifi" | "ethernet">("wifi");

  return (
    <div className="router-slide-layout">
      {/* MODE TOGGLES */}
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className={`demo-button${mode === "wifi" ? "" : " opacity-60"}`}
          onClick={() => setMode("wifi")}
        >
          <Wifi /> WI-FI (Wireless)
        </button>
        <button
          type="button"
          className={`demo-button${mode === "ethernet" ? "" : " opacity-60"}`}
          onClick={() => setMode("ethernet")}
        >
          <Zap /> ETHERNET (Cabled)
        </button>
      </div>

      <div className="router-visual-box">
        {/* ROUTER CHASSIS */}
        <div className="router-chassis">
          <div className="router-antennas">
            <div className="router-antenna" />
            <div className="router-antenna" />
            <div className="router-antenna" />
          </div>

          <div className="flex flex-col items-center">
            <strong className="text-sm tracking-wider">HOME BROADBAND ROUTER</strong>
            <span className="text-[10px] text-slate-400">CONNECTS HOMES TO THE WEB</span>
          </div>

          <div className="router-lights">
            <div className="router-led">
              <span className="led-dot" />
              <span>PWR</span>
            </div>
            <div className="router-led">
              <span className="led-dot" />
              <span>INTERNET</span>
            </div>
            <div className="router-led">
              <span className="led-dot" />
              <span>2.4G</span>
            </div>
            <div className="router-led">
              <span className="led-dot" />
              <span>5G</span>
            </div>
          </div>
        </div>

        {/* CONNECTION DEMO */}
        {mode === "wifi" ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="wifi-wave-arc flex items-center gap-2 text-blue-600 font-extrabold text-sm">
              <Wifi className="w-8 h-8" />
              <span>WIRELESS RADIO WAVES (No Cable Needed)</span>
            </div>
            <div className="flex justify-around w-full mt-2">
              <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-700">
                <Laptop className="w-8 h-8 text-blue-600" /> Laptop
              </div>
              <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-700">
                <Smartphone className="w-8 h-8 text-blue-600" /> Phone
              </div>
              <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-700">
                <Tablet className="w-8 h-8 text-blue-600" /> Tablet
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="w-full max-w-md">
              <div className="ethernet-cable-visual" />
              <div className="flex justify-between text-[11px] font-bold text-slate-500 mt-1">
                <span>[ Router Port ]</span>
                <span className="text-blue-700 font-black">PHYSICAL CABLE</span>
                <span>[ Computer Port ]</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-300 rounded text-xs font-bold text-blue-900">
              <Laptop className="w-6 h-6 text-blue-700" />
              <span>Direct wired cable: Ultra fast and extremely reliable!</span>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs font-semibold text-center text-slate-600">
        {mode === "wifi"
          ? "Wi-Fi lets you move around freely with your phone or laptop anywhere in the room."
          : "Ethernet cables plug in directly. Great for gaming and downloading big files quickly."}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — BROWSER VS SEARCH ENGINE
   ========================================================================== */
function BrowserVsSearchSlide() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="split-compare-grid">
        {/* LEFT: BROWSER */}
        <div className="compare-column-card is-accent">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-blue-600" />
            <h3 className="m-0 text-base font-black text-slate-900 uppercase">THE BROWSER</h3>
          </div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
            (The App You Open)
          </span>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            A software application installed on your device used to navigate and view websites.
          </p>

          <div className="compare-icon-row mt-2">
            <span className="generic-app-badge">Chrome</span>
            <span className="generic-app-badge">Edge</span>
            <span className="generic-app-badge">Firefox</span>
            <span className="generic-app-badge">Safari</span>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900 font-bold text-center mt-auto">
            🚗 Think of the Browser as your car to travel the web.
          </div>
        </div>

        {/* RIGHT: SEARCH ENGINE */}
        <div className="compare-column-card is-accent-search">
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-amber-500" />
            <h3 className="m-0 text-base font-black text-slate-900 uppercase">SEARCH ENGINE</h3>
          </div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
            (The Website That Helps You Find)
          </span>
          <p className="text-xs text-slate-600 m-0 leading-relaxed">
            A special website that searches through millions of pages to find the answers you need.
          </p>

          <div className="search-mock-bar mt-2">
            <Search className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-xs italic">Search for anything...</span>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-xs text-amber-900 font-bold text-center mt-auto">
            🗺️ Think of the Search Engine as the map or index.
          </div>
        </div>
      </div>

      {/* FLOW SEQUENCE */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white border-2 border-slate-900 rounded-lg text-xs font-bold shadow-sm">
        <span>Open Browser</span>
        <ArrowRight className="w-4 h-4 text-red-500" />
        <span>Open Search Engine</span>
        <ArrowRight className="w-4 h-4 text-red-500" />
        <span>Type What You Need</span>
        <ArrowRight className="w-4 h-4 text-red-500" />
        <span>Visit the Website!</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — WEBSITES & URLs
   ========================================================================== */
function WebsitesUrlsSlide() {
  const [selectedExample, setSelectedExample] = useState<"example" | "eesabyte">("example");
  const [activePart, setActivePart] = useState<string>("domain");
  const [addressInput, setAddressInput] = useState("eesabyte.com");
  const [found, setFound] = useState(true);

  function handleGo() {
    setFound(true);
  }

  return (
    <div className="url-slide-layout">
      {/* TOGGLE EXAMPLES */}
      <div className="flex justify-center gap-2">
        <button
          type="button"
          className={`explorer-btn${selectedExample === "example" ? " is-accent" : ""}`}
          onClick={() => {
            setSelectedExample("example");
            setActivePart("domain");
          }}
        >
          Example 1: https://example.com
        </button>
        <button
          type="button"
          className={`explorer-btn${selectedExample === "eesabyte" ? " is-accent" : ""}`}
          onClick={() => {
            setSelectedExample("eesabyte");
            setActivePart("path");
          }}
        >
          Example 2: eesabyte.com/hardware
        </button>
      </div>

      {/* URL PARTS VISUAL */}
      {selectedExample === "example" ? (
        <div className="url-breakdown-bar">
          <button
            type="button"
            className={`url-part-pill is-protocol${activePart === "protocol" ? " is-active" : ""}`}
            onClick={() => setActivePart("protocol")}
          >
            <span>https://</span>
            <small>Secure Protocol</small>
          </button>
          <button
            type="button"
            className={`url-part-pill is-domain${activePart === "domain" ? " is-active" : ""}`}
            onClick={() => setActivePart("domain")}
          >
            <span>example</span>
            <small>Website Name</small>
          </button>
          <button
            type="button"
            className={`url-part-pill is-tld${activePart === "tld" ? " is-active" : ""}`}
            onClick={() => setActivePart("tld")}
          >
            <span>.com</span>
            <small>Domain Ending</small>
          </button>
        </div>
      ) : (
        <div className="url-breakdown-bar">
          <button
            type="button"
            className={`url-part-pill is-domain${activePart === "domain" ? " is-active" : ""}`}
            onClick={() => setActivePart("domain")}
          >
            <span>eesabyte.com</span>
            <small>The Website</small>
          </button>
          <span className="text-slate-400 font-bold px-1">+</span>
          <button
            type="button"
            className={`url-part-pill is-path${activePart === "path" ? " is-active" : ""}`}
            onClick={() => setActivePart("path")}
          >
            <span>/hardware</span>
            <small>The Specific Page</small>
          </button>
        </div>
      )}

      {/* EXPLANATION BADGE */}
      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-700">
        {activePart === "protocol" && "https:// means the connection is encrypted and safe."}
        {activePart === "domain" && "The domain name is the official name of the website."}
        {activePart === "tld" && ".com, .org, or .net tell you what kind of domain it is."}
        {activePart === "path" && "/hardware points to the exact sub-page inside that website."}
      </div>

      {/* SIMULATED ADDRESS BAR */}
      <WindowFrame title="Web Browser" icon={<Globe className="text-blue-600" />}>
        <div className="explorer-toolbar">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs font-bold text-slate-500">Address:</span>
            <input
              type="text"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              className="flex-1 px-3 py-1 text-xs border border-slate-300 rounded font-mono"
            />
            <button type="button" className="explorer-btn is-accent" onClick={handleGo}>
              GO &rarr;
            </button>
          </div>
        </div>

        <div className="p-6 text-center bg-slate-50">
          {found ? (
            <div className="flex flex-col items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded font-bold text-xs">
                <Check className="w-4 h-4" /> WEBSITE FOUND: {addressInput}
              </span>
              <p className="text-xs text-slate-600 m-0">The browser contacted the server and loaded the page!</p>
            </div>
          ) : (
            <span className="text-xs text-slate-400 italic">Enter an address and click GO</span>
          )}
        </div>
      </WindowFrame>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — HOW A WEBSITE REACHES YOU
   ========================================================================== */
function HowWebsiteReachesSlide() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setStep((curr) => {
        if (curr >= 6) {
          setPlaying(false);
          return 6;
        }
        return curr + 1;
      });
    }, 900);
    return () => clearInterval(timer);
  }, [playing]);

  function play() {
    setStep(1);
    setPlaying(true);
  }

  function pause() {
    setPlaying(false);
  }

  function reset() {
    setPlaying(false);
    setStep(0);
  }

  return (
    <div className="roundtrip-stage">
      {/* 4 STATIONS ROW */}
      <div className="roundtrip-stations-row">
        <div className={`station-node${step === 1 || step === 6 ? " is-active" : ""}`}>
          <Laptop />
          <strong>1. Eesa&apos;s Computer</strong>
          <small className="text-[11px] text-slate-600">
            {step === 1 && "Sends request: 'send page!'"}
            {step === 6 && "Page renders on screen! ✓"}
            {step !== 1 && step !== 6 && "User device"}
          </small>
        </div>

        <div className={`station-node${step === 2 || step === 5 ? " is-active" : ""}`}>
          <Router />
          <strong>2. Home Router</strong>
          <small className="text-[11px] text-slate-600">
            {step === 2 && "Forwarding request &rarr;"}
            {step === 5 && "&larr; Receiving website data"}
            {step !== 2 && step !== 5 && "Directs home traffic"}
          </small>
        </div>

        <div className={`station-node${step === 3 || step === 4 ? " is-active" : ""}`}>
          <Globe />
          <strong>3. The Internet</strong>
          <small className="text-[11px] text-slate-600">
            {step === 3 && "Traveling worldwide &rarr;"}
            {step === 4 && "&larr; Returning data packets"}
            {step !== 3 && step !== 4 && "Global fiber network"}
          </small>
        </div>

        <div className={`station-node${step === 4 ? " is-server-glow" : ""}`}>
          <Server />
          <strong>4. Web Server</strong>
          <small className="text-[11px] text-slate-600">
            {step === 4 ? "Sends website code back!" : "Stores the website files"}
          </small>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-3 mt-2">
        <button type="button" className="demo-button" onClick={play} disabled={playing}>
          <Play /> SHOW ME
        </button>
        {playing && (
          <button type="button" className="deck-controls button" onClick={pause}>
            <Pause /> Pause
          </button>
        )}
        <button type="button" className="explorer-btn" onClick={reset}>
          <RotateCcw /> Replay
        </button>
      </div>

      {/* EXPLANATION */}
      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        {step === 0 && "Click 'SHOW ME' to see how your computer requests a page and gets it back."}
        {step === 1 && "Step 1: You type a web address. Your computer creates a request packet."}
        {step === 2 && "Step 2: The request goes out through your home Wi-Fi router."}
        {step === 3 && "Step 3: The request zips across internet cables around the world in milliseconds."}
        {step === 4 && "Step 4: The remote web server receives your request and packages up the website."}
        {step === 5 && "Step 5: The server sends the files all the way back through the internet."}
        {step === 6 && "Step 6: The webpage appears on your screen! Request completed!"}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — SERVERS
   ========================================================================== */
function ServersSlide() {
  const [serving, setServing] = useState(false);
  const [multiUser, setMultiUser] = useState(false);

  function startServe() {
    setServing(true);
    setTimeout(() => setServing(false), 1600);
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className={`explorer-btn${!multiUser ? " is-accent" : ""}`}
          onClick={() => setMultiUser(false)}
        >
          1-on-1 Request Demo
        </button>
        <button
          type="button"
          className={`explorer-btn${multiUser ? " is-accent" : ""}`}
          onClick={() => setMultiUser(true)}
        >
          One Server &rarr; Many Users
        </button>
      </div>

      {!multiUser ? (
        <div className="flex items-center justify-around w-full max-w-2xl p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm">
          {/* CLIENT */}
          <div className="flex flex-col items-center gap-2">
            <Laptop className="w-12 h-12 text-blue-600" />
            <strong className="text-sm">Eesa&apos;s Laptop</strong>
            <span className="text-xs text-slate-500 font-bold">CLIENT</span>
          </div>

          {/* REQUEST / RESPONSE ARROWS */}
          <div className="flex flex-col items-center gap-2">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold ${serving ? "bg-amber-200 text-amber-900" : "bg-slate-100 text-slate-600"}`}>
              <span>Asks for photo.jpg</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>

            <button type="button" className="demo-button" onClick={startServe} disabled={serving}>
              <Play /> PLAY
            </button>

            <div className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold ${serving ? "bg-emerald-200 text-emerald-900" : "bg-slate-100 text-slate-600"}`}>
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Sends photo.jpg</span>
            </div>
          </div>

          {/* SERVER RACK */}
          <div className="flex flex-col items-center gap-2">
            <div className="server-rack-visual">
              <div className="server-rack-bay">
                <span className="text-[10px] text-slate-400 font-mono">SRV-01</span>
                <span className="bay-blinker" />
              </div>
              <div className="server-rack-bay">
                <span className="text-[10px] text-slate-400 font-mono">STORAGE</span>
                <span className="bay-blinker" style={{ animationDelay: "0.2s" }} />
              </div>
              <div className="server-rack-bay">
                <span className="text-[10px] text-slate-400 font-mono">NET-HUB</span>
                <span className="bay-blinker" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
            <strong className="text-sm">Server Rack</strong>
            <span className="text-xs text-blue-600 font-bold">SERVER</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl p-6 bg-slate-900 text-white border-3 border-slate-900 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
            <Server className="w-10 h-10 text-yellow-400" />
            <div>
              <strong className="text-base uppercase tracking-wider">ONE POWERFUL SERVER</strong>
              <p className="text-xs text-slate-300 m-0">Can serve thousands of people at the exact same moment.</p>
            </div>
          </div>

          <div className="w-full flex justify-around mt-4 pt-4 border-t border-slate-700">
            <div className="flex flex-col items-center gap-1">
              <Laptop className="w-6 h-6 text-blue-400" />
              <span className="text-[11px] font-bold">User 1 (Laptop)</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Smartphone className="w-6 h-6 text-green-400" />
              <span className="text-[11px] font-bold">User 2 (Phone)</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Tablet className="w-6 h-6 text-purple-400" />
              <span className="text-[11px] font-bold">User 3 (Tablet)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — DOWNLOAD VS UPLOAD
   ========================================================================== */
function DownloadUploadSlide() {
  const [downloading, setDownloading] = useState(false);
  const [uploading, setUploading] = useState(false);

  function triggerDownload() {
    setDownloading(true);
    setUploading(false);
    setTimeout(() => setDownloading(false), 1200);
  }

  function triggerUpload() {
    setUploading(true);
    setDownloading(false);
    setTimeout(() => setUploading(false), 1200);
  }

  return (
    <div className="transfer-direction-stage">
      {/* DOWNLOAD COLUMN */}
      <div className="transfer-col-box">
        <div className="flex items-center gap-2">
          <Download className="w-6 h-6 text-blue-600" />
          <h3 className="m-0 text-base font-black uppercase text-slate-900">DOWNLOAD</h3>
        </div>
        <span className="text-xs font-bold text-blue-700">Internet &darr; Computer</span>

        <div className="transfer-track">
          <div className={`flex flex-col items-center gap-1 transition-transform duration-700 ${downloading ? "translate-y-4" : "-translate-y-4"}`}>
            <span className="px-3 py-1 bg-blue-100 border border-blue-400 rounded text-xs font-mono font-bold text-blue-900">
              photo.jpg
            </span>
            <ArrowDown className="w-5 h-5 text-blue-600" />
          </div>
        </div>

        <button type="button" className="demo-button" onClick={triggerDownload} disabled={downloading}>
          <Download /> DOWNLOAD
        </button>

        <p className="text-xs text-slate-600 text-center m-0 leading-relaxed">
          Bringing a picture, song, or game from the web onto your device.
        </p>
      </div>

      {/* UPLOAD COLUMN */}
      <div className="transfer-col-box">
        <div className="flex items-center gap-2">
          <Upload className="w-6 h-6 text-emerald-600" />
          <h3 className="m-0 text-base font-black uppercase text-slate-900">UPLOAD</h3>
        </div>
        <span className="text-xs font-bold text-emerald-700">Computer &uarr; Internet</span>

        <div className="transfer-track">
          <div className={`flex flex-col items-center gap-1 transition-transform duration-700 ${uploading ? "-translate-y-4" : "translate-y-4"}`}>
            <ArrowUp className="w-5 h-5 text-emerald-600" />
            <span className="px-3 py-1 bg-emerald-100 border border-emerald-400 rounded text-xs font-mono font-bold text-emerald-900">
              photo.jpg
            </span>
          </div>
        </div>

        <button type="button" className="demo-button" onClick={triggerUpload} disabled={uploading}>
          <Upload /> UPLOAD
        </button>

        <p className="text-xs text-slate-600 text-center m-0 leading-relaxed">
          Sending your homework, drawing, or video up to a website or server.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — TABS, HISTORY & BOOKMARKS
   ========================================================================== */
type BrowserTab = "video" | "search" | "learning";

function TabsHistoryBookmarksSlide() {
  const [activeTab, setActiveTab] = useState<BrowserTab>("learning");
  const [showHistory, setShowHistory] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="w-full max-w-3xl flex flex-col gap-3">
      <WindowFrame title="Web Browser" icon={<Globe className="text-blue-600" />}>
        {/* TABS HEADER */}
        <div className="browser-tab-bar">
          <button
            type="button"
            className={`browser-tab-item${activeTab === "video" ? " is-active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            <Film className="w-3.5 h-3.5" /> Video Lab
          </button>
          <button
            type="button"
            className={`browser-tab-item${activeTab === "search" ? " is-active" : ""}`}
            onClick={() => setActiveTab("search")}
          >
            <Search className="w-3.5 h-3.5" /> Search Engine
          </button>
          <button
            type="button"
            className={`browser-tab-item${activeTab === "learning" ? " is-active" : ""}`}
            onClick={() => setActiveTab("learning")}
          >
            <GraduationCap className="w-3.5 h-3.5" /> Eesa Byte
          </button>
        </div>

        {/* BOOKMARK & CONTROLS SHELF */}
        <div className="browser-bookmarks-shelf">
          <button
            type="button"
            className={`flex items-center gap-1 px-2 py-1 rounded border text-xs font-bold cursor-pointer ${bookmarked ? "bg-amber-100 text-amber-900 border-amber-400" : "bg-white border-slate-300"}`}
            onClick={() => setBookmarked((b) => !b)}
          >
            <Star className={`w-3.5 h-3.5 ${bookmarked ? "fill-amber-400 text-amber-500" : "text-slate-400"}`} />
            <span>{bookmarked ? "Bookmarked!" : "Bookmark Page"}</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1 px-2 py-1 rounded border border-slate-300 bg-white text-xs font-bold cursor-pointer"
            onClick={() => setShowHistory((h) => !h)}
          >
            <History className="w-3.5 h-3.5 text-slate-500" />
            <span>{showHistory ? "Hide History" : "History"}</span>
          </button>

          <div className="flex-1" />

          {bookmarked && (
            <span className="bookmark-item-btn">
              <Bookmark className="w-3 h-3 text-amber-500" />
              <span>⭐ EESA BYTE</span>
            </span>
          )}
        </div>

        {/* TAB PAGE CONTENT */}
        <div className="p-6 bg-slate-50 min-h-[160px] flex flex-col justify-center items-center text-center">
          {activeTab === "video" && (
            <div className="flex flex-col items-center gap-2">
              <Film className="w-10 h-10 text-red-500" />
              <strong className="text-base font-black">Video Lab: How Rockets Fly 🚀</strong>
              <p className="text-xs text-slate-600 m-0">Watching educational science videos on demand.</p>
            </div>
          )}

          {activeTab === "search" && (
            <div className="flex flex-col items-center gap-2">
              <Search className="w-10 h-10 text-amber-500" />
              <strong className="text-base font-black">Kid Search Engine</strong>
              <p className="text-xs text-slate-600 m-0">Type keywords to discover answers across the web.</p>
            </div>
          )}

          {activeTab === "learning" && (
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="w-10 h-10 text-blue-600" />
              <strong className="text-base font-black">Eesa Byte Computer Skills</strong>
              <p className="text-xs text-slate-600 m-0">Interactive lessons to power up your tech superpower!</p>
            </div>
          )}
        </div>

        {/* HISTORY DRAWER */}
        {showHistory && (
          <div className="p-4 bg-white border-t border-slate-200 flex flex-col gap-1.5 text-xs">
            <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">
              Pages You Visited Before:
            </span>
            <div className="flex justify-between text-slate-600">
              <span>• eesabyte.com (Today, 10:45 AM)</span>
              <span>Learning</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>• kidsearch.test (Today, 10:30 AM)</span>
              <span>Search</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>• videolab.test (Today, 10:15 AM)</span>
              <span>Video</span>
            </div>
          </div>
        )}
      </WindowFrame>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — INTERNET OVERVIEW
   ========================================================================== */
function InternetOverviewSlide() {
  const [journeyStep, setJourneyStep] = useState(0);
  const [journeyPlaying, setJourneyPlaying] = useState(false);

  useEffect(() => {
    if (!journeyPlaying) return;
    const timer = setInterval(() => {
      setJourneyStep((curr) => {
        if (curr >= 5) {
          setJourneyPlaying(false);
          return 5;
        }
        return curr + 1;
      });
    }, 800);
    return () => clearInterval(timer);
  }, [journeyPlaying]);

  function playJourney() {
    setJourneyStep(1);
    setJourneyPlaying(true);
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      {/* 5-STEP JOURNEY FLOW */}
      <div className="flex items-center justify-between w-full gap-2 flex-wrap">
        <div className={`connect-step-node${journeyStep >= 1 ? " is-active" : ""}`}>
          <Laptop />
          <strong>DEVICE</strong>
          <small className="text-[10px] text-slate-500">Laptop / Phone</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${journeyStep >= 2 ? " is-active" : ""}`}>
          <Router />
          <strong>ROUTER</strong>
          <small className="text-[10px] text-slate-500">Wi-Fi / Ethernet</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${journeyStep >= 3 ? " is-active" : ""}`}>
          <Globe />
          <strong>INTERNET</strong>
          <small className="text-[10px] text-slate-500">Global Network</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${journeyStep >= 4 ? " is-active" : ""}`}>
          <Server />
          <strong>SERVER</strong>
          <small className="text-[10px] text-slate-500">Holds Content</small>
        </div>

        <span className="connect-arrow">&rarr;</span>

        <div className={`connect-step-node${journeyStep >= 5 ? " is-active" : ""}`}>
          <GraduationCap />
          <strong>WEBSITE</strong>
          <small className="text-[10px] text-emerald-700 font-bold">Loaded! ✓</small>
        </div>
      </div>

      {/* 4 SUMMARY BADGES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
        <div className="p-3 bg-white border-2 border-slate-900 rounded text-center">
          <strong className="text-xs uppercase text-blue-600 block">Browser</strong>
          <span className="text-[11px] text-slate-600">Opens websites</span>
        </div>
        <div className="p-3 bg-white border-2 border-slate-900 rounded text-center">
          <strong className="text-xs uppercase text-amber-600 block">Search Engine</strong>
          <span className="text-[11px] text-slate-600">Finds websites</span>
        </div>
        <div className="p-3 bg-white border-2 border-slate-900 rounded text-center">
          <strong className="text-xs uppercase text-emerald-600 block">Download</strong>
          <span className="text-[11px] text-slate-600">Internet &rarr; Device</span>
        </div>
        <div className="p-3 bg-white border-2 border-slate-900 rounded text-center">
          <strong className="text-xs uppercase text-purple-600 block">Upload</strong>
          <span className="text-[11px] text-slate-600">Device &rarr; Internet</span>
        </div>
      </div>

      {/* BUTTON */}
      <button type="button" className="demo-button" onClick={playJourney} disabled={journeyPlaying}>
        <Play /> PLAY FULL JOURNEY
      </button>
    </div>
  );
}
