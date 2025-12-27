"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function toTitle(segment: string): string {
  if (!segment) return "";
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return (
      <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
        Home
      </nav>
    );
  }

  const paths = segments.map((seg, idx) => ({
    name: toTitle(seg),
    href: "/" + segments.slice(0, idx + 1).join("/"),
    isLast: idx === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[--brand]">Home</Link>
        </li>
        {paths.map((p) => (
          <li key={p.href} className="flex items-center gap-2">
            <span className="text-zinc-400">/</span>
            {p.isLast ? (
              <span className="text-zinc-700">{p.name}</span>
            ) : (
              <Link href={p.href} className="hover:text-[--brand]">
                {p.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}


