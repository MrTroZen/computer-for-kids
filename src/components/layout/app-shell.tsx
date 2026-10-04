import Link from "next/link";
import { EesaByteLogo } from "@/components/brand/eesa-byte-logo";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-frame">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Eesa Byte home">
          <EesaByteLogo compact />
        </Link>
        <span className="topbar-tagline">POWER UP YOUR TECH SKILLS</span>
      </header>
      <main>{children}</main>
    </div>
  );
}
