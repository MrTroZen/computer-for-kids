import type { LearningWorld } from "@/features/worlds/types";

export const worlds: LearningWorld[] = [
  { id: "hardware-lab", order: "01", name: "Hardware Lab", teaser: "Open the case. Meet the parts. Build a computer that actually boots.", status: "available", missionCount: 6, xpReward: 480 },
  { id: "computer-control", order: "02", name: "Computer Control", teaser: "Master windows, files, shortcuts and the secrets of a smooth-running PC.", status: "locked", missionCount: 8, xpReward: 620 },
  { id: "internet-journey", order: "03", name: "Internet Journey", teaser: "Follow a message across routers, servers and the wild worldwide web.", status: "locked", missionCount: 7, xpReward: 560 },
];
