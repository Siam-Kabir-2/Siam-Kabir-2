"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const PROFILE_IMAGE = "/profile.png";

function ProfilePortrait() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full min-h-[28rem] w-full overflow-hidden rounded-sm bg-muted shadow-[var(--shadow-elegant)] lg:min-h-[36rem]">
      {!hasError ? (
        <Image
          src={PROFILE_IMAGE}
          alt="MD. Siam Kabir — full-stack web developer"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-end bg-[linear-gradient(160deg,var(--muted),var(--background))] p-8">
          <span className="font-display text-6xl italic text-foreground/15 sm:text-7xl">SK</span>
        </div>
      )}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <ProfilePortrait />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.34em] text-muted-foreground">
              About Me
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,3.4vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.02em]">
              Full-stack developer building{" "}
              <span className="text-premium-accent text-foreground/90">modern web products</span> for
              real users and clients.
            </h2>

            <p className="mt-5 max-w-xl font-display text-lg italic text-muted-foreground sm:text-xl">
              Turning ideas into clean experiences and business-ready digital products.
            </p>

            <div className="mt-7 space-y-5 text-base leading-[1.8] text-muted-foreground sm:text-[17px]">
              <p>
                I&apos;m <span className="text-foreground/90">MD. Siam Kabir</span>, a full-stack web
                developer based in Rangpur, Bangladesh. I focus on responsive, performance-driven websites
                and applications using Next.js, Laravel, Supabase, and modern frontend tools — turning
                ideas into{" "}
                <span className="text-premium-accent text-foreground/85">clean experiences</span> and
                business-ready digital products.
              </p>
              <p>
                I&apos;m pursuing a BSc in Computer Science at Khulna University of Engineering and
                Technology (KUET), currently in my third year. Alongside my studies, I work as a freelance
                developer with international clients on business sites, membership platforms, and premium
                landing pages — from design and frontend work through backend integration and deployment.
              </p>
            </div>

            <div className="mt-10 grid gap-6 border-t border-border/70 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Location
                </p>
                <p className="mt-2 text-sm text-foreground/90">Rangpur, Bangladesh</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Education
                </p>
                <p className="mt-2 text-sm text-foreground/90">BSc CS · KUET · 3rd Year</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Experience
                </p>
                <p className="mt-2 text-sm text-foreground/90">3+ years freelance</p>
              </div>
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
            >
              Contact me
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
