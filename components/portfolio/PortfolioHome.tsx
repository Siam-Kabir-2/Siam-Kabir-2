"use client";

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

export function PortfolioHome() {
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
        <div className="section-lazy">
          <Projects />
        </div>
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
