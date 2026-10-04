import type { Metadata } from "next";
import { MeetComputerLesson } from "@/components/lessons/meet-computer/meet-computer-lesson";

export const metadata: Metadata = {
  title: "Computer Awakens — Eesa Byte",
  description: "Tech Lab Challenge 01: discover input, process, store and output.",
};

export default function MeetTheComputerPage() {
  return <MeetComputerLesson />;
}
