"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stages } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

type Lenisish = { scrollTo: (target: number, opts?: { immediate?: boolean }) => void };

/** A slow wave across the whole track: the nira keeps flowing from the hero pour. */
function ribbonPath(w: number, h: number, introW: number) {
  const mid = h * 0.56;
  const amp = h * 0.16;
  // drop in from the top of the intro, like the pour continuing
  let d = `M ${introW * 0.18} -20 C ${introW * 0.2} ${h * 0.35}, ${introW * 0.55} ${mid + amp}, ${introW} ${mid}`;
  const seg = (w - introW) / 4;
  for (let i = 0; i < 8; i++) {
    const x0 = introW + (seg / 2) * i;
    const x1 = x0 + seg / 2;
    const dir = i % 2 === 0 ? -1 : 1;
    d += ` C ${x0 + seg * 0.18} ${mid + dir * amp}, ${x1 - seg * 0.18} ${mid + dir * amp}, ${x1} ${mid}`;
  }
  return d;
}

export function Story() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const pin = section.querySelector<HTMLElement>(".story-pin")!;
    const track = section.querySelector<HTMLElement>(".story-track")!;
    const svg = section.querySelector<SVGSVGElement>(".story-ribbon")!;
    const path = svg.querySelector<SVGPathElement>("path")!;
    const panels = gsap.utils.toArray<HTMLElement>(".story-stage", section);
    const progressItems = gsap.utils.toArray<HTMLElement>(".story-progress li", section);

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 900px) and (orientation: landscape) and (prefers-reduced-motion: no-preference)",
      () => {
        section.classList.add("is-horizontal");
        const distance = () => track.scrollWidth - window.innerWidth;

        const drawRibbon = () => {
          const w = track.scrollWidth;
          const h = pin.clientHeight;
          const introW = (track.firstElementChild as HTMLElement).offsetWidth;
          svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
          svg.style.width = `${w}px`;
          path.setAttribute("d", ribbonPath(w, h, introW));
          const len = path.getTotalLength();
          path.style.strokeDasharray = `${len}`;
          return len;
        };
        let len = drawRibbon();

        const slide = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onRefresh: () => {
              len = drawRibbon();
            },
            onUpdate: (self) => {
              path.style.strokeDashoffset = `${len * (1 - Math.min(1, self.progress * 1.04))}`;
              // which stage is centred
              const x = self.progress * distance() + window.innerWidth * 0.5;
              let active = -1;
              panels.forEach((p, i) => {
                if (x >= p.offsetLeft) active = i;
                const local = gsap.utils.clamp(0, 1, (x - p.offsetLeft) / p.offsetWidth);
                progressItems[i]?.style.setProperty("--fill", local.toFixed(3));
              });
              progressItems.forEach((li, i) => li.classList.toggle("is-active", i === active));
              section.classList.toggle("is-started", active >= 0);
            },
          },
        });

        panels.forEach((panel) => {
          const photo = panel.querySelector(".story-photo");
          const img = panel.querySelector(".story-photo img");
          const word = panel.querySelector(".story-word");
          const lines = panel.querySelectorAll(".story-text > *");
          const base = { containerAnimation: slide, trigger: panel };

          gsap.fromTo(
            photo,
            { clipPath: "inset(0% 0% 0% 100%)" },
            { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out", scrollTrigger: { ...base, start: "left 92%", end: "left 40%", scrub: true } }
          );
          gsap.fromTo(img, { scale: 1.22 }, { scale: 1.04, ease: "none", scrollTrigger: { ...base, start: "left right", end: "right left", scrub: true } });
          gsap.fromTo(word, { xPercent: 18 }, { xPercent: -22, ease: "none", scrollTrigger: { ...base, start: "left right", end: "right left", scrub: true } });
          gsap.from(lines, {
            y: 34,
            opacity: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: { ...base, start: "left 55%", toggleActions: "play none none reverse" },
          });
        });

        // hero rail and nav links jump to the right horizontal position
        const onClick = (ev: MouseEvent) => {
          const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#tahap-"]');
          if (!a) return;
          const panel = section.querySelector<HTMLElement>(a.getAttribute("href")!);
          const st = slide.scrollTrigger;
          if (!panel || !st) return;
          ev.preventDefault();
          ev.stopImmediatePropagation();
          const target = st.start + Math.min(distance(), Math.max(0, panel.offsetLeft - window.innerWidth * 0.08));
          const lenis = (window as unknown as { __lenis?: Lenisish }).__lenis;
          if (lenis) lenis.scrollTo(target);
          else window.scrollTo({ top: target, behavior: "smooth" });
        };
        document.addEventListener("click", onClick, true);

        return () => {
          document.removeEventListener("click", onClick, true);
          section.classList.remove("is-horizontal", "is-started");
          path.style.strokeDasharray = "";
          path.style.strokeDashoffset = "";
        };
      }
    );
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="cerita" className="story" aria-labelledby="cerita-title">
      <div className="story-pin">
        <div className="story-track">
          <div className="story-intro">
            <h2 id="cerita-title" className="section-title">
              Perjalanan manis, <em>dari pohon aren sampai ke piring Anda.</em>
            </h2>
            <p className="story-hint" aria-hidden="true">
              Ikuti alirannya
              <svg viewBox="0 0 40 12" fill="none">
                <path d="M1 6h37M33 1l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </p>
          </div>

          <svg className="story-ribbon" aria-hidden="true" preserveAspectRatio="none">
            <defs>
              <linearGradient id="ribbon-grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#c0701f" />
                <stop offset="0.5" stopColor="#d99a52" />
                <stop offset="1" stopColor="#c0701f" />
              </linearGradient>
            </defs>
            <path fill="none" stroke="url(#ribbon-grad)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          {stages.map((s, i) => (
            <article key={s.no} id={`tahap-${s.no}`} className={`story-stage story-stage--${i % 2 ? "low" : "high"}`}>
              <span className="story-word" aria-hidden="true">
                {s.name}
              </span>
              <figure className="story-photo">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  style={{ transformOrigin: s.focus }}
                />
              </figure>
              <div className="story-text">
                <p className="story-step tabular">
                  {s.no} <span>{s.name}</span>
                </p>
                <h3>{s.title}</h3>
                <p className="story-body">{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <ol className="story-progress" aria-hidden="true">
          {stages.map((s) => (
            <li key={s.no}>
              <span className="tabular">{s.no}</span> {s.name}
              <i />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
