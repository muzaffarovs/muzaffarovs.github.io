import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

/** The picture for a project: its screenshot, or its figures when there is no public screen to show. */
export function Media({ p, eager = false }: { p: Project; eager?: boolean }) {
  return (
    <div className="media">
      {p.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.image.src} alt={eager ? p.image.alt : ""} width={1440} height={900} loading={eager ? "eager" : "lazy"} />
      ) : p.stats ? (
        <div className="tile">
          {p.stats.slice(0, 4).map(s => <div key={s.label}><b>{s.value}</b><span className="label">{s.note ? `${s.label}, ${s.note}` : s.label}</span></div>)}
        </div>
      ) : null}
    </div>
  );
}

export default function WorkIndex() {
  return (
    <ol className="rows">
      {projects.map((p, i) => (
        <li key={p.slug}>
          <Link className="row" href={`/work/${p.slug}/`}>
            <span className="row-idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="row-name display">{p.name}</span>
            <span className="row-peek" aria-hidden="true"><Media p={p} /></span>
            <span className="row-cat">{p.category}<span>{p.client}</span></span>
            <span className="row-go" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
