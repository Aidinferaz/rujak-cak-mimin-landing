import { SHOW_SAMPLE_BADGE } from "@/lib/content";

export function ArrowIcon({ className = "arrow-icon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 12" fill="none" aria-hidden="true">
      <path d="M1 6h17M13 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Penanda konten contoh; hilang saat SHOW_SAMPLE_BADGE = false di lib/content.ts. */
export function SampleTag() {
  if (!SHOW_SAMPLE_BADGE) return null;
  return <span className="sample-tag">Data contoh</span>;
}
