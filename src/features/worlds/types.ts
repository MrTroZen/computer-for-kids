export type WorldStatus = "available" | "locked" | "complete";

export type LearningWorld = {
  id: string;
  order: string;
  name: string;
  teaser: string;
  status: WorldStatus;
  missionCount: number;
  xpReward: number;
};
