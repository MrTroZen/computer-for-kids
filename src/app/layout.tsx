import type { Metadata } from "next";
import "./globals.css";
import "./journey.css";
import "./lesson.css";
import "./control-gear.css";
import "./hero-theme.css";
import { AppShell } from "@/components/layout/app-shell";
import { ProgressProvider } from "@/features/progress/progress-provider";

export const metadata: Metadata = {
  title: "Eesa Byte — Power Up Your Tech Skills",
  description: "Eesa's interactive superhero-tech adventure.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>
          <AppShell>{children}</AppShell>
        </ProgressProvider>
      </body>
    </html>
  );
}
