"use client";

import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  Github,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.451L22 22h-6.828l-4.77-6.243L4.8 22H2l7.02-8.02L2 2h6.914l4.34 5.74L18.244 2Zm-2.39 18h1.66L8.24 4H6.475l9.379 16Z" />
  </svg>
);

const infos = [
  {
    icon: Mail,
    label: "Email",
    value: "mdsiamkabir1@gmail.com",
    href: "mailto:mdsiamkabir1@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+880 1786 848 592",
    href: "https://wa.me/8801786848592",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "siam-kabir",
    href: "https://www.linkedin.com/in/siam-kabir-1517b42b2/",
  },
  { icon: MapPin, label: "Location", value: "Rangpur, Bangladesh" },
];

const socials = [
  { icon: Github, href: "https://github.com/Siam-Kabir-2", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/siam-kabir-1517b42b2/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/_Siam__", label: "X" },
  { icon: Instagram, href: "https://www.instagram.com/__the.lost.oni_/", label: "Instagram" },
  { icon: Send, href: "https://t.me/kurosaki106", label: "Telegram" },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion || !panelRef.current) return;

      gsap.from(panelRef.current.children, {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top 86%",
          once: true,
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef },
  );

  const openMailtoFallback = (name: string, email: string, subject: string, message: string) => {
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const url = `mailto:mdsiamkabir1@gmail.com?subject=${encodeURIComponent(
      subject || `New message from ${name}`,
    )}&body=${body}`;
    window.location.href = url;
    toast.success("Opening your email app…");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = (await response.json()) as { error?: string; fallback?: string };

      if (response.ok) {
        form.reset();
        toast.success("Message sent. I'll get back to you soon.");
        return;
      }

      if (response.status === 503 && result.fallback === "mailto") {
        openMailtoFallback(name, email, subject, message);
        return;
      }

      toast.error(result.error || "Could not send message. Try email or WhatsApp instead.");
    } catch {
      toast.error("Could not send message. Try email or WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_50%_at_50%_100%,color-mix(in_oklab,var(--primary)_6%,transparent),transparent_65%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's build something great."
          subtitle="Open for freelance projects, collaborations, and product builds."
        />

        <div ref={panelRef} className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <aside className="contact-panel premium-frame flex flex-col rounded-2xl bg-card/35 p-6 backdrop-blur-sm sm:p-7 lg:col-span-5">
            <div className="border-b border-border/60 pb-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                Available for work
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Reach out directly or send a message — I usually reply within 24 hours.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {infos.map((info) => {
                const content = (
                  <div className="group/contact flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-border/60 hover:bg-background/40">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border/60 bg-background/60 text-primary">
                      <info.icon size={16} aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-medium text-foreground/90 sm:break-normal sm:truncate">
                        {info.value}
                      </p>
                    </div>
                    {info.href ? (
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-muted-foreground/50 transition-all group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5 group-hover/contact:text-primary"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                );

                if (info.href) {
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl transition-colors hover:bg-background/20"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div key={info.label} className="rounded-xl">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border-t border-border/60 pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-border/60 bg-background/50 text-foreground/75 transition-colors hover:border-primary/25 hover:bg-primary/5 hover:text-foreground"
                  >
                    <social.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <form
            onSubmit={onSubmit}
            className="contact-panel premium-frame rounded-2xl bg-card/35 p-6 backdrop-blur-sm sm:p-8 lg:col-span-7"
          >
            <div className="border-b border-border/60 pb-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
                Project inquiry
              </p>
              <p className="mt-3 font-display text-xl font-medium tracking-[-0.01em] sm:text-[1.35rem]">
                Tell me what you&apos;re building.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="Website, app, landing page…" />
              <Field
                label="Message"
                name="message"
                placeholder="Scope, timeline, budget range — whatever helps."
                multiline
              />

              <button
                type="submit"
                disabled={sending}
                className="hero-cta-primary group inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
              >
                {sending ? "Sending…" : "Send message"}
                <Send
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  multiline = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
}) {
  const fieldClassName =
    "w-full rounded-lg border border-border/70 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/55 focus:border-primary/40 focus:bg-background/70 focus:ring-1 focus:ring-primary/15";

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={6}
          placeholder={placeholder}
          className={`${fieldClassName} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={fieldClassName}
        />
      )}
    </div>
  );
}
