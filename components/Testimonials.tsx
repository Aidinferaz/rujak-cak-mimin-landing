import { testimonials } from "@/lib/content";
import { SampleTag } from "./Icons";

export function Testimonials() {
  return (
    <section id="testimoni" className="section testimonials" aria-labelledby="testimoni-title">
      <div className="section-head" data-reveal>
        <SampleTag />
        <h2 id="testimoni-title" className="section-title">
          Kata mereka yang <em>sudah ngerujak.</em>
        </h2>
      </div>

      <ul className="quote-grid">
        {testimonials.map((t, i) => (
          <li key={t.name} data-reveal style={{ ["--d" as string]: `${i * 0.12}s` }}>
            <figure>
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption>
                <span className="quote-name">{t.name}</span>
                <span className="quote-role">{t.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
