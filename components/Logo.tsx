/**
 * Logo Cak Mimin: monogram skrip "Cm" seperti di label kemasan asli,
 * di atas nama yang digambar ulang dengan serif ramping.
 * Ukuran mengikuti font-size elemen induk (semua dalam em).
 */
export function Logo({ sub = true, className = "" }: { sub?: boolean; className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <span className="logo-cm" aria-hidden="true">
        Cm
      </span>
      <span className="logo-name">Cak Mimin</span>
      {sub && <span className="logo-sub">Bumbu Rujak Manis</span>}
    </span>
  );
}
