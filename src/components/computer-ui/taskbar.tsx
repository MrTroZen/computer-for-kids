import React from "react";
import { LayoutGrid, Search, Volume2, Wifi } from "lucide-react";

export type TaskbarApp = {
  id: string;
  name: string;
  icon: React.ReactNode;
  active?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
};

export type TaskbarProps = {
  apps?: TaskbarApp[];
  time?: string;
  date?: string;
  onStartClick?: () => void;
  className?: string;
};

export function Taskbar({
  apps = [],
  time = "10:45 AM",
  date = "10/4/2026",
  onStartClick,
  className = "",
}: TaskbarProps) {
  return (
    <footer className={`os-taskbar${className ? ` ${className}` : ""}`} aria-label="Taskbar">
      <div className="os-taskbar-left">
        <button
          type="button"
          className="os-start-button"
          onClick={onStartClick}
          aria-label="Start menu"
          title="Start"
        >
          <span className="os-start-icon">
            <LayoutGrid />
          </span>
          <span className="os-start-text">Start</span>
        </button>

        <div className="os-taskbar-search" role="search">
          <Search aria-hidden="true" />
          <span>Type here to search</span>
        </div>
      </div>

      <div className="os-taskbar-apps">
        {apps.map((app) => (
          <button
            key={app.id}
            type="button"
            className={`os-taskbar-app${app.active ? " is-active" : ""}${app.isOpen ? " is-open" : ""}`}
            onClick={app.onClick}
            title={app.name}
            aria-label={app.name}
          >
            <span className="os-taskbar-app-icon">{app.icon}</span>
            {app.isOpen && <span className="os-taskbar-app-indicator" />}
          </button>
        ))}
      </div>

      <div className="os-taskbar-tray">
        <span className="os-tray-item" title="Wi-Fi: Connected">
          <Wifi aria-hidden="true" />
        </span>
        <span className="os-tray-item" title="Audio: 100%">
          <Volume2 aria-hidden="true" />
        </span>
        <div className="os-tray-clock" title={date}>
          <span className="os-clock-time">{time}</span>
          <span className="os-clock-date">{date}</span>
        </div>
      </div>
    </footer>
  );
}
