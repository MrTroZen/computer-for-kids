import type { LessonDefinition } from "@/features/lessons/types";

export type WorldDefinition = {
  id: string;
  slug: string;
  number: number;
  title: string;
  description: string;
  lessons: LessonDefinition[];
  requiredWorldId?: string;
  xpReward: number;
};

export type ProgressStatus = "available" | "in-progress" | "completed" | "locked";
