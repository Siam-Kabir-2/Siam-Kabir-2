import type { Metadata } from "next";
import { Cormorant_Garamond, Karla, Red_Hat_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Siam Kabir — Full-Stack Developer",
  description:
    "Siam Kabir is a full-stack web developer from Rangpur, Bangladesh building modern, responsive websites and web apps with Next.js, Laravel, and Supabase.",
  authors: [{ name: "MD. Siam Kabir" }],
  openGraph: {
    title: "Siam Kabir — Full-Stack Developer",
    description:
      "Full-stack development with a focus on craft, clarity, and lasting digital products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} ${redHatMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="text-[15px] leading-[1.7] tracking-[0.01em]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
