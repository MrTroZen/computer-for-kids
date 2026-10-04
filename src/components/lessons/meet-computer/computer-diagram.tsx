"use client";

import { Cpu, HardDrive, Keyboard, MemoryStick, Monitor, Mouse } from "lucide-react";

export type DiagramFocus = "overview" | "input" | "process" | "storage" | "output" | "flow";

type ComputerDiagramProps = {
  focus: DiagramFocus;
  name?: string;
  processedName?: string;
  transferVisible?: boolean;
  saved?: boolean;
  outputVisible?: boolean;
  flowStep?: number;
  onMouseClick?: () => void;
};

export function ComputerDiagram({ focus, name = "", processedName = "", transferVisible = false, saved = false, outputVisible = false, flowStep = 0, onMouseClick }: ComputerDiagramProps) {
  const showInside = focus === "process" || focus === "storage" || focus === "flow";
  const inputActive = focus === "input" || (focus === "flow" && flowStep === 1);
  const processActive = focus === "process" || (focus === "flow" && flowStep === 2);
  const storageActive = focus === "storage" || (focus === "flow" && flowStep === 3);
  const outputActive = focus === "output" || (focus === "flow" && flowStep === 4);

  return (
    <div className={`computer-diagram focus-${focus}`} aria-label="Computer input, processing, storage and output diagram">
      <div className="diagram-inputs">
        <div className={`diagram-device ${inputActive ? "is-active" : ""}`}>
          <Keyboard aria-hidden="true" />
          <span>Keyboard</span>
        </div>
        <button className={`diagram-device mouse-device ${inputActive ? "is-active" : ""}`} type="button" onClick={onMouseClick} disabled={!onMouseClick}>
          <Mouse aria-hidden="true" />
          <span>Mouse</span>
        </button>
      </div>

      <div className={`data-lane input-lane ${transferVisible || (focus === "flow" && flowStep === 1) ? "is-moving" : ""}`}>
        <span>{name || "information"}</span>
      </div>

      <div className={`computer-unit ${processActive || storageActive ? "is-active" : ""}`}>
        <span className="unit-title">COMPUTER</span>
        {focus === "process" && processedName && <span className="action-word action-zap">ZAP!</span>}
        {focus === "storage" && saved && <span className="action-word action-stored">STORED!</span>}
        {showInside ? (
          <div className="computer-inside">
            <div className={`inside-part cpu-part ${processActive ? "is-active" : ""}`}><Cpu /><span>CPU</span>{processActive && processedName && <small>{processedName}</small>}</div>
            <div className="inside-part"><MemoryStick /><span>RAM</span></div>
            <div className={`inside-part storage-part ${storageActive ? "is-active" : ""}`}><HardDrive /><span>Storage</span>{saved && <small>Saved ✓</small>}</div>
          </div>
        ) : <Cpu className="computer-symbol" aria-hidden="true" />}
      </div>

      <div className={`data-lane output-lane ${outputActive ? "is-moving" : ""}`}>
        <span>{processedName || "result"}</span>
      </div>

      <div className={`monitor-unit ${outputActive ? "is-active" : ""}`}>
        {focus === "output" && outputVisible && <span className="action-word action-output">OUTPUT!</span>}
        <div className="monitor-screen">
          {outputVisible || (focus === "flow" && flowStep === 4) ? <strong>Hello, {processedName || "ALEX"}!</strong> : <Monitor aria-hidden="true" />}
        </div>
        <span>Monitor</span>
      </div>
    </div>
  );
}
