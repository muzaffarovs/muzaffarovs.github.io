import Link from "next/link";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import WorkIndex from "@/components/WorkIndex";
import { projects } from "@/lib/projects";
import { CV, EMAIL, GITHUB, NAME, PERSON_ID, SITE, WEBSITE_ID, person, website } from "@/lib/site";

const graph = [
  website,
  {
    "@type": "ProfilePage",
    "@id": `${SITE}/#profilepage`,
    url: `${SITE}/`,
    name: "Rajab Muzaffarov — Full-Stack Developer in Tashkent, Uzbekistan",
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
    primaryImageOfPage: { "@id": `${SITE}/#avatar` },
    dateCreated: "2026-09-15",
    dateModified: "2026-11-15",
  },
  person,
  {
    "@type": "ItemList",
    "@id": `${SITE}/#work`,
    name: `Selected work by ${NAME}`,
    itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/work/${p.slug}/`, name: p.nameSuffix?.startsWith("/") ? `${p.name} ${p.nameSuffix}` : p.name })),
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd graph={graph} />

      <section className="wrap intro">
        <h1 className="display" aria-label="Rajab Muzaffarov">
          <span aria-hidden="true">Rajab</span>
          <span aria-hidden="true">Muzaffarov</span>
        </h1>
        <div className="intro-row">
          <p className="label status">Full-stack developer, Tashkent</p>
          <p>
            I build the software a business runs on.{" "}
            <span className="muted">An export ERP that reads its own paperwork, company websites, and the admin panels behind them.</span>
          </p>
          <p className="links">
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href={CV} target="_blank" rel="noopener">Résumé ↗</a>
            <a href={GITHUB} target="_blank" rel="noopener">GitHub ↗</a>
          </p>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="work-h">
        <div className="sec-head">
          <h2 className="label" id="work-h">Selected work</h2>
          <Link className="label" href="/work/">{projects.length} projects</Link>
        </div>
        <WorkIndex />
      </section>

      <Contact />
    </main>
  );
}
