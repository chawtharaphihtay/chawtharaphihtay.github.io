"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { personal } from "@/content/data";
import { Avatar } from "./Avatar";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      <div className="container-edit">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-7">
            <motion.p
              variants={item}
              className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6"
            >
              {personal.role} — {personal.location}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[13vw] leading-[0.94] tracking-tight sm:text-[7.5vw] lg:text-[5vw] text-balance"
            >
              {personal.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              {personal.heroStatement}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5"
              >
                See selected work
                <ArrowDownRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-wide transition-colors hover:border-ink"
              >
                Download résumé
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>

          <motion.div variants={item} className="lg:col-span-5">
            <Avatar />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
