import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorldOverview } from "@/components/worlds/world-overview";
import { getWorldBySlug } from "@/data/worlds";

export const metadata: Metadata = {
  title: "Hardware Lab — Computer Lab",
  description: "Learn the physical parts of a computer through six practical missions.",
};

export default function HardwareWorldPage() {
  const world = getWorldBySlug("hardware");
  if (!world) notFound();
  return <WorldOverview world={world} />;
}
