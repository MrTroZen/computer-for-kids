import React from "react";
import { Minus, Square, X } from "lucide-react";

export type WindowFrameProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  headerRight?: React.ReactNode;
};

export function WindowFrame({
  title,
  icon,
  children,
  className = "",
  active = true,
  onClose,
  onMinimize,
  onMaximize,
  headerRight,
}: WindowFrameProps) {
  return (
    <div className={`os-window${active ? " is-active" : ""}${className ? ` ${className}` : ""}`}>
      <header className="os-window-titlebar">
        <div className="os-window-title">
          {icon && <span className="os-window-icon" aria-hidden="true">{icon}</span>}
          <span>{title}</span>
        </div>
        <div className="os-window-actions">
          {headerRight}
          <button
            type="button"
            className="os-win-btn os-win-minimize"
            onClick={onMinimize}
            aria-label="Minimize"
          >
            <Minus />
          </button>
          <button
            type="button"
            className="os-win-btn os-win-maximize"
            onClick={onMaximize}
            aria-label="Maximize"
          >
            <Square />
          </button>
          <button
            type="button"
            className="os-win-btn os-win-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X />
          </button>
        </div>
      </header>
      <div className="os-window-body">{children}</div>
    </div>
  );
}
