import React from "react";
import { File, FileCode, FileImage, FileSpreadsheet, FileText, FileVideo } from "lucide-react";

export type FileCategory = "image" | "doc" | "video" | "text" | "pdf" | "code" | "generic";

export type FileIconProps = {
  name: string;
  extension?: string;
  category?: FileCategory;
  selected?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
};

export function getFileCategory(name: string): FileCategory {
  const ext = name.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "svg":
      return "image";
    case "docx":
    case "doc":
      return "doc";
    case "mp4":
    case "mov":
    case "avi":
    case "mkv":
      return "video";
    case "txt":
    case "md":
      return "text";
    case "pdf":
      return "pdf";
    case "html":
    case "css":
    case "js":
    case "ts":
      return "code";
    default:
      return "generic";
  }
}

export function FileIcon({
  name,
  extension,
  category,
  selected = false,
  size = "md",
  onClick,
  className = "",
}: FileIconProps) {
  const cat = category || getFileCategory(name);
  const ext = extension || (name.includes(".") ? `.${name.split(".").pop()}` : "");

  function renderIcon() {
    switch (cat) {
      case "image":
        return <FileImage className="os-file-svg" />;
      case "doc":
        return <FileSpreadsheet className="os-file-svg" />;
      case "video":
        return <FileVideo className="os-file-svg" />;
      case "text":
        return <FileText className="os-file-svg" />;
      case "code":
        return <FileCode className="os-file-svg" />;
      default:
        return <File className="os-file-svg" />;
    }
  }

  return (
    <button
      type="button"
      className={`os-file-item os-cat-${cat} os-size-${size}${selected ? " is-selected" : ""}${className ? ` ${className}` : ""}`}
      onClick={onClick}
      aria-label={`File ${name}`}
      title={name}
    >
      <div className="os-file-glyph-wrap">
        {renderIcon()}
        {ext && <span className="os-file-ext-tag">{ext.replace(".", "").toUpperCase()}</span>}
      </div>
      <span className="os-file-label">{name}</span>
    </button>
  );
}
