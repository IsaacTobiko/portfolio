import type { CSSProperties } from "react";
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
  SiLinux,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import Reveal from "./Reveal";

type Skill = { Icon: IconType; name: string; color?: string };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { Icon: SiHtml5, name: "HTML", color: "#E34F26" },
      { Icon: SiCss, name: "CSS", color: "#1572B6" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { Icon: SiNextdotjs, name: "Next.js" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { Icon: SiPython, name: "Python", color: "#3776AB" },
      { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { Icon: FaDatabase, name: "SQL", color: "#F29111" },
      { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { Icon: SiDocker, name: "Docker", color: "#2496ED" },
      { Icon: SiGithub, name: "GitHub" },
      { Icon: SiLinux, name: "Linux", color: "#FCC624" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiPostman, name: "Postman", color: "#FF6C37" },
      { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { Icon: VscCode, name: "VS Code", color: "#007ACC" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-300 scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8"
    >
      <Reveal>
        <h2 className="font-mono text-[clamp(26px,3vw,36px)] font-bold leading-tight tracking-tight">
          Skills
        </h2>
        <p className="mb-10 mt-4 max-w-160 text-muted sm:mb-14">
          From the interface to the pipeline that delivers it.
          <span className="cursor-blink ml-2 inline-block h-[0.1em] w-[0.6em] bg-green-700" />
        </p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-muted sm:p-8">
              <h3 className="mb-6 font-mono text-lg font-bold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map(({ Icon, name, color }, j) => (
                  <span
                    key={name}
                    style={
                      {
                        "--fd": `${-((i * 3 + j) % 5) * 0.6}s`,
                      } as CSSProperties
                    }
                    className="chip-float inline-flex h-10 items-center gap-2 rounded-full border border-border bg-surface2 pl-3 pr-4 text-sm font-medium transition hover:border-muted"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0"
                      style={color ? { color } : undefined}
                      aria-hidden="true"
                    />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
