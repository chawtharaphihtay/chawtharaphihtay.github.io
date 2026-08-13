import { philosophy } from "@/content/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32 border-t border-line bg-paper-raised/40">
      <div className="container-edit">
        <SectionHeading
          eyebrow="How I Work"
          title="From request to shipped feature."
          description="The same sequence, whether it's a dashboard, a storefront, or an app release."
        />

        <div className="mt-16 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="relative border-t border-line pt-6 pr-6 h-full sm:border-l sm:border-t-0 sm:pt-0 sm:pl-6 first:sm:border-l-0">
                <p className="font-mono text-xs text-accent">{p.step}</p>
                <h3 className="mt-3 font-display text-xl sm:text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
