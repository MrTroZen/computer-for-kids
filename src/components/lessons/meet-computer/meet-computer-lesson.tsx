"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, MousePointerClick, Play, Save, Send } from "lucide-react";
import { hardwareLessons } from "@/data/worlds";
import { FeedbackMessage } from "@/components/lessons/feedback-message";
import { LessonShell } from "@/components/lessons/lesson-shell";
import { MissionComplete } from "@/components/lessons/mission-complete";
import { useProgress } from "@/features/progress/progress-provider";
import { ChallengePanel } from "./challenge-panel";
import { ComputerDiagram } from "./computer-diagram";

const stageTitles = ["What does a computer do?", "Input", "Processing", "Storage", "Output", "Put it all together", "Challenge", "Mission complete"];
const concepts = [
  { id: "input", label: "Input", text: "Information you give the computer." },
  { id: "process", label: "Processing", text: "The computer follows instructions and works with information." },
  { id: "storage", label: "Storage", text: "Information kept so you can use it later." },
  { id: "output", label: "Output", text: "Information the computer gives back to you." },
] as const;

export function MeetComputerLesson() {
  const lesson = hardwareLessons[0];
  const { progress, actions } = useProgress();
  const [stage, setStage] = useState(0);
  const [visitedConcepts, setVisitedConcepts] = useState<string[]>([]);
  const [activeConcept, setActiveConcept] = useState<(typeof concepts)[number]["id"]>("input");
  const [name, setName] = useState("");
  const [inputSent, setInputSent] = useState(false);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [processed, setProcessed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [outputShown, setOutputShown] = useState(false);
  const [flowPlaying, setFlowPlaying] = useState(false);
  const [flowStep, setFlowStep] = useState(0);
  const [flowReplayed, setFlowReplayed] = useState(false);
  const [wasAlreadyCompleted, setWasAlreadyCompleted] = useState(false);

  const cleanName = name.trim();
  const processedName = useMemo(() => cleanName.toUpperCase(), [cleanName]);

  useEffect(() => {
    if (!flowPlaying) return;
    const timer = window.setInterval(() => {
      setFlowStep((current) => {
        if (current >= 3) {
          window.clearInterval(timer);
          setFlowPlaying(false);
          setFlowReplayed(true);
          return 4;
        }
        return current + 1;
      });
    }, 650);
    return () => window.clearInterval(timer);
  }, [flowPlaying]);

  function visitConcept(id: (typeof concepts)[number]["id"]) {
    setActiveConcept(id);
    setVisitedConcepts((current) => current.includes(id) ? current : [...current, id]);
  }

  function updateName(value: string) {
    setName(value.slice(0, 18));
    setInputSent(false);
    setProcessed(false);
    setSaved(false);
    setOutputShown(false);
    setFlowReplayed(false);
  }

  function runProcessing() {
    if (!cleanName || processing) return;
    setProcessing(true);
    window.setTimeout(() => {
      setProcessing(false);
      setProcessed(true);
    }, 700);
  }

  function replayFlow() {
    setFlowStep(0);
    setFlowReplayed(false);
    setFlowPlaying(true);
  }

  function completeMission() {
    const completedBefore = progress.completedLessonIds.includes(lesson.id);
    setWasAlreadyCompleted(completedBefore);
    actions.completeLesson(lesson.id, lesson.xpReward);
    setStage(7);
  }

  const nextEnabled = [visitedConcepts.length === concepts.length, inputSent, processed, saved, outputShown, flowReplayed][stage] ?? false;

  return (
    <LessonShell
      stage={stage}
      stageCount={stageTitles.length}
      stageTitle={stageTitles[stage]}
      onBack={stage > 0 && stage < 7 ? () => setStage((current) => current - 1) : undefined}
      onNext={stage < 6 ? () => setStage((current) => current + 1) : undefined}
      nextDisabled={!nextEnabled}
      hideNavigation={stage === 7}
    >
      {stage === 0 && (
        <InteractiveStage title="A computer takes information, works with it, and gives you a result." instruction="Select each job to see what it means.">
          <ComputerDiagram focus="overview" />
          <div className="concept-tabs">
            {concepts.map((concept) => (
              <button className={activeConcept === concept.id ? "concept-tab is-active" : "concept-tab"} type="button" onClick={() => visitConcept(concept.id)} key={concept.id}>
                <span>{visitedConcepts.includes(concept.id) && <Check />}{concept.label}</span>
                {activeConcept === concept.id && <small>{concept.text}</small>}
              </button>
            ))}
          </div>
        </InteractiveStage>
      )}

      {stage === 1 && (
        <InteractiveStage title="Input is information you give the computer." instruction="Type your name, then send it to the computer.">
          <ComputerDiagram focus="input" name={cleanName} transferVisible={inputSent} onMouseClick={() => setMouseClicked(true)} />
          <div className="input-workbench">
            <label htmlFor="student-name">Type your name</label>
            <div className="input-row">
              <input id="student-name" value={name} onChange={(event) => updateName(event.target.value)} maxLength={18} autoComplete="off" placeholder="Your name" />
              <button className="lesson-button primary" type="button" onClick={() => setInputSent(true)} disabled={!cleanName}><Send /> Send input</button>
            </div>
            <small>{name.length}/18 characters</small>
          </div>
          {inputSent && <FeedbackMessage type="success">You gave the computer input: “{cleanName}”.</FeedbackMessage>}
          {mouseClicked && <FeedbackMessage type="hint"><MousePointerClick /> Clicking is input too. It tells the computer what you want.</FeedbackMessage>}
        </InteractiveStage>
      )}

      {stage === 2 && (
        <InteractiveStage title="The CPU follows instructions and works with information." instruction="Run one instruction and watch your input change.">
          <ComputerDiagram focus="process" name={cleanName} processedName={processed ? processedName : ""} />
          <div className="process-workbench">
            <div><span>Input</span><strong>{cleanName.toLowerCase()}</strong></div>
            <div><span>CPU instruction</span><strong>MAKE LETTERS UPPERCASE</strong></div>
            <div><span>Result</span><strong>{processing ? "Processing…" : processed ? processedName : "—"}</strong></div>
            <button className="lesson-button primary" type="button" onClick={runProcessing} disabled={processing || processed}><Play /> Run</button>
          </div>
          {processed && <FeedbackMessage type="success">The CPU followed the instruction and produced a new result.</FeedbackMessage>}
        </InteractiveStage>
      )}

      {stage === 3 && (
        <InteractiveStage title="Storage keeps information so you can use it later." instruction={`Should we save ${processedName}?`}>
          <ComputerDiagram focus="storage" processedName={processedName} saved={saved} />
          <div className="single-action"><button className="lesson-button primary" type="button" onClick={() => setSaved(true)} disabled={saved}><Save /> Save {processedName}</button></div>
          {saved && <FeedbackMessage type="success">Saved. Information on storage can stay after an app closes.</FeedbackMessage>}
        </InteractiveStage>
      )}

      {stage === 4 && (
        <InteractiveStage title="Output is information the computer gives back to you." instruction="Send the result to the monitor.">
          <ComputerDiagram focus="output" processedName={processedName} outputVisible={outputShown} />
          <div className="single-action"><button className="lesson-button primary" type="button" onClick={() => setOutputShown(true)} disabled={outputShown}><Send /> Show output</button></div>
          {outputShown && <FeedbackMessage type="success">Text on a monitor is output. Sound and printed paper can be output too.</FeedbackMessage>}
        </InteractiveStage>
      )}

      {stage === 5 && (
        <InteractiveStage title="One action can travel through the whole system." instruction="Replay your example from start to finish.">
          <ComputerDiagram focus="flow" name={cleanName} processedName={processedName} saved={saved} outputVisible={flowStep === 4} flowStep={flowStep} />
          <div className="flow-summary">
            <span className={flowStep === 1 ? "is-active" : ""}>Typed “{cleanName}”</span><b>→</b>
            <span className={flowStep === 2 ? "is-active" : ""}>Changed to “{processedName}”</span><b>→</b>
            <span className={flowStep === 3 ? "is-active" : ""}>Saved “{processedName}”</span><b>→</b>
            <span className={flowStep === 4 ? "is-active" : ""}>Displayed a greeting</span>
          </div>
          <div className="single-action"><button className="lesson-button primary" type="button" onClick={replayFlow} disabled={flowPlaying}><Play /> {flowReplayed ? "Replay flow" : "Play flow"}</button></div>
        </InteractiveStage>
      )}

      {stage === 6 && <ChallengePanel onComplete={completeMission} />}
      {stage === 7 && <MissionComplete xpReward={lesson.xpReward} alreadyCompleted={wasAlreadyCompleted} />}
    </LessonShell>
  );
}

function InteractiveStage({ title, instruction, children }: { title: string; instruction: string; children: React.ReactNode }) {
  return (
    <div className="interactive-stage">
      <div className="stage-copy"><h1>{title}</h1><p>{instruction}</p></div>
      {children}
    </div>
  );
}
