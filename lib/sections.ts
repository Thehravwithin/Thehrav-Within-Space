export type Section = {
  slug: "explore" | "play" | "reflect" | "discover" | "my-space";
  name: string;
  line: string;
  colour: string;
  comingSoon: string[];
};

export const sections: Section[] = [
  {
    slug: "explore",
    name: "Explore",
    line: "A space for curiosity and unexpected discoveries.",
    colour: "bg-sage/40",
    comingSoon: ["Pick a Card", "A Question for You", "Thought of the day", "Surprise Me"],
  },
  {
    slug: "play",
    name: "Play",
    line: "A playful space for games and activities.",
    colour: "bg-rose/40",
    comingSoon: ["A Little Brain Play", "Memory match", "Observation challenge"],
  },
  {
    slug: "reflect",
    name: "Reflect",
    line: "A space to pause and explore personal experiences.",
    colour: "bg-oat/70",
    comingSoon: ["What's Your Mood?", "Emotion explorer", "Guided reflection prompts"],
  },
  {
    slug: "discover",
    name: "Discover",
    line: "A space to understand ourselves and the world around us.",
    colour: "bg-sage/25",
    comingSoon: ["Attention and presence", "Emotions and regulation", "Growth and self-compassion"],
  },
  {
    slug: "my-space",
    name: "My Space",
    line: "A personal area, just for you.",
    colour: "bg-earth/15",
    comingSoon: ["My Little Shelf", "Account and privacy"],
  },
];

export function getSection(slug: Section["slug"]): Section {
  const found = sections.find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown section: ${slug}`);
  return found;
}
