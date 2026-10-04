import type { WorldDefinition } from "@/features/worlds/types";

export const hardwareLessons = [
  { id: "meet-the-computer", slug: "meet-the-computer", number: 1, title: "Meet the Computer", description: "Understand what a computer actually does.", type: "visual", xpReward: 50 },
  { id: "input-and-output", slug: "input-and-output", number: 2, title: "Input & Output", description: "Meet keyboards, mice, monitors, speakers and other input and output devices.", type: "simulation", xpReward: 60, prerequisiteLessonId: "meet-the-computer" },
  { id: "inside-the-computer", slug: "inside-the-computer", number: 3, title: "Inside the Computer", description: "Explore the motherboard, CPU, RAM, SSD, GPU, power supply and cooling.", type: "visual", xpReward: 80, prerequisiteLessonId: "input-and-output" },
  { id: "build-a-computer", slug: "build-a-computer", number: 4, title: "Build a Computer", description: "Put the main components together in an assembly challenge.", type: "simulation", xpReward: 100, prerequisiteLessonId: "inside-the-computer" },
  { id: "connect-everything", slug: "connect-everything", number: 5, title: "Connect Everything", description: "Learn ports, USB, HDMI, Ethernet, audio and power connections.", type: "simulation", xpReward: 80, prerequisiteLessonId: "build-a-computer" },
  { id: "hardware-challenge", slug: "hardware-challenge", number: 6, title: "Hardware Challenge", description: "Complete the final Hardware Lab quiz and challenge.", type: "challenge", xpReward: 110, prerequisiteLessonId: "connect-everything" },
] satisfies WorldDefinition["lessons"];

export const worlds: WorldDefinition[] = [
  { id: "hardware-lab", slug: "hardware", number: 1, title: "Hardware Lab", description: "Understand the physical parts of a computer.", lessons: hardwareLessons, xpReward: 480 },
  { id: "computer-control", slug: "computer-control", number: 2, title: "Computer Control", description: "Learn files, folders, programs, Windows and basic troubleshooting.", lessons: [], requiredWorldId: "hardware-lab", xpReward: 620 },
  { id: "internet-journey", slug: "internet-journey", number: 3, title: "Internet Journey", description: "Understand browsers, Wi-Fi, routers, servers, websites, downloads and uploads.", lessons: [], requiredWorldId: "computer-control", xpReward: 560 },
  { id: "digital-identity", slug: "digital-identity", number: 4, title: "Digital Identity", description: "Learn accounts, email, passwords, cloud storage and 2FA.", lessons: [], requiredWorldId: "internet-journey", xpReward: 520 },
  { id: "internet-detective", slug: "internet-detective", number: 5, title: "Internet Detective", description: "Learn privacy, scams, phishing, suspicious downloads and online safety.", lessons: [], requiredWorldId: "digital-identity", xpReward: 600 },
  { id: "search-master", slug: "search-master", number: 6, title: "Search Master", description: "Learn how to search properly and evaluate information.", lessons: [], requiredWorldId: "internet-detective", xpReward: 460 },
  { id: "ai-academy", slug: "ai-academy", number: 7, title: "AI Academy", description: "Use AI as a learning tool and learn to verify its answers.", lessons: [], requiredWorldId: "search-master", xpReward: 540 },
  { id: "creator-mode", slug: "creator-mode", number: 8, title: "Creator Mode", description: "Learn HTML, CSS and JavaScript by building things.", lessons: [], requiredWorldId: "ai-academy", xpReward: 720 },
  { id: "final-mission", slug: "final-mission", number: 9, title: "Final Mission", description: "Use Git, GitHub and deployment to publish a simple website.", lessons: [], requiredWorldId: "creator-mode", xpReward: 800 },
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}

export function getLesson(world: WorldDefinition, lessonSlug: string) {
  return world.lessons.find((lesson) => lesson.slug === lessonSlug);
}
