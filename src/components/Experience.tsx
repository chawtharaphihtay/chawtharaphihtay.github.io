import { experience } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-line">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Experience"
          title="A record of work shipped."
          description="Newest at the top — each role scoped to what actually made it to production."
        />

        <div className="mt-16 space-y-0">
          {experience.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 0.03}>
              <div className="grid grid-cols-1 gap-6 border-t border-line py-10 sm:grid-cols-12 sm:gap-8 sm:py-12 first:border-t-0">
                <div className="sm:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                    {entry.start} — {entry.end}
                  </p>
                  <p className="mt-2 text-sm text-ink-soft">
                    {entry.location}
                  </p>
                </div>

                <div className="sm:col-span-9">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight">
                      {entry.company}
                    </h3>
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wide text-accent">
                    {entry.role}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {entry.achievements.map((a) => (
                      <li
                        key={a}
                        className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.tech.map((t) => (
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
