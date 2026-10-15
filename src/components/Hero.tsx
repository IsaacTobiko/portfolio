const badges = ["React", "TypeScript", "Next.js", "FastAPI", "PostgreSQL"];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-300 items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-8 lg:py-24"
    >
      <div className="text-center lg:text-left">
        <div className="inline-flex min-h-8 items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted sm:px-4 sm:text-[13px]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e]" />
          Nairobi, Kenya
        </div>
        <h1 className="my-5 font-mono text-[clamp(30px,8vw,60px)] font-extrabold leading-[1.08] tracking-tight sm:my-6">
          <span className="block">Code it.</span>
          <span className="block">Containerize it.</span>
          <span className="block bg-linear-to-r from-text to-muted bg-clip-text text-transparent">
            Ship it
          </span>
        </h1>
        <p className="mx-auto mb-6 max-w-140 text-base text-muted sm:mb-8 sm:text-lg lg:mx-0 lg:text-xl">
          Full stack developer building fast, scalable web apps and shipping
          them with Docker and CI/CD
        </p>
        <div className="mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 lg:justify-start">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-lg border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-br from-white to-neutral-400 px-6 text-[15px] font-semibold text-neutral-950 transition hover:-translate-y-0.5"
          >
            View My Work →
          </a>
          <a
            href="/Isaac-Tobiko-CV.pdf"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-[15px] font-semibold transition hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center gap-4 lg:justify-start">
          <a
            href="https://github.com/IsaacTobiko"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-sm font-bold transition hover:-translate-y-0.5"
          >
            GH
          </a>
          <a
            href="https://linkedin.com/in/isaactobiko/"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-sm font-bold transition hover:-translate-y-0.5"
          >
            in
          </a>
        </div>
      </div>
      <div className="relative mx-auto mb-8 w-full max-w-[280px] sm:max-w-xs lg:mb-0 lg:max-w-sm">
        <div className="grid aspect-4/5 place-items-center rounded-3xl border border-border bg-surface font-mono text-sm text-muted shadow-[0_0_80px_rgba(255,255,255,0.08)]">
          [ your photo here ]
        </div>
        <div className="absolute left-2 top-4 rounded-xl border border-border bg-surface px-3 py-2 font-mono text-[11px] shadow-lg sm:-left-6 sm:top-8 sm:px-4 sm:text-xs">
          <span className="text-green-500">✓</span> build passing · deployed
        </div>
        <div className="absolute -bottom-6 right-2 hidden rounded-xl border border-border bg-surface p-3 font-mono text-[11px] shadow-lg sm:-right-4 sm:block sm:p-4 sm:text-xs">
          <pre>{`const isaac = {
  stack: ["React", "FastAPI"],
  ship: "Docker + CI/CD",
  base: "Nairobi",
}; // always shipping`}</pre>
        </div>
      </div>
    </section>
  );
}
