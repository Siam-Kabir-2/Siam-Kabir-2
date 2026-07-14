import type { Metadata } from "next";
import { ProjectsCatalog } from "@/components/portfolio/ProjectsCatalog";
import { ProjectsJsonLd } from "@/components/seo/ProjectsJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Siam Kabir’s full project archive — business websites, crypto landing pages, Telegram mini apps, finance tools, and browser games built with Next.js, Laravel, and modern web stacks.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects · Siam Kabir",
    description:
      "Selected and archived work by full-stack developer Siam Kabir — websites, crypto products, apps, and games.",
    url: `${siteConfig.url}/projects`,
    type: "website",
  },
  twitter: {
    title: "Projects · Siam Kabir",
    description:
      "Selected and archived work by full-stack developer Siam Kabir — websites, crypto products, apps, and games.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsJsonLd />
      <ProjectsCatalog />
    </>
  );
}
