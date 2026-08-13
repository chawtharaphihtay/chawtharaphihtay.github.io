import { ArrowUpRight } from "lucide-react";
import { personal, socials } from "@/content/data";
import { Reveal } from "./Reveal";

const links = [
  { label: "Email", value: personal.email, href: socials.email },
  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { label: "GitHub", value: "github.com", href: socials.github },
  // { label: "LinkedIn", value: "linkedin.com", href: socials.linkedin },
  { label: "Résumé", value: "Download PDF", href: personal.resumeUrl },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 sm:py-36 border-t border-line relative"
    >
      <div className="container-edit relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Contact
          </p>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-balance max-w-3xl">
            Have an idea worth building?
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-soft leading-relaxed">
            I&apos;m {personal.availability.toLowerCase()}. Tell me what
            you&apos;re working on — I read every message myself.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={socials.email}
            className="group mt-12 inline-flex items-baseline gap-3 whitespace-nowrap font-display text-2xl sm:text-4xl border-b border-ink pb-2 hover:text-accent hover:border-accent transition-colors"
          >
            {personal.email}
            <ArrowUpRight
              size={22}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-line pt-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex flex-col gap-1 min-w-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
                  {l.label}
                </span>
                <span className="text-sm group-hover:text-accent transition-colors flex items-center gap-1 whitespace-nowrap">
                  {l.value}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
