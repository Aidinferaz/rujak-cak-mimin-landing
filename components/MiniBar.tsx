import { hero, nav, waLink } from "@/lib/content";
import { Logo } from "./Logo";

export function MiniBar() {
  return (
    <div className="mini-bar">
      <a href="#top" className="mini-mark" aria-label="Kembali ke atas">
        <Logo sub={false} />
      </a>
      <nav aria-label="Navigasi ringkas" className="mini-nav">
        {nav.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className="mini-pesan" href={waLink(hero.waText)} target="_blank" rel="noopener">
        Pesan
      </a>
    </div>
  );
}
