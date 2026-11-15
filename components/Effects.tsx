"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initClock } from "@/lib/effects";

export default function Effects() {
  const pathname = usePathname();
  useEffect(() => {
    const ac = new AbortController();
    initClock(ac.signal);
    return () => ac.abort();
  }, [pathname]);
  return null;
}
