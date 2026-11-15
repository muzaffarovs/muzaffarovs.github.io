export type Project = {
  slug: string;
  name: string;
  nameSuffix?: string;
  client: string;
  category: string;
  gloss?: string;
  /** <title> before the " · Rajab Muzaffarov" suffix */
  metaTitle: string;
  description: string;
  lede: string;
  /** one line for the work index */
  summary: string;
  built: string[];
  stack: string[];
  stats?: { label: string; value: string; note?: string }[];
  role: string;
  live?: { label: string; url: string };
  team?: string;
  /** screenshot of the live product, 1440×900 */
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    slug: "frutera",
    name: "Frutera",
    client: "Cresta Systems",
    category: "Export-logistics ERP",
    gloss: "Team build with Ilyosbek Axmedjanov at Cresta Systems",
    metaTitle: "Frutera: export-logistics ERP",
    description:
      "Frutera: an ERP for an agricultural exporter. Reads customs declarations, waybills and Telegram messages into shipments and payments, and reconciles every client ledger nightly.",
    summary: "ERP for an agricultural exporter. Customs papers and Telegram chats in, ledgers out.",
    lede:
      "An ERP for an agricultural exporter. Claude reads customs declarations, waybills and Telegram messages into shipments and payments, and every client ledger reconciles overnight.",
    built: [
      "Ingestion from four sources: watched Telegram groups over MTProto, the Uzbek customs portal behind an E-IMZO digital signature, Google Sheets read back for reconciliation, and a WhatsApp arrival bridge",
      "Claude-powered extraction that turns customs declarations, CMR waybills, invoices and free-text Telegram messages into shipments, client payments and agent transfers",
      "A nightly reconciliation pass that compares every client's card with the shared sheet and reports what moved",
      "Next.js CRM of 40 pages over 150 API endpoints and 38 PostgreSQL tables: shipment board, master grid, client ledgers, cash desks, FX monitor and profit analytics",
      "Per-line, per-page access grants, an audit trail of every mutation, and nightly encrypted backups delivered over Telegram",
      "Field entry from a Telegram Mini App and an append-only Android app, with an offline queue and idempotent retry",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Express", "Prisma", "PostgreSQL", "Telegram MTProto", "Claude API", "Google Sheets API", "Docker"],
    stats: [
      { label: "Lines", value: "105k" },
      { label: "Tables", value: "38" },
      { label: "Endpoints", value: "150" },
      { label: "Services", value: "6", note: "on one 2 GB box" },
    ],
    role: "Full-stack developer",
    team: "Ilyosbek Axmedjanov",
  },
  {
    slug: "elbowsway",
    name: "elbowsway",
    nameSuffix: "official site",
    client: "elbowsway · Tashkent",
    category: "Band website and CMS",
    metaTitle: "elbowsway: official site for a Tashkent shoegaze band",
    description:
      "The official site of elbowsway, a shoegaze band from Tashkent: a WebGL fog that moves with the music, an EP player, and an admin panel the band edit themselves.",
    summary: "Official site for a shoegaze band. The fog on the page moves with the music.",
    lede:
      "The official website of elbowsway, a shoegaze band from Tashkent. A WebGL fog drifts behind the page and reacts to the EP as it plays, and the band keep the content up to date themselves.",
    built: [
      "A full-screen WebGL fog shader and a stretching wordmark, driven by a WebAudio analyser on the built-in EP player",
      "Server-rendered Next.js pages with structured data, Open Graph images, a sitemap and a web manifest",
      "A password-protected admin editor where the band change shows, releases, members, photos and links without touching code",
      "Content stored in Vercel Blob with a history of every publish; the site revalidates as soon as something is saved",
      "Image uploads straight from the browser, shrunk to WebP before they leave the device",
    ],
    stack: ["Next.js 16", "React 19", "WebGL", "Web Audio API", "Vercel Blob", "Vercel"],
    role: "Design and development",
    live: { label: "elbowsway.com", url: "https://elbowsway.com/" },
    image: { src: "/work/elbowsway.webp", alt: "The elbowsway home page: the four band members in a dim underground car park, with the cyan elbowsway wordmark stretched across the bottom." },
  },
  {
    slug: "cresta",
    name: "Cresta",
    nameSuffix: "from day one",
    client: "Cresta · Uzbekistan",
    category: "Website, Telegram bot and CRM",
    metaTitle: "Cresta: website, Telegram bot and CRM",
    description:
      "Cresta's corporate website, its Telegram bot and parts of the CRM behind client management, frontend to deployment.",
    summary: "Corporate site, Telegram bot and CRM work for a new development company.",
    lede:
      "The website, Telegram bot and CRM work for Cresta, a new development company, from first commit to production.",
    built: [
      "The corporate website, the company's primary public-facing web presence",
      "A Telegram bot that supports communication and business workflows",
      "Contributions to the company's CRM system for internal operations and client management",
      "Frontend and backend work delivered through to production deployment",
    ],
    stack: ["Corporate site", "Telegram bot", "CRM"],
    role: "Full-stack developer",
    live: { label: "cresta.uz", url: "https://cresta.uz/" },
  },
  {
    slug: "t-sx",
    name: "T-SX",
    nameSuffix: "corporate site",
    client: "Toshkent Sinov Xizmati",
    category: "Corporate website and CMS",
    metaTitle: "T-SX: Toshkent Sinov Xizmati website",
    description:
      "The Toshkent Sinov Xizmati website at t-sx.uz: news CMS, photo gallery and an admin panel the staff run themselves.",
    summary: "Company site with a news CMS and gallery the staff update themselves.",
    lede:
      "The website of Toshkent Sinov Xizmati, with a news CMS and a photo gallery the staff run themselves.",
    built: [
      "The official corporate website presenting the company's services, activities and organisational information",
      "A dynamic news and content management system run from a dedicated admin interface",
      "A photo gallery showcasing the company's activities, facilities and events",
    ],
    stack: ["News CMS", "Photo gallery", "Admin panel"],
    role: "Full-stack developer",
    live: { label: "t-sx.uz", url: "https://t-sx.uz/" },
    image: { src: "/work/t-sx.webp", alt: "The t-sx.uz home page: the Toshkent Sinov Xizmati name set large over 3D molecules, with a navigation bar in Uzbek." },
  },
];

export const getProject = (slug: string) => projects.find(p => p.slug === slug);
