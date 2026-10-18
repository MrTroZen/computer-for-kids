import Image from "next/image";

interface EesaByteLogoProps {
  compact?: boolean;
  className?: string;
  priority?: boolean;
}

export function EesaByteLogo({
  compact = false,
  className = "",
  priority = true,
}: EesaByteLogoProps) {
  return (
    <span className={`eesa-logo ${compact ? "is-compact" : ""} ${className}`.trim()}>
      <Image
        src={compact ? "/logo-emblem-transparent.png" : "/logo-transparent.png"}
        alt="Eesa Byte — Power Up Your Tech Skills"
        width={compact ? 175 : 240}
        height={compact ? 42 : 68}
        priority={priority}
        className="eesa-logo-image"
      />
    </span>
  );
}
