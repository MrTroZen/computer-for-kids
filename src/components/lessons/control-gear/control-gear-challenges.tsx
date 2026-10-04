"use client";

import { useState } from "react";
import { Check, RotateCcw, ShieldAlert } from "lucide-react";
import { FeedbackMessage } from "@/components/lessons/feedback-message";
import { DeviceHardware, deviceIds, deviceInfo, type DeviceDirection, type DeviceId } from "./device-kit";

export function SortingChallenge({ assignments, onAssign }: { assignments: Partial<Record<DeviceId, DeviceDirection>>; onAssign: (id: DeviceId, direction: DeviceDirection) => void }) {
  const [selected, setSelected] = useState<DeviceId | null>(null);
  const [hint, setHint] = useState(false);
  const remaining = deviceIds.filter((id) => !assignments[id]);

  function place(id: DeviceId, direction: DeviceDirection) {
    if (deviceInfo[id].direction === direction) {
      onAssign(id, direction);
      setSelected(null);
      setHint(false);
    } else {
      setHint(true);
    }
  }

  return (
    <div className="cg-sort-challenge">
      <div className="cg-sort-bank">
        <span className="cg-panel-label">UNSORTED GEAR</span>
        <div>{remaining.map((id) => <DeviceHardware key={id} id={id} compact selected={selected === id} onSelect={setSelected} />)}</div>
      </div>
      <div className="cg-sort-zones">
        {(["input", "output"] as const).map((direction) => (
          <button
            className={`cg-sort-zone is-${direction}${selected ? " is-ready" : ""}`}
            key={direction}
            type="button"
            onClick={() => selected && place(selected, direction)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              place(event.dataTransfer.getData("text/device") as DeviceId, direction);
            }}
          >
            <strong>{direction.toUpperCase()}</strong>
            <span>{direction === "input" ? "YOU → COMPUTER" : "COMPUTER → YOU"}</span>
            <div>{deviceIds.filter((id) => assignments[id] === direction).map((id) => <span className="cg-sorted-item" key={id}><Check />{deviceInfo[id].label}</span>)}</div>
          </button>
        ))}
      </div>
      {hint && <FeedbackMessage type="hint">Check the direction. Is information going into or coming out of the computer?</FeedbackMessage>}
    </div>
  );
}

const scenarios = [
  { text: "Eesa presses the SPACE key to make a game character jump.", question: "What is the input?", options: ["Keyboard", "Monitor", "Speakers"], answer: "Keyboard", note: "The key press goes into the computer." },
  { text: "The game shows the character jumping.", question: "What gives Eesa the output?", options: ["Mouse", "Monitor", "Webcam"], answer: "Monitor", note: "The picture comes out on the monitor." },
  { text: "Eesa talks to an AI assistant.", question: "What sends his voice into the computer?", options: ["Speakers", "Microphone", "Printer"], answer: "Microphone", note: "The microphone carries his voice in." },
  { text: "The AI reads the answer aloud.", question: "What gives the sound output?", options: ["Keyboard", "Webcam", "Speakers"], answer: "Speakers", note: "The computer sends the sound out through speakers." },
  { text: "Eesa taps a button directly on a tablet screen.", question: "For this action, the touchscreen is being used as…", options: ["Input", "Output", "Both"], answer: "Input", note: "The device can do both, but this touch action sends input." },
];

export function ScenarioChallenge({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [hint, setHint] = useState(false);
  const scenario = scenarios[index];

  function answer(option: string) {
    if (option === scenario.answer) {
      setCorrect(true);
      setHint(false);
    } else {
      setHint(true);
    }
  }

  function advance() {
    if (index === scenarios.length - 1) {
      onComplete();
      return;
    }
    setIndex((current) => current + 1);
    setCorrect(false);
    setHint(false);
  }

  return (
    <div className="cg-scenario-panel">
      <div className="cg-scenario-count">SCENARIO {index + 1} / {scenarios.length}</div>
      <blockquote>{scenario.text}</blockquote>
      <h2>{scenario.question}</h2>
      <div className="cg-scenario-options">
        {scenario.options.map((option) => <button type="button" key={option} onClick={() => answer(option)} disabled={correct}>{option}</button>)}
      </div>
      {hint && <FeedbackMessage type="hint">Trace the direction of the information and try again.</FeedbackMessage>}
      {correct && <FeedbackMessage type="success"><Check /> Correct. {scenario.note}</FeedbackMessage>}
      {correct && <button className="lesson-button primary cg-inline-next" type="button" onClick={advance}>{index === scenarios.length - 1 ? "Start final repair" : "Next scenario"}</button>}
    </div>
  );
}

const repairStart: Record<DeviceId, DeviceDirection> = {
  keyboard: "output", mouse: "output", microphone: "output", webcam: "output",
  monitor: "input", speakers: "input", printer: "input", touchscreen: "input",
};

export function RepairChallenge({ onComplete }: { onComplete: () => void }) {
  const repairDevices: DeviceId[] = ["keyboard", "monitor", "microphone", "speakers"];
  const [placements, setPlacements] = useState<Record<DeviceId, DeviceDirection>>(repairStart);
  const [selected, setSelected] = useState<DeviceId | null>(null);
  const correct = repairDevices.every((id) => placements[id] === deviceInfo[id].direction);

  function move(id: DeviceId, direction: DeviceDirection) {
    setPlacements((current) => ({ ...current, [id]: direction }));
    setSelected(null);
  }

  return (
    <div className="cg-repair">
      <div className="cg-system-error"><ShieldAlert /><span>SYSTEM ERROR</span><strong>Someone mixed up the gear.</strong></div>
      <div className="cg-repair-zones">
        {(["input", "output"] as const).map((direction) => (
          <div
            className="cg-repair-zone"
            key={direction}
            onClick={() => selected && move(selected, direction)}
            onKeyDown={(event) => { if ((event.key === "Enter" || event.key === " ") && selected) move(selected, direction); }}
            role="button"
            tabIndex={0}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => { event.preventDefault(); move(event.dataTransfer.getData("text/device") as DeviceId, direction); }}
          >
            <b>{direction.toUpperCase()}</b><small>{direction === "input" ? "YOU → COMPUTER" : "COMPUTER → YOU"}</small>
            <div>{repairDevices.filter((id) => placements[id] === direction).map((id) => <DeviceHardware key={id} id={id} compact selected={selected === id} onSelect={setSelected} />)}</div>
          </div>
        ))}
      </div>
      <p className="cg-tap-note">Drag a device to the other side, or tap it then tap a zone.</p>
      <div className="cg-repair-actions">
        <button type="button" className="lesson-button secondary" onClick={() => setPlacements(repairStart)}><RotateCcw /> Reset</button>
        <button type="button" className="lesson-button primary" disabled={!correct} onClick={onComplete}>Power up!</button>
      </div>
    </div>
  );
}
