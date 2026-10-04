"use client";

import type { DragEvent } from "react";
import {
  Keyboard,
  Mic2,
  Monitor,
  Mouse,
  Printer,
  Speaker,
  TabletSmartphone,
  Video,
} from "lucide-react";

export const deviceIds = ["keyboard", "mouse", "microphone", "webcam", "monitor", "speakers", "printer"] as const;
export type DeviceId = (typeof deviceIds)[number] | "touchscreen";
export type DeviceDirection = "input" | "output";

export const deviceInfo: Record<DeviceId, { label: string; direction: DeviceDirection | "both"; explanation: string }> = {
  keyboard: { label: "Keyboard", direction: "input", explanation: "Keys send information into the computer." },
  mouse: { label: "Mouse", direction: "input", explanation: "Clicks and movement send commands into the computer." },
  microphone: { label: "Microphone", direction: "input", explanation: "Your voice goes into the computer." },
  webcam: { label: "Webcam", direction: "input", explanation: "Pictures from the camera go into the computer." },
  monitor: { label: "Monitor", direction: "output", explanation: "The computer sends pictures and text to you." },
  speakers: { label: "Speakers", direction: "output", explanation: "The computer sends sound out to you." },
  printer: { label: "Printer", direction: "output", explanation: "The computer sends information out onto paper." },
  touchscreen: { label: "Touchscreen", direction: "both", explanation: "It shows information and receives your touch." },
};

const icons = {
  keyboard: Keyboard,
  mouse: Mouse,
  microphone: Mic2,
  webcam: Video,
  monitor: Monitor,
  speakers: Speaker,
  printer: Printer,
  touchscreen: TabletSmartphone,
};

export function DeviceHardware({ id, selected = false, compact = false, onSelect }: { id: DeviceId; selected?: boolean; compact?: boolean; onSelect?: (id: DeviceId) => void }) {
  const Icon = icons[id];
  const label = deviceInfo[id].label;

  return (
    <button
      className={`cg-device cg-device-${id}${selected ? " is-selected" : ""}${compact ? " is-compact" : ""}`}
      type="button"
      disabled={!onSelect}
      draggable={Boolean(onSelect)}
      onDragStart={(event) => {
        event.dataTransfer.setData("text/device", id);
        event.dataTransfer.effectAllowed = "move";
      }}
      onClick={() => onSelect?.(id)}
      aria-pressed={onSelect ? selected : undefined}
      aria-label={onSelect ? `Select ${label}` : label}
    >
      <span className="cg-device-body"><Icon aria-hidden="true" /></span>
      <strong>{label}</strong>
    </button>
  );
}

export function ComputerWorkbench({ connected, tray, selected, instruction, onSelect, onConnect }: {
  connected: DeviceId[];
  tray?: DeviceId[];
  selected?: DeviceId | null;
  instruction?: string;
  onSelect?: (id: DeviceId) => void;
  onConnect?: (id: DeviceId) => void;
}) {
  const has = (id: DeviceId) => connected.includes(id);

  function handleDrop(event: DragEvent<HTMLButtonElement>) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/device") as DeviceId;
    if (id) onConnect?.(id);
  }

  return (
    <div className="cg-workbench">
      <div className="cg-rig" aria-label="Computer workbench">
        <div className="cg-wall-label">EESA BYTE // WORKSTATION 02</div>
        <div className="cg-monitor-slot">
          {has("monitor") ? (
            <div className="cg-connected-monitor"><div className="cg-screen"><span>EB</span><small>SYSTEM ONLINE</small></div><i /></div>
          ) : <div className="cg-empty-outline"><Monitor /><span>MONITOR</span></div>}
          {has("webcam") && <div className="cg-mounted-webcam"><Video /><span>●</span></div>}
        </div>
        <div className="cg-tower"><span>EB</span><i /><i /><i /><b>POWER</b></div>
        {has("speakers") && <><div className="cg-mounted-speaker left"><Speaker /><i /></div><div className="cg-mounted-speaker right"><Speaker /><i /></div></>}
        {has("microphone") && <div className="cg-mounted-mic"><Mic2 /><span>MIC</span></div>}
        {has("printer") && <div className="cg-mounted-printer"><Printer /><span>READY</span></div>}
        <div className="cg-desk"><span className="cg-desk-edge" /></div>
        {has("keyboard") && <div className="cg-mounted-keyboard"><Keyboard /><span>INPUT</span></div>}
        {has("mouse") && <div className="cg-mounted-mouse"><Mouse /><span>INPUT</span></div>}
        {onConnect && (
          <button
            className={`cg-connection-bay${selected ? " is-ready" : ""}`}
            type="button"
            onClick={() => selected && onConnect(selected)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
          >
            <span>{selected ? `CONNECT ${deviceInfo[selected].label.toUpperCase()}` : "CONNECTION BAY"}</span>
            <small>{instruction ?? "Drag gear here, or select it then tap here"}</small>
          </button>
        )}
      </div>

      {tray && tray.length > 0 && (
        <aside className="cg-equipment-tray" aria-label="Equipment tray">
          <div><span>EQUIPMENT TRAY</span><small>Drag or tap to select</small></div>
          <div className="cg-tray-items">
            {tray.map((id) => <DeviceHardware key={id} id={id} selected={selected === id} onSelect={onSelect} />)}
          </div>
        </aside>
      )}
    </div>
  );
}
