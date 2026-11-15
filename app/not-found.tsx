import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", alternates: { canonical: null }, robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="wrap page-head lost">
      <h1 className="title display">Not found</h1>
      <p className="lede">Nothing lives at this address. Try the <Link className="u" href="/">home page</Link> or the <Link className="u" href="/work/">work</Link>.</p>
    </main>
  );
}
