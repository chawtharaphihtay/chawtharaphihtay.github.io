import { Github } from "lucide-react";
import { socials } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const placeholderRepos = [
  {
    name: "training-attendance-system",
    description: "Role-based attendance and reporting tool built with Vite.",
    tech: "TypeScript",
  },
  {
    name: "loyalty-app-rn",
    description: "React Native customer loyalty and rewards app.",
    tech: "React Native",
  },
  {
    name: "portfolio",
    description: "This site — Next.js, TypeScript, Tailwind CSS.",
    tech: "TypeScript",
  },
];

export function OpenSource() {
  return (
    <section className="py-24 sm:py-32 border-t border-line">
      <div className="container-edit">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Open Source"
            title="Code, in the open."
            description="A few repositories worth a look. Connect your GitHub to pull this in live — for now, edit the list in src/content/data.ts."
          />
          <Reveal delay={0.1}>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors hover:border-ink shrink-0"
            >
              <Github size={14} />
              View GitHub
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {placeholderRepos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line p-6 transition-colors hover:border-line-strong">
                <p className="font-mono text-sm">{repo.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {repo.description}
                </p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-accent">
                  {repo.tech}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
