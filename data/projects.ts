export type Block =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; src: string }
  | { type:"links"; items:{ label: string; url:string } []}

export type Project = {
  slug: string;
  title: string;
  cover: string;
  tech: string;
  description: string;
  blocks: Block[];
  live?: string;
  code?: string;
  figma?:string;
  externalOnly?: boolean;
};

export const projects: Project[] = [

  {
    slug: "ohss",
    title: "HSS Sea Scouts — Website Design & Development",
    cover: "/projects/ohss/00.png",
    tech: "Next.js · TypeScript · next-intl · Behold API · MUI · Tailwind CSS",
    description:
      "A bilingual (Swedish/English) website for a real client — a Swedish sea scouting organization — built as part of a team project during my frontend diploma.",
    blocks: [ 
      {
        type:"text",
        heading: "Team project",
        body: "Built with a small team as part of a class project for a real client. I helped design part of the web pages and part of the mobile layouts — picking up where a volunteer designer's initial mockups left off — and contributed to the frontend implementation, including bilingual routing with next-intl.",
      },
      { type: "image", src: "/projects/ohss/00.png" },
      {
        type: "text",
        heading: "Features",
        body: "The site included pages for Boats, Members, and Contact, along with full Swedish/English language switching and a live Instagram feed integration via the Behold API",
      },
      { type: "image", src: "/projects/ohss/02.png"},
      { type: "image", src: "/projects/ohss/01.png"},
    ],
    live: "https://hss-repo.vercel.app/en",
  code: "https://github.com/SallyResch/hss-repo.git",
  figma: "https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN?node-id=196-25805",
  },


  {
  slug: "briwebsite",
  title: "Personal Portfolio Website",
  cover: "/projects/briwebsite/01.png",
  tech: "Next.js · TypeScript · Tailwind CSS",
  description: "My own personal portfolio website — the one you're looking at right now.",
  blocks: [],
  code: "https://github.com/Mosssi/Briwebsite.git",
  externalOnly: true,
},




  {
    slug: "hss",
    title: "Rebuild HSS Scout Website",
    cover: "/projects/hss/01.png",
    tech: "Figma · Next.js · TypeScript · next-intl",
    description:
      "Website for a Swedish sea scout organization — traditions, activities, and community.",
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
    live: "https://rebuildhss.netlify.app/",
    code: "https://github.com/Mosssi/rebuildHss.git",
    figma:"https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN?node-id=0-1"
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
    figma:"https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN?node-id=0-1"
  },

  {
    slug: "video",
    title: "Video App — Design System & Product UI",
    cover: "/projects/video/01.png",
    tech: "UI Design · Design System · Icon Library · Sketch",
    description:
      "Sole designer for a short-video streaming product: full design system, icon library, and every screen.",
    blocks: [
      {
        type: "text",
        body: "A short-video streaming platform where users filter videos by preference and receive personalized recommendations. The product covers video playback, search, paid content, and a VIP membership system. I designed the entire product solo — from the icon library to every screen.",
      },
      {
        type: "text",
        heading: "Design System & Guidelines",
        body: "I walked the full \u201czero to design system\u201d path: define the visual identity first, then codify the rules — typography, a primary/secondary color scale, a neutral ramp, and a general icon set spanning navigation, actions, membership, and coins — so every later screen was assembled instead of reinvented.",
      },
      { type: "image", src: "/projects/video/typography-color.png" },
      { type: "image", src: "/projects/video/design.png" },
      {
        type: "text",
        heading: "Video Player",
        body: "The player was designed for both light and dark contexts, with a compact variant for in-feed preview. Playback controls, progress states, and overlay layers were specified as components, so the same behavior could be reused across full-screen, embedded, and preview scenarios.",
      },
      { type: "image", src: "/projects/video/video.png" },
      {
        type: "text",
        heading: "GIF Creation Tool",
        body: "A built-in clip-to-GIF tool: select your best 8 seconds, generate, share — three steps. Progress and result screens keep the player's dark context, so the tool feels continuous with content consumption rather than bolted on.",
      },
      { type: "image", src: "/projects/video/git.png" },
      {
        type: "text",
        heading: "Account System",
        body: "Complete account flows — profile, phone and email binding, pattern lock, account recovery, and password reset — with every state specified, including empty, loading, and error states. Rank badges and the membership tier system gave the product a progressive visual ramp without adding interface complexity.",
      },
      { type: "image", src: "/projects/video/account.png" },
    ],
  },

  {
    slug: "personal",
    title: "Personal Work & Explorations",
    cover: "/projects/personal/01.png",
    tech: "UI Design · Visual Exploration",
    description:
      "Early personal work — kept to show where I started and how far the craft has come.",
    blocks: [
      {
        type: "text",
        body: "A sign-in flow exploration for a photography app: a full-bleed hero photo sets the mood, and the form screen keeps the same image as a dimmed backdrop, so the transition from browsing to logging in feels continuous.",
      },
      { type: "image", src: "/projects/personal/01.png" },
      {
        type: "text",
        heading: "Where it started",
        body: "A personal website made very early in my career. By today's standards it isn't polished, but I choose to keep and show it — it documents where I started, and keeps the growth arc of this portfolio complete and honest.",
      },
      { type: "image", src: "/projects/personal/03.png" },
    ],
  },


 



{
  slug: "tarot",
  title: "Tarot App",
  cover: "/projects/tarot/01.png",   
  tech: "React · MUI",
  description: "A tarot card reading app built with React and Material UI.",
  blocks: [],
  code: "https://github.com/Mosssi/Tarot--MUI.git",
  externalOnly: true,
},
{
  slug: "study-checkin",
  title: "Study Check-in — Jest Testing",
  cover: "/projects/checkin/01.png", 
  tech: "JavaScript · Jest",
  description: "A class assignment focused on writing unit tests with Jest.",
  blocks: [],
  code: "https://github.com/Mosssi/study-checkin.git",
  externalOnly: true,
},
];



