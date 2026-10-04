"use client";

import { useState } from "react";
import {
  Cpu,
  Fan,
  HardDrive,
  Keyboard,
  Monitor,
  Mouse,
  PlugZap,
  Power,
  RotateCcw,
  Save,
  Speaker,
  Tv,
  Zap,
} from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

type PartId = "motherboard" | "cpu" | "ram" | "ssd" | "gpu" | "psu" | "cooling";

const partCopy: Record<PartId, { label: string; text: string; location: string }> = {
  motherboard: {
    label: "Motherboard",
    text: "The main circuit board that connects all the computer's parts together.",
    location: "Sits flat against the inside wall of the case.",
  },
  cpu: {
    label: "CPU",
    text: "Follows instructions and processes information billions of times a second.",
    location: "Installed directly in the socket in the center of the motherboard.",
  },
  ram: {
    label: "RAM",
    text: "Fast working memory that holds apps and files you are using right now.",
    location: "Clicks vertically into the slots right next to the CPU.",
  },
  ssd: {
    label: "SSD",
    text: "Permanent storage that keeps your operating system, games and photos forever.",
    location: "Fast M.2 stick screwed directly onto the motherboard.",
  },
  gpu: {
    label: "GPU",
    text: "A graphics card with dedicated processors to draw 3D visuals and games.",
    location: "Slots horizontally into the long PCIe slot below the CPU.",
  },
  psu: {
    label: "Power Supply",
    text: "Takes electricity from the wall and sends safe power to every part.",
    location: "Housed at the very bottom of the case inside its own compartment.",
  },
  cooling: {
    label: "Cooling",
    text: "Fans and metal heatsinks that carry hot air away so parts don't overheat.",
    location: "Mounted on top of the CPU and along the case airflow vents.",
  },
};

export function HardwarePresentation() {
  const slides: TeachingSlide[] = [
    {
      title: "Complete computer",
      description: "A complete computer setup combines the tower, monitor, keyboard, and mouse.",
      visual: <CompleteSetup />,
    },
    {
      title: "Open the computer",
      description: "Inside the case are the electronic parts that do the computer's work.",
      visual: <OpenComputer />,
    },
    {
      title: "Motherboard",
      description: "The motherboard is the big circuit board connecting all components.",
      visual: <MotherboardDemo />,
    },
    {
      title: "CPU",
      description: "The CPU follows instructions and processes information.",
      visual: <CpuDemo />,
    },
    {
      title: "RAM",
      description: "RAM holds information the computer is using right now.",
      visual: <RamDemo />,
    },
    {
      title: "SSD",
      description: "The SSD keeps your files, apps and system permanently.",
      visual: <SsdDemo />,
    },
    {
      title: "GPU",
      description: "The GPU helps create graphics and images for your screen.",
      visual: <GpuDemo />,
    },
    {
      title: "Power supply",
      description: "The power supply gives electricity to all the computer parts.",
      visual: <PowerDemo />,
    },
    {
      title: "Cooling",
      description: "Cooling removes heat and keeps the computer safe.",
      visual: <CoolingDemo />,
    },
    {
      title: "Everything together",
      description: "Click a part to highlight it and see what it does.",
      visual: <PcExplorer />,
    },
    {
      title: "Ports & connections",
      description: "Ports connect the computer to cables and devices.",
      visual: <PortsDemo />,
    },
  ];
  return <SlideDeck topic="Hardware" slides={slides} />;
}

/* ==========================================================================
   SLIDE 1 — COMPLETE COMPUTER
   ========================================================================== */
function CompleteSetup() {
  return (
    <div className="complete-setup">
      <div className="setup-monitor">
        <Monitor />
        <span>EESA BYTE</span>
      </div>
      <div className="setup-tower">
        <Power />
        <b>Computer tower</b>
      </div>
      <div className="setup-desk" />
      <div className="setup-keyboard">
        <Keyboard />
        <b>Keyboard</b>
      </div>
      <div className="setup-mouse">
        <Mouse />
        <b>Mouse</b>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 2 — OPEN COMPUTER
   ========================================================================== */
function OpenComputer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="open-computer-demo">
      <PcInterior panelOpen={open} />
      <button
        className="demo-button"
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Close side panel" : "Open side panel"}
      </button>
    </div>
  );
}

/* ==========================================================================
   PC INTERIOR (COMMON CHASSIS VISUAL)
   ========================================================================== */
function PcInterior({
  panelOpen = true,
  active,
  interactive = false,
  powered = false,
  fanOn = false,
  onSelect,
}: {
  panelOpen?: boolean;
  active?: PartId;
  interactive?: boolean;
  powered?: boolean;
  fanOn?: boolean;
  onSelect?: (part: PartId) => void;
}) {
  const part = (id: PartId, className: string, children: React.ReactNode) =>
    interactive ? (
      <button
        type="button"
        className={`${className}${active === id ? " is-active" : ""}`}
        onClick={() => onSelect?.(id)}
        aria-label={`Show ${partCopy[id].label}`}
      >
        {children}
      </button>
    ) : (
      <div className={`${className}${active === id ? " is-active" : ""}`}>{children}</div>
    );

  return (
    <div className={`pc-case${panelOpen ? " is-open" : ""}${powered ? " is-powered" : ""}`}>
      <div className="pc-frame">
        {part(
          "motherboard",
          "pc-motherboard",
          <>
            <span className="board-lines" />
            <b>MOTHERBOARD</b>
          </>
        )}
        {part(
          "cpu",
          "pc-cpu",
          <>
            <span className="cpu-text">CPU</span>
            <i />
            <i />
          </>
        )}
        {part(
          "ram",
          "pc-ram",
          <>
            <i />
            <i />
            <b>RAM</b>
          </>
        )}
        {part(
          "gpu",
          "pc-gpu",
          <>
            <span>GPU</span>
            <i />
            <i />
          </>
        )}
        {part(
          "ssd",
          "pc-ssd",
          <>
            <HardDrive className="w-5 h-5 text-blue-500" />
            <span>SSD</span>
          </>
        )}
        {part(
          "psu",
          "pc-psu",
          <>
            <PlugZap className="w-5 h-5 text-amber-400" />
            <span>PSU</span>
          </>
        )}
        {part(
          "cooling",
          `pc-fan${fanOn ? " is-spinning" : ""}`,
          <>
            <Fan className="w-7 h-7 text-sky-400" />
            <span>FAN</span>
          </>
        )}
        {powered && (
          <div className="power-lines">
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
      <div className="pc-panel">
        <span>EB</span>
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 3 — MOTHERBOARD
   ========================================================================== */
function MotherboardDemo() {
  const [highlight, setHighlight] = useState(false);
  return (
    <div className="part-slide-layout">
      <div className={`motherboard-closeup${highlight ? " is-highlighted" : ""}`}>
        <span className="board-paths" />
        <div className="cpu-socket">
          <small>SOCKET</small>
          <span>CPU</span>
        </div>
        <div className="ram-slots">
          <span>DIMM 1</span>
          <span>DIMM 2</span>
          <small>RAM SLOTS</small>
        </div>
        <div className="gpu-slot">
          <span>PCIe x16 GRAPHICS SLOT</span>
        </div>
        <div className="storage-port">
          <span>M.2 SSD</span>
        </div>
        <div className="chipset-block">
          <small>CHIPSET</small>
        </div>
        <div className="io-panel">
          <small>REAR I/O PORTS</small>
        </div>
        <b>MOTHERBOARD</b>
      </div>
      <button
        className="demo-button"
        type="button"
        onClick={() => setHighlight((current) => !current)}
      >
        <Zap /> {highlight ? "Clear highlights" : "Highlight connections"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 4 — CPU
   ========================================================================== */
function CpuDemo() {
  const [installed, setInstalled] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
      <div className="cpu-standalone-stage">
        {/* SOCKET ON BOARD */}
        <div className="cpu-socket-bed">
          <div className="cpu-socket-pin-grid">
            <span className="socket-grid-dots" />
            <span className="socket-label">LGA CPU SOCKET</span>
          </div>
          <div className={`socket-lever${installed ? " is-locked" : ""}`} />
        </div>

        {/* CPU CHIP */}
        <div className={`cpu-chip-visual${installed ? " is-installed" : ""}`}>
          <div className="cpu-heat-spreader">
            <div className="cpu-gold-corner" />
            <Cpu className="w-8 h-8 text-slate-800" />
            <strong className="cpu-brand-text">EESA CORE</strong>
            <small className="cpu-speed-text">8-CORE 3.8 GHz</small>
          </div>
          <div className="cpu-gold-contacts-edge" />
        </div>

        {/* STATUS BADGE */}
        <div className={`cpu-status-tag${installed ? " is-ready" : ""}`}>
          {installed ? "✓ LOCKED IN SOCKET — READY TO PROCESS" : "LIFTED OUT OF SOCKET"}
        </div>
      </div>

      {/* FLOW BANNER */}
      <div className="signal-line">
        <span>INSTRUCTIONS</span>
        <b>→ CPU PROCESSES →</b>
        <span>RESULT</span>
      </div>

      <button
        className="demo-button"
        type="button"
        onClick={() => setInstalled((prev) => !prev)}
      >
        <Cpu /> {installed ? "Lift CPU Out" : "Lower CPU into Socket"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 5 — RAM
   ========================================================================== */
function RamDemo() {
  const [inserted, setInserted] = useState(false);

  return (
    <div className="ram-demo">
      <div className="ram-board-container">
        {/* DIMM SOCKET */}
        <div className="ram-socket-strip">
          <div className={`dimm-clip dimm-clip-left${inserted ? " is-locked" : ""}`} />
          <div className="dimm-slot-channel">
            <span className="dimm-key-notch" />
          </div>
          <div className={`dimm-clip dimm-clip-right${inserted ? " is-locked" : ""}`} />
          <span className="ram-socket-label">DDR4 RAM SLOT</span>
        </div>

        {/* RAM STICK */}
        <div className={`gamer-ram-stick${inserted ? " is-inserted" : ""}`}>
          <div className="ram-stick-heatspreader">
            <div className="ram-brand">EESA RAM 16GB</div>
            <div className="ram-chips-row">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="ram-gold-fingers">
            <span className="gold-edge-left" />
            <span className="gold-notch-gap" />
            <span className="gold-edge-right" />
          </div>
        </div>
      </div>

      {/* CALLOUT BADGE */}
      <div className="signal-line">
        <span>RUNNING APPS</span>
        <b>→ FAST WORKING MEMORY (RAM) →</b>
        <span>CPU</span>
      </div>

      <button
        className="demo-button"
        type="button"
        onClick={() => setInserted((current) => !current)}
      >
        <Zap /> {inserted ? "Remove RAM Stick" : "Click RAM into Slot"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 6 — SSD
   ========================================================================== */
function SsdDemo() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="ssd-demo-wrapper">
      <div className="ssd-comparison-row">
        {/* FILE TOKEN */}
        <div className={`ssd-file-badge${saved ? " is-saved" : ""}`}>
          <span>PHOTO.JPG</span>
          <small>5.2 MB</small>
        </div>

        <span className="hardware-arrow">→</span>

        {/* M.2 NVMe SSD STICK */}
        <div className="m2-ssd-stick">
          <div className="m2-screw-hole" />
          <div className="m2-label">
            <strong>FAST NVMe SSD</strong>
            <small>1,000 GB STORAGE</small>
          </div>
          <div className="m2-controller-chip">
            <small>CONTROLLER</small>
          </div>
          <div className="m2-nand-chips">
            <div className={`nand-block${saved ? " is-written" : ""}`}>
              <span>3D NAND</span>
            </div>
            <div className={`nand-block${saved ? " is-written" : ""}`}>
              <span>3D NAND</span>
            </div>
          </div>
          <div className="m2-gold-connector" />
        </div>
      </div>

      <div className="signal-line">
        <span>PERMANENT:</span>
        <b>FILES STAY SAVED EVEN WHEN POWER IS OFF</b>
      </div>

      <button
        className="demo-button"
        type="button"
        onClick={() => setSaved((current) => !current)}
      >
        <Save /> {saved ? "Reset file demo" : "Save file to SSD"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 7 — GPU
   ========================================================================== */
function GpuDemo() {
  const [poweredOn, setPoweredOn] = useState(false);

  return (
    <div className="gpu-demo-wrapper">
      <div className="gpu-card-stage">
        {/* REAR BRACKET */}
        <div className="gpu-metal-bracket">
          <span className="bracket-port">HDMI</span>
          <span className="bracket-port">DP</span>
        </div>

        {/* MAIN GRAPHICS CARD */}
        <div className={`desktop-gpu-card${poweredOn ? " is-active" : ""}`}>
          <div className="gpu-shroud-top">
            <strong>GEFORCE EESA-RTX</strong>
            <span className={`gpu-rgb-badge${poweredOn ? " is-lit" : ""}`}>RGB ON</span>
          </div>

          <div className="gpu-fans-container">
            <div className={`gpu-fan-hub${poweredOn ? " is-spinning" : ""}`}>
              <Fan className="w-10 h-10 text-slate-300" />
            </div>
            <div className={`gpu-fan-hub${poweredOn ? " is-spinning" : ""}`}>
              <Fan className="w-10 h-10 text-slate-300" />
            </div>
          </div>

          {/* PCIE GOLD CONNECTOR */}
          <div className="gpu-pcie-gold-pins" />
        </div>

        {/* MONITOR DISPLAY TARGET */}
        <div className={`gpu-monitor-target${poweredOn ? " is-active" : ""}`}>
          <Tv className="w-6 h-6 text-blue-500" />
          <span>{poweredOn ? "60 FPS 3D GRAPHICS" : "NO SIGNAL"}</span>
        </div>
      </div>

      <div className="signal-line">
        <span>CPU / GAME</span>
        <b>→ 3D RENDER (GPU) →</b>
        <span>MONITOR</span>
      </div>

      <button
        className="demo-button"
        type="button"
        onClick={() => setPoweredOn((current) => !current)}
      >
        <Fan /> {poweredOn ? "Turn GPU Off" : "Power On GPU"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 8 — POWER SUPPLY
   ========================================================================== */
function PowerDemo() {
  const [powered, setPowered] = useState(false);

  return (
    <div className="power-demo-wrapper">
      <div className="psu-unit-stage">
        {/* PSU BRICK */}
        <div className="psu-metal-box">
          <div className="psu-fan-grill">
            <Fan className={`w-12 h-12 text-slate-400${powered ? " is-spinning" : ""}`} />
          </div>
          <div className="psu-control-panel">
            <strong>650W PSU</strong>
            <div className={`psu-rocker-switch${powered ? " is-on" : ""}`}>
              <span>{powered ? "I (ON)" : "O (OFF)"}</span>
            </div>
          </div>
        </div>

        {/* CABLE HARNESS */}
        <div className={`psu-cables-tree${powered ? " is-live" : ""}`}>
          <div className="cable-branch cable-mobo">
            <i>24-PIN ATX</i>
            <span>MOTHERBOARD</span>
          </div>
          <div className="cable-branch cable-cpu">
            <i>8-PIN EPS</i>
            <span>CPU</span>
          </div>
          <div className="cable-branch cable-gpu">
            <i>8-PIN PCIe</i>
            <span>GPU</span>
          </div>
        </div>
      </div>

      <button
        className="demo-button"
        type="button"
        onClick={() => setPowered((current) => !current)}
      >
        <Power /> {powered ? "Turn power off" : "Flip power switch ON"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 9 — COOLING
   ========================================================================== */
function CoolingDemo() {
  const [fanOn, setFanOn] = useState(false);

  return (
    <div className="cooling-demo-wrapper">
      <div className="cooler-unit-stage">
        {/* TOWER HEATSINK */}
        <div className="cpu-tower-cooler">
          <div className="heatsink-fins-stack">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className={`cooler-fan-mount${fanOn ? " is-spinning" : ""}`}>
            <Fan className="w-16 h-16 text-sky-400" />
          </div>
          <div className="copper-heatpipes">
            <span />
            <span />
            <span />
          </div>
          <div className="cooler-cpu-base">
            <span>CPU (HOT)</span>
          </div>
        </div>

        {/* AIRFLOW ARROWS */}
        <div className="airflow-diagram">
          <div className={`heat-stream${fanOn ? " is-cooled" : ""}`}>
            <span>{fanOn ? "COOL AIRFLOW" : "HEAT TRAPPED"}</span>
          </div>
        </div>
      </div>

      <button
        className="demo-button"
        type="button"
        onClick={() => setFanOn((current) => !current)}
      >
        <Fan /> {fanOn ? "Turn fan off" : "Turn cooling fan on"}
      </button>
    </div>
  );
}

/* ==========================================================================
   SLIDE 10 — EVERYTHING TOGETHER (PC EXPLORER)
   ========================================================================== */
function PcExplorer() {
  const [active, setActive] = useState<PartId>("cpu");
  return (
    <div className="pc-explorer">
      <PcInterior interactive active={active} onSelect={setActive} />
      <div className="explorer-info">
        <strong>{partCopy[active].label}</strong>
        <p>{partCopy[active].text}</p>
        <small className="explorer-location">📍 {partCopy[active].location}</small>
        <div className="explorer-hint">Click another part inside the computer.</div>
      </div>
    </div>
  );
}

/* ==========================================================================
   SLIDE 11 — PORTS & CONNECTIONS
   ========================================================================== */
const ports = {
  usb: {
    name: "USB",
    text: "Connects keyboards, mice, storage drives, and controllers.",
    connects: "Computer ─── Keyboard / Mouse",
  },
  hdmi: {
    name: "HDMI",
    text: "Carries high-definition video and audio straight to your monitor or TV.",
    connects: "Computer ─── Monitor / TV",
  },
  ethernet: {
    name: "Ethernet",
    text: "Connects the computer to the internet router using a physical wired cable.",
    connects: "Computer ─── Router",
  },
  audio: {
    name: "Audio",
    text: "Connects headphones, external speakers, or microphones.",
    connects: "Computer ─── Headphones / Speakers",
  },
  power: {
    name: "Power",
    text: "Brings electricity from the wall socket into the computer's power supply.",
    connects: "Wall Socket ─── Power Supply",
  },
} as const;

function PortsDemo() {
  const [active, setActive] = useState<keyof typeof ports>("hdmi");
  const port = ports[active];
  return (
    <div className="ports-demo">
      <div className="computer-back">
        <span>COMPUTER REAR PORTS</span>
        <button
          className={active === "usb" ? "is-active" : ""}
          onClick={() => setActive("usb")}
        >
          <i className="port-usb" />
          USB
        </button>
        <button
          className={active === "hdmi" ? "is-active" : ""}
          onClick={() => setActive("hdmi")}
        >
          <i className="port-hdmi" />
          HDMI
        </button>
        <button
          className={active === "ethernet" ? "is-active" : ""}
          onClick={() => setActive("ethernet")}
        >
          <i className="port-ethernet" />
          ETHERNET
        </button>
        <button
          className={active === "audio" ? "is-active" : ""}
          onClick={() => setActive("audio")}
        >
          <i className="port-audio" />
          AUDIO
        </button>
        <button
          className={active === "power" ? "is-active" : ""}
          onClick={() => setActive("power")}
        >
          <i className="port-power" />
          POWER
        </button>
      </div>
      <div className="port-explanation">
        <strong>{port.name}</strong>
        <div>
          {active === "audio" && <Speaker />}
          {port.connects}
        </div>
        <p>{port.text}</p>
        <button
          type="button"
          className="demo-button"
          onClick={() => setActive((current) => {
            const keys = Object.keys(ports) as (keyof typeof ports)[];
            const nextIdx = (keys.indexOf(current) + 1) % keys.length;
            return keys[nextIdx];
          })}
        >
          <RotateCcw className="w-4 h-4" /> Next port
        </button>
      </div>
    </div>
  );
}
