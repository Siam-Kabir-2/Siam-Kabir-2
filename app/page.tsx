import type { Metadata } from "next";
import { PortfolioHome } from "@/components/portfolio/PortfolioHome";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Home() {
  return <PortfolioHome />;
}
