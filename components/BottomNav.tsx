"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/lib/sections";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main sections"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-earth/15 bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur"
    >
      <ul className="mx-auto flex max-w-md justify-between px-2">
        {sections.map((s) => {
          const href = `/${s.slug}`;
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={s.slug} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-1 py-3 text-xs transition ${
                  active ? "font-bold text-olive" : "text-earth/80"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full transition ${active ? "bg-olive" : "bg-oat"}`}
                />
                {s.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
