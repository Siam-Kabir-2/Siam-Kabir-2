import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Linkedin, MapPin, Send, Github, Instagram } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");
    if (!name || !email || !message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSending(true);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const url = `mailto:mdsiamkabir1@gmail.com?subject=${encodeURIComponent(
      subject || `New message from ${name}`,
    )}&body=${body}`;
    window.location.href = url;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email app…");
    }, 500);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get in touch"
          title="Let's build something great."
          subtitle="I'm currently open for freelance projects and collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {infos.map((info, i) => {
              const Inner = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
                    <info.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="truncate font-medium text-foreground">{info.value}</div>
                  </div>
                </motion.div>
              );
              return info.href ? (
                <a key={info.label} href={info.href} target="_blank" rel="noreferrer" className="block">
                  {Inner}
                </a>
              ) : (
                <div key={info.label}>{Inner}</div>
              );
            })}

            <div className="glass rounded-2xl p-5">
              <div className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
                Find me online
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border/60 bg-background/50 text-foreground/80 transition hover:border-primary/30 hover:text-foreground"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong space-y-5 rounded-3xl p-7 shadow-[var(--shadow-card)] sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Project inquiry" />
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about the project…"
                className="w-full resize-none rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group relative inline-flex w-full items-center justify-center gap-2 border border-primary bg-primary px-7 py-4 text-[12px] font-medium uppercase tracking-[0.12em] text-primary-foreground transition hover:bg-primary/90 disabled:opacity-70 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">{sending ? "Sending…" : "Send Message"}</span>
              <Send size={16} className="relative transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
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
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
      />
    </div>
  );
}
