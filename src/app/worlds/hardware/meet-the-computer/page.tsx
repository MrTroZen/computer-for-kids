import type { Metadata } from "next";
import { MeetComputerLesson } from "@/components/lessons/meet-computer/meet-computer-lesson";

export const metadata: Metadata = {
  title: "Meet the Computer — Hardware Lab",
  description: "Mission 1 of Hardware Lab.",
};

export default function MeetTheComputerPage() {
  return <MeetComputerLesson />;
}
