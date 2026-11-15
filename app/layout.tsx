import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import { GITHUB, KEYWORDS, LINKEDIN, NAME, OG_IMAGE, SITE, TELEGRAM } from "@/lib/site";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin", "cyrillic"], variable: "--font-sans", display: "swap" });
// Display face for the name and titles: Archivo with its width axis, set expanded in CSS.
const display = Archivo({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const description =
  "Rajab Muzaffarov is a full-stack developer in Tashkent, Uzbekistan, building production web apps with React, Next.js and TypeScript: AI automation, ERPs and CRMs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Rajab Muzaffarov — Full-Stack Developer in Tashkent, Uzbekistan",
    template: "%s · Rajab Muzaffarov",
  },
  description,
  applicationName: NAME,
  authors: [{ name: NAME, url: `${SITE}/` }],
  creator: NAME,
  publisher: NAME,
  keywords: KEYWORDS,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "profile",
    siteName: NAME,
    url: "/",
    title: "Rajab Muzaffarov — Full-Stack Developer in Tashkent",
    description: "I build production web apps with React, Next.js and TypeScript: ERPs, CRMs, websites and admin platforms.",
    locale: "en_US",
    firstName: "Rajab",
    lastName: "Muzaffarov",
    username: "muzaffarovs",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, type: "image/png", alt: "Rajab Muzaffarov, full-stack developer in Tashkent, Uzbekistan. React, Next.js, TypeScript, Node.js." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajab Muzaffarov — Full-Stack Developer in Tashkent",
    description: "I build production web apps with React, Next.js and TypeScript: ERPs, CRMs, websites and admin platforms.",
    images: [{ url: OG_IMAGE, alt: "Rajab Muzaffarov, full-stack developer in Tashkent, Uzbekistan." }],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48" }, { url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B0B0C",
  colorScheme: "dark",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="me" href={GITHUB} />
        <link rel="me" href={LINKEDIN} />
        <link rel="me" href={TELEGRAM} />
        <link rel="author" href="/about/" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
