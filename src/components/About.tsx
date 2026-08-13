import { education, languages, personal } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-line">
      <div className="container-edit">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="About" title="How I got here." />
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <div className="space-y-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
                <p>
                  I started out customizing WordPress themes — work that
                  taught me how a codebase behaves once someone else has to
                  live inside it. Since then I&apos;ve moved into React,
                  Next.js, and React Native, but that early habit stuck: I
                  care as much about how a system holds up in production as
                  how it looks on day one.
                </p>
                <p>
                  Most of what I build lives at the intersection of what a
                  business actually needs: a front end people enjoy using and
                  a deployment process the team can trust — role-based
                  dashboards, loyalty apps, and the Nginx setup that keeps a
                  site running after handoff.
                </p>
                <p>
                  I&apos;m drawn to problems with a clear before-and-after — a
                  spreadsheet replaced with a real system, a storefront that
                  used to break at checkout, a mobile app that turns
                  first-time buyers into regulars.
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
