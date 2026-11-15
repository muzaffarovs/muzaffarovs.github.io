import type { Metadata } from "next";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { CV, GITHUB, LINKEDIN, NAME, OG_IMAGE, PERSON_ID, SITE, WEBSITE_ID, breadcrumbs, person } from "@/lib/site";

const title = "About";
const description =
  "Rajab Muzaffarov, full-stack developer in Tashkent. Two years of production work in React, Next.js and TypeScript, currently at Cresta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about/" },
  openGraph: { type: "profile", url: "/about/", title: `${title} · ${NAME}`, description, images: [OG_IMAGE], firstName: "Rajab", lastName: "Muzaffarov", username: "muzaffarovs" },
  twitter: { title: `${title} · ${NAME}`, description },
};

const SKILLS: [string, string[]][] = [
  ["Languages", ["TypeScript", "JavaScript"]],
  ["Frontend", ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zustand", "Redux Toolkit", "React Hook Form", "Zod"]],
  ["Backend", ["Node.js", "Express", "REST APIs", "Prisma"]],
  ["Data", ["PostgreSQL", "MongoDB", "Supabase"]],
  ["Auth", ["Supabase Auth", "JWT", "HTTP-only cookies"]],
  ["Automation", ["Claude and other AI APIs", "n8n", "Telegram Bot API", "Meta APIs"]],
  ["Shipping", ["Git", "Docker", "Vercel", "Cloudflare", "Linux"]],
];

export default function About() {
  return (
    <main>
      <JsonLd graph={[
        {
          "@type": ["AboutPage", "ProfilePage"],
          "@id": `${SITE}/about/#page`,
          url: `${SITE}/about/`,
          name: `${title} · ${NAME}`,
          description,
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: { "@id": PERSON_ID },
          dateModified: "2026-11-15",
        },
        person,
        breadcrumbs([{ name: "About", path: "/about/" }]),
      ]} />
      <header className="wrap page-head">
        <h1 className="title display">About</h1>
        <p className="lede">
          I&apos;m Rajab Muzaffarov <span className="muted" lang="uz-Cyrl">(Ражаб Музаффаров)</span>, a full-stack developer in Tashkent,
          working at <a className="u" href="https://cresta.uz/" target="_blank" rel="noopener">Cresta</a>.
        </p>
      </header>

      <div className="wrap sec">
        <section className="split" aria-labelledby="bio-h">
          <h2 className="label" id="bio-h">Background</h2>
          <div className="prose">
            <p>Two years of shipping production apps in React, Next.js and TypeScript, with Node and Postgres or MongoDB behind them.</p>
            <p>Most of what I build is the software a business runs on day to day: an ERP that turns customs papers and Telegram messages into ledgers, company websites with a CMS the staff run themselves, and the admin panels behind them.</p>
          </div>
        </section>
        <section className="split" aria-labelledby="stack-h">
          <h2 className="label" id="stack-h">Stack</h2>
          <dl className="skills">
            {SKILLS.map(([k, v]) => <div key={k}><dt className="muted">{k}</dt><dd>{v.join(", ")}</dd></div>)}
          </dl>
        </section>
        <section className="split" aria-labelledby="else-h">
          <h2 className="label" id="else-h">Elsewhere</h2>
          <p className="links" style={{ marginTop: 0 }}>
            <a href={CV} target="_blank" rel="noopener">Résumé ↗</a>
            <a href={GITHUB} target="_blank" rel="noopener">GitHub ↗</a>
            <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn ↗</a>
          </p>
        </section>
      </div>

      <Contact />
    </main>
  );
}
