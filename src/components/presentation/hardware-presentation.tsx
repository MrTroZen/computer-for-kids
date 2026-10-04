"use client";

import { useState } from "react";
import { Fan, HardDrive, Keyboard, Monitor, Mouse, PlugZap, Power, Save, Speaker, Zap } from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

type PartId = "motherboard" | "cpu" | "ram" | "ssd" | "gpu" | "psu" | "cooling";

const partCopy: Record<PartId, { label: string; text: string }> = {
  motherboard: { label: "Motherboard", text: "Connects the computer’s main parts." },
  cpu: { label: "CPU", text: "Follows instructions and processes information." },
  ram: { label: "RAM", text: "Holds information being used right now." },
  ssd: { label: "SSD", text: "Keeps files, apps and the system." },
  gpu: { label: "GPU", text: "Helps create graphics and images." },
  psu: { label: "Power Supply", text: "Gives electricity to the computer parts." },
  cooling: { label: "Cooling", text: "Removes heat and keeps the computer safe." },
};

export function HardwarePresentation() {
  const slides: TeachingSlide[] = [
    { title: "Complete computer", description: "These parts work together to make a computer setup.", visual: <CompleteSetup /> },
    { title: "Open the computer", description: "Inside the case are the parts that do the computer’s work.", visual: <OpenComputer /> },
    { title: "Motherboard", description: "The motherboard connects the computer’s main parts.", visual: <MotherboardDemo /> },
    { title: "CPU", description: "The CPU follows instructions and processes information.", visual: <PartLocation part="cpu" /> },
    { title: "RAM", description: "RAM holds information the computer is using right now.", visual: <RamDemo /> },
    { title: "SSD", description: "The SSD keeps your files, apps and system.", visual: <SsdDemo /> },
    { title: "GPU", description: "The GPU helps create graphics and images.", visual: <GpuDemo /> },
    { title: "Power supply", description: "The power supply gives electricity to the computer parts.", visual: <PowerDemo /> },
    { title: "Cooling", description: "Cooling removes heat and keeps the computer safe.", visual: <CoolingDemo /> },
    { title: "Everything together", description: "Click a part to highlight it and see what it does.", visual: <PcExplorer /> },
    { title: "Ports & connections", description: "Ports connect the computer to other equipment.", visual: <PortsDemo /> },
  ];
  return <SlideDeck topic="Hardware" slides={slides} />;
}

function CompleteSetup() {
  return (
    <div className="complete-setup">
      <div className="setup-monitor"><Monitor /><span>EESA BYTE</span></div>
      <div className="setup-tower"><Power /><b>Computer tower</b></div>
      <div className="setup-desk" />
      <div className="setup-keyboard"><Keyboard /><b>Keyboard</b></div>
      <div className="setup-mouse"><Mouse /><b>Mouse</b></div>
    </div>
  );
}

function OpenComputer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="open-computer-demo">
      <PcInterior panelOpen={open} />
      <button className="demo-button" type="button" onClick={() => setOpen((current) => !current)}>{open ? "Close" : "Open"}</button>
    </div>
  );
}

function PcInterior({ panelOpen = true, active, interactive = false, powered = false, fanOn = false, onSelect }: {
  panelOpen?: boolean;
  active?: PartId;
  interactive?: boolean;
  powered?: boolean;
  fanOn?: boolean;
  onSelect?: (part: PartId) => void;
}) {
  const part = (id: PartId, className: string, children: React.ReactNode) => interactive ? (
    <button type="button" className={`${className}${active === id ? " is-active" : ""}`} onClick={() => onSelect?.(id)} aria-label={`Show ${partCopy[id].label}`}>{children}</button>
  ) : <div className={`${className}${active === id ? " is-active" : ""}`}>{children}</div>;

  return (
    <div className={`pc-case${panelOpen ? " is-open" : ""}${powered ? " is-powered" : ""}`}>
      <div className="pc-frame">
        {part("motherboard", "pc-motherboard", <><span className="board-lines" /><b>MOTHERBOARD</b></>)}
        {part("cpu", "pc-cpu", <><span>CPU</span><i /><i /></>)}
        {part("ram", "pc-ram", <><i /><i /><b>RAM</b></>)}
        {part("gpu", "pc-gpu", <><span>GPU</span><i /><i /></>)}
        {part("ssd", "pc-ssd", <><HardDrive /><span>SSD</span></>)}
        {part("psu", "pc-psu", <><PlugZap /><span>PSU</span></>)}
        {part("cooling", `pc-fan${fanOn ? " is-spinning" : ""}`, <><Fan /><span>COOLING</span></>)}
        {powered && <div className="power-lines"><i /><i /><i /></div>}
      </div>
      <div className="pc-panel"><span>EB</span><i /><i /><i /></div>
    </div>
  );
}

function MotherboardDemo() {
  const [highlight, setHighlight] = useState(false);
  return (
    <div className="part-slide-layout">
      <div className={`motherboard-closeup${highlight ? " is-highlighted" : ""}`}><span className="board-paths" /><div className="cpu-socket">CPU</div><div className="ram-slots">RAM</div><div className="gpu-slot">GPU</div><div className="storage-port">SSD</div><b>MOTHERBOARD</b></div>
      <button className="demo-button" type="button" onClick={() => setHighlight((current) => !current)}><Zap /> Highlight connections</button>
    </div>
  );
}

function PartLocation({ part }: { part: PartId }) {
  return <div className="part-location"><PcInterior active={part} /><div className="part-callout"><strong>{partCopy[part].label}</strong><span>Highlighted inside the computer</span></div></div>;
}

function RamDemo() {
  const [inserted, setInserted] = useState(false);
  return (
    <div className="ram-demo">
      <div className="ram-board"><span>RAM SLOT</span><div className={`loose-ram${inserted ? " is-inserted" : ""}`}><i /><i /><i /><i /><b>RAM</b></div></div>
      <button className="demo-button" type="button" onClick={() => setInserted((current) => !current)}>{inserted ? "Remove RAM" : "Insert RAM"}</button>
    </div>
  );
}

function SsdDemo() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="ssd-demo">
      <span className={saved ? "ssd-file is-saved" : "ssd-file"}>PHOTO.JPG</span><span className="hardware-arrow">→</span><div className="large-ssd"><HardDrive /><b>SSD</b><small>{saved ? "FILE SAVED" : "STORAGE"}</small></div>
      <button className="demo-button" type="button" onClick={() => setSaved((current) => !current)}><Save /> Save file</button>
    </div>
  );
}

function GpuDemo() {
  const [connected, setConnected] = useState(false);
  return (
    <div className="gpu-demo">
      <div className="gpu-board"><span>PCIe SLOT</span><div className={`large-gpu${connected ? " is-connected" : ""}`}><Fan /><Fan /><b>GPU</b></div></div>
      <button className="demo-button" type="button" onClick={() => setConnected((current) => !current)}>{connected ? "Connected" : "Connect GPU"}</button>
    </div>
  );
}

function PowerDemo() {
  const [powered, setPowered] = useState(false);
  return <div className="power-demo"><PcInterior active="psu" powered={powered} /><button className="demo-button" type="button" onClick={() => setPowered((current) => !current)}><Power /> {powered ? "Power off" : "Show power"}</button></div>;
}

function CoolingDemo() {
  const [fanOn, setFanOn] = useState(false);
  return <div className="power-demo"><PcInterior active="cooling" fanOn={fanOn} /><button className="demo-button" type="button" onClick={() => setFanOn((current) => !current)}><Fan /> {fanOn ? "Turn fan off" : "Turn fan on"}</button></div>;
}

function PcExplorer() {
  const [active, setActive] = useState<PartId>("cpu");
  return (
    <div className="pc-explorer">
      <PcInterior interactive active={active} onSelect={setActive} />
      <div className="explorer-info"><strong>{partCopy[active].label}</strong><p>{partCopy[active].text}</p><small>Click another part in the computer.</small></div>
    </div>
  );
}

const ports = {
  usb: { name: "USB", text: "Connects keyboards, mice, storage and many other devices.", connects: "Computer ─── Device" },
  hdmi: { name: "HDMI", text: "Carries video and audio.", connects: "Computer ─── Monitor" },
  ethernet: { name: "Ethernet", text: "Connects the computer to a network with a cable.", connects: "Computer ─── Router" },
  audio: { name: "Audio", text: "Connects headphones, speakers or a microphone.", connects: "Computer ─── Speakers" },
  power: { name: "Power", text: "Brings electricity into the computer.", connects: "Wall power ─── Computer" },
} as const;

function PortsDemo() {
  const [active, setActive] = useState<keyof typeof ports>("hdmi");
  const port = ports[active];
  return (
    <div className="ports-demo">
      <div className="computer-back"><span>COMPUTER PORTS</span><button className={active === "usb" ? "is-active" : ""} onClick={() => setActive("usb")}><i className="port-usb" />USB</button><button className={active === "hdmi" ? "is-active" : ""} onClick={() => setActive("hdmi")}><i className="port-hdmi" />HDMI</button><button className={active === "ethernet" ? "is-active" : ""} onClick={() => setActive("ethernet")}><i className="port-ethernet" />ETHERNET</button><button className={active === "audio" ? "is-active" : ""} onClick={() => setActive("audio")}><i className="port-audio" />AUDIO</button><button className={active === "power" ? "is-active" : ""} onClick={() => setActive("power")}><i className="port-power" />POWER</button></div>
      <div className="port-explanation"><strong>{port.name}</strong><div>{active === "audio" && <Speaker />}{port.connects}</div><p>{port.text}</p></div>
    </div>
  );
}
