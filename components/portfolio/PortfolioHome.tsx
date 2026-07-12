"use client";

import { useEffect } from "react";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Timeline } from "@/components/portfolio/Timeline";
import { ScrollTrigger } from "@/lib/gsap";

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
        <div className="section-lazy">
          <About />
        </div>
        <div className="section-lazy">
          <Skills />
        </div>
        <div className="section-lazy">
          <Services />
        </div>
        <Projects />
        <div className="section-lazy">
          <Testimonials />
        </div>
        <div className="section-lazy">
          <Timeline />
        </div>
        <div className="section-lazy">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
