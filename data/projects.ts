export type Block =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; src: string };

export type Project = {
  slug: string;
  title: string;
  cover: string;
  tech: string;
  description: string;
  blocks: Block[];
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "hss",
    title: "HSS Scout Website",
    cover: "/projects/hss/01.png",
    tech: "Next.js · TypeScript · next-intl",
    description:
      "Real-client team project: bilingual site with Instagram feed via Behold API.",
    blocks: [
      {
        type: "text",
        body: "A real-client team project for Hässelby Strands Sjöscoutkår. I contributed UI design and frontend implementation: bilingual routing with next-intl, new pages built from Figma, and an Instagram feed integrated through the Behold API.",
      },
      { type: "image", src: "/projects/hss/01.png" },
      { type: "image", src: "/projects/hss/02.png" },
      {
        type: "text",
        heading: "Designed and built the same pages",
        body: "I designed several pages in Figma and implemented them in the team codebase, which kept the handoff loop short and the visual details intact.",
      },
      { type: "image", src: "/projects/hss/03.png" },
      { type: "image", src: "/projects/hss/04.png" },
      { type: "image", src: "/projects/hss/05.png" },
    ],
    live: "https://hss-repo.vercel.app",
    code: "https://github.com/SallyResch/hss-repo",
  },
  {
    slug: "zoo",
    title: "Zoo Website",
    cover: "/projects/zoo/01.png",
    tech: "UI Design · HTML · CSS",
    description:
      "Frontend course team assignment — I did both the UI design and the code.",
    blocks: [
      {
        type: "text",
        body: "A team assignment from my frontend course, where I did both the UI design and the code. A fresh green palette echoes the zoo's natural theme.",
      },
      { type: "image", src: "/projects/zoo/01.png" },
      {
        type: "text",
        heading: "One card component, many pages",
        body: "The homepage and category pages share one card component and a common header/footer — consistent visuals, less duplicated code.",
      },
      { type: "image", src: "/projects/zoo/02.png" },
      { type: "image", src: "/projects/zoo/03.png" },
      {
        type: "text",
        heading: "Roots of Asia — second iteration",
        body: "A second zoo concept with filtering by region and animal detail pages.",
      },
      { type: "image", src: "/projects/zoo/04.png" },
      { type: "image", src: "/projects/zoo/05.png" },
      { type: "image", src: "/projects/zoo/06.png" },
    ],
    live: "https://group-zoo-assignment.vercel.app",
    code: "https://github.com/Callum-Jones230893/Group-zoo-assignment",
  },
];