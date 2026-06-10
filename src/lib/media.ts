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

/**
 * How to add a one-off Instagram Reel or TikTok video
 * --------------------------------------------------
 * The embed component supports single posts/reels/videos out of the box.
 * Just paste the full URL into `embedRef`.
 *
 * Instagram Reel example:
 *   {
 *     id: "unique-slug",
 *     title: "Your title for the card",
 *     creator: "@handle or Person Name",
 *     category: "Relationships",
 *     type: "instagram",
 *     embedRef: "https://www.instagram.com/reel/ABC123xyz/",
 *     description: "One-sentence why it matters.",
 *     externalUrl: "https://www.instagram.com/reel/ABC123xyz/",
 *   }
 *
 * TikTok example:
 *   {
 *     id: "unique-slug",
 *     title: "Your title",
 *     creator: "@handle",
 *     category: "Mental Health",
 *     type: "tiktok",
 *     embedRef: "https://www.tiktok.com/@user/video/1234567890",
 *     description: "Why it's worth a watch.",
 *     externalUrl: "https://www.tiktok.com/@user/video/1234567890",
 *   }
 *
 * YouTube takes the video id (the part after `v=`), not the full URL.
 */

export const media: MediaItem[] = [
  // ——— Podcasts ———
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
    embedRef: "3fKOTwtnX5oZLaiNntKWAV",
    description:
      "Eavesdrop on one-time therapy sessions with real couples navigating love, betrayal, and reconnection.",
    externalUrl: "https://open.spotify.com/show/3fKOTwtnX5oZLaiNntKWAV",
  },
  {
    id: "therapy-chat",
    title: "Therapy Chat",
    creator: "Laura Reagan, LCSW-C",
    category: "Trauma & Healing",
    type: "spotify-show",
    embedRef: "2cmAMcaKRH65JBCJ4U01XP",
    description:
      "Trauma-informed therapists in conversation about somatic work, attachment, and slow healing.",
    externalUrl: "https://open.spotify.com/show/2cmAMcaKRH65JBCJ4U01XP",
  },
  {
    id: "holy-post",
    title: "The Holy Post",
    creator: "Phil Vischer & Skye Jethani",
    category: "Faith & Identity",
    type: "spotify-show",
    embedRef: "0uuW6iCQVmwGCpHN4BzC8K",
    description:
      "Thoughtful, grace-filled conversations on faith, culture, and what it means to follow Jesus today.",
    externalUrl: "https://open.spotify.com/show/0uuW6iCQVmwGCpHN4BzC8K",
  },
  {
    id: "daily-stoic",
    title: "The Daily Stoic",
    creator: "Ryan Holiday",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "7fY99FB3bNyn7nEdXCoBeB",
    description:
      "Short, daily reflections drawing on Stoic philosophy to help you live with more clarity, courage, and steadiness.",
    externalUrl: "https://open.spotify.com/show/7fY99FB3bNyn7nEdXCoBeB",
  },
  {
    id: "daily-motivation-howes",
    title: "The Daily Motivation",
    creator: "Lewis Howes",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "4wV5op70r8shyT6QQsmhiU",
    description:
      "Bite-sized motivational moments pulled from Lewis Howes' best long-form interviews on greatness and growth.",
    externalUrl: "https://open.spotify.com/show/4wV5op70r8shyT6QQsmhiU",
  },
  {
    id: "rethinking-adam-grant",
    title: "ReThinking with Adam Grant",
    creator: "Adam Grant (TED)",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "0uFXKiNiC05GOrjE9AXnkn",
    description:
      "Organizational psychologist Adam Grant interviews thinkers and leaders to challenge the way we work, lead, and live.",
    externalUrl: "https://open.spotify.com/show/0uFXKiNiC05GOrjE9AXnkn",
  },
  {
    id: "on-purpose-jay-shetty",
    title: "On Purpose with Jay Shetty",
    creator: "Jay Shetty",
    category: "Mental Health",
    type: "spotify-show",
    embedRef: "5EqqB52m2bsr4k1Ii7sStc",
    description:
      "Conversations designed to help you feel happier, healthier, and more healed — blending ancient wisdom with modern psychology.",
    externalUrl: "https://open.spotify.com/show/5EqqB52m2bsr4k1Ii7sStc",
  },
  {
    id: "jillian-on-love",
    title: "Jillian on Love",
    creator: "Jillian Turecki",
    category: "Relationships",
    type: "spotify-show",
    embedRef: "2qy9p5oXD7keoBQQzk1e1z",
    description:
      "Relationship coach Jillian Turecki on building healthier love lives by first repairing the relationship with yourself.",
    externalUrl: "https://open.spotify.com/show/2qy9p5oXD7keoBQQzk1e1z",
  },
  {
    id: "mel-robbins-podcast",
    title: "The Mel Robbins Podcast",
    creator: "Mel Robbins",
    category: "Mental Health",
    type: "spotify-show",
    embedRef: "7vz4RYsD5MulTCrcH478t1",
    description:
      "Practical, research-backed tools for changing your habits, your mindset, and your life — delivered with warmth and no-BS energy.",
    externalUrl: "https://open.spotify.com/show/7vz4RYsD5MulTCrcH478t1",
  },
  {
    id: "sabrina-zohar-show",
    title: "The Sabrina Zohar Show",
    creator: "Sabrina Zohar",
    category: "Relationships",
    type: "spotify-show",
    embedRef: "2Dsp24A82JkYRXytiA2qRt",
    description:
      "A no-BS guide to dating, anxious attachment, and the personal growth it takes to build meaningful connection.",
    externalUrl: "https://open.spotify.com/show/2Dsp24A82JkYRXytiA2qRt",
  },
  {
    id: "solved-mark-manson",
    title: "SOLVED with Mark Manson",
    creator: "Mark Manson",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "11VjrLJfoiNvgjjqov4RWh",
    description:
      "Research-backed life advice from the author of The Subtle Art of Not Giving a F*ck — minus the guru nonsense.",
    externalUrl: "https://open.spotify.com/show/11VjrLJfoiNvgjjqov4RWh",
  },
  {
    id: "motion-jb-copeland",
    title: "Motion",
    creator: "JB Copeland",
    category: "Mental Health",
    type: "apple-podcast",
    embedRef: "https://podcasts.apple.com/us/podcast/motion-jb-copeland/id1823120898",
    description:
      "Short, soulful reflections on momentum — in mindset, healing, identity, and the slow work of becoming who you're meant to be.",
    externalUrl: "https://podcasts.apple.com/us/podcast/motion-jb-copeland/id1823120898",
  },
  {
    id: "the-pocket-chris-griffin",
    title: "The Pocket with Chris Griffin",
    creator: "Chris Griffin",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "2HKo1GMaRhGasS9vjliZUc",
    description:
      "Unhurried conversations about faith, mental health, and the everyday work of becoming a more honest version of yourself.",
    externalUrl: "https://open.spotify.com/show/2HKo1GMaRhGasS9vjliZUc",
  },
];

export function getMediaCategories(): string[] {
  const set = new Set<string>(["All"]);
  for (const m of media) set.add(m.category);
  return Array.from(set);
}
