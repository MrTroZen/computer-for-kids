import { notFound } from "next/navigation";
import { ComputerBasicsPresentation } from "@/components/presentation/computer-basics-presentation";
import { HardwarePresentation } from "@/components/presentation/hardware-presentation";
import { UsingAComputerPresentation } from "@/components/presentation/using-a-computer-presentation";
import { TopicPlaceholder } from "@/components/presentation/topic-placeholder";
import { getTopic, topics } from "@/data/topics";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  if (slug === "computer-basics") return <ComputerBasicsPresentation />;
  if (slug === "hardware") return <HardwarePresentation />;
  if (slug === "using-a-computer") return <UsingAComputerPresentation />;
  return <TopicPlaceholder title={topic.title} description={topic.description} />;
}
