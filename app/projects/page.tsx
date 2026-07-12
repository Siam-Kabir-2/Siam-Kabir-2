import type { Metadata } from "next";
import { ProjectsCatalog } from "@/components/portfolio/ProjectsCatalog";

export const metadata: Metadata = {
  title: "All Projects — Siam Kabir",
  description:
    "Full portfolio of websites, crypto landing pages, Telegram mini apps, and browser games by Siam Kabir.",
};

export default function ProjectsPage() {
  return <ProjectsCatalog />;
}
