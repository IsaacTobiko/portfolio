import Image from "next/image";
import Reveal from "./Reveal";

const tags = ["React", "FastAPI", "PostgreSQL"];

const upcoming = [
  {
    title: "Next project",
    text: "Placeholder for the next build: a short description and stack will land here.",
  },
  {
    title: "Upcoming project",
    text: "Placeholder for another shipped project with its live link and repository.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-300 scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8"
    >
      <Reveal>
        <h2 className="mt-2 font-mono text-[clamp(26px,3vw,36px)] font-bold leading-tight tracking-tight">
          Featured projects
        </h2>
        <p className="mb-10 mt-4 max-w-160 text-muted sm:mb-14">
          Things I have designed, built and deployed end to end.
          <span className="cursor-blink ml-2 inline-block h-[0.1em] w-[0.6em] bg-green-700" />
        </p>
      </Reveal>

      <Reveal>
        <article className="grid overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:border-muted md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center gap-2 bg-surface2 p-6 sm:p-8">
            <Image
              src="/e-commerce.png"
              alt="Screenshot of the e-commerce storefront"
              width={1200}
              height={750}
              className="rounded-xl border border-border shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
            <span className="self-start rounded-full border border-border px-4 py-1 text-xs font-semibold uppercase tracking-widest">
              Featured
            </span>
            <h3 className="font-mono text-2xl font-bold leading-tight tracking-tight">
              Full-stack e-commerce platform
            </h3>
            <p className="text-muted">
              A complete online cake shop with secure login and sign-up, cake
              browsing and ordering, built on a React front end, a FastAPI back
              end and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-surface2 px-3 py-1 font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/IsaacTobiko/nsti-cakes-fullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-linear-to-br from-white to-neutral-400 px-6 text-[15px] font-semibold text-neutral-950 transition hover:-translate-y-0.5"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
