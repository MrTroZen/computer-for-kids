import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bytebound — Computer Skills Adventure",
  description: "A hands-on adventure for learning practical computer skills.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
