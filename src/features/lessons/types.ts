export type LessonType = "visual" | "simulation" | "challenge" | "project";

export type LessonDefinition = {
  id: string;
  slug: string;
  number: number;
  title: string;
  description: string;
  type: LessonType;
  xpReward: number;
  prerequisiteLessonId?: string;
};
