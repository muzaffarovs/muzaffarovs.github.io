import Link from "next/link";
import Logo from "@/components/Logo";

export default function Nav() {
  return (
    <header className="bar">
      <div className="wrap bar-in">
        <Link className="mark" href="/" aria-label="Rajab Muzaffarov, home"><Logo /></Link>
        <nav className="bar-nav" aria-label="Primary">
          <Link href="/work/">Work</Link>
          <Link href="/about/">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
