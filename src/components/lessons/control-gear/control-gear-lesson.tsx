"use client";

import { useEffect, useMemo, useState } from "react";
import { Camera, Check, FileText, Mic2, MousePointer2, Play, Printer, Radio, Send, TabletSmartphone } from "lucide-react";
import { FeedbackMessage } from "@/components/lessons/feedback-message";
import { LessonShell } from "@/components/lessons/lesson-shell";
import { hardwareLessons } from "@/data/worlds";
import { useProgress } from "@/features/progress/progress-provider";
import { ControlGearComplete } from "./control-gear-complete";
import { RepairChallenge, ScenarioChallenge, SortingChallenge } from "./control-gear-challenges";
import { ComputerWorkbench, deviceInfo, type DeviceDirection, type DeviceId } from "./device-kit";

const stageTitles = [
  "Mission Brief", "Receive Commands", "Talk Back", "System Test", "Eyes & Ears",
  "Paper Output", "Dual Power", "Gear Sort", "Field Test", "Fix the Setup", "Power Unlocked",
];

export function ControlGearLesson() {
  const lesson = hardwareLessons[1];
  const { progress, actions } = useProgress();
  const [stage, setStage] = useState(0);
  const [connected, setConnected] = useState<DeviceId[]>([]);
  const [selected, setSelected] = useState<DeviceId | null>(null);
  const [feedback, setFeedback] = useState<{ id: DeviceId; good: boolean } | null>(null);
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [mouseTested, setMouseTested] = useState(false);
  const [micTested, setMicTested] = useState(false);
  const [webcamTested, setWebcamTested] = useState(false);
  const [printed, setPrinted] = useState(false);
  const [touchRevealed, setTouchRevealed] = useState(false);
  const [sortAssignments, setSortAssignments] = useState<Partial<Record<DeviceId, DeviceDirection>>>({});
  const [scenariosComplete, setScenariosComplete] = useState(false);
  const [wasAlreadyCompleted, setWasAlreadyCompleted] = useState(false);
  const [poweredUp, setPoweredUp] = useState(false);

  const cleanMessage = message.trim();
  const sortedAll = Object.keys(sortAssignments).length === 7;
  const stageReady = [
    false,
    connected.includes("keyboard") && connected.includes("mouse"),
    connected.includes("monitor") && connected.includes("speakers"),
    messageSent && mouseTested,
    micTested && webcamTested,
    printed,
    touchRevealed,
    sortedAll,
    scenariosComplete,
  ][stage] ?? false;

  useEffect(() => {
    if (!feedback?.good) return;
    const timer = window.setTimeout(() => setFeedback(null), 2100);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  const tray = useMemo(() => {
    if (stage === 1) return (["keyboard", "mouse", "monitor"] as DeviceId[]).filter((id) => !connected.includes(id));
    if (stage === 2) return (["monitor", "speakers"] as DeviceId[]).filter((id) => !connected.includes(id));
    return [];
  }, [connected, stage]);

  function connectDevice(id: DeviceId) {
    const allowed = stage === 1 ? ["keyboard", "mouse"] : ["monitor", "speakers"];
    if (!allowed.includes(id)) {
      setFeedback({ id, good: false });
      return;
    }
    setConnected((current) => current.includes(id) ? current : [...current, id]);
    setSelected(null);
    setFeedback({ id, good: true });
  }

  function nextStage() {
    setFeedback(null);
    setSelected(null);
    setStage((current) => current + 1);
  }

  function finishMission() {
    const completedBefore = progress.completedLessonIds.includes(lesson.id);
    setWasAlreadyCompleted(completedBefore);
    actions.completeLesson(lesson.id, lesson.xpReward);
    setPoweredUp(true);
    window.setTimeout(() => setStage(10), 850);
  }

  return (
    <LessonShell
      stage={stage}
      stageCount={stageTitles.length}
      stageTitle={stageTitles[stage]}
      onBack={stage > 0 && stage < 9 ? () => setStage((current) => current - 1) : undefined}
      onNext={stage > 0 && stage < 9 ? nextStage : undefined}
      nextDisabled={!stageReady}
      nextLabel={stage === 8 ? "Final challenge" : "Continue"}
      hideNavigation={stage === 0 || stage >= 9}
    >
      {stage === 0 && (
        <div className="cg-opening">
          <div className="cg-opening-copy">
            <p className="eyebrow">TECH LAB // CHALLENGE 02</p>
            <h1>CONTROL GEAR</h1>
            <p>Your computer is ready, but it can&apos;t see, hear or talk to you yet.</p>
            <div className="cg-mission-order"><span>MISSION</span><strong>Connect the right gear.</strong></div>
            <button className="lesson-button primary" type="button" onClick={() => setStage(1)}><Play /> Start mission</button>
          </div>
          <ComputerWorkbench connected={[]} tray={["keyboard", "mouse", "monitor", "speakers", "microphone", "webcam"]} />
        </div>
      )}

      {stage === 1 && (
        <MissionStage title="Give the computer your commands" instruction="Connect the keyboard and mouse. Drag each one to the bay, or tap it and then tap the bay.">
          <ComputerWorkbench connected={connected} tray={tray} selected={selected} onSelect={setSelected} onConnect={connectDevice} />
          {feedback?.good && <FeedbackMessage type="success"><Check /> CONNECTED! {deviceInfo[feedback.id].label} — INPUT DEVICE. {deviceInfo[feedback.id].explanation}</FeedbackMessage>}
          {feedback && !feedback.good && <FeedbackMessage type="hint">Not yet. First choose gear that sends your commands into the computer.</FeedbackMessage>}
          <DirectionStrip direction="input" />
        </MissionStage>
      )}

      {stage === 2 && (
        <MissionStage title="Make the computer talk back" instruction="Now connect the gear that shows and plays the computer’s answer.">
          <ComputerWorkbench connected={connected} tray={tray} selected={selected} onSelect={setSelected} onConnect={connectDevice} />
          {feedback?.good && <FeedbackMessage type="success"><Check /> CONNECTED! {deviceInfo[feedback.id].label} — OUTPUT DEVICE. {deviceInfo[feedback.id].explanation}</FeedbackMessage>}
          {connected.includes("speakers") && <div className="cg-music-notes" aria-label="Speakers producing music notes">♪ &nbsp; ♪ &nbsp; ♫</div>}
          <DirectionStrip direction="output" />
        </MissionStage>
      )}

      {stage === 3 && (
        <MissionStage title="Test the system" instruction="Send a message, then use the mouse inside the mini desktop.">
          <div className="cg-system-test">
            <div className={`cg-test-monitor${mouseTested ? " is-activated" : ""}`}>
              <div className="cg-test-screen" onClick={() => setMouseTested(true)} onPointerMove={(event) => { if (event.pointerType === "mouse" && event.buttons > 0) setMouseTested(true); }}>
                <span>TYPE A MESSAGE</span>
                <strong>{messageSent ? cleanMessage.toUpperCase() : "_"}</strong>
                <button type="button" onClick={() => setMouseTested(true)}><MousePointer2 /> {mouseTested ? "INPUT DETECTED" : "CLICK DESKTOP"}</button>
              </div>
              <i />
            </div>
            <div className="cg-test-controls">
              <label htmlFor="control-message">Keyboard input</label>
              <div><input id="control-message" value={message} onChange={(event) => { setMessage(event.target.value.slice(0, 22)); setMessageSent(false); }} placeholder="Type hello" autoComplete="off" /><button type="button" onClick={() => setMessageSent(true)} disabled={!cleanMessage}><Send /> Send</button></div>
              <div className="cg-mini-flow"><span>KEYBOARD</span><b>↓ INPUT ↓</b><span>COMPUTER</span><b>↓ OUTPUT ↓</b><span>MONITOR</span></div>
            </div>
          </div>
          {messageSent && mouseTested && <FeedbackMessage type="success">Two signals traced: mouse action is INPUT; the screen change is OUTPUT.</FeedbackMessage>}
        </MissionStage>
      )}

      {stage === 4 && (
        <MissionStage title="Give the computer eyes and ears" instruction="Simulate a voice signal and a camera signal. No device permissions are used.">
          <div className="cg-signal-demos">
            <div className={`cg-signal-device${micTested ? " is-active" : ""}`}><Mic2 /><strong>MICROPHONE</strong><span>INPUT DEVICE</span><div className="cg-wave"><i /><i /><i /><i /></div><button type="button" onClick={() => setMicTested(true)}>Speak</button><small>Your voice → computer</small></div>
            <div className={`cg-signal-device${webcamTested ? " is-active" : ""}`}><Camera /><strong>WEBCAM</strong><span>INPUT DEVICE</span><div className="cg-camera-frame">{webcamTested ? <><Radio /><b>IMAGE DATA</b></> : <i />}</div><button type="button" onClick={() => setWebcamTested(true)}>Capture</button><small>Picture → computer</small></div>
          </div>
          {micTested && webcamTested && <FeedbackMessage type="success">Eyes and ears online. Both devices send information INTO the computer.</FeedbackMessage>}
        </MissionStage>
      )}

      {stage === 5 && (
        <MissionStage title="Send it to paper" instruction="Print the hero document and watch information leave the computer.">
          <div className="cg-print-station">
            <div className="cg-print-document"><FileText /><strong>EESA BYTE</strong><span>TECH HERO</span></div>
            <div className="cg-print-flow"><span>COMPUTER</span><b>→</b><span>OUTPUT</span><b>→</b></div>
            <div className={`cg-printer${printed ? " is-printing" : ""}`}><Printer /><div className="cg-paper"><strong>EESA BYTE</strong><span>TECH HERO</span></div><button type="button" onClick={() => setPrinted(true)} disabled={printed}>Print</button></div>
          </div>
          {printed && <FeedbackMessage type="success">Printer — OUTPUT DEVICE. The computer sent information OUT onto paper.</FeedbackMessage>}
        </MissionStage>
      )}

      {stage === 6 && (
        <MissionStage title="The surprise device" instruction="A touchscreen displays pictures and detects your finger. Is it input or output?">
          <div className={`cg-touch-discovery${touchRevealed ? " is-revealed" : ""}`}>
            <div className="cg-tablet"><TabletSmartphone /><div><span>TOUCHSCREEN</span>{touchRevealed && <strong>INPUT + OUTPUT</strong>}</div></div>
            {!touchRevealed ? <div className="cg-touch-choices"><button type="button" onClick={() => setTouchRevealed(true)}>Input</button><button type="button" onClick={() => setTouchRevealed(true)}>Output</button></div> : <><p className="cg-dual-power">DUAL POWER DISCOVERED: BOTH!</p><div className="cg-touch-flows"><span>FINGER ↓ SCREEN = <b>INPUT</b></span><span>SCREEN → EYES = <b>OUTPUT</b></span></div><small>A touchscreen shows you information AND receives your touch.</small></>}
          </div>
        </MissionStage>
      )}

      {stage === 7 && (
        <MissionStage title="Sort the control gear" instruction="Place all seven devices by the direction their information travels.">
          <SortingChallenge assignments={sortAssignments} onAssign={(id, direction) => setSortAssignments((current) => ({ ...current, [id]: direction }))} />
        </MissionStage>
      )}

      {stage === 8 && (
        <MissionStage title="Field test" instruction="Trace input and output in five real situations.">
          {!scenariosComplete ? <ScenarioChallenge onComplete={() => setScenariosComplete(true)} /> : <div className="cg-field-cleared"><Check /><strong>FIELD TEST CLEARED</strong><span>Every signal traced.</span></div>}
        </MissionStage>
      )}

      {stage === 9 && (
        <MissionStage title={poweredUp ? "System ready" : "Fix the setup"} instruction={poweredUp ? "All gear is connected in the right direction." : "Move every misplaced device to the correct side."}>
          {poweredUp ? <div className="cg-power-up"><Radio /><strong>POWER UP!</strong><span>SYSTEM READY</span></div> : <RepairChallenge onComplete={finishMission} />}
        </MissionStage>
      )}

      {stage === 10 && <ControlGearComplete xpReward={lesson.xpReward} alreadyCompleted={wasAlreadyCompleted} />}
    </LessonShell>
  );
}

function MissionStage({ title, instruction, children }: { title: string; instruction: string; children: React.ReactNode }) {
  return <div className="interactive-stage cg-stage"><div className="stage-copy"><h1>{title}</h1><p>{instruction}</p></div>{children}</div>;
}

function DirectionStrip({ direction }: { direction: DeviceDirection }) {
  return <div className={`cg-direction-strip is-${direction}`}><span>{direction === "input" ? "YOU" : "COMPUTER"}</span><b>→</b><strong>{direction.toUpperCase()}</strong><b>→</b><span>{direction === "input" ? "COMPUTER" : "YOU"}</span></div>;
}
