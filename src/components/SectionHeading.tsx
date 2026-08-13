import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-ink-soft text-base sm:text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
