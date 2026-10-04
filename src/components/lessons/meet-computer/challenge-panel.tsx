"use client";

import { Cpu, Keyboard, Monitor, Mouse, HardDrive } from "lucide-react";
import { useState } from "react";
import { FeedbackMessage } from "@/components/lessons/feedback-message";

const labels = ["INPUT", "PROCESSING", "OUTPUT"] as const;
type Label = (typeof labels)[number];
type Part = "keyboard" | "computer" | "monitor";

const eventItems = [
  { id: "mouse", text: "Mouse click", icon: Mouse },
  { id: "process", text: "Computer processes click", icon: Cpu },
  { id: "monitor", text: "Game changes on monitor", icon: Monitor },
] as const;

export function ChallengePanel({ onComplete }: { onComplete: () => void }) {
  const [challenge, setChallenge] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState<Label | null>(null);
  const [assignments, setAssignments] = useState<Partial<Record<Part, Label>>>({});
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [eventOrder, setEventOrder] = useState<(string | null)[]>([null, null, null]);
  const [feedback, setFeedback] = useState<"success" | "hint" | null>(null);

  function assignLabel(part: Part, label = selectedLabel) {
    if (!label) return;
    setAssignments((current) => ({ ...current, [part]: label }));
    setSelectedLabel(null);
    setFeedback(null);
  }

  function checkLabels() {
    const correct = assignments.keyboard === "INPUT" && assignments.computer === "PROCESSING" && assignments.monitor === "OUTPUT";
    setFeedback(correct ? "success" : "hint");
  }

  function placeEvent(index: number, eventId = selectedEvent) {
    if (!eventId) return;
    setEventOrder((current) => {
      const withoutDuplicate = current.map((value) => value === eventId ? null : value);
      withoutDuplicate[index] = eventId;
      return withoutDuplicate;
    });
    setSelectedEvent(null);
    setFeedback(null);
  }

  function checkOrder() {
    setFeedback(eventOrder.join(",") === "mouse,process,monitor" ? "success" : "hint");
  }

  function nextChallenge() {
    setChallenge((current) => current + 1);
    setFeedback(null);
  }

  if (challenge === 0) {
    return (
      <div className="challenge-panel" data-testid="challenge-labels">
        <div className="stage-copy"><p className="eyebrow">TECH TRIAL 1 OF 3</p><h2>Match each job</h2><p>Drag a label, or tap a label and then tap its part.</p></div>
        <div className="label-bank" aria-label="Labels to match">
          {labels.map((label) => <button className={selectedLabel === label ? "choice-chip is-selected" : "choice-chip"} type="button" draggable onDragStart={(event) => event.dataTransfer.setData("text/plain", label)} onClick={() => setSelectedLabel(label)} key={label}>{label}</button>)}
        </div>
        <div className="matching-parts">
          <MatchTarget part="keyboard" label={assignments.keyboard} icon={<Keyboard />} onSelect={assignLabel} />
          <MatchTarget part="computer" label={assignments.computer} icon={<Cpu />} onSelect={assignLabel} />
          <MatchTarget part="monitor" label={assignments.monitor} icon={<Monitor />} onSelect={assignLabel} />
        </div>
        {feedback && <FeedbackMessage type={feedback}>{feedback === "success" ? "Exactly. Each part has a different job." : "Not quite. Think about where information enters and leaves."}</FeedbackMessage>}
        <div className="challenge-actions">
          <button className="lesson-button secondary" type="button" onClick={() => { setAssignments({}); setFeedback(null); }}>Reset</button>
          {feedback === "success" ? <button className="lesson-button primary" type="button" onClick={nextChallenge}>Next challenge</button> : <button className="lesson-button primary" type="button" onClick={checkLabels} disabled={Object.keys(assignments).length < 3}>Check</button>}
        </div>
      </div>
    );
  }

  if (challenge === 1) {
    return (
      <div className="challenge-panel" data-testid="challenge-order">
        <div className="stage-copy"><p className="eyebrow">TECH TRIAL 2 OF 3</p><h2>Put the events in order</h2><p>You click a button in a game. What happens next?</p></div>
        <div className="event-bank">
          {eventItems.map(({ id, text, icon: Icon }) => <button className={selectedEvent === id ? "event-choice is-selected" : "event-choice"} type="button" draggable onDragStart={(event) => event.dataTransfer.setData("text/plain", id)} onClick={() => setSelectedEvent(id)} key={id}><Icon />{text}</button>)}
        </div>
        <div className="order-slots">
          {eventOrder.map((eventId, index) => {
            const item = eventItems.find((candidate) => candidate.id === eventId);
            return <button type="button" className="order-slot" key={index} onClick={() => placeEvent(index)} onDragOver={(event) => event.preventDefault()} onDrop={(event) => placeEvent(index, event.dataTransfer.getData("text/plain"))}><b>{index + 1}</b><span>{item?.text ?? "Choose an event"}</span></button>;
          })}
        </div>
        {feedback && <FeedbackMessage type={feedback}>{feedback === "success" ? "Exactly. Input happens first, then processing, then output." : "Not quite. Start with the action you take."}</FeedbackMessage>}
        <div className="challenge-actions">
          <button className="lesson-button secondary" type="button" onClick={() => { setEventOrder([null, null, null]); setFeedback(null); }}>Reset</button>
          {feedback === "success" ? <button className="lesson-button primary" type="button" onClick={nextChallenge}>Next challenge</button> : <button className="lesson-button primary" type="button" onClick={checkOrder} disabled={eventOrder.some((item) => item === null)}>Check</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-panel" data-testid="challenge-storage">
      <div className="stage-copy"><p className="eyebrow">TECH TRIAL 3 OF 3</p><h2>Where should we keep a file?</h2><p>Choose where information should stay so we can use it later.</p></div>
      <div className="storage-choices">
        <button type="button" onClick={() => setFeedback("hint")}><Cpu /><strong>CPU</strong><span>Follows instructions</span></button>
        <button type="button" onClick={() => setFeedback("success")}><HardDrive /><strong>Storage</strong><span>Keeps information</span></button>
        <button type="button" onClick={() => setFeedback("hint")}><Monitor /><strong>Monitor</strong><span>Shows output</span></button>
      </div>
      {feedback && <FeedbackMessage type={feedback}>{feedback === "success" ? "Exactly. Storage keeps the file for later." : "Not quite. Which part keeps information for later?"}</FeedbackMessage>}
      <div className="challenge-actions end">{feedback === "success" && <button className="lesson-button primary" type="button" onClick={onComplete}>Finish mission</button>}</div>
    </div>
  );
}

function MatchTarget({ part, label, icon, onSelect }: { part: Part; label?: Label; icon: React.ReactNode; onSelect: (part: Part, label?: Label | null) => void }) {
  return (
    <button type="button" className="match-target" onClick={() => onSelect(part)} onDragOver={(event) => event.preventDefault()} onDrop={(event) => onSelect(part, event.dataTransfer.getData("text/plain") as Label)}>
      {icon}<strong>{part}</strong><span>{label ?? "Drop or tap label"}</span>
    </button>
  );
}
