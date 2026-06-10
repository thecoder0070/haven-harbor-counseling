export type MediaType = "spotify-episode" | "spotify-show" | "apple-podcast" | "youtube" | "instagram" | "tiktok";

export interface MediaItem {
  id: string;
  title: string;
  creator: string;
  category: string; // "Relationships" | "Trauma & Healing" | "Faith & Identity" | "Mental Health" | "Self-Knowledge"
  type: MediaType;
  /** For spotify: episode/show id. For youtube: video id. For IG/TikTok/Apple: full URL. */
  embedRef: string;
  description: string;
  /** Optional cross-platform links — render as "Open Spotify / Open YouTube / Open Instagram / Open TikTok" buttons. */
  spotifyUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  /** Generic fallback link used when none of the platform-specific links apply (e.g. Apple-only shows, one-off reels). */
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
 * How to add a one-off Instagram Reel or TikTok
 * ---------------------------------------------
 * Paste the full URL into `embedRef` (and into `instagramUrl` / `tiktokUrl` so the
 * "Open Instagram" / "Open TikTok" link renders on the card):
 *
 *   {
 *     id: "unique-slug",
 *     title: "Card title",
 *     creator: "@handle or Person Name",
 *     category: "Relationships",
 *     type: "instagram",                      // or "tiktok"
 *     embedRef: "https://www.instagram.com/reel/ABC123xyz/",
 *     description: "One-sentence why it matters.",
 *     instagramUrl: "https://www.instagram.com/reel/ABC123xyz/",
 *   }
 *
 * YouTube items take a bare video id in `embedRef` (the part after `v=`), not a URL.
 */

export const media: MediaItem[] = [
  // ——— Podcasts (alphabetical by title, ignoring leading "A " / "The ") ———
  {
    id: "a-bit-of-optimism",
    title: "A Bit of Optimism",
    creator: "Simon Sinek",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "0wjYlCNxLDgFUUjZMaP6Dx",
    description:
      "Simon Sinek in conversation with friends and thinkers on the small ideas that make life — and work — a little more hopeful.",
    spotifyUrl: "https://open.spotify.com/show/0wjYlCNxLDgFUUjZMaP6Dx",
    youtubeUrl: "https://www.youtube.com/@simonsinek",
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
    spotifyUrl: "https://open.spotify.com/show/4wV5op70r8shyT6QQsmhiU",
    youtubeUrl: "https://www.youtube.com/@lewishowes",
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
    spotifyUrl: "https://open.spotify.com/show/7fY99FB3bNyn7nEdXCoBeB",
    youtubeUrl: "https://www.youtube.com/@DailyStoic",
  },
  {
    id: "doac-show",
    title: "The Diary Of A CEO with Steven Bartlett",
    creator: "Steven Bartlett",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "7iQXmUT7XGuZSzAMjoNWlX",
    description:
      "Long-form conversations with thinkers, founders, and psychologists on identity, relationships, and what makes a meaningful life.",
    spotifyUrl: "https://open.spotify.com/show/7iQXmUT7XGuZSzAMjoNWlX",
    youtubeUrl: "https://www.youtube.com/@TheDiaryOfACEO",
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
    spotifyUrl: "https://open.spotify.com/show/0uuW6iCQVmwGCpHN4BzC8K",
    youtubeUrl: "https://www.youtube.com/@HolyPostMedia",
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
    spotifyUrl: "https://open.spotify.com/show/79CkJF3UJTHFV8Dse3Oy0P",
    youtubeUrl: "https://www.youtube.com/@hubermanlab",
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
    spotifyUrl: "https://open.spotify.com/show/2qy9p5oXD7keoBQQzk1e1z",
    youtubeUrl: "https://www.youtube.com/@JillianTurecki",
  },
  {
    id: "joel-osteen",
    title: "Joel Osteen Podcast",
    creator: "Joel Osteen",
    category: "Faith & Identity",
    type: "spotify-show",
    embedRef: "7wIDnmJ41exqZZ5GnsBGDS",
    description:
      "Daily messages of hope, encouragement, and faith from Pastor Joel & Victoria Osteen of Lakewood Church in Houston.",
    spotifyUrl: "https://open.spotify.com/show/7wIDnmJ41exqZZ5GnsBGDS",
    youtubeUrl: "https://www.youtube.com/@JoelOsteen",
  },
  {
    id: "know-thyself",
    title: "Know Thyself",
    creator: "André Duqum",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "4FSiemtvZrWesGtO2MqTZ4",
    description:
      "André Duqum interviews spiritual teachers, scientists, and creatives on the true nature of self and how to live a more liberated life.",
    spotifyUrl: "https://open.spotify.com/show/4FSiemtvZrWesGtO2MqTZ4",
    youtubeUrl: "https://www.youtube.com/@KnowThyself",
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
    spotifyUrl: "https://open.spotify.com/show/7vz4RYsD5MulTCrcH478t1",
    youtubeUrl: "https://www.youtube.com/@melrobbins",
  },
  {
    id: "mindset-mentor-rob-dial",
    title: "The Mindset Mentor",
    creator: "Rob Dial",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "706hylM6zaDW8LrrYxcggQ",
    description:
      "Short, neuroscience-and-psychology-based episodes from Rob Dial on rewiring limiting beliefs and creating the life you actually want.",
    spotifyUrl: "https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ",
    youtubeUrl: "https://www.youtube.com/@RobDial",
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
    spotifyUrl: "https://open.spotify.com/show/4DDsabHrM9BcEgsXMrtTBu",
    youtubeUrl: "https://www.youtube.com/@ChrisWillx",
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
    youtubeUrl: "https://www.youtube.com/@jbcopeland",
    externalUrl: "https://podcasts.apple.com/us/podcast/motion-jb-copeland/id1823120898",
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
    spotifyUrl: "https://open.spotify.com/show/5EqqB52m2bsr4k1Ii7sStc",
    youtubeUrl: "https://www.youtube.com/@JayShettyPodcast",
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
    spotifyUrl: "https://open.spotify.com/show/2HKo1GMaRhGasS9vjliZUc",
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
    spotifyUrl: "https://open.spotify.com/show/0uFXKiNiC05GOrjE9AXnkn",
    youtubeUrl: "https://www.youtube.com/@TED",
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
    spotifyUrl: "https://open.spotify.com/show/2Dsp24A82JkYRXytiA2qRt",
    youtubeUrl: "https://www.youtube.com/@thesabrinazohar",
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
    spotifyUrl: "https://open.spotify.com/show/11VjrLJfoiNvgjjqov4RWh",
    youtubeUrl: "https://www.youtube.com/@IAmMarkManson",
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
    spotifyUrl: "https://open.spotify.com/show/2cmAMcaKRH65JBCJ4U01XP",
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
    spotifyUrl: "https://open.spotify.com/show/5Vix7g7pyfWlvCDgtFnDhg",
    youtubeUrl: "https://www.youtube.com/@WeCanDoHardThingsPod",
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
    spotifyUrl: "https://open.spotify.com/show/3fKOTwtnX5oZLaiNntKWAV",
    youtubeUrl: "https://www.youtube.com/@EstherPerel",
  },
  {
    id: "your-world-within",
    title: "Your World Within Podcast",
    creator: "Eddie Pinero",
    category: "Self-Knowledge",
    type: "spotify-show",
    embedRef: "4EnAzuR4gnjEyGUYic70Qy",
    description:
      "Eddie Pinero's blend of storytelling and motivation, reminding listeners that we're always one decision away from a different life.",
    spotifyUrl: "https://open.spotify.com/show/4EnAzuR4gnjEyGUYic70Qy",
    youtubeUrl: "https://www.youtube.com/@YourWorldWithin",
  },

  // ——— Instagram (one-off reels & creator profiles) ———
  {
    id: "ig-reel-dzl1of4hv8g",
    title: "Instagram Reel",
    creator: "Saved to the library",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/reel/DZL1oF4hV8G/",
    description: "A short clip worth a minute of your attention.",
    instagramUrl: "https://www.instagram.com/reel/DZL1oF4hV8G/",
  },
  {
    id: "ig-post-dyguyizdn4x",
    title: "Instagram Post",
    creator: "Saved to the library",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/p/DYGUyIZDN4X/",
    description: "A short clip worth a minute of your attention.",
    instagramUrl: "https://www.instagram.com/p/DYGUyIZDN4X/",
  },
  {
    id: "ig-reel-dxmij-jgnrl",
    title: "Instagram Reel",
    creator: "Saved to the library",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/reel/DXMij-JGnrl/",
    description: "A short clip worth a minute of your attention.",
    instagramUrl: "https://www.instagram.com/reel/DXMij-JGnrl/",
  },
  {
    id: "ig-reel-dxr5jdtjnvd",
    title: "Instagram Reel",
    creator: "Saved to the library",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/reel/DXR5jDtjNVd/",
    description: "A short clip worth a minute of your attention.",
    instagramUrl: "https://www.instagram.com/reel/DXR5jDtjNVd/",
  },
  {
    id: "ig-post-dxanympd4jo",
    title: "Instagram Post",
    creator: "Saved to the library",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/p/DXAnymPD4Jo/",
    description: "A short clip worth a minute of your attention.",
    instagramUrl: "https://www.instagram.com/p/DXAnymPD4Jo/",
  },
  {
    id: "ig-reel-dys9kbaang8",
    title: "Instagram Reel",
    creator: "Saved to the library",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/reel/DYS9KbAANG8/",
    description: "A short clip worth a minute of your attention.",
    instagramUrl: "https://www.instagram.com/reel/DYS9KbAANG8/",
  },
  {
    id: "ig-prestonrack",
    title: "@prestonrack",
    creator: "Preston Rack",
    category: "Mental Health",
    type: "instagram",
    embedRef: "https://www.instagram.com/prestonrack",
    description: "A creator we recommend following on Instagram.",
    instagramUrl: "https://www.instagram.com/prestonrack",
  },
  {
    id: "ig-mindfulmft",
    title: "@mindfulmft",
    creator: "Mindful MFT",
    category: "Relationships",
    type: "instagram",
    embedRef: "https://www.instagram.com/mindfulmft",
    description: "A licensed marriage & family therapist sharing relational and nervous-system wisdom.",
    instagramUrl: "https://www.instagram.com/mindfulmft",
  },
  // ——— Instagram reels added from the curated sheet ———
  ...([
    { kind: "reel", id: "DZVDE4SCodw" },
    { kind: "reel", id: "DX8-Np2MiGd" },
    { kind: "reel", id: "DXI0W8ajLlG" },
    { kind: "reel", id: "DWy7WFJDjed" },
    { kind: "p", id: "DW6lB63CUrA" },
    { kind: "p", id: "DWOdo1SD0iq" },
    { kind: "reel", id: "DRS8KrkDHbN" },
    { kind: "p", id: "DVy5vsCFt8N" },
    { kind: "p", id: "DWE7S3zlvrX" },
    { kind: "p", id: "DVgkHI3kqAK" },
    { kind: "reel", id: "DWEOD9_uLa_" },
    { kind: "reel", id: "DVmq9FAER7G" },
    { kind: "p", id: "DVhwOYmkb0Y" },
    { kind: "reel", id: "DVojvBsDxM2" },
    { kind: "p", id: "DVkzNwsCsC1" },
    { kind: "reel", id: "DTcmnryjJJ0" },
    { kind: "reel", id: "DUZ3nlNCNMZ" },
    { kind: "reel", id: "DVJf2jWESqC" },
    { kind: "p", id: "DUik3EbjmpZ" },
    { kind: "p", id: "DUGj6MFDuZq" },
    { kind: "reel", id: "DUJi2gqD1Dq" },
    { kind: "reel", id: "DTHqe_nkfCh" },
    { kind: "reel", id: "DTd4KqNCQGM" },
    { kind: "p", id: "DSmwYs6EiUR" },
    { kind: "reel", id: "DS1wMZODCZZ" },
    { kind: "reel", id: "DSitN8ajOjD" },
  ] as const).map(({ kind, id }) => {
    const url = `https://www.instagram.com/${kind}/${id}/`;
    return {
      id: `ig-${kind}-${id.toLowerCase()}`,
      title: kind === "reel" ? "Instagram Reel" : "Instagram Post",
      creator: "Saved to the library",
      category: "Mental Health",
      type: "instagram" as const,
      embedRef: url,
      description: "A short clip worth a minute of your attention.",
      instagramUrl: url,
    };
  }),
];


export function getMediaCategories(): string[] {
  const set = new Set<string>(["All"]);
  for (const m of media) set.add(m.category);
  return Array.from(set);
}
