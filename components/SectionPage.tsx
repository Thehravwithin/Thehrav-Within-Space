import type { Section } from "@/lib/sections";

export default function SectionPage({ section }: { section: Section }) {
  return (
    <div>
      <header className="mb-8">
        <h1 className="font-serif text-3xl text-olive">{section.name}</h1>
        <p className="mt-2 text-olive/75">{section.line}</p>
      </header>

      <ul className="space-y-4">
        {section.comingSoon.map((item, i) => (
          <li
            key={item}
            className={`paper-card px-5 py-4 ${i % 2 === 0 ? "-rotate-[0.6deg]" : "rotate-[0.6deg]"}`}
          >
            <p className="font-serif text-lg text-olive">{item}</p>
            <p className="text-sm text-earth/80">Being made with care — coming soon.</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
