"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, personal } from "@/content/data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [raised, setRaised] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setRaised(y > 8);
    if (y > lastY && y > 160) setHidden(true);
    else setHidden(false);
    setLastY(y);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-115%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50"
      >
        <div
          className={`container-edit flex items-center justify-between transition-all duration-300 ${
            raised ? "py-3" : "py-6"
          }`}
        >
          <div
            className={`flex items-center justify-between w-full rounded-full border transition-all duration-300 ${
              raised
                ? "border-line bg-paper/85 backdrop-blur-md px-4 py-2 shadow-[0_1px_0_0_var(--line)]"
                : "border-transparent px-0 py-0"
            }`}
          >
            <a
              href="#top"
              className="font-mono text-sm tracking-wide flex items-center gap-2"
              aria-label={`${personal.name} — home`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong text-[11px]">
                {personal.initials}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-soft hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#contact"
                className="font-mono text-xs tracking-wide uppercase border border-ink px-4 py-2 rounded-full hover:bg-ink hover:text-paper transition-colors"
              >
                Let&apos;s work together
              </a>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line"
              >
                {open ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-paper md:hidden"
          >
            <nav
              className="flex h-full flex-col justify-center gap-6 px-8"
              aria-label="Mobile"
            >
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-4xl"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * nav.length }}
                className="mt-4 font-mono text-sm uppercase tracking-wide border border-ink w-fit px-5 py-3 rounded-full"
              >
                Let&apos;s work together
              </motion.a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
