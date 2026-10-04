import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorldOverview } from "@/components/worlds/world-overview";
import { getWorldBySlug } from "@/data/worlds";

export const metadata: Metadata = {
  title: "Tech Lab — Eesa Byte",
  description: "Power up through six interactive computer challenges.",
};

export default function HardwareWorldPage() {
  const world = getWorldBySlug("hardware");
  if (!world) notFound();
  return <WorldOverview world={world} />;
}
