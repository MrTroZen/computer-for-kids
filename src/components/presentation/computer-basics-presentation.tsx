"use client";

import { useEffect, useState } from "react";
import { Cpu, HardDrive, Keyboard, Monitor, Mouse, Play, Save, Speaker } from "lucide-react";
import { SlideDeck, type TeachingSlide } from "./slide-deck";

export function ComputerBasicsPresentation() {
  const slides: TeachingSlide[] = [
    { title: "What is a computer?", description: "A computer takes information, works with it, and gives you a result.", visual: <ComputerOverview /> },
    { title: "Input", description: "Input is information you give the computer.", visual: <InputDemo /> },
    { title: "Process", description: "The CPU follows instructions and processes information.", visual: <ProcessDemo /> },
    { title: "Storage", description: "Storage keeps files and information for later.", visual: <StorageDemo /> },
    { title: "Output", description: "Output is information the computer gives you.", visual: <OutputDemo /> },
    { title: "All together", description: "Information flows through input, processing, storage and output.", visual: <CompleteFlow /> },
  ];
  return <SlideDeck topic="Computer Basics" slides={slides} />;
}

function FlowArrow({ label = "" }: { label?: string }) {
  return <span className="flow-arrow"><b>{label}</b><i>↓</i></span>;
}

function ComputerOverview() {
  return (
    <div className="basics-overview visual-flow-row">
      <div className="device-pair"><span><Keyboard /><b>Keyboard</b></span><span><Mouse /><b>Mouse</b></span></div>
      <span className="wide-arrow">→</span>
      <div className="computer-core"><Cpu /><b>Computer</b></div>
      <span className="wide-arrow">→</span>
      <div className="monitor-visual"><Monitor /><b>Monitor</b></div>
    </div>
  );
}

function InputDemo() {
  const [active, setActive] = useState<"keyboard" | "mouse" | null>(null);
  return (
    <div className="input-demo">
      <div className="input-devices">
        <button className={active === "keyboard" ? "is-active" : ""} type="button" onClick={() => setActive("keyboard")}><Keyboard /><b>Keyboard</b><small>Press a key</small></button>
        <button className={active === "mouse" ? "is-active" : ""} type="button" onClick={() => setActive("mouse")}><Mouse /><b>Mouse</b><small>Click the mouse</small></button>
      </div>
      <div className={`signal-line${active ? " is-playing" : ""}`}><span>YOU</span><b>→ INPUT →</b><span>COMPUTER</span></div>
    </div>
  );
}

function ProcessDemo() {
  const [shown, setShown] = useState(false);
  return (
    <div className="process-demo">
      <div className="process-sequence"><span>hello</span><FlowArrow label="INPUT" /><div className={shown ? "cpu-chip is-working" : "cpu-chip"}><Cpu /><b>CPU</b></div><FlowArrow label="RESULT" /><span>{shown ? "HELLO" : "?"}</span></div>
      <button className="demo-button" type="button" onClick={() => setShown((current) => !current)}><Play /> Show it</button>
    </div>
  );
}

function StorageDemo() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="storage-demo">
      <div className={saved ? "file-token is-saved" : "file-token"}><span>PHOTO.JPG</span><FlowArrow /><div className="ssd-visual"><HardDrive /><b>SSD</b></div></div>
      <button className="demo-button" type="button" onClick={() => setSaved((current) => !current)}><Save /> {saved ? "Saved" : "Save file"}</button>
    </div>
  );
}

function OutputDemo() {
  const [active, setActive] = useState<"monitor" | "speakers" | null>(null);
  return (
    <div className="output-demo">
      <div className={`signal-line${active ? " is-playing" : ""}`}><span>COMPUTER</span><b>→ OUTPUT →</b><span>YOU</span></div>
      <div className="output-devices">
        <button className={active === "monitor" ? "is-active" : ""} type="button" onClick={() => setActive("monitor")}><Monitor /><b>Monitor</b>{active === "monitor" && <small>HELLO!</small>}</button>
        <button className={active === "speakers" ? "is-active" : ""} type="button" onClick={() => setActive("speakers")}><Speaker /><b>Speakers</b>{active === "speakers" && <small>♪ ♪ ♫</small>}</button>
      </div>
    </div>
  );
}

function CompleteFlow() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setStep((current) => {
      if (current >= 4) {
        window.clearInterval(timer);
        setPlaying(false);
        return 4;
      }
      return current + 1;
    }), 500);
    return () => window.clearInterval(timer);
  }, [playing]);

  function play() {
    setStep(0);
    setPlaying(true);
  }

  return (
    <div className="complete-flow-demo">
      <div className={step === 1 ? "flow-node is-active" : "flow-node"}><Keyboard /><b>Keyboard</b><small>INPUT</small></div>
      <FlowArrow />
      <div className={step === 2 ? "flow-node is-active" : "flow-node"}><Cpu /><b>Computer / CPU</b><small>PROCESS</small></div>
      <div className={step === 3 ? "storage-branch is-active" : "storage-branch"}><span>↕</span><HardDrive /><b>Storage</b></div>
      <FlowArrow />
      <div className={step === 4 ? "flow-node is-active" : "flow-node"}><Monitor /><b>Monitor</b><small>OUTPUT</small></div>
      <button className="demo-button" type="button" onClick={play} disabled={playing}><Play /> {playing ? "Playing" : "Play flow"}</button>
    </div>
  );
}
