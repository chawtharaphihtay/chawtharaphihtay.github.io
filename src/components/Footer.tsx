import { personal } from "@/content/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-edit flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
