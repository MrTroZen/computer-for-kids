import React from "react";
import { Folder, FolderOpen } from "lucide-react";

export type FolderIconProps = {
  name: string;
  itemCount?: number;
  isOpen?: boolean;
  selected?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
};

export function FolderIcon({
  name,
  itemCount,
  isOpen = false,
  selected = false,
  size = "md",
  onClick,
  className = "",
}: FolderIconProps) {
  return (
    <button
      type="button"
      className={`os-folder-item os-size-${size}${selected ? " is-selected" : ""}${isOpen ? " is-open" : ""}${className ? ` ${className}` : ""}`}
      onClick={onClick}
      aria-label={`Folder ${name}${itemCount !== undefined ? ` with ${itemCount} items` : ""}`}
      title={name}
    >
      <div className="os-folder-glyph-wrap">
        {isOpen ? <FolderOpen className="os-folder-svg" /> : <Folder className="os-folder-svg" />}
        {itemCount !== undefined && <span className="os-folder-badge">{itemCount}</span>}
      </div>
      <span className="os-folder-label">{name}</span>
    </button>
  );
}
