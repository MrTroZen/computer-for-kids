"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  Cloud,
  Eye,
  EyeOff,
  Globe,
  HardDrive,
  Home,
  Key,
  Laptop,
  Mail,
  RefreshCw,
  RotateCcw,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Tablet,
  Upload,
  User,
  UserCheck,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";
import { WindowFrame, FileIcon, FolderIcon } from "@/components/computer-ui";

export function AccountsCloudPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "What is an Account?",
      description: "An account lets a service know who you are.",
      visual: <WhatIsAccountSlide />,
    },
    {
      title: "Email",
      description: "Email lets people send messages over the internet.",
      visual: <EmailSlide />,
    },
    {
      title: "Username & Password",
      description: "Your password protects your account.",
      visual: <UsernamePasswordSlide />,
    },
    {
      title: "Strong Passwords",
      description: "Long, unique passwords keep your accounts secure.",
      visual: <StrongPasswordsSlide />,
    },
    {
      title: "Two-Factor Authentication",
      description: "2FA adds another check after your password.",
      visual: <TwoFactorSlide />,
    },
    {
      title: "What is the Cloud?",
      description: "The cloud means your files are stored on computers you reach through the internet.",
      visual: <WhatIsCloudSlide />,
    },
    {
      title: "Local vs Cloud",
      description: "Local = on your device. Cloud = on a server online.",
      visual: <LocalVsCloudSlide />,
    },
    {
      title: "Cloud Storage",
      description: "Keep your files organized in an online drive accessible anywhere.",
      visual: <CloudStorageSlide />,
    },
    {
      title: "Syncing Devices",
      description: "Sync keeps information updated across your devices.",
      visual: <SyncingDevicesSlide />,
    },
    {
      title: "Accounts & Cloud Overview",
      description: "Accounts and cloud storage connect all your devices securely.",
      visual: <AccountsOverviewSlide />,
    },
  ];

  return <SlideDeck topic="Accounts & Cloud" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — WHAT IS AN ACCOUNT?
   ========================================================================== */
function WhatIsAccountSlide() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-2xl">
      <WindowFrame title="KidZone Learning Portal" icon={<Globe className="text-blue-600" />}>
        <div className="p-6 bg-slate-50 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-black text-sm text-slate-800">KidZone Learning</span>
            {!signedIn ? (
              <button
                type="button"
                className="demo-button"
                onClick={() => setSignedIn(true)}
              >
                SIGN IN AS EESA &rarr;
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-900 rounded font-bold text-xs">
                  <UserCheck className="w-4 h-4 text-blue-600" /> Hi, Eesa!
                </span>
                <button
                  type="button"
                  className="explorer-btn"
                  onClick={() => setSignedIn(false)}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {!signedIn ? (
            <div className="text-center py-8 flex flex-col items-center gap-2">
              <User className="w-12 h-12 text-slate-400" />
              <strong className="text-base text-slate-700">Guest Visitor Mode</strong>
              <p className="text-xs text-slate-500 m-0">The website doesn&apos;t know who you are yet. Click SIGN IN!</p>
            </div>
          ) : (
            <div className="account-preview-card">
              <div className="profile-avatar-row">
                <div className="profile-avatar-circle">
                  <User className="w-7 h-7" />
                </div>
                <div>
                  <strong className="text-base text-slate-900 block">Eesa&apos;s Workspace</strong>
                  <span className="text-xs text-blue-600 font-bold">Profile Loaded from Cloud</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold pt-2 border-t border-slate-200">
                <div className="p-2 bg-blue-50 rounded">
                  <span className="text-blue-600 block">Saved Work</span>
                  <span>4 Projects</span>
                </div>
                <div className="p-2 bg-amber-50 rounded">
                  <span className="text-amber-600 block">Badges</span>
                  <span>Tech Explorer</span>
                </div>
                <div className="p-2 bg-emerald-50 rounded">
                  <span className="text-emerald-600 block">Theme</span>
                  <span>Blue SuperHero</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </WindowFrame>

      {/* FORMULA CALLOUT */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white border-2 border-slate-900 rounded text-xs font-bold shadow-sm">
        <span>Public Website</span>
        <span className="text-blue-600">+</span>
        <span>Eesa&apos;s Account</span>
        <span className="text-red-500 font-black">=</span>
        <span className="text-emerald-700">Eesa&apos;s Own Personal Information</span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — EMAIL
   ========================================================================== */
type EmailId = "homework" | "welcome";

const emailsData: Record<EmailId, { from: string; to: string; subject: string; message: string }> = {
  homework: {
    from: "Teacher (teacher@school.test)",
    to: "Eesa (eesa@kidmail.test)",
    subject: "Homework Assignment",
    message: "Hi Eesa, wonderful job completing your computer lesson! Please save your drawing file for tomorrow's class.",
  },
  welcome: {
    from: "Eesa Byte (welcome@eesabyte.test)",
    to: "Eesa (eesa@kidmail.test)",
    subject: "Welcome to Tech Skills!",
    message: "Welcome Eesa! You are now learning how the internet and computers connect all of us.",
  },
};

function EmailSlide() {
  const [selectedEmail, setSelectedEmail] = useState<EmailId>("homework");
  const active = emailsData[selectedEmail];

  return (
    <div className="email-client-box">
      <div className="email-inbox-header">
        <span className="flex items-center gap-1.5">
          <Mail className="w-4 h-4 text-blue-600" /> KidMail Inbox (2 Messages)
        </span>
        <span className="text-xs font-bold text-slate-500">Connected to Mail Server</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {/* EMAIL LIST */}
        <div className="flex flex-col">
          <div
            className={`email-list-item${selectedEmail === "homework" ? " is-active" : ""}`}
            onClick={() => setSelectedEmail("homework")}
          >
            <div>
              <strong className="text-xs text-slate-900 block">Teacher</strong>
              <span className="text-xs text-slate-600">Homework Assignment</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">10:30 AM</span>
          </div>

          <div
            className={`email-list-item${selectedEmail === "welcome" ? " is-active" : ""}`}
            onClick={() => setSelectedEmail("welcome")}
          >
            <div>
              <strong className="text-xs text-slate-900 block">Eesa Byte</strong>
              <span className="text-xs text-slate-600">Welcome to Tech Skills!</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Yesterday</span>
          </div>
        </div>

        {/* EMAIL DETAIL VIEW */}
        <div className="email-detail-view bg-slate-50">
          <div className="flex flex-col gap-1 border-b border-slate-200 pb-2">
            <div className="text-[11px] font-bold text-slate-700">
              <span className="text-slate-400 font-mono">FROM: </span>
              {active.from}
            </div>
            <div className="text-[11px] font-bold text-slate-700">
              <span className="text-slate-400 font-mono">TO: </span>
              {active.to}
            </div>
            <div className="text-xs font-black text-slate-900">
              <span className="text-slate-400 font-mono">SUBJECT: </span>
              {active.subject}
            </div>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed m-0 font-medium">
            {active.message}
          </p>

          <div className="mt-auto pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-bold">
            <span>Eesa &rarr; Internet &rarr; Teacher</span>
            <span className="text-emerald-700">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — USERNAME & PASSWORD
   ========================================================================== */
function UsernamePasswordSlide() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-lg">
      <div className="w-full p-6 bg-white border-3 border-slate-900 rounded-lg shadow-sm flex flex-col gap-4">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <Shield className="w-6 h-6 text-blue-600" />
          <strong className="text-base font-black text-slate-900 uppercase">Account Login Keys</strong>
        </div>

        {/* USERNAME ROW */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-baseline">
            <label className="text-xs font-bold text-slate-700">USERNAME</label>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
              = WHO YOU ARE (Name tag)
            </span>
          </div>
          <div className="flex items-center gap-2 p-2.5 bg-slate-100 border border-slate-300 rounded font-bold text-sm text-slate-900">
            <User className="w-4 h-4 text-slate-500" />
            <span>Eesa</span>
          </div>
        </div>

        {/* PASSWORD ROW */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-baseline">
            <label className="text-xs font-bold text-slate-700">PASSWORD</label>
            <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">
              = SECRET KEY (Like front door key)
            </span>
          </div>
          <div className="flex items-center justify-between p-2.5 bg-slate-100 border border-slate-300 rounded font-mono text-sm text-slate-900">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-slate-500" />
              <span>{showPassword ? "SuperHeroKey!42" : "••••••••••••••"}</span>
            </div>
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 cursor-pointer"
              onClick={() => setShowPassword((p) => !p)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="demo-button w-full mt-2"
          onClick={() => setShowPassword((p) => !p)}
        >
          {showPassword ? "HIDE PASSWORD KEY" : "SHOW PASSWORD KEY"}
        </button>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Your username tells the service who you are. Your secret password proves it is really you!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — STRONG PASSWORDS
   ========================================================================== */
function StrongPasswordsSlide() {
  return (
    <div className="password-box-card">
      {/* SAFETY ALERT */}
      <div className="p-3 bg-red-100 border-2 border-red-500 rounded text-red-900 font-black text-xs text-center flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 text-red-600" />
        <span>NEVER SHARE YOUR PASSWORD WITH ANYONE (EXCEPT YOUR PARENTS)!</span>
      </div>

      {/* COMPARISON ROW */}
      <div className="password-compare-row">
        {/* WEAK PASSWORD */}
        <div className="p-4 border-2 border-red-300 bg-red-50 rounded flex flex-col gap-2">
          <strong className="text-xs font-black text-red-800 uppercase">❌ Weak Password (Bad)</strong>
          <div className="password-badge-sample is-weak">eesa123</div>
          <ul className="text-xs text-red-700 m-0 pl-4 list-disc leading-relaxed">
            <li>Too short (only 7 characters)</li>
            <li>Contains simple common names</li>
            <li>Easy for guessing computers to crack</li>
          </ul>
        </div>

        {/* STRONG PASSWORD */}
        <div className="p-4 border-2 border-emerald-300 bg-emerald-50 rounded flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <strong className="text-xs font-black text-emerald-800 uppercase">
              ✅ Strong Password (Good)
            </strong>
            <span className="text-[10px] font-black bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded">
              EXAMPLE ONLY
            </span>
          </div>
          <div className="password-badge-sample is-strong">Blue-Rocket!27-Tree</div>
          <ul className="text-xs text-emerald-800 m-0 pl-4 list-disc leading-relaxed">
            <li>Long (19 characters)</li>
            <li>Mix of words, numbers, and symbols (! and -)</li>
            <li>Extremely hard for anyone to guess</li>
          </ul>
        </div>
      </div>

      {/* 3 RULES & PASSWORD MANAGER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-700">
          <strong className="block text-slate-900 mb-1 font-bold">3 Golden Rules:</strong>
          <span>1. Longer is stronger &bull; 2. Hard to guess &bull; 3. Different password for each account.</span>
        </div>

        <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900">
          <strong className="block text-blue-950 mb-1 font-bold">Password Manager:</strong>
          <span>A password manager app can safely create and remember complex passwords for you.</span>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — TWO-FACTOR AUTHENTICATION (2FA)
   ========================================================================== */
function TwoFactorSlide() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  function handleVerify() {
    setStep(3);
  }

  function handleReset() {
    setStep(1);
  }

  return (
    <div className="two-factor-stage">
      {/* STEP 1: PASSWORD */}
      <div className={`connect-step-node${step >= 1 ? " is-active" : ""}`}>
        <Key className="w-8 h-8 text-amber-500" />
        <strong className="text-xs uppercase">Step 1: Password</strong>
        <span className="text-xs font-mono font-bold text-slate-700">••••••••••••</span>
        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded">
          ✓ Correct
        </span>
      </div>

      <span className="connect-arrow">&rarr;</span>

      {/* STEP 2: PHONE CODE */}
      <div className="phone-mockup">
        <div className="phone-notch" />
        <div className="phone-sms-bubble">
          <span className="font-bold block text-slate-400 text-[10px]">SMS CODE</span>
          <span>Your KidZone verification code is:</span>
          <div className="phone-code-large">482 731</div>
        </div>
        <div className="text-center text-[10px] text-slate-500 font-bold">
          Trusted Mobile Phone
        </div>
      </div>

      <span className="connect-arrow">&rarr;</span>

      {/* STEP 3: RESULT */}
      <div className={`connect-step-node${step === 3 ? " is-active" : ""}`}>
        <ShieldCheck className={`w-8 h-8 ${step === 3 ? "text-emerald-600" : "text-slate-400"}`} />
        <strong className="text-xs uppercase">Step 2: Verification</strong>
        {step < 3 ? (
          <div className="flex flex-col gap-2 w-full">
            <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-1 rounded text-center">
              482 731
            </span>
            <button type="button" className="demo-button" onClick={handleVerify}>
              VERIFY CODE
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded font-black text-xs">
              ACCESS GRANTED!
            </span>
            <button type="button" className="explorer-btn mt-2" onClick={handleReset}>
              <RotateCcw /> Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — WHAT IS THE CLOUD?
   ========================================================================== */
function WhatIsCloudSlide() {
  const [revealed, setRevealed] = useState(false);
  const [moved, setMoved] = useState(false);

  function handleTransfer() {
    setMoved(true);
  }

  function handleReset() {
    setMoved(false);
  }

  return (
    <div className="cloud-peek-stage">
      <div className="flex items-center justify-between w-full max-w-3xl gap-4 flex-wrap">
        {/* COMPUTER */}
        <div className="flex flex-col items-center gap-2 p-4 bg-white border-3 border-slate-900 rounded-lg">
          <Laptop className="w-10 h-10 text-blue-600" />
          <strong className="text-xs">Eesa&apos;s Computer</strong>
          {!moved && <FileIcon name="homework.docx" category="doc" selected />}
        </div>

        {/* CONNECTION & TRANSFER */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-black text-slate-500 uppercase">INTERNET CONNECTION</span>
          <button
            type="button"
            className="demo-button"
            onClick={handleTransfer}
            disabled={moved}
          >
            <Upload /> MOVE TO CLOUD &rarr;
          </button>
          {moved && (
            <button type="button" className="explorer-btn" onClick={handleReset}>
              <RotateCcw /> Reset File
            </button>
          )}
        </div>

        {/* CLOUD BOX WITH REVEAL */}
        <div className={`cloud-container-box${revealed ? " is-revealed" : ""}`}>
          {!revealed ? (
            <>
              <Cloud className="w-16 h-16 text-blue-500" />
              <div className="text-center">
                <strong className="text-base text-slate-800 block">THE CLOUD</strong>
                <span className="text-xs text-slate-500">(Click to reveal what is really inside!)</span>
              </div>
              <button
                type="button"
                className="explorer-btn is-accent"
                onClick={() => setRevealed(true)}
              >
                🔍 LOOK INSIDE THE CLOUD
              </button>
            </>
          ) : (
            <>
              <div className="cloud-servers-revealed">
                <div className="server-rack-visual">
                  <div className="server-rack-bay">
                    <span className="text-[10px] text-slate-400 font-mono">CLOUD-A</span>
                    <span className="bay-blinker" />
                  </div>
                  <div className="server-rack-bay">
                    <span className="text-[10px] text-slate-400 font-mono">SSD-ARRAY</span>
                    <span className="bay-blinker" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
                <div className="server-rack-visual hidden sm:flex">
                  <div className="server-rack-bay">
                    <span className="text-[10px] text-slate-400 font-mono">CLOUD-B</span>
                    <span className="bay-blinker" style={{ animationDelay: "0.2s" }} />
                  </div>
                  <div className="server-rack-bay">
                    <span className="text-[10px] text-slate-400 font-mono">BACKUP</span>
                    <span className="bay-blinker" style={{ animationDelay: "0.5s" }} />
                  </div>
                </div>
              </div>
              <span className="text-xs font-black text-yellow-400">
                ⚡ REAL DATA CENTER COMPUTERS!
              </span>
              <button
                type="button"
                className="explorer-btn text-slate-900 bg-white"
                onClick={() => setRevealed(false)}
              >
                Close View
              </button>
            </>
          )}

          {moved && (
            <div className="mt-2 p-2 bg-emerald-100 text-emerald-900 border border-emerald-500 rounded text-xs font-bold flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>homework.docx stored safely on remote cloud servers!</span>
            </div>
          )}
        </div>
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        The &ldquo;cloud&rdquo; is not floating in the sky &mdash; it is powerful server computers in a secure building that you connect to over the internet.
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — LOCAL VS CLOUD
   ========================================================================== */
function LocalVsCloudSlide() {
  return (
    <div className="split-compare-grid">
      {/* LOCAL STORAGE */}
      <div className="compare-column-card is-accent">
        <div className="flex items-center gap-2">
          <HardDrive className="w-6 h-6 text-blue-600" />
          <h3 className="m-0 text-base font-black text-slate-900 uppercase">LOCAL STORAGE</h3>
        </div>
        <span className="text-xs font-bold text-blue-700">Inside Your Computer&apos;s SSD</span>

        <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-lg flex flex-col items-center gap-2">
          <Laptop className="w-10 h-10 text-slate-700" />
          <FileIcon name="photo.jpg" category="image" selected />
        </div>

        <ul className="text-xs text-slate-700 m-0 pl-4 list-disc leading-relaxed">
          <li><strong>Offline:</strong> Works even if Wi-Fi or Internet is turned off.</li>
          <li><strong>Fast:</strong> Loads immediately from internal storage.</li>
          <li><strong>Limit:</strong> Only accessible on THIS specific device.</li>
        </ul>
      </div>

      {/* CLOUD STORAGE */}
      <div className="compare-column-card is-accent-search">
        <div className="flex items-center gap-2">
          <Cloud className="w-6 h-6 text-amber-500" />
          <h3 className="m-0 text-base font-black text-slate-900 uppercase">CLOUD STORAGE</h3>
        </div>
        <span className="text-xs font-bold text-amber-700">On an Internet Server</span>

        <div className="p-4 bg-slate-50 border-2 border-slate-200 rounded-lg flex flex-col items-center gap-2">
          <Server className="w-10 h-10 text-amber-600" />
          <FileIcon name="photo.jpg" category="image" selected />
        </div>

        <ul className="text-xs text-slate-700 m-0 pl-4 list-disc leading-relaxed">
          <li><strong>Accessible Anywhere:</strong> Open from laptop, phone, or tablet!</li>
          <li><strong>Safe Backup:</strong> If your laptop breaks, your files are still safe.</li>
          <li><strong>Requirement:</strong> Needs an internet connection to reach.</li>
        </ul>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — CLOUD STORAGE
   ========================================================================== */
function CloudStorageSlide() {
  const [uploaded, setUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  function handleUpload() {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
    }, 1000);
  }

  function handleReset() {
    setUploaded(false);
  }

  return (
    <div className="w-full max-w-3xl flex flex-col gap-4">
      <WindowFrame title="Eesa's Cloud Drive" icon={<Cloud className="text-blue-600" />}>
        <div className="explorer-toolbar">
          <span className="text-xs font-bold text-slate-600">Storage Used: 5 GB of 15 GB</span>
          <button
            type="button"
            className="explorer-btn is-accent"
            onClick={handleUpload}
            disabled={uploading || uploaded}
          >
            <Upload /> UPLOAD FILE
          </button>
        </div>

        <div className="p-6 bg-slate-50 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            <FolderIcon name="School" itemCount={3} />
            <FolderIcon name="Photos" itemCount={8} />
            <FolderIcon
              name="Projects"
              itemCount={uploaded ? 5 : 4}
              selected={uploaded}
            />
          </div>

          {uploaded && (
            <div className="p-3 bg-emerald-50 border-2 border-emerald-400 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon name="robot-drawing.png" category="image" selected size="sm" />
                <span className="text-xs font-bold text-emerald-900">
                  robot-drawing.png uploaded safely into Projects folder!
                </span>
              </div>
              <button type="button" className="explorer-btn" onClick={handleReset}>
                <RotateCcw /> Reset
              </button>
            </div>
          )}

          {uploading && (
            <div className="p-3 bg-blue-50 border border-blue-300 rounded text-center text-xs font-bold text-blue-700 animate-pulse">
              Transferring file to cloud storage...
            </div>
          )}
        </div>
      </WindowFrame>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — SYNCING DEVICES
   ========================================================================== */
function SyncingDevicesSlide() {
  const [synced, setSynced] = useState(false);
  const [noteText, setNoteText] = useState("Apples, Bananas");
  const [hasEdit, setHasEdit] = useState(false);

  function addNoteItem() {
    setNoteText("Apples, Bananas, Milk 🥛");
    setHasEdit(true);
    setSynced(false);
  }

  function handleSync() {
    setSynced(true);
    setHasEdit(false);
  }

  function handleReset() {
    setNoteText("Apples, Bananas");
    setHasEdit(false);
    setSynced(false);
  }

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      {/* CENTER CLOUD HUB */}
      <div className="sync-hub-circle">
        <div className="flex flex-col items-center">
          <Cloud className="w-8 h-8 text-slate-900" />
          <span className="text-[10px] font-black uppercase text-slate-900">EESA CLOUD</span>
        </div>
      </div>

      {/* 3 DEVICES ROW */}
      <div className="sync-devices-row">
        {/* LAPTOP */}
        <div className={`sync-device-card${synced ? " is-synced" : ""}`}>
          <div className="flex items-center gap-1.5">
            <Laptop className="w-5 h-5 text-blue-600" />
            <strong className="text-xs">Laptop (Edit Here)</strong>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded font-mono text-xs font-bold">
            {noteText}
          </div>
          {!hasEdit && !synced && (
            <button type="button" className="explorer-btn is-accent" onClick={addNoteItem}>
              ✏️ Add &ldquo;Milk&rdquo; to Note
            </button>
          )}
          {hasEdit && (
            <button type="button" className="demo-button" onClick={handleSync}>
              <RefreshCw /> SYNC TO ALL
            </button>
          )}
        </div>

        {/* PHONE */}
        <div className={`sync-device-card${synced ? " is-synced" : ""}`}>
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-5 h-5 text-emerald-600" />
            <strong className="text-xs">Phone (Receives Sync)</strong>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded font-mono text-xs font-bold">
            {synced ? noteText : "Apples, Bananas"}
          </div>
          <span className="text-[10px] font-bold text-slate-500">
            {synced ? "✓ Updated via cloud" : "Waiting for sync..."}
          </span>
        </div>

        {/* TABLET */}
        <div className={`sync-device-card${synced ? " is-synced" : ""}`}>
          <div className="flex items-center gap-1.5">
            <Tablet className="w-5 h-5 text-purple-600" />
            <strong className="text-xs">Tablet (Receives Sync)</strong>
          </div>
          <div className="p-2 bg-slate-50 border border-slate-200 rounded font-mono text-xs font-bold">
            {synced ? noteText : "Apples, Bananas"}
          </div>
          <span className="text-[10px] font-bold text-slate-500">
            {synced ? "✓ Updated via cloud" : "Waiting for sync..."}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        {synced && (
          <button type="button" className="explorer-btn" onClick={handleReset}>
            <RotateCcw /> Reset Sync
          </button>
        )}
      </div>

      <div className="text-xs font-semibold text-slate-600 text-center">
        Type a note on your computer, press Sync, and it instantly shows up on your phone and tablet!
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — ACCOUNTS & CLOUD OVERVIEW
   ========================================================================== */
function AccountsOverviewSlide() {
  const [selectedNode, setSelectedNode] = useState<string>("account");

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl">
      {/* FLOW PIPELINE */}
      <div className="connect-pipeline">
        <button
          type="button"
          className={`connect-step-node${selectedNode === "you" ? " is-active" : ""}`}
          onClick={() => setSelectedNode("you")}
        >
          <User />
          <strong>YOU</strong>
          <small className="text-[10px] text-slate-500">The Human User</small>
        </button>

        <span className="connect-arrow">&rarr;</span>

        <button
          type="button"
          className={`connect-step-node${selectedNode === "account" ? " is-active" : ""}`}
          onClick={() => setSelectedNode("account")}
        >
          <Shield />
          <strong>ACCOUNT</strong>
          <small className="text-[10px] text-slate-500">Email, Password, 2FA</small>
        </button>

        <span className="connect-arrow">&rarr;</span>

        <button
          type="button"
          className={`connect-step-node${selectedNode === "service" ? " is-active" : ""}`}
          onClick={() => setSelectedNode("service")}
        >
          <Globe />
          <strong>INTERNET SERVICE</strong>
          <small className="text-[10px] text-slate-500">Web App / Portal</small>
        </button>

        <span className="connect-arrow">&rarr;</span>

        <button
          type="button"
          className={`connect-step-node${selectedNode === "cloud" ? " is-active" : ""}`}
          onClick={() => setSelectedNode("cloud")}
        >
          <Cloud />
          <strong>CLOUD STORAGE</strong>
          <small className="text-[10px] text-slate-500">Files &amp; Settings</small>
        </button>
      </div>

      {/* CONNECTED DEVICES ROW */}
      <div className="flex justify-around items-center w-full max-w-md p-3 bg-white border-2 border-slate-900 rounded-lg shadow-sm">
        <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-700">
          <Laptop className="w-6 h-6 text-blue-600" /> Laptop
        </div>
        <span className="text-slate-400 font-bold">&bull;</span>
        <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-700">
          <Smartphone className="w-6 h-6 text-emerald-600" /> Phone
        </div>
        <span className="text-slate-400 font-bold">&bull;</span>
        <div className="flex flex-col items-center gap-1 text-xs font-bold text-slate-700">
          <Tablet className="w-6 h-6 text-purple-600" /> Tablet
        </div>
      </div>

      <div className="p-3 bg-white border-2 border-slate-900 rounded text-center text-xs font-semibold text-slate-800 w-full max-w-xl">
        {selectedNode === "you" && "You create an account so websites recognize you."}
        {selectedNode === "account" && "Your email, password, and 2FA protect your identity."}
        {selectedNode === "service" && "The online service verifies who you are and grants access."}
        {selectedNode === "cloud" && "Cloud storage syncs your files across your laptop, phone, and tablet."}
      </div>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
