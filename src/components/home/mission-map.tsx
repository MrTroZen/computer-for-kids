"use client";

import { Check, Cpu, Files, LockKeyhole, Wifi } from "lucide-react";
import { useState } from "react";
import { worlds } from "@/data/worlds";

const worldIcons = [Cpu, Files, Wifi];

export function MissionMap() {
  const [selected, setSelected] = useState(0);
  const world = worlds[selected];

  return (
    <section className="learning-home">
      <div className="stage-heading">
        <div>
          <p className="eyebrow">YOUR LEARNING PATH</p>
          <h1>Computer skills</h1>
          <p className="heading-copy">Choose a world to see what you will learn.</p>
        </div>
        <p className="streak-text">{3} day streak</p>
      </div>

      <div className="learning-workspace">
        <div className="world-list" aria-label="Learning worlds">
          {worlds.slice(0, 3).map((item, index) => {
            const Icon = worldIcons[index];
            const isSelected = selected === index;
            return (
              <button
                className={`world-row ${isSelected ? "is-selected" : ""}`}
                key={item.id}
                onClick={() => setSelected(index)}
                type="button"
                aria-label={`${item.name}, ${item.status}`}
                aria-pressed={isSelected}
              >
                <span className="world-icon">{item.status === "locked" ? <LockKeyhole /> : <Icon />}</span>
                <span className="world-name"><strong>{item.name}</strong><small>{item.missionCount} lessons</small></span>
                <span className="world-state">{item.status === "available" ? "Start here" : "Locked"}</span>
              </button>
            );
          })}
        </div>

        <aside className="world-detail" aria-live="polite">
          <div className="detail-header">
            <span className="detail-icon">{world.status === "locked" ? <LockKeyhole /> : <Cpu />}</span>
            <span className={`status-label status-${world.status}`}>
              {world.status === "available" ? <><Check size={15} /> Available</> : <><LockKeyhole size={15} /> Locked</>}
            </span>
          </div>
          <p className="world-number">WORLD {world.order}</p>
          <h2>{world.name}</h2>
          <p>{world.teaser}</p>
          <div className="detail-meta">
            <span>{world.missionCount} lessons</span>
            <span>{world.xpReward} XP available</span>
          </div>
          <button className="primary-button" type="button" disabled={world.status === "locked"}>
            {world.status === "locked" ? "Complete the previous world first" : "View this world"}
          </button>
        </aside>
      </div>
    </section>
  );
}
