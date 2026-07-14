import { allProjects } from "@/components/portfolio/projects-data";
import { siteConfig } from "@/lib/site";

export function ProjectsJsonLd() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects · Siam Kabir",
    description:
      "Archive of websites, crypto products, apps, and games by full-stack developer Siam Kabir.",
    url: `${siteConfig.url}/projects`,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#person` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: project.live,
          image: project.image ? `${siteConfig.url}${project.image}` : undefined,
          creator: { "@id": `${siteConfig.url}/#person` },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
    />
  );
}
