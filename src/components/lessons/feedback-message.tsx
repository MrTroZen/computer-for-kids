import { Check, Info } from "lucide-react";

export function FeedbackMessage({ type, children }: { type: "success" | "hint"; children: React.ReactNode }) {
  return (
    <p className={`feedback-message is-${type}`} role="status">
      {type === "success" ? <Check aria-hidden="true" /> : <Info aria-hidden="true" />}
      <span>{children}</span>
    </p>
  );
}
