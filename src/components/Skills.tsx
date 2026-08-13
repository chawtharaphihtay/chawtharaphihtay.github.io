import { skillCategories } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-line">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I bring to a stack."
          description="Grouped by where each tool sits in a product, not ranked by preference."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.05}>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-accent pb-4 border-b border-line">
                  {cat.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm sm:text-base"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
