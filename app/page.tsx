import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-between px-6 py-10">
      <div />

      <section className="text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-earth">Thehrav Within</p>

        <div className="paper-card taped mx-auto mb-8 px-6 py-10">
          <h1 className="font-serif text-4xl leading-tight text-olive">
            Thehrav Within
            <br />
            <span className="italic text-earth">Space</span>
          </h1>
          <p className="mt-4 text-lg text-olive/80">A little space to explore yourself.</p>
        </div>

        <p className="mx-auto max-w-xs text-base leading-relaxed text-olive/80">
          Play, notice, feel, reflect, discover — or simply be. In your own way, at your own pace.
        </p>
      </section>

      <div className="flex flex-col items-center gap-3">
        <Link
          href="/home"
          className="w-full rounded-full bg-olive px-6 py-4 text-center text-lg text-ivory shadow-sm transition hover:bg-olive/90"
        >
          Step inside
        </Link>
        <p className="text-xs text-earth/80">For adults 18 and over.</p>
      </div>
    </main>
  );
}
