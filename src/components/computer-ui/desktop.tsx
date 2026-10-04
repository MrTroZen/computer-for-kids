import React from "react";
import { Taskbar, type TaskbarApp } from "./taskbar";

export type DesktopProps = {
  children?: React.ReactNode;
  apps?: TaskbarApp[];
  className?: string;
  wallpaperClass?: string;
  showTaskbar?: boolean;
};

export function Desktop({
  children,
  apps = [],
  className = "",
  wallpaperClass = "os-wallpaper-bloom",
  showTaskbar = true,
}: DesktopProps) {
  return (
    <div className={`os-desktop ${wallpaperClass}${className ? ` ${className}` : ""}`}>
      <div className="os-desktop-surface">{children}</div>
      {showTaskbar && <Taskbar apps={apps} />}
    </div>
  );
}
