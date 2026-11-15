import { EMAIL, GITHUB, LINKEDIN, TELEGRAM } from "@/lib/site";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h">
          Have something to build?<br />
          <a className="u muted" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </h2>
        <p className="links">
          <a href={TELEGRAM} target="_blank" rel="noopener">Telegram ↗</a>
          <a href={GITHUB} target="_blank" rel="noopener">GitHub ↗</a>
          <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn ↗</a>
        </p>
      </div>
    </section>
  );
}
