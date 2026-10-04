"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bluetooth,
  Calculator,
  Check,
  Clipboard,
  ClipboardCheck,
  Copy,
  Download,
  FileImage,
  FileText,
  Folder,
  FolderPlus,
  Globe,
  HardDrive,
  Home,
  Keyboard,
  Layers,
  Monitor,
  MousePointer2,
  Music,
  Palette,
  RotateCcw,
  Settings,
  Smartphone,
  Trash2,
  Volume2,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";
import { Desktop, WindowFrame, FileIcon, FolderIcon, type TaskbarApp } from "@/components/computer-ui";

export function UsingAComputerPresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "The Desktop",
      description: "The desktop is your main workspace.",
      visual: <DesktopSlide />,
    },
    {
      title: "Files",
      description: "A file is something saved on your computer.",
      visual: <FilesSlide />,
    },
    {
      title: "Folders",
      description: "Folders help organize your files.",
      visual: <FoldersSlide />,
    },
    {
      title: "Moving Files",
      description: "Files can be moved between folders.",
      visual: <MovingFilesSlide />,
    },
    {
      title: "Downloads",
      description: "Downloading brings a file from the internet to your device.",
      visual: <DownloadsSlide />,
    },
    {
      title: "Apps",
      description: "Apps are programs that help you do things.",
      visual: <AppsSlide />,
    },
    {
      title: "Installing an App",
      description: "Installing adds an app to your computer.",
      visual: <InstallingAppSlide />,
    },
    {
      title: "Copy & Paste",
      description: "Copy and paste lets you duplicate text or files without typing them again.",
      visual: <CopyPasteSlide />,
    },
    {
      title: "Keyboard Shortcuts",
      description: "Keyboard shortcuts let you do actions quickly using keys.",
      visual: <KeyboardShortcutsSlide />,
    },
    {
      title: "Task Manager",
      description: "Task Manager shows what is running on your computer.",
      visual: <TaskManagerSlide />,
    },
    {
      title: "Settings",
      description: "Settings let you change how your computer works.",
      visual: <SettingsSlide />,
    },
    {
      title: "How It All Fits Together",
      description: "Everything in your computer works together as a system.",
      visual: <EverythingTogetherSlide />,
    },
  ];

  return <SlideDeck topic="Using a Computer" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — THE DESKTOP
   ========================================================================== */
type DesktopIconId = "folder" | "browser" | "settings" | "recycle";

const desktopIconsData: Record<DesktopIconId, { name: string; type: string; info: string; icon: React.ReactNode }> = {
  folder: {
    name: "Eesa's Files",
    type: "Folder",
    info: "Your personal folder storing homework, drawings, and projects.",
    icon: <Folder className="text-amber-500" />,
  },
  browser: {
    name: "Browser",
    type: "Application",
    info: "Used to surf the web and visit websites on the internet.",
    icon: <Globe className="text-blue-600" />,
  },
  settings: {
    name: "Settings",
    type: "System Tool",
    info: "Lets you adjust screen brightness, sound volume, and Wi-Fi.",
    icon: <Settings className="text-slate-600" />,
  },
  recycle: {
    name: "Recycle Bin",
    type: "System Folder",
    info: "Temporarily holds deleted files so you can restore or remove them.",
    icon: <Trash2 className="text-emerald-600" />,
  },
};

function DesktopSlide() {
  const [selected, setSelected] = useState<DesktopIconId>("folder");
  const activeItem = desktopIconsData[selected];

  const taskbarApps: TaskbarApp[] = [
    { id: "browser", name: "Browser", icon: <Globe />, isOpen: true, active: selected === "browser" },
    { id: "folder", name: "Files", icon: <Folder />, isOpen: true, active: selected === "folder" },
    { id: "settings", name: "Settings", icon: <Settings />, isOpen: false, active: selected === "settings" },
  ];

  return (
    <div className="desktop-slide-layout">
      <div className="os-desktop-frame">
        <Desktop apps={taskbarApps}>
          <div className="os-desktop-icons">
            {(Object.keys(desktopIconsData) as DesktopIconId[]).map((key) => {
              const item = desktopIconsData[key];
              const isSelected = selected === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`os-desktop-icon-btn${isSelected ? " is-selected" : ""}`}
                  onClick={() => setSelected(key)}
                  aria-label={item.name}
                >
                  <span className="os-desktop-icon-glyph">{item.icon}</span>
                  <span className="os-desktop-icon-name">{item.name}</span>
                </button>
              );
            })}
          </div>
        </Desktop>
      </div>

      <div className="desktop-info-card">
        <span className="desktop-info-badge">
          <MousePointer2 className="w-3.5 h-3.5 text-blue-600" />
          CLICKED ICON
        </span>
        <strong>{activeItem.name}</strong>
        <span className="font-bold text-xs uppercase tracking-wider text-blue-600">
          Type: {activeItem.type}
        </span>
        <p>{activeItem.info}</p>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — FILES
   ========================================================================== */
type FileItemId = "photo" | "homework" | "video" | "notes" | "book";

const filesData: Record<
  FileItemId,
  { name: string; ext: string; type: string; desc: string; category: "image" | "doc" | "video" | "text" | "pdf" }
> = {
  photo: {
    name: "photo.jpg",
    ext: ".jpg",
    type: "Image",
    desc: "A digital picture or photo taken with a camera.",
    category: "image",
  },
  homework: {
    name: "homework.docx",
    ext: ".docx",
    type: "Word Document",
    desc: "A text document for school assignments and essays.",
    category: "doc",
  },
  video: {
    name: "video.mp4",
    ext: ".mp4",
    type: "Video",
    desc: "A video file with sound and moving pictures.",
    category: "video",
  },
  notes: {
    name: "notes.txt",
    ext: ".txt",
    type: "Text File",
    desc: "Plain text words without fancy fonts or formatting.",
    category: "text",
  },
  book: {
    name: "book.pdf",
    ext: ".pdf",
    type: "PDF Document",
    desc: "A printable electronic book or worksheet.",
    category: "pdf",
  },
};

function FilesSlide() {
  const [selected, setSelected] = useState<FileItemId>("photo");
  const activeFile = filesData[selected];

  return (
    <div className="files-slide-layout">
      <WindowFrame title="File Explorer — My Documents" icon={<Folder className="text-amber-500" />}>
        <div className="explorer-toolbar">
          <div className="explorer-breadcrumb">
            <Folder className="w-4 h-4 text-amber-500" />
            <span>This PC &gt; Documents &gt; My Files</span>
          </div>
          <span className="text-xs font-bold text-slate-500">5 files</span>
        </div>

        <div className="files-grid-wrap">
          {(Object.keys(filesData) as FileItemId[]).map((key) => {
            const file = filesData[key];
            return (
              <FileIcon
                key={key}
                name={file.name}
                category={file.category}
                selected={selected === key}
                onClick={() => setSelected(key)}
              />
            );
          })}
        </div>
      </WindowFrame>

      <div className="file-inspector-card">
        <span className="file-type-pill">FILE DETAILS</span>
        <h3>{activeFile.name.toUpperCase()}</h3>
        <div className="file-ext-display">
          <span>Extension:</span>
          <strong>{activeFile.ext}</strong>
        </div>
        <div className="text-sm font-bold text-blue-700">
          Type: {activeFile.type}
        </div>
        <p className="text-xs text-slate-600 m-0 leading-relaxed">{activeFile.desc}</p>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — FOLDERS
   ========================================================================== */
type ViewMode = "root" | "projects";

function FoldersSlide() {
  const [view, setView] = useState<ViewMode>("root");
  const [hasNewFolder, setHasNewFolder] = useState(false);
  const [isRenamed, setIsRenamed] = useState(false);

  function handleCreateFolder() {
    setHasNewFolder(true);
    setIsRenamed(false);
  }

  function handleRename() {
    setIsRenamed(true);
  }

  function handleReset() {
    setView("root");
    setHasNewFolder(false);
    setIsRenamed(false);
  }

  return (
    <div className="folders-slide-layout">
      <WindowFrame title="File Explorer — Eesa's Files" icon={<Folder className="text-amber-500" />}>
        <div className="explorer-toolbar">
          <div className="explorer-breadcrumb">
            <Folder className="w-4 h-4 text-amber-500" />
            {view === "root" ? (
              <span>This PC &gt; Eesa&apos;s Files</span>
            ) : (
              <span>This PC &gt; Eesa&apos;s Files &gt; Projects</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {view === "projects" && (
              <button
                type="button"
                className="explorer-btn"
                onClick={() => setView("root")}
              >
                &larr; Back
              </button>
            )}

            {view === "root" && !hasNewFolder && (
              <button
                type="button"
                className="explorer-btn is-accent"
                onClick={handleCreateFolder}
              >
                <FolderPlus /> NEW FOLDER
              </button>
            )}

            {(hasNewFolder || view === "projects") && (
              <button type="button" className="explorer-btn" onClick={handleReset}>
                <RotateCcw /> Reset
              </button>
            )}
          </div>
        </div>

        {hasNewFolder && view === "root" && !isRenamed && (
          <div className="new-folder-notice mx-4 my-2">
            <span>Created &ldquo;New Folder&rdquo;!</span>
            <button
              type="button"
              className="px-3 py-1 bg-amber-400 border border-amber-600 rounded text-xs font-black cursor-pointer hover:bg-amber-300"
              onClick={handleRename}
            >
              Rename to &ldquo;My Project&rdquo; &rarr;
            </button>
          </div>
        )}

        <div className="folders-grid">
          {view === "root" ? (
            <>
              <FolderIcon name="School" itemCount={6} />
              <FolderIcon name="Photos" itemCount={12} />
              <FolderIcon name="Games" itemCount={4} />
              <FolderIcon
                name="Projects"
                itemCount={3}
                selected
                onClick={() => setView("projects")}
              />

              {hasNewFolder && (
                <FolderIcon
                  name={isRenamed ? "My Project" : "New Folder"}
                  itemCount={0}
                  className={!isRenamed ? "animate-pulse" : ""}
                />
              )}
            </>
          ) : (
            <>
              <FileIcon name="website.html" category="code" />
              <FileIcon name="drawing.png" category="image" />
              <FileIcon name="notes.txt" category="text" />
            </>
          )}
        </div>
      </WindowFrame>

      <div className="flex items-center justify-between text-xs text-slate-600 px-2 font-semibold">
        <span>
          {view === "root"
            ? "Click 'Projects' to see the files inside it."
            : "Showing files inside Projects folder."}
        </span>
        {view === "root" && !hasNewFolder && (
          <span className="text-blue-600 font-bold">Try clicking &ldquo;+ NEW FOLDER&rdquo; above!</span>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — MOVING FILES
   ========================================================================== */
function MovingFilesSlide() {
  const [state, setState] = useState<"initial" | "moved" | "copied">("initial");

  return (
    <div className="moving-files-layout">
      <div className="moving-folders-row">
        {/* DOWNLOADS FOLDER */}
        <div className="folder-box">
          <div className="folder-box-header">
            <span className="flex items-center gap-1.5">
              <Folder className="w-4 h-4 text-amber-500" /> Downloads
            </span>
            <span>{state === "moved" ? "0 files" : "1 file"}</span>
          </div>
          <div className="folder-box-content">
            {state === "moved" ? (
              <span className="empty-folder-hint">(Folder is empty)</span>
            ) : (
              <FileIcon name="cat.jpg" category="image" selected={state === "initial"} />
            )}
          </div>
        </div>

        {/* TRANSFER COLUMN */}
        <div className="transfer-arrow-col">
          <span className="transfer-badge">
            {state === "initial" && "READY"}
            {state === "moved" && "MOVED &rarr;"}
            {state === "copied" && "COPIED &rarr;"}
          </span>
          <ArrowRight className="w-8 h-8 text-blue-600" />
        </div>

        {/* PHOTOS FOLDER */}
        <div className="folder-box">
          <div className="folder-box-header">
            <span className="flex items-center gap-1.5">
              <Folder className="w-4 h-4 text-amber-500" /> Photos
            </span>
            <span>{state === "initial" ? "0 files" : "1 file"}</span>
          </div>
          <div className="folder-box-content">
            {state === "initial" ? (
              <span className="empty-folder-hint">(Folder is empty)</span>
            ) : (
              <FileIcon name="cat.jpg" category="image" selected />
            )}
          </div>
        </div>
      </div>

      <div className="moving-controls">
        <button
          type="button"
          className="demo-button"
          onClick={() => setState("moved")}
        >
          MOVE FILE
        </button>
        <button
          type="button"
          className="demo-button"
          onClick={() => setState("copied")}
        >
          COPY FILE
        </button>
        <button
          type="button"
          className="deck-controls button"
          onClick={() => setState("initial")}
        >
          <RotateCcw /> Reset
        </button>
      </div>

      <div className="moving-explainer">
        {state === "initial" && (
          <span>Select <strong>MOVE FILE</strong> to transfer the file, or <strong>COPY FILE</strong> to duplicate it.</span>
        )}
        {state === "moved" && (
          <span className="text-blue-800">
            <strong>MOVED:</strong> cat.jpg left Downloads and moved into Photos. Only 1 file exists.
          </span>
        )}
        {state === "copied" && (
          <span className="text-emerald-800">
            <strong>COPIED:</strong> Original cat.jpg stays in Downloads, and a brand new copy is in Photos (2 files total).
          </span>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — DOWNLOADS
   ========================================================================== */
function DownloadsSlide() {
  const [downloaded, setDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  function startDownload() {
    setIsDownloading(true);
    setDownloaded(false);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloaded(true);
    }, 1200);
  }

  function reset() {
    setDownloaded(false);
    setIsDownloading(false);
  }

  return (
    <div className="downloads-slide-layout">
      <div className="downloads-flow">
        {/* INTERNET WEBPAGE */}
        <div className="browser-mock">
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="browser-url">https://catphotos-online.com/cats</div>
          </div>
          <div className="browser-page-content">
            <div className="web-image-preview">
              <FileImage className="w-8 h-8 text-emerald-600 mb-1" />
              <span>picture.jpg</span>
            </div>
            <button
              type="button"
              className="demo-button"
              onClick={startDownload}
              disabled={isDownloading}
            >
              <Download /> DOWNLOAD
            </button>
          </div>
        </div>

        {/* TRAVEL PATH */}
        <div className="download-pipe">
          <span className="text-[10px] font-black uppercase text-slate-500">Internet &darr;</span>
          <div className={`download-packet${isDownloading ? " is-animating" : ""}`}>
            {isDownloading ? "DOWNLOADING..." : "DATA PIPE"}
          </div>
          <span className="text-[10px] font-black uppercase text-slate-500">&darr; Your Computer</span>
        </div>

        {/* LOCAL COMPUTER DOWNLOADS */}
        <div className="folder-box">
          <div className="folder-box-header">
            <span className="flex items-center gap-1.5">
              <Folder className="w-4 h-4 text-amber-500" /> Downloads Folder
            </span>
            <span className="text-xs font-bold text-slate-500">
              {downloaded ? "1 item" : "0 items"}
            </span>
          </div>
          <div className="folder-box-content">
            {downloaded ? (
              <div className="flex flex-col items-center gap-2">
                <FileIcon name="picture.jpg" category="image" selected />
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  <Check className="w-3 h-3" /> Saved on device
                </span>
              </div>
            ) : isDownloading ? (
              <span className="text-xs font-bold text-blue-600 animate-pulse">
                Transferring from web...
              </span>
            ) : (
              <span className="empty-folder-hint">Waiting for download...</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3">
        {downloaded && (
          <button type="button" className="explorer-btn" onClick={reset}>
            <RotateCcw /> Reset Demonstration
          </button>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — APPS
   ========================================================================== */
type AppId = "calc" | "browser" | "paint" | "music" | "settings";

function AppsSlide() {
  const [openApp, setOpenApp] = useState<AppId>("calc");
  const [calcDisplay, setCalcDisplay] = useState("42 + 8 = 50");
  const [activeColor, setActiveColor] = useState("#ef4444");
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="apps-slide-layout">
      {/* APP SHELF */}
      <div className="apps-shelf">
        <button
          type="button"
          className={`app-shelf-btn${openApp === "calc" ? " is-active" : ""}`}
          onClick={() => setOpenApp("calc")}
        >
          <span className="app-shelf-icon"><Calculator /></span>
          <b>Calculator</b>
        </button>

        <button
          type="button"
          className={`app-shelf-btn${openApp === "browser" ? " is-active" : ""}`}
          onClick={() => setOpenApp("browser")}
        >
          <span className="app-shelf-icon"><Globe /></span>
          <b>Browser</b>
        </button>

        <button
          type="button"
          className={`app-shelf-btn${openApp === "paint" ? " is-active" : ""}`}
          onClick={() => setOpenApp("paint")}
        >
          <span className="app-shelf-icon"><Palette /></span>
          <b>Drawing</b>
        </button>

        <button
          type="button"
          className={`app-shelf-btn${openApp === "music" ? " is-active" : ""}`}
          onClick={() => setOpenApp("music")}
        >
          <span className="app-shelf-icon"><Music /></span>
          <b>Music</b>
        </button>

        <button
          type="button"
          className={`app-shelf-btn${openApp === "settings" ? " is-active" : ""}`}
          onClick={() => setOpenApp("settings")}
        >
          <span className="app-shelf-icon"><Settings /></span>
          <b>Settings</b>
        </button>
      </div>

      {/* MINI APPLICATION WINDOW */}
      <div className="app-window-container">
        {openApp === "calc" && (
          <WindowFrame title="Calculator" icon={<Calculator className="text-blue-600" />}>
            <div className="mini-calc-body">
              <div className="calc-screen">{calcDisplay}</div>
              <div className="calc-pad">
                {["7", "8", "9", "/"].map((k) => (
                  <button key={k} type="button" onClick={() => setCalcDisplay((c) => c + k)}>{k}</button>
                ))}
                {["4", "5", "6", "*"].map((k) => (
                  <button key={k} type="button" onClick={() => setCalcDisplay((c) => c + k)}>{k}</button>
                ))}
                {["1", "2", "3", "-"].map((k) => (
                  <button key={k} type="button" onClick={() => setCalcDisplay((c) => c + k)}>{k}</button>
                ))}
                {["C", "0", "=", "+"].map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      if (k === "C") setCalcDisplay("0");
                      else if (k === "=") setCalcDisplay("100");
                      else setCalcDisplay((c) => (c === "0" ? k : c + k));
                    }}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          </WindowFrame>
        )}

        {openApp === "browser" && (
          <WindowFrame title="Web Browser" icon={<Globe className="text-blue-600" />}>
            <div className="explorer-toolbar">
              <div className="browser-url">https://eesabyte.com/adventure</div>
            </div>
            <div className="p-6 text-center bg-slate-50 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Globe className="w-9 h-9" />
              </div>
              <h4 className="m-0 font-black text-lg text-slate-900">Welcome to Eesa Byte Web!</h4>
              <p className="text-xs text-slate-600 max-w-sm m-0">
                This browser window allows you to view websites from all over the world.
              </p>
            </div>
          </WindowFrame>
        )}

        {openApp === "paint" && (
          <WindowFrame title="Paint &amp; Draw" icon={<Palette className="text-purple-600" />}>
            <div className="mini-paint-body">
              <div className="paint-palette">
                {["#ef4444", "#3b82f6", "#eab308", "#22c55e", "#a855f7"].map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`paint-color-swatch${activeColor === color ? " is-active" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setActiveColor(color)}
                    aria-label={`Color ${color}`}
                  />
                ))}
              </div>
              <div className="paint-canvas" style={{ color: activeColor }}>
                <span>Selected Color: {activeColor} (Draw Canvas Ready!)</span>
              </div>
            </div>
          </WindowFrame>
        )}

        {openApp === "music" && (
          <WindowFrame title="Music Player" icon={<Music className="text-emerald-600" />}>
            <div className="mini-music-body">
              <span className="font-extrabold text-sm text-slate-800">Adventure Beats.mp3</span>
              <div className="music-eq-bars">
                {isPlaying && (
                  <>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </>
                )}
              </div>
              <button
                type="button"
                className="demo-button"
                onClick={() => setIsPlaying((p) => !p)}
              >
                {isPlaying ? "PAUSE" : "PLAY"}
              </button>
            </div>
          </WindowFrame>
        )}

        {openApp === "settings" && (
          <WindowFrame title="Settings" icon={<Settings className="text-slate-600" />}>
            <div className="p-6 text-center text-slate-700 text-sm font-bold flex flex-col items-center gap-2">
              <Settings className="w-10 h-10 text-slate-500 animate-spin" style={{ animationDuration: "10s" }} />
              <span>System Settings App Window</span>
              <small className="text-xs text-slate-500">
                Customize your desktop wallpaper, sound, and screen.
              </small>
            </div>
          </WindowFrame>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — INSTALLING AN APP
   ========================================================================== */
type InstallStep = 1 | 2 | 3 | 4;

function InstallingAppSlide() {
  const [step, setStep] = useState<InstallStep>(1);

  return (
    <div className="install-slide-layout">
      {/* SAFETY WARNING */}
      <div className="safety-warning-banner">
        <AlertTriangle />
        <span>Only install apps from places you trust. Always check with an adult first!</span>
      </div>

      {/* PIPELINE STEPPER */}
      <div className="install-stepper">
        <button
          type="button"
          className={`install-step-tab${step === 1 ? " is-active" : ""}`}
          onClick={() => setStep(1)}
        >
          <b>STEP 1</b>
          <span>1. Internet</span>
        </button>

        <button
          type="button"
          className={`install-step-tab${step === 2 ? " is-active" : ""}`}
          onClick={() => setStep(2)}
        >
          <b>STEP 2</b>
          <span>2. Installer</span>
        </button>

        <button
          type="button"
          className={`install-step-tab${step === 3 ? " is-active" : ""}`}
          onClick={() => setStep(3)}
        >
          <b>STEP 3</b>
          <span>3. Computer</span>
        </button>

        <button
          type="button"
          className={`install-step-tab${step === 4 ? " is-active" : ""}`}
          onClick={() => setStep(4)}
        >
          <b>STEP 4</b>
          <span>4. App Ready</span>
        </button>
      </div>

      {/* STAGE VISUAL */}
      <div className="install-stage-card">
        {step === 1 && (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <Globe className="w-8 h-8" />
            </div>
            <div>
              <strong className="text-base uppercase tracking-wide">DRAW APP WEBSITE</strong>
              <p className="text-xs text-slate-600 mt-1">Get the official drawing program for your computer.</p>
            </div>
            <button
              type="button"
              className="demo-button"
              onClick={() => setStep(2)}
            >
              <Download /> DOWNLOAD INSTALLER
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <HardDrive className="w-8 h-8" />
            </div>
            <div>
              <strong className="text-base uppercase tracking-wide">DOWNLOADED INSTALLER FILE</strong>
              <div className="mt-2 font-mono text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-300">
                draw-app-installer.exe
              </div>
            </div>
            <button
              type="button"
              className="demo-button"
              onClick={() => setStep(3)}
            >
              <Zap /> RUN INSTALLER
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center gap-4 text-center w-full max-w-sm">
            <WindowFrame title="Draw App Setup Wizard" icon={<Palette className="text-blue-600" />} className="w-full">
              <div className="p-4 flex flex-col gap-3">
                <span className="text-xs font-bold text-slate-700">Setting up files on computer...</span>
                <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden border border-slate-400">
                  <div className="h-full bg-blue-600 w-3/4 animate-pulse" />
                </div>
                <button
                  type="button"
                  className="demo-button mt-2"
                  onClick={() => setStep(4)}
                >
                  FINISH INSTALLATION &rarr;
                </button>
              </div>
            </WindowFrame>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg">
              <Palette className="w-10 h-10" />
            </div>
            <div>
              <strong className="text-base uppercase tracking-wide text-emerald-700 flex items-center justify-center gap-1.5">
                <Check className="w-5 h-5 text-emerald-600" /> Draw App Appears on Desktop!
              </strong>
              <p className="text-xs text-slate-600 mt-1">
                The program is now installed. You can open and use it anytime!
              </p>
            </div>
            <button
              type="button"
              className="explorer-btn"
              onClick={() => setStep(1)}
            >
              <RotateCcw /> Restart Demonstration
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — COPY & PASTE
   ========================================================================== */
function CopyPasteSlide() {
  const [copied, setCopied] = useState(false);
  const [pasted, setPasted] = useState(false);

  function handleCopy() {
    setCopied(true);
  }

  function handlePaste() {
    if (!copied) return;
    setPasted(true);
  }

  function handleReset() {
    setCopied(false);
    setPasted(false);
  }

  return (
    <div className="copy-paste-layout">
      <div className="copy-paste-row">
        {/* SOURCE DOCUMENT */}
        <div className="doc-paper">
          <div className="doc-header">
            <FileText className="w-4 h-4 text-blue-600" /> Document 1 (Source)
          </div>
          <div className="doc-body">
            <div className="doc-selected-text">Hello Eesa!</div>
            <button
              type="button"
              className="demo-button mt-3"
              onClick={handleCopy}
            >
              <Copy /> COPY (Ctrl + C)
            </button>
          </div>
        </div>

        {/* CLIPBOARD COLUMN */}
        <div className="clipboard-middle-col">
          <div className={`clipboard-visual-card${copied ? " is-holding" : ""}`}>
            <span className="text-[10px] font-black uppercase text-slate-600">CLIPBOARD</span>
            <Clipboard className="w-6 h-6 text-slate-700" />
            <b className="text-xs">{copied ? "REMEMBERED!" : "EMPTY"}</b>
            <span className="shortcut-chip">Ctrl + C</span>
          </div>
          <span className="text-[11px] font-bold text-slate-600 text-center">
            {copied ? "COPY = remember this" : "Click COPY first"}
          </span>
        </div>

        {/* TARGET DOCUMENT */}
        <div className="doc-paper">
          <div className="doc-header">
            <FileText className="w-4 h-4 text-emerald-600" /> Document 2 (Target)
          </div>
          <div className="doc-body">
            {pasted ? (
              <div className="doc-selected-text text-emerald-800 bg-emerald-100 border-emerald-500">
                Hello Eesa!
              </div>
            ) : (
              <span className="text-xs italic text-slate-400">Blank page waiting for paste...</span>
            )}
            <button
              type="button"
              className="demo-button mt-3"
              disabled={!copied}
              onClick={handlePaste}
            >
              <ClipboardCheck /> PASTE (Ctrl + V)
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-2">
        <span className="text-xs font-semibold text-slate-600">
          {pasted
            ? "PASTE = put it here! You duplicated the text without typing it again."
            : "Use the keyboard shortcuts Ctrl + C to copy and Ctrl + V to paste."}
        </span>
        {(copied || pasted) && (
          <button type="button" className="explorer-btn" onClick={handleReset}>
            <RotateCcw /> Reset
          </button>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — KEYBOARD SHORTCUTS
   ========================================================================== */
type ShortcutId = "copy" | "paste" | "undo" | "save" | "altTab" | "winD" | "taskMgr";

const shortcutsData: Record<
  ShortcutId,
  { combo: string; name: string; info: string; keys: string[] }
> = {
  copy: {
    combo: "Ctrl + C",
    name: "Copy",
    info: "Remembers the selected item or text into clipboard memory.",
    keys: ["CTRL", "C"],
  },
  paste: {
    combo: "Ctrl + V",
    name: "Paste",
    info: "Places whatever was remembered into the new location.",
    keys: ["CTRL", "V"],
  },
  undo: {
    combo: "Ctrl + Z",
    name: "Undo",
    info: "Reverses your last mistake or action.",
    keys: ["CTRL", "Z"],
  },
  save: {
    combo: "Ctrl + S",
    name: "Save",
    info: "Saves your changes so you don't lose any work.",
    keys: ["CTRL", "S"],
  },
  altTab: {
    combo: "Alt + Tab",
    name: "Switch Apps",
    info: "Flips quickly between all your currently open windows.",
    keys: ["ALT", "TAB"],
  },
  winD: {
    combo: "Win + D",
    name: "Show Desktop",
    info: "Minimizes all windows instantly to see your desktop.",
    keys: ["WIN", "D"],
  },
  taskMgr: {
    combo: "Ctrl + Shift + Esc",
    name: "Task Manager",
    info: "Opens Task Manager to view or stop running programs.",
    keys: ["CTRL", "SHIFT", "ESC"],
  },
};

function KeyboardShortcutsSlide() {
  const [activeShortcut, setActiveShortcut] = useState<ShortcutId>("copy");
  const current = shortcutsData[activeShortcut];

  function isHighlighted(label: string) {
    return current.keys.includes(label.toUpperCase());
  }

  return (
    <div className="shortcuts-slide-layout">
      {/* SHORTCUT SELECTOR PILLS */}
      <div className="shortcut-buttons-grid">
        {(Object.keys(shortcutsData) as ShortcutId[]).map((key) => {
          const item = shortcutsData[key];
          return (
            <button
              key={key}
              type="button"
              className={`shortcut-pill-btn${activeShortcut === key ? " is-active" : ""}`}
              onClick={() => setActiveShortcut(key)}
            >
              <span>{item.combo}</span>
              <small className="text-slate-600 font-semibold">{item.name}</small>
            </button>
          );
        })}
      </div>

      {/* PHYSICAL KEYBOARD VISUAL */}
      <div className="keyboard-board-visual" role="img" aria-label="Keyboard visual">
        {/* ROW 1 */}
        <div className="keyboard-row">
          <div className={`key-cap${isHighlighted("ESC") ? " is-highlighted" : ""}`}>Esc</div>
          {["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"].map((k) => (
            <div key={k} className="key-cap">{k}</div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="keyboard-row">
          <div className="key-cap">~</div>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="].map((k) => (
            <div key={k} className="key-cap">{k}</div>
          ))}
          <div className="key-cap is-wide">Bksp</div>
        </div>

        {/* ROW 3 */}
        <div className="keyboard-row">
          <div className={`key-cap is-wide${isHighlighted("TAB") ? " is-highlighted" : ""}`}>Tab</div>
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]"].map((k) => (
            <div key={k} className="key-cap">{k}</div>
          ))}
        </div>

        {/* ROW 4 */}
        <div className="keyboard-row">
          <div className="key-cap is-wide">Caps</div>
          {["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"].map((k) => (
            <div
              key={k}
              className={`key-cap${isHighlighted(k) ? " is-highlighted" : ""}`}
            >
              {k}
            </div>
          ))}
          <div className="key-cap is-wide">Enter</div>
        </div>

        {/* ROW 5 */}
        <div className="keyboard-row">
          <div className={`key-cap is-wider${isHighlighted("SHIFT") ? " is-highlighted" : ""}`}>Shift</div>
          {["Z", "X", "C", "V", "B", "N", "M", ",", "."].map((k) => (
            <div
              key={k}
              className={`key-cap${isHighlighted(k) ? " is-highlighted" : ""}`}
            >
              {k}
            </div>
          ))}
          <div className="key-cap is-wider">Shift</div>
        </div>

        {/* ROW 6 */}
        <div className="keyboard-row">
          <div className={`key-cap is-wide${isHighlighted("CTRL") ? " is-highlighted" : ""}`}>Ctrl</div>
          <div className={`key-cap${isHighlighted("WIN") ? " is-highlighted" : ""}`}>Win</div>
          <div className={`key-cap${isHighlighted("ALT") ? " is-highlighted" : ""}`}>Alt</div>
          <div className="key-cap is-space">Space</div>
          <div className="key-cap">Alt</div>
          <div className="key-cap">Win</div>
          <div className={`key-cap is-wide${isHighlighted("CTRL") ? " is-highlighted" : ""}`}>Ctrl</div>
        </div>
      </div>

      {/* CALLOUT ACTION CARD */}
      <div className="shortcut-action-callout">
        <div>
          <strong>{current.combo} &mdash; {current.name}</strong>
          <p>{current.info}</p>
        </div>
        <span className="text-xs font-mono font-black text-blue-700 bg-blue-100 px-3 py-1 rounded">
          KEYS: {current.keys.join(" + ")}
        </span>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — TASK MANAGER
   ========================================================================== */
type RunningAppId = "browser" | "drawing" | "music";

function TaskManagerSlide() {
  const [running, setRunning] = useState<Record<RunningAppId, boolean>>({
    browser: true,
    drawing: true,
    music: true,
  });
  const [selectedApp, setSelectedApp] = useState<RunningAppId | null>("browser");
  const [message, setMessage] = useState<string | null>(null);

  function handleEndTask() {
    if (!selectedApp) return;
    const appNames: Record<RunningAppId, string> = {
      browser: "Web Browser",
      drawing: "Drawing App",
      music: "Music Player",
    };
    const name = appNames[selectedApp];
    setRunning((prev) => ({ ...prev, [selectedApp]: false }));
    setMessage(`${name} closed.`);
    setSelectedApp(null);
  }

  function handleReset() {
    setRunning({ browser: true, drawing: true, music: true });
    setSelectedApp("browser");
    setMessage(null);
  }

  const activeCount = Object.values(running).filter(Boolean).length;

  return (
    <div className="taskmgr-slide-layout">
      <WindowFrame title="Task Manager" icon={<Layers className="text-blue-600" />}>
        {/* STATS HEADER */}
        <div className="taskmgr-header-stats">
          <div className="stat-pill">
            <b>CPU USAGE</b>
            <strong>{activeCount > 0 ? `${activeCount * 8 + 4}%` : "3%"}</strong>
          </div>
          <div className="stat-pill">
            <b>MEMORY USAGE</b>
            <strong>{activeCount > 0 ? `${activeCount * 1.2 + 1.4} GB` : "1.4 GB"} / 8 GB</strong>
          </div>
          <div className="stat-pill">
            <b>RUNNING APPS</b>
            <strong>{activeCount}</strong>
          </div>
        </div>

        {/* TABLE OF RUNNING APPS */}
        <table className="taskmgr-table">
          <thead>
            <tr>
              <th>App Name</th>
              <th>Status</th>
              <th>CPU</th>
              <th>Memory</th>
            </tr>
          </thead>
          <tbody>
            {running.browser && (
              <tr
                className={`taskmgr-row${selectedApp === "browser" ? " is-selected" : ""}`}
                onClick={() => setSelectedApp("browser")}
              >
                <td className="font-bold flex items-center gap-2">
                  <Globe className="w-4 h-4 text-blue-600" /> Web Browser
                </td>
                <td className="text-emerald-700 font-semibold">Running</td>
                <td>18%</td>
                <td>420 MB</td>
              </tr>
            )}

            {running.drawing && (
              <tr
                className={`taskmgr-row${selectedApp === "drawing" ? " is-selected" : ""}`}
                onClick={() => setSelectedApp("drawing")}
              >
                <td className="font-bold flex items-center gap-2">
                  <Palette className="w-4 h-4 text-purple-600" /> Drawing App
                </td>
                <td className="text-emerald-700 font-semibold">Running</td>
                <td>6%</td>
                <td>210 MB</td>
              </tr>
            )}

            {running.music && (
              <tr
                className={`taskmgr-row${selectedApp === "music" ? " is-selected" : ""}`}
                onClick={() => setSelectedApp("music")}
              >
                <td className="font-bold flex items-center gap-2">
                  <Music className="w-4 h-4 text-emerald-600" /> Music Player
                </td>
                <td className="text-emerald-700 font-semibold">Running</td>
                <td>2%</td>
                <td>85 MB</td>
              </tr>
            )}

            {activeCount === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-6 text-slate-400 italic">
                  All demonstration apps closed.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ACTIONS BAR */}
        <div className="taskmgr-actions-bar">
          <span className="text-xs font-semibold text-slate-600">
            {selectedApp ? `Selected: ${selectedApp}` : "Click an app to select it"}
          </span>
          <div className="flex gap-2">
            {activeCount < 3 && (
              <button type="button" className="explorer-btn" onClick={handleReset}>
                <RotateCcw /> Reset Apps
              </button>
            )}
            <button
              type="button"
              className="taskmgr-btn-end"
              disabled={!selectedApp}
              onClick={handleEndTask}
            >
              END TASK
            </button>
          </div>
        </div>
      </WindowFrame>

      {message && (
        <div className="flex items-center justify-between px-4 py-2 bg-emerald-100 border border-emerald-500 rounded text-xs font-bold text-emerald-900">
          <span>&check; {message}</span>
          <button type="button" onClick={() => setMessage(null)} className="cursor-pointer">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   SLIDE 11 — SETTINGS
   ========================================================================== */
type SettingSection = "display" | "sound" | "wifi" | "bluetooth" | "apps" | "storage";

function SettingsSlide() {
  const [section, setSection] = useState<SettingSection>("display");
  const [brightness, setBrightness] = useState(80);
  const [volume, setVolume] = useState(65);
  const [wifiOn, setWifiOn] = useState(true);
  const [bluetoothOn, setBluetoothOn] = useState(true);

  return (
    <div className="settings-slide-layout">
      <WindowFrame title="System Settings" icon={<Settings className="text-blue-600" />}>
        <div className="settings-window-body">
          {/* SIDEBAR NAVIGATION */}
          <nav className="settings-nav-sidebar" aria-label="Settings categories">
            <button
              type="button"
              className={`settings-nav-btn${section === "display" ? " is-active" : ""}`}
              onClick={() => setSection("display")}
            >
              <Monitor className="w-4 h-4" /> Display
            </button>

            <button
              type="button"
              className={`settings-nav-btn${section === "sound" ? " is-active" : ""}`}
              onClick={() => setSection("sound")}
            >
              <Volume2 className="w-4 h-4" /> Sound
            </button>

            <button
              type="button"
              className={`settings-nav-btn${section === "wifi" ? " is-active" : ""}`}
              onClick={() => setSection("wifi")}
            >
              <Wifi className="w-4 h-4" /> Wi-Fi
            </button>

            <button
              type="button"
              className={`settings-nav-btn${section === "bluetooth" ? " is-active" : ""}`}
              onClick={() => setSection("bluetooth")}
            >
              <Bluetooth className="w-4 h-4" /> Bluetooth
            </button>

            <button
              type="button"
              className={`settings-nav-btn${section === "apps" ? " is-active" : ""}`}
              onClick={() => setSection("apps")}
            >
              <Smartphone className="w-4 h-4" /> Apps
            </button>

            <button
              type="button"
              className={`settings-nav-btn${section === "storage" ? " is-active" : ""}`}
              onClick={() => setSection("storage")}
            >
              <HardDrive className="w-4 h-4" /> Storage
            </button>
          </nav>

          {/* DETAIL CONTENT PANE */}
          <div className="settings-detail-pane">
            {section === "display" && (
              <>
                <h3>Display Settings</h3>
                <div className="setting-row">
                  <div>
                    <strong className="text-sm block">Screen Brightness</strong>
                    <small className="text-xs text-slate-500">Change how bright the screen looks</small>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={brightness}
                      onChange={(e) => setBrightness(Number(e.target.value))}
                      className="setting-slider"
                      aria-label="Screen brightness"
                    />
                    <span className="font-mono text-xs font-bold">{brightness}%</span>
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg border-2 border-slate-300 text-center font-bold text-xs"
                  style={{
                    backgroundColor: `rgba(255, 255, 255, ${brightness / 100})`,
                    filter: `brightness(${brightness}%)`,
                  }}
                >
                  Screen Preview Box ({brightness}% Brightness)
                </div>
              </>
            )}

            {section === "sound" && (
              <>
                <h3>Sound Settings</h3>
                <div className="setting-row">
                  <div>
                    <strong className="text-sm block">Master Volume</strong>
                    <small className="text-xs text-slate-500">Speaker output level</small>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="setting-slider"
                      aria-label="Master volume"
                    />
                    <span className="font-mono text-xs font-bold">{volume}%</span>
                  </div>
                </div>
              </>
            )}

            {section === "wifi" && (
              <>
                <h3>Wi-Fi Network</h3>
                <div className="setting-row">
                  <div>
                    <strong className="text-sm block">Wi-Fi Wireless Connection</strong>
                    <small className="text-xs text-slate-500">Connect to your home router</small>
                  </div>
                  <button
                    type="button"
                    className={`setting-toggle-btn${wifiOn ? " is-on" : ""}`}
                    onClick={() => setWifiOn((w) => !w)}
                  >
                    {wifiOn ? "ON" : "OFF"}
                  </button>
                </div>

                {wifiOn && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs font-bold text-blue-900 flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-blue-600" />
                    <span>Home_Fast_WiFi &mdash; Connected, Secured</span>
                  </div>
                )}
              </>
            )}

            {section === "bluetooth" && (
              <>
                <h3>Bluetooth</h3>
                <div className="setting-row">
                  <div>
                    <strong className="text-sm block">Bluetooth Wireless Devices</strong>
                    <small className="text-xs text-slate-500">Connect mouse, keyboard, or headphones</small>
                  </div>
                  <button
                    type="button"
                    className={`setting-toggle-btn${bluetoothOn ? " is-on" : ""}`}
                    onClick={() => setBluetoothOn((b) => !b)}
                  >
                    {bluetoothOn ? "ON" : "OFF"}
                  </button>
                </div>

                {bluetoothOn && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs font-bold text-slate-700 flex items-center gap-2">
                    <Bluetooth className="w-4 h-4 text-blue-600" />
                    <span>Wireless Mouse &mdash; Connected (Battery 95%)</span>
                  </div>
                )}
              </>
            )}

            {section === "apps" && (
              <>
                <h3>Installed Apps</h3>
                <div className="flex flex-col gap-2">
                  <div className="setting-row">
                    <span className="font-bold text-xs">Web Browser</span>
                    <span className="font-mono text-xs text-slate-500">140 MB</span>
                  </div>
                  <div className="setting-row">
                    <span className="font-bold text-xs">Paint &amp; Draw</span>
                    <span className="font-mono text-xs text-slate-500">85 MB</span>
                  </div>
                  <div className="setting-row">
                    <span className="font-bold text-xs">Calculator</span>
                    <span className="font-mono text-xs text-slate-500">12 MB</span>
                  </div>
                </div>
              </>
            )}

            {section === "storage" && (
              <>
                <h3>Storage</h3>
                <div className="setting-row">
                  <div>
                    <strong className="text-sm block">Local Disk (C:)</strong>
                    <small className="text-xs text-slate-500">120 GB Used of 500 GB (380 GB Free)</small>
                  </div>
                </div>

                <div className="storage-bar-wrap">
                  <div className="storage-bar-used" style={{ width: "24%" }} />
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span className="text-blue-600">120 GB Used</span>
                  <span>380 GB Free</span>
                </div>
              </>
            )}
          </div>
        </div>
      </WindowFrame>
    </div>
  );
}

/* ==========================================================================
   SLIDE 12 — HOW IT ALL FITS TOGETHER
   ========================================================================== */
type TogetherId = "desktop" | "files" | "internet" | "settings" | "taskmgr" | "shortcuts";

const togetherItems: Record<
  TogetherId,
  { from: string; to: string; desc: string; icon: React.ReactNode }
> = {
  desktop: {
    from: "DESKTOP",
    to: "APPS",
    desc: "Your visual workspace where you launch all your programs.",
    icon: <Monitor />,
  },
  files: {
    from: "FILES",
    to: "FOLDERS",
    desc: "Your saved creations neatly organized into labeled folders.",
    icon: <Folder />,
  },
  internet: {
    from: "INTERNET",
    to: "DOWNLOADS",
    desc: "Bringing pictures, apps, and documents safely onto your device.",
    icon: <Download />,
  },
  settings: {
    from: "SETTINGS",
    to: "CONTROL COMPUTER",
    desc: "Adjusting your screen, volume, Wi-Fi, and storage.",
    icon: <Settings />,
  },
  taskmgr: {
    from: "TASK MANAGER",
    to: "RUNNING APPS",
    desc: "Viewing and stopping whatever is currently open.",
    icon: <Layers />,
  },
  shortcuts: {
    from: "SHORTCUTS",
    to: "WORK FASTER",
    desc: "Using smart key combinations like Ctrl+C and Ctrl+V.",
    icon: <Keyboard />,
  },
};

function EverythingTogetherSlide() {
  const [selected, setSelected] = useState<TogetherId>("desktop");

  return (
    <div className="together-slide-layout">
      <div className="together-grid">
        {(Object.keys(togetherItems) as TogetherId[]).map((key) => {
          const item = togetherItems[key];
          const isSelected = selected === key;
          return (
            <button
              key={key}
              type="button"
              className={`together-card${isSelected ? " is-active" : ""}`}
              onClick={() => setSelected(key)}
            >
              <div className="together-card-header">
                <strong>{item.from}</strong>
                <span className="together-card-arrow">&rarr;</span>
              </div>
              <b>{item.to}</b>
              <p>{item.desc}</p>
            </button>
          );
        })}
      </div>

      <div className="together-home-row">
        <Link href="/" className="together-home-btn">
          <Home className="w-5 h-5" /> BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
