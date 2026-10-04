import type { WorldDefinition } from "@/features/worlds/types";

export const hardwareLessons = [
  { id: "meet-the-computer", slug: "meet-the-computer", number: 1, title: "Computer Awakens", description: "Discover what every computer actually does.", type: "visual", xpReward: 50 },
  { id: "input-and-output", slug: "input-and-output", number: 2, title: "Control Gear", description: "Learn how input and output devices connect you to a computer.", type: "simulation", xpReward: 60, prerequisiteLessonId: "meet-the-computer" },
  { id: "inside-the-computer", slug: "inside-the-computer", number: 3, title: "Under the Armor", description: "Discover the CPU, motherboard, RAM, SSD, GPU, PSU and cooling.", type: "visual", xpReward: 80, prerequisiteLessonId: "input-and-output" },
  { id: "build-a-computer", slug: "build-a-computer", number: 4, title: "Build Mode", description: "Assemble the main computer components.", type: "simulation", xpReward: 100, prerequisiteLessonId: "inside-the-computer" },
  { id: "connect-everything", slug: "connect-everything", number: 5, title: "Connection Mission", description: "Connect ports, cables and peripherals.", type: "simulation", xpReward: 80, prerequisiteLessonId: "build-a-computer" },
  { id: "hardware-challenge", slug: "hardware-challenge", number: 6, title: "Tech Trial", description: "Complete the final Tech Lab challenge.", type: "challenge", xpReward: 110, prerequisiteLessonId: "connect-everything" },
] satisfies WorldDefinition["lessons"];

export const worlds: WorldDefinition[] = [
  { id: "hardware-lab", slug: "hardware", number: 1, title: "Tech Lab", description: "Understand the machine and unlock its core powers.", lessons: hardwareLessons, xpReward: 480 },
  { id: "computer-control", slug: "computer-control", number: 2, title: "Desktop Rescue", description: "Take control of files, folders, apps and Windows.", lessons: [], requiredWorldId: "hardware-lab", xpReward: 620 },
  { id: "internet-journey", slug: "internet-journey", number: 3, title: "Web Mission", description: "Discover how browsers, Wi-Fi, routers and websites work.", lessons: [], requiredWorldId: "computer-control", xpReward: 560 },
  { id: "digital-identity", slug: "digital-identity", number: 4, title: "Identity Shield", description: "Protect accounts, passwords, email and cloud files.", lessons: [], requiredWorldId: "internet-journey", xpReward: 520 },
  { id: "internet-detective", slug: "internet-detective", number: 5, title: "Cyber Patrol", description: "Spot scams, phishing, unsafe downloads and online danger.", lessons: [], requiredWorldId: "digital-identity", xpReward: 600 },
  { id: "search-master", slug: "search-master", number: 6, title: "Search Powers", description: "Find the right information and check if it is reliable.", lessons: [], requiredWorldId: "internet-detective", xpReward: 460 },
  { id: "ai-academy", slug: "ai-academy", number: 7, title: "AI Sidekick", description: "Work with AI and learn how to verify its answers.", lessons: [], requiredWorldId: "search-master", xpReward: 540 },
  { id: "creator-mode", slug: "creator-mode", number: 8, title: "Builder Lab", description: "Create things with HTML, CSS and JavaScript.", lessons: [], requiredWorldId: "ai-academy", xpReward: 720 },
  { id: "final-mission", slug: "final-mission", number: 9, title: "Launch Day", description: "Use Git, GitHub and deployment to put your creation online.", lessons: [], requiredWorldId: "creator-mode", xpReward: 800 },
];

export function getWorldBySlug(slug: string) {
  return worlds.find((world) => world.slug === slug);
}

export function getLesson(world: WorldDefinition, lessonSlug: string) {
  return world.lessons.find((lesson) => lesson.slug === lessonSlug);
}
