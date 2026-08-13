"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <div className="border-t border-line py-10 sm:py-12">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group grid w-full grid-cols-1 items-baseline gap-4 text-left sm:grid-cols-12 sm:gap-6"
        >
          <span className="font-mono text-sm text-ink-soft sm:col-span-1">
            {num}
          </span>

          <span className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight sm:col-span-6 group-hover:text-accent transition-colors">
            {project.name}
          </span>

          <span className="font-mono text-xs uppercase tracking-wide text-ink-soft sm:col-span-3">
            {project.tech.slice(0, 3).join(" · ")}
          </span>

          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide sm:col-span-2 sm:justify-end">
            {open ? "Close" : "Read case"}
            <ArrowUpRight
              size={14}
              className={`transition-transform ${open ? "rotate-[135deg]" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`}
            />
          </span>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-12 sm:pt-10">
            <div className="sm:col-span-1" />
            <div className="sm:col-span-6">
              <div className="aspect-[4/3] w-full rounded-2xl border border-line bg-paper-raised flex items-center justify-center">
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft px-6 text-center">
                  Preview image — add a screenshot of {project.name}
                </span>
              </div>
            </div>
            <div className="sm:col-span-5 flex flex-col gap-5">
              <p className="text-sm text-ink-soft leading-relaxed">
                {project.description}
              </p>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-1">
                  Problem
                </p>
                <p className="text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-1">
                  Solution
                </p>
                <p className="text-sm leading-relaxed">{project.solution}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-1">
                  Outcome
                </p>
                <p className="text-sm leading-relaxed">{project.outcome}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] uppercase tracking-wide border border-line rounded-full px-3 py-1 text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products I've built end-to-end."
          description="A few of the web and mobile products I've shipped — from first line of code through production deployment."
        />
        <div className="mt-14 border-b border-line">
          {projects.map((project, i) => (
            <ProjectRow project={project} index={i} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
