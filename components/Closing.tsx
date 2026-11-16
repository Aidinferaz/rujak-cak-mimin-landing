import { CITY, WHATSAPP_NUMBER, hero, nav, waLink } from "@/lib/content";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Logo } from "./Logo";

const prettyNumber = (n: string) => "+" + n.replace(/^(\d{2})(\d{3})(\d{4})(\d+)$/, "$1 $2-$3-$4");

export function Closing() {
  return (
    <footer className="closing" aria-labelledby="closing-title">
      <div className="closing-cta" data-reveal>
        <h2 id="closing-title" className="closing-title">
          Buahnya sudah dingin?
          <br />
          <em>Bumbunya biar Cak Mimin.</em>
        </h2>
        <a className="btn btn-leaf" href={waLink(hero.waText)} target="_blank" rel="noopener">
          <WhatsAppIcon className="btn-icon" />
          {hero.cta}
        </a>
      </div>

      <div className="footer-bar">
        <div className="footer-mark">
          <Logo sub={false} className="footer-logo" />
          <span className="footer-meta">Bumbu rujak manis · {CITY}, Jawa Timur</span>
        </div>
        <nav aria-label="Navigasi bawah" className="footer-nav">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <a href={waLink(hero.waText)} target="_blank" rel="noopener" className="tabular">
            WhatsApp {prettyNumber(WHATSAPP_NUMBER)}
          </a>
          <span>© 2026 Cak Mimin</span>
        </div>
      </div>
    </footer>
  );
}
