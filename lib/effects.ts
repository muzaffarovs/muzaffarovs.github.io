/** The only script on the site: keeps the Tashkent time in the footer current. */
export function initClock(signal: AbortSignal) {
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit", hour12: false });
  const tick = () => { const s = fmt.format(new Date()); document.querySelectorAll("[data-clock]").forEach(n => { n.textContent = s; }); };
  tick();
  const id = setInterval(tick, 15_000);
  signal.addEventListener("abort", () => clearInterval(id));
}
