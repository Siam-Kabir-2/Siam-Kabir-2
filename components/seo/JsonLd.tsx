import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const serviceId = `${siteConfig.url}/#services`;

  const graph = [
    {
      "@type": "Person",
      "@id": personId,
      name: siteConfig.fullName,
      alternateName: ["Siam Kabir", "MD. Siam Kabir"],
      url: siteConfig.url,
      image: `${siteConfig.url}/profile.png`,
      email: siteConfig.email,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rangpur",
        addressCountry: "BD",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Khulna University of Engineering & Technology (KUET)",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "Laravel",
        "Supabase",
        "TypeScript",
        "Web Development",
        "Telegram Mini Apps",
        "Crypto Landing Pages",
      ],
      sameAs: Object.values(siteConfig.socials),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: `${siteConfig.name} — Web Development`,
      url: siteConfig.url,
      image: `${siteConfig.url}/opengraph-image`,
      description:
        "Professional full-stack web development for business sites, portfolios, crypto platforms, membership products, and Telegram mini apps.",
      provider: { "@id": personId },
      areaServed: "Worldwide",
      availableLanguage: ["en", "bn"],
      serviceType: [
        "Business Website Development",
        "Portfolio Website Development",
        "Crypto Landing Page Development",
        "Telegram Mini App Development",
        "2D Game Development",
      ],
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
