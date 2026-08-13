import { personal } from "@/content/data";

export function Avatar() {
  return (
    <div className="relative mx-auto w-auto max-w-full">
      <div className="relative aspect-square md:h-[52vh] max-h-[560px] w-auto overflow-hidden rounded-3xl border border-line bg-paper-raised">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 72% 20%, var(--accent-soft), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--ink) 1px, transparent 0)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 60%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 60%, black 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="select-none font-display text-[7rem] tracking-tight text-ink/10 sm:text-[9rem]">
            {personal.initials}
          </span>
        </div>
        <span className="absolute bottom-5 left-5 h-2 w-2 rounded-full bg-accent" />
        <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
          Photo coming soon
        </span>
      </div>
    </div>
  );
}