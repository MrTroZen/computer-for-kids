"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  Camera,
  Check,
  FileWarning,
  Home,
  Key,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RotateCcw,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  User,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";
import { WindowFrame } from "@/components/computer-ui";

export function InternetSafetyPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "Your Private Information",
      description: "Not everything belongs on the internet.",
      visual: <PrivateInfoSlide />,
    },
    {
      title: "Passwords & Codes",
      description: "Passwords and verification codes are secret.",
      visual: <PasswordsCodesSlide />,
    },
    {
      title: "People Online",
      description: "Someone online may not be who they say they are.",
      visual: <PeopleOnlineSlide />,
    },
    {
      title: "Links",
      description: "Stop and check before clicking.",
      visual: <LinksSlide />,
    },
    {
      title: "Downloads",
      description: "Only download software from places you trust.",
      visual: <DownloadsSafetySlide />,
    },
    {
      title: "Scams",
      description: "Scams try to make you act before you think.",
      visual: <ScamsSlide />,
    },
    {
      title: "Phishing",
      description: "Phishing tries to trick you into giving away information.",
      visual: <PhishingSlide />,
    },
    {
      title: "Social Media & Sharing",
      description: "Think about what a post tells other people.",
      visual: <SocialSharingSlide />,
    },
    {
      title: "If Something Feels Wrong",
      description: "If something feels wrong, tell an adult you trust.",
      visual: <SomethingWrongSlide />,
    },
    {
      title: "The Safety Rule",
      description: "STOP, THINK, CHECK, and ASK.",
      visual: <TheSafetyRuleSlide />,
    },
  ];

  return <SlideDeck topic="Internet Safety" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — YOUR PRIVATE INFORMATION
   ========================================================================== */
function PrivateInfoSlide() {
  const [shielded, setShielded] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="safety-profile-grid">
        {/* SAFE TO SHARE */}
        <div className="safety-column-card is-safe">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-600" />
            <h3 className="m-0 text-sm font-black uppercase text-emerald-800">
              Safe to Share (Sometimes)
            </h3>
          </div>
          <div className="flex flex-col gap-2">
            <div className="safety-item-row">
              <span>First Name / Nickname</span>
              <span className="text-xs text-slate-500 font-mono">&ldquo;Eesa&rdquo;</span>
            </div>
            <div className="safety-item-row">
              <span>Hobbies &amp; Interests</span>
              <span className="text-xs text-slate-500 font-mono">&ldquo;Robotics, Space&rdquo;</span>
            </div>
            <div className="safety-item-row">
              <span>Favorite Games &amp; Books</span>
              <span className="text-xs text-slate-500 font-mono">&ldquo;Coding Games&rdquo;</span>
            </div>
          </div>
        </div>

        {/* KEEP PRIVATE */}
        <div className="safety-column-card is-private">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-600" />
              <h3 className="m-0 text-sm font-black uppercase text-red-800">Keep Private!</h3>
            </div>
            <button
              type="button"
              className={`explorer-btn${shielded ? " is-accent" : ""}`}
              onClick={() => setShielded((s) => !s)}
            >
              <Shield className="w-3.5 h-3.5" />
              {shielded ? "SHIELD ACTIVE" : "PROTECT WITH SHIELD"}
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {[
              { label: "Passwords & PINs", sample: "••••••••" },
              { label: "Home Address", sample: "123 Real Street" },
              { label: "Phone Number", sample: "07123 456789" },
              { label: "School Details", sample: "Exact School Name" },
              { label: "Live Location", sample: "Where you are right now" },
              { label: "Verification Codes", sample: "482 731" },
            ].map((item) => (
              <div
                key={item.label}
                className={`safety-item-row${shielded ? " is-shielded" : ""}`}
              >
                <span>{item.label}</span>
                {shielded ? (
                  <span className="shield-overlay-badge">
                    <Lock className="w-3 h-3" /> PRIVATE
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">{item.sample}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        Private information belongs only to you and your family. Never give it out online!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — PASSWORDS & CODES
   ========================================================================== */
function PasswordsCodesSlide() {
  return (
    <div className="secret-shield-box">
      {/* SHIELDED TOKENS */}
      <div className="secret-tokens-row">
        <div className="secret-token-card">
          <Key className="w-8 h-8 text-amber-500" />
          <strong className="text-xs uppercase text-slate-700">PASSWORD</strong>
          <span className="font-mono text-base font-bold text-slate-900">••••••••</span>
          <span className="shield-overlay-badge">
            <Lock className="w-3 h-3" /> SECRET KEY
          </span>
        </div>

        <div className="secret-token-card">
          <Lock className="w-8 h-8 text-blue-600" />
          <strong className="text-xs uppercase text-slate-700">VERIFICATION CODE</strong>
          <span className="font-mono text-base font-bold text-slate-900">482 731</span>
          <span className="shield-overlay-badge">
            <ShieldCheck className="w-3 h-3" /> NEVER SHARE
          </span>
        </div>
      </div>

      {/* SCENARIOS GRID */}
      <div className="scenario-no-grid">
        <div className="scenario-no-card">
          <span className="text-xs font-semibold text-slate-700">A friend asks for your login</span>
          <strong className="text-xl font-black text-red-600">&times; NO!</strong>
          <small className="text-[11px] text-slate-500">Even friends should use their own account.</small>
        </div>

        <div className="scenario-no-card">
          <span className="text-xs font-semibold text-slate-700">A stranger online asks for code</span>
          <strong className="text-xl font-black text-red-600">&times; NO!</strong>
          <small className="text-[11px] text-slate-500">Strangers should never have your key.</small>
        </div>

        <div className="scenario-no-card">
          <span className="text-xs font-semibold text-slate-700">A message says &ldquo;send your code&rdquo;</span>
          <strong className="text-xl font-black text-red-600">&times; NO!</strong>
          <small className="text-[11px] text-slate-500">Real companies never ask for your code.</small>
        </div>
      </div>

      <div className="p-3 bg-red-100 border-2 border-red-500 rounded text-red-900 text-xs font-black text-center">
        NEVER SEND SOMEONE YOUR LOGIN CODE. It is like handing over the keys to your front door!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — PEOPLE ONLINE
   ========================================================================== */
function PeopleOnlineSlide() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="people-online-stage">
      {/* EESA */}
      <div className="chat-profile-card">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border-2 border-slate-900">
          <User className="w-8 h-8" />
        </div>
        <strong className="text-base text-slate-900">Eesa</strong>
        <span className="text-xs text-blue-700 font-bold">You on your computer</span>
      </div>

      {/* CONNECTING CHAT */}
      <div className="flex flex-col items-center gap-3">
        <MessageSquare className="w-8 h-8 text-slate-400" />
        <span className="text-[10px] font-black uppercase text-slate-500">ONLINE CHAT</span>
      </div>

      {/* UNKNOWN PERSON PROFILE */}
      <div className="chat-profile-card">
        {!revealed ? (
          <>
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 border-2 border-slate-900">
              <User className="w-8 h-8" />
            </div>
            <div>
              <strong className="text-base text-slate-900 block">Alex</strong>
              <span className="text-xs text-slate-500">Profile Claim: Age 11</span>
            </div>
            <button
              type="button"
              className="demo-button mt-1"
              onClick={() => setRevealed(true)}
            >
              WHO IS REALLY THERE?
            </button>
          </>
        ) : (
          <>
            <div className="mystery-avatar-circle">?</div>
            <div>
              <strong className="text-base text-red-600 block">Identity Unknown!</strong>
              <span className="text-xs text-slate-600">Could be anyone in the world</span>
            </div>
            <button
              type="button"
              className="explorer-btn"
              onClick={() => setRevealed(false)}
            >
              <RotateCcw /> Reset View
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — LINKS
   ========================================================================== */
function LinksSlide() {
  const [inspected, setInspected] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="link-compare-row">
        {/* SAFE EXAMPLE */}
        <div className="link-sample-card">
          <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded w-max">
            EXAMPLE 1: REAL SCHOOL MESSAGE
          </span>
          <p className="text-xs text-slate-700 m-0 leading-relaxed">
            &ldquo;Here is your school website for homework:&rdquo;
          </p>
          <div className="p-2.5 bg-slate-100 rounded border border-slate-300 font-mono text-xs text-blue-700">
            https://school-example.com/homework
          </div>
          <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Clear name, normal domain, expected message.
          </span>
        </div>

        {/* SUSPICIOUS EXAMPLE */}
        <div className={`link-sample-card is-suspicious`}>
          <span className="text-[10px] font-black uppercase text-red-700 bg-red-100 px-2 py-0.5 rounded w-max">
            EXAMPLE 2: SUSPICIOUS MESSAGE
          </span>
          <p className="text-xs text-slate-700 m-0 font-bold text-red-700">
            &ldquo;YOU WON!!! FREE GAME COINS!!! CLICK NOW!!!&rdquo;
          </p>
          <div className="p-2.5 bg-red-100 rounded border border-red-300 font-mono text-xs text-red-800 font-bold">
            http://click-now-free-prize.example
          </div>

          {inspected ? (
            <div className="p-2.5 bg-white border border-red-400 rounded text-xs flex flex-col gap-1 text-red-900">
              <span>&bull; Strange unknown domain name</span>
              <span>&bull; Rushing you with urgent excitement</span>
              <span>&bull; &ldquo;Free prize&rdquo; is a trick to get clicks</span>
            </div>
          ) : (
            <button
              type="button"
              className="demo-button mt-auto"
              onClick={() => setInspected(true)}
            >
              <Search /> INSPECT LINK
            </button>
          )}
        </div>
      </div>

      {/* STOP LOOK CHECK BAR */}
      <div className="flex items-center justify-center gap-3 p-3 bg-white border-2 border-slate-900 rounded-lg text-xs font-bold shadow-sm flex-wrap">
        <span className="px-3 py-1 bg-red-500 text-white rounded">1. STOP</span>
        <span>&rarr;</span>
        <span className="px-3 py-1 bg-blue-600 text-white rounded">2. LOOK at the URL</span>
        <span>&rarr;</span>
        <span className="px-3 py-1 bg-amber-500 text-slate-900 rounded">3. CHECK with an adult</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — DOWNLOADS
   ========================================================================== */
function DownloadsSafetySlide() {
  const [source, setSource] = useState<"trusted" | "unknown">("trusted");

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className={`explorer-btn${source === "trusted" ? " is-accent" : ""}`}
          onClick={() => setSource("trusted")}
        >
          Trusted Official Store
        </button>
        <button
          type="button"
          className={`explorer-btn${source === "unknown" ? " is-accent" : ""}`}
          onClick={() => setSource("unknown")}
        >
          Random Unknown Website
        </button>
      </div>

      <div className="w-full p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <FileWarning className={`w-8 h-8 ${source === "trusted" ? "text-emerald-600" : "text-red-600"}`} />
          <strong className="text-base uppercase">Downloading game-setup.exe</strong>
        </div>

        {source === "trusted" ? (
          <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-lg text-center flex flex-col items-center gap-2 w-full">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
            <strong className="text-sm text-emerald-900">Official App Store Verified</strong>
            <p className="text-xs text-emerald-800 m-0">
              The developer is verified, safety-checked, and safe to install.
            </p>
          </div>
        ) : (
          <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg text-center flex flex-col items-center gap-2 w-full">
            <AlertOctagon className="w-10 h-10 text-red-600" />
            <strong className="text-sm text-red-900">Computer Warning: Unknown Publisher!</strong>
            <p className="text-xs text-red-800 m-0">
              This file came from a random website. It could contain bad programs. STOP and ask an adult!
            </p>
          </div>
        )}
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Only download software from places you trust. Always ask an adult before clicking run or install!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — SCAMS
   ========================================================================== */
type ScamId = "phone" | "money" | "urgency";

const scamsData: Record<ScamId, { title: string; body: string; flags: string[] }> = {
  phone: {
    title: "CONGRATULATIONS! You won a brand new phone!",
    body: "You are today's lucky visitor! Click here right now to claim your prize.",
    flags: ["Too Good To Be True", "Urgency", "Free Prize Trap"],
  },
  money: {
    title: "Send £5 and receive £500 back instantly!",
    body: "Double your money right now! Transfer £5 to unlock your giant cash reward.",
    flags: ["Money Request", "Too Good To Be True", "Fake Promise"],
  },
  urgency: {
    title: "Your account will disappear in 10 minutes!",
    body: "Warning: Urgent system security error. Click this button right now or lose everything!",
    flags: ["Extreme Urgency", "Panic Tactic", "Asking For Login"],
  },
};

function ScamsSlide() {
  const [selectedScam, setSelectedScam] = useState<ScamId>("phone");
  const scam = scamsData[selectedScam];

  return (
    <div className="scam-switcher-box">
      {/* SELECTOR TABS */}
      <div className="flex justify-center gap-2 flex-wrap">
        <button
          type="button"
          className={`explorer-btn${selectedScam === "phone" ? " is-accent" : ""}`}
          onClick={() => setSelectedScam("phone")}
        >
          Scam 1: Won A Phone
        </button>
        <button
          type="button"
          className={`explorer-btn${selectedScam === "money" ? " is-accent" : ""}`}
          onClick={() => setSelectedScam("money")}
        >
          Scam 2: Free Money
        </button>
        <button
          type="button"
          className={`explorer-btn${selectedScam === "urgency" ? " is-accent" : ""}`}
          onClick={() => setSelectedScam("urgency")}
        >
          Scam 3: Urgent Countdown
        </button>
      </div>

      {/* SCAM DISPLAY BANNER */}
      <div className="scam-message-banner">
        <AlertTriangle className="w-10 h-10 text-red-600 animate-bounce" />
        <h4 className="m-0 text-base font-black text-red-700">{scam.title}</h4>
        <p className="text-xs text-slate-700 max-w-md m-0 font-medium">{scam.body}</p>

        <div className="scam-flags-grid mt-2">
          {scam.flags.map((flag) => (
            <span key={flag} className="scam-flag-pill">
              🚩 {flag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        Scams try to make you act before you think. When you see big prizes or rush timers, pause and talk to an adult!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — PHISHING
   ========================================================================== */
function PhishingSlide() {
  const [inspected, setInspected] = useState(false);

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      <WindowFrame title="Suspicious Email Message" icon={<Mail className="text-red-600" />}>
        <div className="p-6 bg-slate-50 flex flex-col gap-4">
          <div className="flex flex-col gap-1 border-b border-slate-200 pb-3">
            <div className="text-xs font-bold text-slate-800">
              <span className="text-slate-400 font-mono">FROM: </span>
              <span className={inspected ? "bg-red-200 text-red-900 px-1 rounded font-mono" : ""}>
                support@totally-not-real.example
              </span>
            </div>
            <div className="text-xs font-bold text-slate-800">
              <span className="text-slate-400 font-mono">SUBJECT: </span>
              <span className={inspected ? "bg-red-200 text-red-900 px-1 rounded" : ""}>
                URGENT: Your account has a problem!
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-700 m-0 leading-relaxed font-medium">
            Your account security is locked. Please click below immediately to verify your password and identity.
          </p>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-red-600 text-white font-bold text-xs rounded border border-red-700 cursor-not-allowed">
              SIGN IN NOW
            </span>
            <button
              type="button"
              className="demo-button"
              onClick={() => setInspected((i) => !i)}
            >
              <Search /> {inspected ? "HIDE INSPECTION" : "INSPECT PHISHING TRICK"}
            </button>
          </div>

          {inspected && (
            <div className="p-3 bg-red-100 border border-red-400 rounded text-xs text-red-900 flex flex-col gap-1">
              <strong>🚩 Phishing Red Flags:</strong>
              <span>&bull; Fake sender address (not an official company domain).</span>
              <span>&bull; Urgent threat trying to panic you into acting quickly.</span>
              <span>&bull; Asking you to click a link and type your secret password.</span>
            </div>
          )}
        </div>
      </WindowFrame>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Phishing tries to trick you into giving away your password or information. Real services won&apos;t ask you like this!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — SOCIAL MEDIA & SHARING
   ========================================================================== */
function SocialSharingSlide() {
  const [shareLess, setShareLess] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="composer-card">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600" />
            <strong className="text-xs uppercase">Post Composer Example</strong>
          </div>
          <button
            type="button"
            className={`explorer-btn${shareLess ? " is-accent" : ""}`}
            onClick={() => setShareLess((s) => !s)}
          >
            <Shield className="w-3.5 h-3.5" />
            {shareLess ? "SHARING LESS (SAFE)" : "TOGGLE: SHARE LESS"}
          </button>
        </div>

        {/* POST CONTENT */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded flex flex-col gap-2">
          <span className="text-xs font-bold text-slate-800">Photo: Eesa at the park 🌳</span>
          <span className="text-xs text-slate-600">&ldquo;Having fun playing outdoors!&rdquo;</span>

          {!shareLess ? (
            <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-slate-300 text-xs text-red-700 font-bold">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Location: 42 Elm Park, London
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Phone: 07999 123456
              </span>
              <span className="flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5" /> Home Address tagged
              </span>
            </div>
          ) : (
            <div className="mt-2 pt-2 border-t border-slate-300 text-xs text-emerald-800 font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Private location, phone number, and address removed! Safe to post.</span>
            </div>
          )}
        </div>
      </div>

      {/* COPIED WARNING */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white border-2 border-slate-900 rounded text-xs font-bold shadow-sm">
        <span>Once Shared</span>
        <ArrowRight className="w-4 h-4 text-blue-600" />
        <span>Anyone Can Screenshot</span>
        <ArrowRight className="w-4 h-4 text-blue-600" />
        <span className="text-red-600">Something shared online can be copied forever.</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — IF SOMETHING FEELS WRONG
   ========================================================================== */
function SomethingWrongSlide() {
  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
      {/* 4 TRIGGERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
        <div className="p-3 bg-red-50 border-2 border-red-300 rounded text-center text-xs font-bold text-red-900">
          Strange Message?
        </div>
        <div className="p-3 bg-red-50 border-2 border-red-300 rounded text-center text-xs font-bold text-red-900">
          Scary Content?
        </div>
        <div className="p-3 bg-red-50 border-2 border-red-300 rounded text-center text-xs font-bold text-red-900">
          Asking for Private Info?
        </div>
        <div className="p-3 bg-red-50 border-2 border-red-300 rounded text-center text-xs font-bold text-red-900">
          Money Request?
        </div>
      </div>

      {/* 5 SIMPLE ACTIONS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
        <div className="p-4 bg-white border-3 border-slate-900 rounded-lg text-center flex flex-col items-center gap-1">
          <strong className="text-sm font-black text-red-600">STOP</strong>
          <small className="text-[10px] text-slate-500">Don&apos;t click</small>
        </div>
        <div className="p-4 bg-white border-3 border-slate-900 rounded-lg text-center flex flex-col items-center gap-1">
          <strong className="text-sm font-black text-blue-600">DON&apos;T REPLY</strong>
          <small className="text-[10px] text-slate-500">Keep quiet</small>
        </div>
        <div className="p-4 bg-white border-3 border-slate-900 rounded-lg text-center flex flex-col items-center gap-1">
          <strong className="text-sm font-black text-amber-600">CLOSE IT</strong>
          <small className="text-[10px] text-slate-500">Shut the tab</small>
        </div>
        <div className="p-4 bg-white border-3 border-slate-900 rounded-lg text-center flex flex-col items-center gap-1">
          <strong className="text-sm font-black text-purple-600">BLOCK</strong>
          <small className="text-[10px] text-slate-500">Or report</small>
        </div>
        <div className="p-4 bg-yellow-300 border-3 border-slate-900 rounded-lg text-center flex flex-col items-center gap-1 col-span-2 md:col-span-1">
          <strong className="text-sm font-black text-slate-900">TELL AN ADULT</strong>
          <small className="text-[10px] text-slate-800 font-bold">You trust</small>
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-bold text-slate-800">
        You are never in trouble for reporting something suspicious or uncomfortable to a parent or teacher!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — THE SAFETY RULE
   ========================================================================== */
function TheSafetyRuleSlide() {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      <div className="safety-rules-grid">
        <div className="safety-rule-node is-stop">
          <strong className="text-xl">1. STOP</strong>
          <span className="text-xs text-slate-600 font-semibold">Before taking any action or clicking.</span>
        </div>

        <div className="safety-rule-node is-think">
          <strong className="text-xl">2. THINK</strong>
          <span className="text-xs text-slate-600 font-semibold">About what is happening on screen.</span>
        </div>

        <div className="safety-rule-node is-check">
          <strong className="text-xl">3. CHECK</strong>
          <span className="text-xs text-slate-600 font-semibold">The person, website, or download link.</span>
        </div>

        <div className="safety-rule-node is-ask">
          <strong className="text-xl">4. ASK</strong>
          <span className="text-xs text-slate-600 font-semibold">An adult you trust if unsure.</span>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-white border-3 border-slate-900 rounded-lg shadow-sm">
        <ShieldCheck className="w-10 h-10 text-emerald-600 flex-shrink-0" />
        <div>
          <strong className="text-sm uppercase text-slate-900 block">EESA BYTE TECH SUPERHERO SHIELD</strong>
          <p className="text-xs text-slate-600 m-0">
            Staying safe online means you control your computer, instead of letting tricks control you!
          </p>
        </div>
      </div>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
