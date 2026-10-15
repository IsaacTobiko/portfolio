"use client";

import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-300 items-center gap-4 px-4 sm:px-6 md:h-18 lg:px-8">
        <a
          href="#home"
          aria-label="Isaac Tobiko, home"
          className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-xl shadow-[0_0_24px_rgba(255,255,255,0.3)]"
        >
          <Image
            src="/profile.jpg"
            alt="Isaac Tobiko"
            fill
            sizes="40px"
            className="object-cover"
          />
        </a>
        <nav
          aria-label="Primary"
          className="mx-auto hidden gap-1 md:flex lg:gap-2"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface2 hover:text-text lg:px-4"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 md:ml-0 lg:gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="talk hidden h-11 items-center rounded-xl bg-linear-to-br from-white to-neutral-400 px-6 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-bg px-4 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-300 flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted transition hover:bg-surface2 hover:text-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-linear-to-br from-white to-neutral-400 text-sm font-semibold text-neutral-950 sm:hidden"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
