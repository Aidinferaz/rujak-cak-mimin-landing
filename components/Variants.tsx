/* eslint-disable @next/next/no-img-element */
import { SIZE, bangkok, certifications, variants, waLink } from "@/lib/content";
import { ArrowIcon, SampleTag } from "./Icons";

const HEAT_MAX = 4;

export function Variants() {
  return (
    <section id="varian" className="section variants" aria-labelledby="varian-title">
      <div className="section-head" data-reveal>
        <SampleTag />
        <h2 id="varian-title" className="section-title">
          Satu resep, <em>empat tingkat pedas.</em>
        </h2>
        <p className="section-lead">
          Semua varian memakai gula aren yang sama dalam botol {SIZE}. Bedanya cuma di cabai, dan warna tutupnya.
        </p>
        <ul className="certs" aria-label="Sertifikasi">
          {certifications.map((c) => (
            <li key={c.name}>
              <span className="cert-name">{c.name}</span>
              <span className="cert-no tabular">{c.no}</span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="bottle-row">
        {variants.map((v, idx) => (
          <li key={v.id} className="bottle" data-reveal style={{ ["--d" as string]: `${idx * 0.1}s` }}>
            <div className="bottle-media">
              <img src={v.img} alt={`Botol sambal rujak Cak Mimin varian ${v.name}, ${v.cap.toLowerCase()}`} loading="lazy" />
            </div>
            <div className="bottle-body">
              <h3>{v.name}</h3>
              <div className="heat" aria-label={`Tingkat pedas ${v.heat} dari ${HEAT_MAX}`}>
                <span className="heat-label">Pedas</span>
                <span className="heat-dots" aria-hidden="true">
                  {Array.from({ length: HEAT_MAX }, (_, i) => (
                    <i key={i} className={i < v.heat ? "on" : undefined} />
                  ))}
                </span>
              </div>
              <p className="bottle-note">{v.note}</p>
              <div className="bottle-foot">
                <span className="price tabular">{v.price}</span>
                <a
                  className="text-link"
                  href={waLink(`Halo Cak Mimin, saya mau pesan sambal rujak varian ${v.name}.`)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Pesan varian ${v.name} via WhatsApp`}
                >
                  Pesan <ArrowIcon />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <article className="companion" data-reveal>
        <div className="companion-media">
          <img src={bangkok.img} alt="Toples Bumbu Rujak Bangkok Cak Mimin dengan tutup merah" loading="lazy" />
        </div>
        <div className="companion-body">
          <p className="companion-tag">{bangkok.tag}</p>
          <h3>{bangkok.name}</h3>
          <p>{bangkok.body}</p>
          <div className="bottle-foot">
            <span className="price tabular">{bangkok.price}</span>
            <a
              className="text-link"
              href={waLink(`Halo Cak Mimin, saya mau pesan ${bangkok.name}.`)}
              target="_blank"
              rel="noopener"
              aria-label={`Pesan ${bangkok.name} via WhatsApp`}
            >
              Pesan <ArrowIcon />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
