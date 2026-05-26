export type MediaType = "spotify-episode" | "spotify-show" | "apple-podcast" | "youtube" | "instagram" | "tiktok";

export interface MediaItem {
  id: string;
  title: string;
  creator: string;
  category: string; // "Relationships" | "Trauma" | "Faith" | "Mental Health" | "Modern Wisdom"
  type: MediaType;
  /** For spotify: episode/show id. For youtube: video id. For IG/TikTok/Apple: full URL. */
  embedRef: string;
  description: string;
  externalUrl?: string;
}

export const CATEGORIES = [
  "All",
  "Relationships",
  "Trauma & Healing",
  "Faith & Identity",
  "Mental Health",
  "Self-Knowledge",
] as const;

export const MEDIA_TYPE_LABELS: Record<MediaType, string> = {
  "spotify-episode": "Podcast",
  "spotify-show": "Podcast",
  "apple-podcast": "Podcast",
  youtube: "Video",
  instagram: "Instagram",
  tiktok: "TikTok",
};

export const media: MediaItem[] = [
  {
    id: "doac-show",
    title: "The Diary Of A CEO with Steven Bartlett",
    creator: "Steven Bartlett",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "7iQXmUT7XGuZSzAMjoNWlX",
    description:
      "Long-form conversations with thinkers, founders, and psychologists on identity, relationships, and what makes a meaningful life.",
    externalUrl: "https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX",
  },
  {
    id: "modern-wisdom-show",
    title: "Modern Wisdom",
    creator: "Chris Williamson",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "4DDsabHrM9BcEgsXMrtTBu",
    description:
      "Honest conversations on psychology, relationships, and self-improvement with researchers, therapists, and writers.",
    externalUrl: "https://open.spotify.com/show/4DDsabHrM9BcEgsXMrtTBu",
  },
  {
    id: "huberman-show",
    title: "Huberman Lab",
    creator: "Dr. Andrew Huberman",
    category: "Mental Health",
    type: "spotify-show",
    embedRef: "79CkJF3UJTHFV8Dse3Oy0P",
    description:
      "Neuroscience-backed tools for sleep, stress, focus, and emotional regulation.",
    externalUrl: "https://open.spotify.com/show/79CkJF3UJTHFV8Dse3Oy0P",
  },
  {
    id: "we-can-do-hard-things",
    title: "We Can Do Hard Things",
    creator: "Glennon Doyle",
    category: "Relationships",
    type: "spotify-show",
    embedRef: "5Vix7g7pyfWlvCDgtFnDhg",
    description:
      "Tender, honest conversations on love, identity, faith, and what it means to belong to yourself.",
    externalUrl: "https://open.spotify.com/show/5Vix7g7pyfWlvCDgtFnDhg",
  },
  {
    id: "esther-perel",
    title: "Where Should We Begin? with Esther Perel",
    creator: "Esther Perel",
    category: "Relationships",
    type: "spotify-show",
    embedRef: "3iDpd3JfaRZqfFGiyloXZD",
    description:
      "Eavesdrop on one-time therapy sessions with real couples navigating love, betrayal, and reconnection.",
    externalUrl: "https://open.spotify.com/show/3iDpd3JfaRZqfFGiyloXZD",
  },
  {
    id: "therapy-chat",
    title: "Therapy Chat",
    creator: "Laura Reagan, LCSW-C",
    category: "Trauma & Healing",
    type: "spotify-show",
    embedRef: "1pvgwO9zRoY5OPYJATzNUL",
    description:
      "Trauma-informed therapists in conversation about somatic work, attachment, and slow healing.",
    externalUrl: "https://open.spotify.com/show/1pvgwO9zRoY5OPYJATzNUL",
  },
  {
    id: "holy-post",
    title: "The Holy Post",
    creator: "Phil Vischer & Skye Jethani",
    category: "Faith & Identity",
    type: "spotify-show",
    embedRef: "1NMnYxyHzZeKn1k47hsTpx",
    description:
      "Thoughtful, grace-filled conversations on faith, culture, and what it means to follow Jesus today.",
    externalUrl: "https://open.spotify.com/show/1NMnYxyHzZeKn1k47hsTpx",
  },
];

export function getMediaCategories(): string[] {
  const set = new Set<string>(["All"]);
  for (const m of media) set.add(m.category);
  return Array.from(set);
}
