"use client";

import type { SkillItem } from "./skill-stack";
import { lightOnDarkIcons, skillIconSrc } from "./skill-stack";
import { useTheme } from "@/lib/theme";

function SkillIcon({ slug }: { slug: string }) {
  const { theme } = useTheme();
  const src =
    theme === "dark" && lightOnDarkIcons.has(slug)
      ? skillIconSrc(slug, "light")
      : skillIconSrc(slug, "brand");

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={22}
      height={22}
      loading="lazy"
      className="h-[22px] w-[22px] shrink-0 opacity-90"
      onError={(e) => {
        e.currentTarget.style.opacity = "0.35";
      }}
    />
  );
}

function MarqueeTrack({
  items,
  reverse = false,
}: {
  items: SkillItem[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="skills-marquee relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
        aria-hidden
      />

      <div className={reverse ? "skills-marquee-track-reverse" : "skills-marquee-track"}>
        {loop.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-border/60 bg-card/50 px-4 py-3 backdrop-blur-sm transition-colors hover:border-primary/25 hover:bg-card/80 sm:px-5 sm:py-3.5"
          >
            <SkillIcon slug={item.icon} />
            <span className="whitespace-nowrap text-sm font-medium text-foreground/85">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillMarquee({
  rowOne,
  rowTwo,
}: {
  rowOne: SkillItem[];
  rowTwo: SkillItem[];
}) {
  return (
    <div className="space-y-4">
      <MarqueeTrack items={rowOne} />
      <MarqueeTrack items={rowTwo} reverse />
    </div>
  );
}
