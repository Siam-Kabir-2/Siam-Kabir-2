import { SectionHeader } from "./SectionHeader";
import { TestimonialMarquee } from "./TestimonialMarquee";

const items = [
  {
    name: "Johannes Naaber",
    role: "Founder · Hano",
    context: "Hano Animations & Insider",
    quote:
      "We needed two products, not a brochure with a login button. Siam built the studio site and the membership platform — auth, protected content, member flow — and both still feel like one brand.",
  },
  {
    name: "Panther",
    role: "Client · QuantumX",
    context: "Crypto landing page",
    quote:
      "QuantumX had to feel expensive the moment you land. He got the motion, the type, and the pacing right, and didn't treat performance like something we'd fix later.",
  },
  {
    name: "Sophie",
    role: "Business owner",
    context: "Business website",
    quote:
      "I cared about how the site looked on a phone in front of a client. Siam kept the updates clear, skipped the jargon, and delivered something I was comfortable putting my name on.",
  },
  {
    name: "Elvis",
    role: "Client",
    context: "Landing page",
    quote:
      "My timeline moved more than once. He stayed organised, handled revisions without making it awkward, and we still shipped on a date I could actually commit to.",
  },
  {
    name: "Jeremy Krings",
    role: "Client",
    context: "Masterclass website",
    quote:
      "I'm picky about backend structure. APIs, deployment, handoff — all done properly. I wasn't chasing answers in Slack at midnight before launch.",
  },
  {
    name: "Paul",
    role: "Client",
    context: "Fitness website",
    quote:
      "I gave him a rough direction, not a full spec. He came back with something structured, fast, and ready to show users without a week of fixes after go-live.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_45%_at_50%_100%,color-mix(in_oklab,var(--primary)_5%,transparent),transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say."
          subtitle="Notes from founders and teams I've shipped for — not filler quotes."
        />
      </div>

      <div className="mt-2">
        <TestimonialMarquee items={items} />
      </div>
    </section>
  );
}
