import type { Metadata } from "next";
import "./app.css";
import "./presentation.css";
import "./using-a-computer.css";
import { AppShell } from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "Eesa Byte — Power Up Your Tech Skills",
  description: "Interactive visual lessons for teaching Eesa practical computer skills.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
