import Link from "next/link";
import { sections } from "@/lib/sections";

export default function HomePage() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="font-serif text-3xl text-olive">Welcome in.</h1>
        <p className="mt-2 text-olive/75">
          There is nothing you need to do here. Wander wherever feels right.
        </p>
      </section>

      <ul className="grid grid-cols-2 gap-4">
        {sections.map((s, i) => (
          <li key={s.slug} className={i === sections.length - 1 ? "col-span-2" : undefined}>
            <Link
              href={`/${s.slug}`}
              className={`paper-card block h-full px-4 py-5 transition hover:-translate-y-0.5 ${s.colour}`}
            >
              <p className="font-serif text-xl text-olive">{s.name}</p>
              <p className="mt-1 text-sm leading-snug text-olive/75">{s.line}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
