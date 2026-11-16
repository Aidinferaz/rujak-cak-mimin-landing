/* eslint-disable @next/next/no-img-element */
import { partnership, waLink } from "@/lib/content";
import { ArrowIcon, SampleTag } from "./Icons";

export function Partnership() {
  return (
    <section id="kemitraan" className="section partnership" aria-labelledby="kemitraan-title">
      <div className="partner-copy" data-reveal>
        <SampleTag />
        <h2 id="kemitraan-title" className="section-title">
          {partnership.title}
        </h2>
        <p className="section-lead">{partnership.body}</p>

        <ul className="tiers">
          {partnership.tiers.map((t) => (
            <li key={t.name}>
              <h3>{t.name}</h3>
              <p>{t.detail}</p>
            </li>
          ))}
        </ul>

        <a className="btn btn-leaf" href={waLink(partnership.waText)} target="_blank" rel="noopener">
          {partnership.cta} <ArrowIcon />
        </a>
      </div>

      <figure className="partner-figure" data-reveal>
        <img src={partnership.img} alt="Gerobak rujak kayu dengan toples bumbu dan buah potong di sudut jalan saat senja" loading="lazy" />
      </figure>
    </section>
  );
}
