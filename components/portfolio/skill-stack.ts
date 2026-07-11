export type SkillItem = {
  name: string;
  icon: string;
};

/** Brand marks that are black/dark and need a light variant on dark UI */
export const lightOnDarkIcons = new Set([
  "nextdotjs",
  "express",
  "framer",
  "vercel",
  "github",
  "railway",
  "render",
  "resend",
  "mysql",
]);

export function skillIconSrc(slug: string, variant: "brand" | "light" = "brand") {
  if (variant === "light") {
    return `https://cdn.simpleicons.org/${slug}/FFFFFF`;
  }
  return `https://cdn.simpleicons.org/${slug}`;
}

export const specialties = [
  "SEO",
  "UI/UX",
  "API integration",
  "Payment integration",
  "Dashboard development",
  "Membership systems",
];

export const marqueeRowOne: SkillItem[] = [
  { name: "Next.js", icon: "nextdotjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Framer Motion", icon: "framer" },
  { name: "GSAP", icon: "gsap" },
  { name: "Node.js", icon: "nodedotjs" },
  { name: "Express.js", icon: "express" },
];

export const marqueeRowTwo: SkillItem[] = [
  { name: "Laravel", icon: "laravel" },
  { name: "PHP", icon: "php" },
  { name: "Supabase", icon: "supabase" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Vercel", icon: "vercel" },
  { name: "Railway", icon: "railway" },
  { name: "Render", icon: "render" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "Resend", icon: "resend" },
];
