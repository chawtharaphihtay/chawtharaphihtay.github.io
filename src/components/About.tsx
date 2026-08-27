import { education, languages, personal } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="About" title="What I do." />
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
                <p>
                  I work with React, Next.js, React Native, and Laravel to
                  build reliable web and mobile products.
                </p>
                <p>
                  I enjoy turning ideas and manual processes into simple,
                  practical systems—from dashboards and storefronts to mobile
                  apps.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 border-t border-line pt-10">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-2">
                    Based in
                  </p>
                  <p className="text-sm">{personal.location}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-2">
                    Education
                  </p>
                  <p className="text-sm">{education.degree}</p>
                  <p className="text-sm text-ink-soft">
                    {education.school}, {education.start}–{education.end}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-accent mb-2">
                    Languages
                  </p>
                  <p className="text-sm">{languages.join(" · ")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
