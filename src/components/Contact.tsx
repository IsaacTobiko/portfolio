"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

const EMAIL = "tobikoisaack@gmail.com";
const WHATSAPP =
  "https://wa.me/254743776184?text=Hello%20Isaac%2C%20I%20saw%20your%20portfolio.";

const input =
  "h-12 w-full rounded-xl border border-border bg-bg px-4 text-base outline-none transition focus:border-text";

export default function Contact() {
  const [note, setNote] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setNote("Sending...");
    try {
      const res = await fetch("https://formspree.io/f/xwlvalva", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setNote("Message sent. I will reply soon.");
      } else {
        setNote("Something went wrong. Please email me directly.");
      }
    } catch {
      setNote("Something went wrong. Please email me directly.");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-300 scroll-mt-24 px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8"
    >
      <Reveal>
        <div className="grid gap-8 rounded-3xl border border-border bg-linear-to-br from-surface2 to-surface p-6 sm:p-12 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mt-2 font-mono text-[clamp(26px,3vw,36px)] font-bold leading-tight tracking-tight">
              Ready when the problem needs a builder
              <span className="cursor-blink ml-2 inline-block h-[0.1em] w-[0.6em] bg-green-700" />
            </h2>
            <p className="mt-4 text-muted">
              Have a product to ship or a team that needs a developer? Send a
              message and I will reply fast.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 transition hover:text-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 6h18v12H3zM3 7l9 6 9-6" />
                </svg>
                {EMAIL}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 transition hover:text-muted"
              >
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                </svg>
                Nairobi, Kenya
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="f-name"
                className="text-[13px] font-medium text-muted"
              >
                Name
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className={input}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="f-email"
                className="text-[13px] font-medium text-muted"
              >
                Email
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className={input}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="f-msg"
                className="text-[13px] font-medium text-muted"
              >
                Message
              </label>
              <textarea
                id="f-msg"
                name="message"
                placeholder="Tell me about the problem"
                required
                className="h-34 w-full resize-y rounded-xl border border-border bg-bg p-4 text-base outline-none transition focus:border-text"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-br from-white to-neutral-400 px-6 text-[15px] font-semibold text-neutral-950 transition hover:-translate-y-0.5"
            >
              Send message →
            </button>
            <p aria-live="polite" className="text-sm text-muted">
              {note}
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
