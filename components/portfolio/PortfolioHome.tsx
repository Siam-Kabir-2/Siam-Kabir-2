"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { About } from "@/components/portfolio/About";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { ScrollTrigger } from "@/lib/gsap";

const Skills = dynamic(
  () => import("@/components/portfolio/Skills").then((m) => ({ default: m.Skills })),
  { ssr: true },
);
const Services = dynamic(
  () => import("@/components/portfolio/Services").then((m) => ({ default: m.Services })),
  { ssr: true },
);
const Projects = dynamic(
  () => import("@/components/portfolio/Projects").then((m) => ({ default: m.Projects })),
  { ssr: true },
);
const Testimonials = dynamic(
  () =>
    import("@/components/portfolio/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { ssr: true },
);
const Timeline = dynamic(
  () => import("@/components/portfolio/Timeline").then((m) => ({ default: m.Timeline })),
  { ssr: true },
);
const Contact = dynamic(
  () => import("@/components/portfolio/Contact").then((m) => ({ default: m.Contact })),
  { ssr: true },
);

export function PortfolioHome() {
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const refresh = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => ScrollTrigger.refresh(), 150);
    };

    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    refresh();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
