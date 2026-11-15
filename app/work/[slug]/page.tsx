import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { Media } from "@/components/WorkIndex";
import { getProject, projects } from "@/lib/projects";
import { NAME, OG_IMAGE, PERSON_ID, SITE, WEBSITE_ID, breadcrumbs } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  const url = `/work/${p.slug}/`;
  const full = `${p.metaTitle} · ${NAME}`;
  const images = [p.image?.src ?? OG_IMAGE];
  return {
    title: p.metaTitle,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: full, description: p.description, images, authors: [`${SITE}/about/`] },
    twitter: { title: full, description: p.description, images },
  };
}

export default async function CaseStudy({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];
  const url = `${SITE}/work/${p.slug}/`;
  const fullName = p.nameSuffix?.startsWith("/") ? `${p.name} ${p.nameSuffix}` : p.name;

  return (
    <main>
      <JsonLd graph={[
        {
          "@type": "WebPage",
          "@id": `${url}#page`,
          url,
          name: `${p.metaTitle} · ${NAME}`,
          description: p.description,
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: { "@id": `${url}#project` },
          author: { "@id": PERSON_ID },
        },
        {
          "@type": "CreativeWork",
          "@id": `${url}#project`,
          name: fullName,
          description: p.description,
          url,
          genre: p.category,
          creator: p.team ? [{ "@id": PERSON_ID }, { "@type": "Person", name: p.team }] : { "@id": PERSON_ID },
          sourceOrganization: { "@type": "Organization", name: p.client.replace(/ ·.*$/, "") },
          keywords: p.stack.join(", "),
          ...(p.image ? { image: `${SITE}${p.image.src}` } : {}),
          ...(p.live ? { sameAs: p.live.url } : {}),
        },
        breadcrumbs([{ name: "Work", path: "/work/" }, { name: fullName, path: `/work/${p.slug}/` }]),
      ]} />

      <header className="wrap page-head">
        <Link className="back" href="/work/">← All work</Link>
        <h1 className="title display">{p.name}</h1>
        <p className="lede">{p.lede}</p>
        <dl className="facts">
          <div><dt className="label">Type</dt><dd>{p.category}</dd></div>
          <div><dt className="label">Client</dt><dd>{p.client}</dd></div>
          <div><dt className="label">Role</dt><dd>{p.role}{p.team && <span className="muted">, with {p.team}</span>}</dd></div>
          <div>
            <dt className="label">Live</dt>
            <dd>{p.live ? <a className="u" href={p.live.url} target="_blank" rel="noopener">{p.live.label} ↗</a> : <span className="muted">Private system</span>}</dd>
          </div>
        </dl>
      </header>

      {p.image && <figure className="wrap shot"><Media p={p} eager /></figure>}

      <div className="wrap">
        {p.stats && (
          <section className="split" aria-labelledby="fig-h">
            <h2 className="label" id="fig-h">In figures</h2>
            <dl className="figures">
              {p.stats.map(s => <div key={s.label}><dd>{s.value}</dd><dt className="label">{s.label}{s.note && <small>{s.note}</small>}</dt></div>)}
            </dl>
          </section>
        )}
        <section className="split" aria-labelledby="built-h">
          <h2 className="label" id="built-h">What I built</h2>
          <ol className="built">{p.built.map(b => <li key={b}>{b}</li>)}</ol>
        </section>
        <section className="split" aria-labelledby="stack-h">
          <h2 className="label" id="stack-h">Stack</h2>
          <ul className="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul>
        </section>
        <Link className="next" href={`/work/${next.slug}/`}>
          <span className="label">Next project</span>
          <span className="next-name display">{next.name} →</span>
        </Link>
      </div>

      <Contact />
    </main>
  );
}
