import type { Metadata } from "next";
import "./globals.css";
import "./journey.css";
import "./lesson.css";
import { AppShell } from "@/components/layout/app-shell";
import { ProgressProvider } from "@/features/progress/progress-provider";

export const metadata: Metadata = {
  title: "Bytebound — Computer Skills Adventure",
  description: "A hands-on adventure for learning practical computer skills.",
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
