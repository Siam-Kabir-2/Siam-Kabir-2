export type ProjectCategory =
  | "Business Website"
  | "Portfolio Website"
  | "Crypto Landing Page"
  | "Membership Website"
  | "Masterclass Website"
  | "Fitness Website"
  | "Finance App"
  | "Telegram Mini App"
  | "2D Game";

export type ProjectFilter = "all" | "websites" | "crypto" | "games" | "apps";

export interface Project {
  id: string;
  title: string;
  type: ProjectCategory;
  description: string;
  live: string;
  image?: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
  mobilePreview?: boolean;
  stack?: string[];
  role?: string;
  repo?: string;
}

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "crypto", label: "Crypto" },
  { id: "games", label: "Games" },
  { id: "apps", label: "Apps" },
];

export const allProjects: Project[] = [
  {
    id: "hano-animations",
    title: "Hano Animations",
    type: "Business Website",
    description:
      "Professional animated video business website designed to present services, build trust, and convert clients.",
    live: "https://www.hanoanimations.com/",
    image: "/projects/hano_animation.png",
    featured: true,
    stack: ["Next.js", "GSAP", "Lenis", "Framer Motion", "Spline", "Vercel"],
    role: "Developer",
  },
  {
    id: "hano-insider",
    title: "Hano Insider",
    type: "Membership Website",
    description:
      "Premium crypto signal membership platform with authentication, protected content, and member dashboards.",
    live: "https://hanoinsiders.com",
    image: "/projects/hano_insiders.png",
    featured: true,
    stack: ["Next.js", "Supabase", "Framer Motion", "Railway", "GSAP", "Vercel"],
    role: "Developer",
  },
  {
    id: "quantumx",
    title: "QuantumX",
    type: "Crypto Landing Page",
    description:
      "Premium crypto landing page with modern visuals, smooth motion, and strong brand presentation.",
    live: "https://qtxhub.com",
    image: "/projects/quantumx.png",
    featured: true,
    stack: ["Next.js", "Framer Motion", "GSAP", "Lenis", "Vercel"],
    role: "Developer",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    type: "Portfolio Website",
    description:
      "My personal portfolio — responsive, theme-aware, and built with deliberate motion for a clear presentation of services, projects, and client work.",
    live: "https://siam-kabir.com",
    image: "/projects/myportfolio.png",
    featured: true,
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion", "Resend", "Vercel"],
    role: "Designer & Developer",
    repo: "https://github.com/Siam-Kabir-2/Siam-Kabir-2",
  },
  {
    id: "getwebsite-now",
    title: "GetWebsite Now",
    type: "Business Website",
    description: "Premium websites and digital platforms — agency-style showcase for client-facing web work.",
    live: "https://getwebsitenow.vercel.app/",
  },
  {
    id: "fifa-coin",
    title: "Official FIFA World Cup Coin",
    type: "Crypto Landing Page",
    description: "Token landing page built mobile-first for campaign-style crypto promotion.",
    live: "https://fifacoin-pink.vercel.app/",
    mobilePreview: true,
  },
  {
    id: "finanz-masterclass",
    title: "Finanz-Masterclass 2026",
    type: "Masterclass Website",
    description: "Masterclass website for boerse.togo with structured content and conversion-focused layout.",
    live: "https://boesretogo.vercel.app/",
  },
  {
    id: "paul-sports",
    title: "Paul Sports",
    type: "Fitness Website",
    description: "Fitness brand website with clean presentation and mobile-ready structure.",
    live: "https://www.paulsports.de",
  },
  {
    id: "track-lit",
    title: "Track Lit",
    type: "Finance App",
    description: "Personal finance tracker with dashboards, data views, and a focused product workflow.",
    live: "https://track-lit-siam.vercel.app",
  },
  {
    id: "shark-cash",
    title: "Shark Cash",
    type: "Crypto Landing Page",
    description: "Crypto project landing page with bold visuals and promotional site structure.",
    live: "https://shark-cash.com",
  },
  {
    id: "dogwifxrp",
    title: "DogwifXRP",
    type: "Crypto Landing Page",
    description: "Meme-powered XRP culture landing page with playful branding and web3 presentation.",
    live: "https://www.dogwifxrp.com/",
  },
  {
    id: "nuke-x",
    title: "Nuke-X",
    type: "Crypto Landing Page",
    description: "High-impact crypto landing page with modern marketing layout and motion-ready structure.",
    live: "https://www.nuke-x.com/",
  },
  {
    id: "rabbit-xrp",
    title: "Rabbit XRP",
    type: "Crypto Landing Page",
    description: "XRP-themed crypto landing page with meme branding and promotional sections.",
    live: "https://www.rabbit-xrp.com/",
  },
  {
    id: "xai-cash",
    title: "xAI Cash",
    type: "Crypto Landing Page",
    description: "AI-crypto crossover landing page with premium dark aesthetic and campaign flow.",
    live: "https://www.xai-cash.com/",
  },
  {
    id: "rain-xrp",
    title: "Rain XRP",
    type: "Crypto Landing Page",
    description: "Crypto landing experience built around XRP ecosystem branding and launch messaging.",
    live: "https://rainxrp.com/",
  },
  {
    id: "oryon-nine",
    title: "Oryon Nine",
    type: "Crypto Landing Page",
    description: "Crypto project site with polished landing structure and product-focused sections.",
    live: "https://oryon-nine.vercel.app/",
  },
  {
    id: "anicoin",
    title: "Anicoin",
    type: "Crypto Landing Page",
    description: "Crypto token landing page with promotional layout and brand-forward design.",
    live: "https://anicoin.netlify.app/",
  },
  {
    id: "brad-cupid-house",
    title: "Brad Cupid House",
    type: "Crypto Landing Page",
    description: "Crypto project landing page with service presentation and campaign-ready visual structure.",
    live: "https://bradcupidhouse.com",
  },
  {
    id: "greenland-silver-bank",
    title: "Greenland Silver Bank",
    type: "Crypto Landing Page",
    description: "Crypto landing page with trust-focused financial branding and promotional layout.",
    live: "https://greenlandsilverbank.com",
  },
  {
    id: "scr-106",
    title: "SCR 106",
    type: "Crypto Landing Page",
    description: "Crypto marketing landing page with clean sections and responsive launch presentation.",
    live: "https://scr-106.netlify.app/",
  },
  {
    id: "chestx",
    title: "ChestX",
    type: "Crypto Landing Page",
    description: "Crypto project landing site with structured content blocks and modern UI layout.",
    live: "https://chestx.netlify.app/",
  },
  {
    id: "bonded-by-paws",
    title: "Bonded By Paws",
    type: "Crypto Landing Page",
    description: "Crypto brand landing page with storytelling layout and token-focused page structure.",
    live: "https://bondedbypaws.netlify.app/",
  },
  {
    id: "peddy106",
    title: "Peddy106",
    type: "Crypto Landing Page",
    description: "Crypto landing page with compact sections and polished visual hierarchy.",
    live: "https://peddy106.netlify.app",
  },
  {
    id: "landi106",
    title: "Landi106",
    type: "Business Website",
    description: "Landing page build with clear messaging and mobile-friendly layout.",
    live: "https://landi106.netlify.app/",
  },
  {
    id: "siamcoin-bot",
    title: "SiamCoin",
    type: "Telegram Mini App",
    description:
      "Tap-to-earn crypto mini app inside Telegram — gamification, tasks, referrals, leaderboards, and TON wallet connect with real-time scoring.",
    live: "https://t.me/siamcoin_bot/siamcoin?startapp=5126911206",
    image: "/projects/siamcoinMiniApp.png",
    imageFit: "contain",
    featured: true,
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Telegram Bot API"],
    role: "Full-stack",
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird Clone",
    type: "2D Game",
    description:
      "Browser-based flappy bird clone with responsive controls, clean pixel art presentation, and lightweight gameplay built for both desktop and mobile.",
    live: "https://flappy-bird106.netlify.app",
    image: "/projects/flappyBirdClone.png",
    featured: true,
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    role: "Developer",
    repo: "https://github.com/Siam-Kabir-2/Flappy-Bird",
  },
  {
    id: "sky-war",
    title: "Sky War",
    type: "2D Game",
    description: "Arcade-style sky war game with fast sessions and browser-first performance.",
    live: "https://sky-war106.netlify.app",
  },
];

export const featuredProjects = allProjects.filter((project) => project.featured);

export function getProjectDomain(url: string) {
  try {
    if (url.includes("t.me")) {
      return "t.me";
    }
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function getProjectFilterGroup(type: ProjectCategory): ProjectFilter {
  switch (type) {
    case "Crypto Landing Page":
      return "crypto";
    case "2D Game":
      return "games";
    case "Telegram Mini App":
      return "apps";
    default:
      return "websites";
  }
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === "all") return allProjects;
  return allProjects.filter((project) => getProjectFilterGroup(project.type) === filter);
}
