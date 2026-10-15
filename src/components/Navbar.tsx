import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-300 items-center gap-6 px-8">
        <a
          href="#home"
          aria-label="Isaac Tobiko, home"
          className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-white to-neutral-400 font-mono text-[15px] font-extrabold tracking-tight text-neutral-950 shadow-[0_0_24px_rgba(255,255,255,0.3)]"
        >
          IT
        </a>
        <nav aria-label="Primary" className="mx-auto hidden gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface2 hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4 md:ml-0">
          <ThemeToggle />
          <a
            href="#contact"
            className="talk inline-flex h-11 items-center rounded-xl bg-linear-to-br from-white to-neutral-400 px-6 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
