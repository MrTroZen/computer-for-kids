export const topics = [
  { number: 1, slug: "computer-basics", title: "Computer Basics", description: "How a computer takes, works with and returns information.", icon: "computer", ready: true },
  { number: 2, slug: "hardware", title: "Hardware", description: "The parts inside a computer and what each one does.", icon: "cpu", ready: true },
  { number: 3, slug: "using-a-computer", title: "Using a Computer", description: "Desktop, files, folders, apps and useful shortcuts.", icon: "mouse", ready: true },
  { number: 4, slug: "internet", title: "Internet", description: "How computers connect to websites and servers.", icon: "router", ready: false },
  { number: 5, slug: "accounts-and-cloud", title: "Accounts & Cloud", description: "Accounts, email, passwords and cloud storage.", icon: "cloud", ready: false },
  { number: 6, slug: "internet-safety", title: "Internet Safety", description: "Safe choices, privacy and suspicious messages.", icon: "shield", ready: false },
  { number: 7, slug: "searching-and-learning", title: "Searching & Learning", description: "Find useful information and check it carefully.", icon: "search", ready: false },
  { number: 8, slug: "ai", title: "AI", description: "Ask useful questions and check AI answers.", icon: "bot", ready: false },
  { number: 9, slug: "coding", title: "Coding", description: "HTML, CSS and JavaScript through tiny demonstrations.", icon: "code", ready: false },
  { number: 10, slug: "putting-a-website-online", title: "Putting a Website Online", description: "Git, GitHub and publishing a simple website.", icon: "rocket", ready: false },
] as const;

export type Topic = (typeof topics)[number];

export function getTopic(slug: string) {
  return topics.find((topic) => topic.slug === slug);
}
