/* eslint-disable @next/next/no-img-element */
import { steps } from "@/lib/content";

export function Steps() {
  return (
    <section id="cara" className="section steps" aria-labelledby="cara-title">
      <div className="steps-grid">
        <div className="steps-head" data-reveal>
          <h2 id="cara-title" className="section-title">
            Empat langkah, <em>tanpa ngulek.</em>
          </h2>
          <figure className="steps-figure">
            <img src="/img/steps-tuang.png" alt="Tangan menuang bumbu rujak dari cobek kecil ke atas potongan buah segar" loading="lazy" />
          </figure>
        </div>

        <ol className="steps-list">
          {steps.map((s, i) => (
            <li key={s.no} data-reveal style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <span className="steps-no tabular" aria-hidden="true">
                {s.no.padStart(2, "0")}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
