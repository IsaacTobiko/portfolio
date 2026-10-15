const lane1 = [
  { ico: "Ht", name: "HTML" },
  { ico: "Cs", name: "CSS" },
  { ico: "Tw", name: "Tailwind CSS" },
  { ico: "Js", name: "JavaScript" },
  { ico: "Re", name: "React" },
  { ico: "Ts", name: "TypeScript" },
  { ico: "Nx", name: "Next.js" },
  { ico: "Py", name: "Python" },
  { ico: "Fa", name: "FastAPI" },
  { ico: "Sq", name: "SQL" },
  { ico: "Pg", name: "PostgreSQL" },
];

const lane2 = [
  { ico: "Dk", name: "Docker" },
  { ico: "K8", name: "Kubernetes" },
  { ico: "Jk", name: "Jenkins" },
  { ico: "Gt", name: "Git" },
  { ico: "Gh", name: "GitHub" },
  { ico: "GA", name: "GitHub Actions" },
  { ico: "Lx", name: "Linux" },
  { ico: "Ng", name: "Nginx" },
  { ico: "Vc", name: "Vercel" },
  { ico: "Vs", name: "VS Code" },
  { ico: "Pm", name: "Postman" },
  { ico: "Fg", name: "Figma" },
];

type Item = { ico: string; name: string };

function Set({ items, hidden }: { items: Item[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-3 pr-3" aria-hidden={hidden}>
      {items.map((t) => (
        <span
          key={t.name}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium"
        >
          <i className="grid h-6 w-6 place-items-center rounded-md bg-surface2 font-mono text-[10px] font-bold not-italic">
            {t.ico}
          </i>
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
        <Set items={items} />
        <Set items={items} hidden />
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      id="skills"
      aria-label="Technologies I work with"
      className="py-12 sm:py-16"
    >
      <p className="mb-6 text-center font-mono text-xs uppercase tracking-widest text-muted">
        Tools of the trade
      </p>
      <div className="flex flex-col gap-3">
        <Lane items={lane1} />
        <Lane items={lane2} reverse />
      </div>
    </section>
  );
}
