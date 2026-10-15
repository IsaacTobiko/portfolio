import Image from "next/image";

const badges = ["React", "TypeScript", "Next.js", "FastAPI", "PostgreSQL"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-300 content-center items-center gap-12 px-4 pb-12 pt-12 sm:min-h-[calc(100svh-4rem)] sm:px-6 sm:pb-28 sm:pt-16 md:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-16"
    >
      <div className="text-center lg:text-left">
        <div className="anim-up [--d:0.1s]  inline-flex min-h-8 items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-muted sm:px-4 sm:text-[13px]">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-500" />
            <span className="pulse-dot relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Nairobi, Kenya
        </div>
        <h1 className="my-5 font-mono text-[clamp(30px,8vw,60px)] font-extrabold leading-[1.08] tracking-tight sm:my-6">
          <span className="anim-up [--d:0.2s] block">Code it.</span>
          <span className="anim-up [--d:0.35s]  block">Containerize it.</span>
          <span className="anim-up [--d:0.5s]  block">
            <span className="bg-linear-to-r from-text to-muted bg-clip-text text-transparent">
              Ship it
            </span>
            <span className="cursor-blink ml-2 inline-block h-[0.1em] w-[0.6em] bg-green-700" />
          </span>
        </h1>
        <p className="anim-up [--d:0.65s] mx-auto mb-6 max-w-140 text-base text-muted sm:mb-8 sm:text-lg lg:mx-0 lg:text-xl">
          Full stack developer building fast, scalable web apps and shipping
          them with Docker and CI/CD
        </p>
        <div className="anim-up [--d:0.8s] mb-6 flex flex-wrap justify-center gap-2 sm:mb-8 lg:justify-start">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-lg border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
            >
              {b}
            </span>
          ))}
        </div>
        <div className="anim-up [--d:0.95s] mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-br from-white to-neutral-400 px-6 text-[15px] font-semibold text-neutral-950 transition hover:-translate-y-0.5"
          >
            View My Work →
          </a>
          <a
            href="/Isaac-Tobiko-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 text-[15px] font-semibold transition hover:-translate-y-0.5"
          >
            Download CV
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
            </svg>
          </a>
        </div>
        <div className="anim-up [--d:1.05s] flex justify-center gap-4 lg:justify-start">
          <a
            href="https://github.com/IsaacTobiko"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface transition hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/isaactobiko/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface transition hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative mx-auto mb-8 w-full max-w-[280px] sm:max-w-xs lg:mb-0 lg:max-w-sm">
        <div className="anim-pop [--d:0.4s] relative aspect-4/5 overflow-hidden rounded-[2.5rem] border border-white/20 bg-surface shadow-[0_0_0_6px_rgba(255,255,255,0.05),0_0_48px_rgba(255,255,255,0.25),0_0_120px_rgba(255,255,255,0.1)]">
          <Image
            src="/profile.jpg"
            alt="Isaac Tobiko"
            fill
            priority
            loading="eager"
            sizes="(max-width: 1024px) 280px, 384px"
            className="object-cover"
          />
        </div>
        <div className="float-in [--d:1.1s]  absolute right-2 top-4 rounded-xl border border-border bg-surface px-3 py-2 font-mono text-[11px] shadow-lg sm:-right-6 sm:top-8 sm:px-4 sm:text-xs hidden sm:block">
          <span className="text-green-500">✓</span> Open to opportunities
        </div>
        <div className="float-in [--d:1.3s] absolute bottom-2 left-2 hidden rounded-xl border border-border bg-surface p-3 font-mono text-[11px] shadow-lg sm:-left-8 sm:block sm:p-4 sm:text-xs">
          <div className="mb-3 flex gap-1.5" aria-hidden="true">
            <i className="h-2 w-2 rounded-full bg-muted/60" />
            <i className="h-2 w-2 rounded-full bg-muted/60" />
            <i className="h-2 w-2 rounded-full bg-muted/60" />
          </div>
          <pre>{`const Isaac = {
  stack: ["React", "FastAPI"],
  ship: "Docker + CI/CD",
  base: "Nairobi",
}; // always shipping`}</pre>
        </div>
      </div>
      <a
        href="#skills"
        aria-label="Scroll down"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted transition hover:text-text sm:flex"
      >
        Scroll
        <span className="scroll-arrow">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </span>
      </a>
    </section>
  );
}
