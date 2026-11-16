/* eslint-disable @next/next/no-img-element */
import { hero, nav, stages, waLink } from "@/lib/content";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <header className="hero-header">
        <a href="#top" className="hero-mark" aria-label="Cak Mimin, Bumbu Rujak Manis">
          <Logo />
        </a>
        <nav className="hero-nav" aria-label="Navigasi utama">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="hero-pesan" href={waLink(hero.waText)} target="_blank" rel="noopener">
          Pesan
        </a>
      </header>

      <ol className="stage-rail" aria-label="Perjalanan bumbu">
        {stages.map((s, i) => (
          <li key={s.no} className={i === 0 ? "is-active" : undefined} data-stage={i}>
            <a href={`#tahap-${s.no}`}>
              <span className="tabular">{s.no}</span>
              <span>{s.name}</span>
            </a>
          </li>
        ))}
      </ol>

      <div className="hero-cobek">
        <img src="/plates/cobek.png" alt="Cobek batu berisi bumbu rujak dengan irisan mangga muda di atas daun pisang" />
      </div>
      <div className="hero-pour" aria-hidden="true">
        <img src="/plates/pour.png" alt="" />
      </div>

      <div className="hero-pattern" aria-hidden="true" />

      <h1 id="hero-title" className="hero-headline">
        {hero.headline.map((l) => (
          <span key={l} className="line">
            {l}
          </span>
        ))}
      </h1>
      <p className="hero-sub">
        {hero.sub[0]}
        <br />
        {hero.sub[1]}
      </p>
    </section>
  );
}
