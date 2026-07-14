import { Github, Linkedin, Instagram, Send } from "lucide-react";

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2H21l-6.52 7.451L22 22h-6.828l-4.77-6.243L4.8 22H2l7.02-8.02L2 2h6.914l4.34 5.74L18.244 2Zm-2.39 18h1.66L8.24 4H6.475l9.379 16Z" />
  </svg>
);

const socials = [
  { icon: Github, href: "https://github.com/Siam-Kabir-2" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/siam-kabir-1517b42b2/" },
  { icon: XIcon, href: "https://x.com/_Siam__" },
  { icon: Instagram, href: "https://www.instagram.com/__the.lost.oni_/" },
  { icon: Send, href: "https://t.me/kurosaki106" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <div>
          <p className="font-display text-2xl font-light italic text-primary">Siam Kabir</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Full-stack developer
          </p>
          <a
            href="/Siam-Kabir-Resume.pdf"
            download="Siam-Kabir-Resume.pdf"
            className="group relative mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary/60 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100"
          >
            Download resume
          </a>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center border border-border text-foreground/60 transition-[color,border-color,background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <s.icon size={14} />
            </a>
          ))}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © 2026 — All rights reserved
        </p>
      </div>
    </footer>
  );
}
