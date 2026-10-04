export function EesaByteLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "eesa-logo is-compact" : "eesa-logo"}>
      <svg className="eesa-logo-mark" viewBox="0 0 48 48" aria-hidden="true">
        <path className="mark-field" d="M8 3h27l10 10v27l-5 5H13L3 35V8Z" />
        <path className="mark-circuit" d="M12 14h19M12 24h14M12 34h19M34 14v6h5M31 34v-6h8" />
        <path className="mark-eb" d="M14 11v26h14v-6h-8v-4h7v-6h-7v-4h8v-6Zm15 10h4c5 0 7 2 7 5 0 2-1 3-3 4 2 1 3 2 3 4 0 3-2 4-7 4h-4Zm5 4v3h1c1 0 2 0 2-1s-1-2-2-2Zm0 7v3h1c2 0 2-1 2-2s0-1-2-1Z" />
        <circle cx="39" cy="20" r="2" /><circle cx="39" cy="28" r="2" />
      </svg>
      <span className="eesa-wordmark"><strong>EESA</strong><b>BYTE</b>{!compact && <small>POWER UP YOUR TECH SKILLS</small>}</span>
    </span>
  );
}
