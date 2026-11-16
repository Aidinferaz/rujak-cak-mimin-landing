"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Satu orkestrasi gerak untuk seluruh halaman:
 * - smooth scroll (Lenis)
 * - masuknya hero: nira mengalir turun, lalu judul naik baris demi baris
 * - aliran nira memanjang saat hero digulir
 * - elemen [data-reveal] muncul saat masuk layar
 * - header ringkas muncul setelah hero
 * Semua dimatikan saat prefers-reduced-motion.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // header ringkas setelah hero
    const hero = document.querySelector<HTMLElement>(".hero");
    const bar = document.querySelector<HTMLElement>(".mini-bar");
    const io = new IntersectionObserver(
      ([e]) => bar?.classList.toggle("is-on", !e.isIntersecting),
      { rootMargin: "-20% 0px 0px 0px" }
    );
    if (hero) io.observe(hero);

    if (reduce) {
      root.classList.add("motion-off");
      return () => io.disconnect();
    }
    root.classList.add("motion-on");

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // anchor links lewat Lenis
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!;
      const target = id === "#top" ? 0 : document.querySelector<HTMLElement>(id);
      if (target === null) return;
      ev.preventDefault();
      lenis.scrollTo(target, { offset: 0 });
    };
    document.addEventListener("click", onClick);

    const ctx = gsap.context(() => {
      // hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-pour", { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.8, ease: "power2.inOut" })
        .from(".hero-cobek", { y: 40, opacity: 0, duration: 1.2 }, 0.2)
        .from(".hero-headline .line", { yPercent: 60, opacity: 0, duration: 1.1, stagger: 0.12 }, 0.55)
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.9 }, 1.05)
        .from(".hero .stage-rail li", { x: -12, opacity: 0, duration: 0.7, stagger: 0.08 }, 1.1)
        .from(".hero-header > *", { y: -10, opacity: 0, duration: 0.7, stagger: 0.06 }, 0.9)
        .from(".hero-pattern", { opacity: 0, duration: 2 }, 0.8);

      // nira memanjang dan cobek naik saat hero digulir
      gsap.to(".hero-pour img", {
        scaleY: 1.18,
        transformOrigin: "50% 0%",
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-cobek img", {
        scale: 1.16,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-headline, .hero-sub", {
        yPercent: -18,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "20% top", end: "bottom top", scrub: true },
      });

      // reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const delay = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // gambar kemitraan: parallax pelan
      gsap.fromTo(
        ".partner-figure img",
        { yPercent: -6 },
        { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".partnership", start: "top bottom", end: "bottom top", scrub: true } }
      );
    });

    return () => {
      ctx.revert();
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      io.disconnect();
      root.classList.remove("motion-on");
    };
  }, []);

  return null;
}
