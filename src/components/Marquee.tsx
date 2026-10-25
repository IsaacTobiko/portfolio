import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiLinux,
  SiNginx,
  SiVercel,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

type Item = { Icon: IconType; name: string; color?: string };

const lane1: Item[] = [
  { Icon: SiHtml5, name: "HTML", color: "#E34F26" },
  { Icon: SiCss, name: "CSS", color: "#1572B6" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiPython, name: "Python", color: "#3776AB" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: FaDatabase, name: "SQL", color: "#F29111" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
];

const lane2: Item[] = [
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiGithub, name: "GitHub" },
  { Icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
  { Icon: SiLinux, name: "Linux", color: "#FCC624" },
  { Icon: SiNginx, name: "Nginx", color: "#009639" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: VscCode, name: "VS Code", color: "#007ACC" },
  { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
];

function Set({ items, hidden }: { items: Item[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-3 pr-3" aria-hidden={hidden}>
      {items.map((t) => (
        <span
          key={t.name}
          className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium"
        >
          <t.Icon
            className="h-5 w-5 shrink-0"
            style={t.color ? { color: t.color } : undefined}
            aria-hidden="true"
          />
          {t.name}
        </span>
      ))}
    </div>
  );
}

function Lane({ items, reverse }: { items: Item[]; reverse?: boolean }) {
  return (
    <div className="mq overflow-hidden">
      <div className={`lane flex w-max ${reverse ? "lane-rev" : ""}`}>
        {[0, 1, 2, 3].map((n) => (
          <Set key={n} items={items} hidden={n > 0} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      id="marquee"
      aria-label="Technologies I work with"
      className="py-12 sm:py-16"
    >
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
        What I Build With
      </p>
      <div className="flex flex-col gap-3">
        <Lane items={lane1} />
        <Lane items={lane2} reverse />
      </div>
    </section>
  );
}
