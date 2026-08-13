import type { ReactElement } from "react";
import type { MockVariant } from "@/content/data";

const art: Record<MockVariant, () => ReactElement> = {
  medlab: () => (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="glow-medlab" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots-medlab" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="var(--ink)" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#dots-medlab)" />
      <rect width="400" height="300" fill="url(#glow-medlab)" />
      <g stroke="var(--accent)" strokeWidth="10" strokeLinecap="round" fill="none">
        <path d="M200 108 V192" />
        <path d="M158 150 H242" />
      </g>
      <g fill="var(--accent)" opacity="0.85">
        <circle cx="330" cy="78" r="6" />
        <circle cx="72" cy="248" r="4" />
      </g>
      <g fill="var(--ink)" opacity="0.22">
        <rect x="80" y="224" width="12" height="34" rx="6" />
        <rect x="102" y="208" width="12" height="50" rx="6" />
        <rect x="124" y="216" width="12" height="42" rx="6" />
      </g>
    </svg>
  ),

  mobile: () => (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="glow-mobile" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots-mobile" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="var(--ink)" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#dots-mobile)" />
      <rect width="400" height="300" fill="url(#glow-mobile)" />
      <g fill="none" stroke="var(--accent)">
        <circle cx="200" cy="138" r="72" strokeWidth="6" />
        <circle cx="200" cy="138" r="52" strokeWidth="2" opacity="0.55" />
      </g>
      <circle cx="200" cy="138" r="11" fill="var(--accent)" />
      <rect x="104" y="214" width="120" height="62" rx="12" fill="var(--paper-raised)" stroke="var(--ink)" strokeOpacity="0.25" />
      <rect x="120" y="248" width="60" height="9" rx="4.5" fill="var(--ink)" opacity="0.22" />
      <rect x="188" y="248" width="24" height="9" rx="4.5" fill="var(--accent)" opacity="0.8" />
    </svg>
  ),

  ecommerce: () => (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="glow-ecommerce" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots-ecommerce" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="var(--ink)" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#dots-ecommerce)" />
      <rect width="400" height="300" fill="url(#glow-ecommerce)" />
      <rect x="56" y="58" width="108" height="118" rx="14" fill="var(--accent)" opacity="0.92" />
      <rect x="236" y="58" width="108" height="118" rx="14" fill="var(--paper-raised)" stroke="var(--ink)" strokeOpacity="0.25" />
      <rect x="118" y="196" width="164" height="58" rx="14" fill="var(--ink)" opacity="0.1" stroke="var(--ink)" strokeOpacity="0.22" />
      <rect x="140" y="218" width="60" height="10" rx="5" fill="var(--ink)" opacity="0.25" />
      <rect x="240" y="218" width="36" height="10" rx="5" fill="var(--accent)" opacity="0.85" />
    </svg>
  ),

  dashboard: () => (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="glow-dashboard" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots-dashboard" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="var(--ink)" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#dots-dashboard)" />
      <rect width="400" height="300" fill="url(#glow-dashboard)" />
      <line x1="70" y1="230" x2="330" y2="230" stroke="var(--ink)" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
      <g fill="var(--ink)" opacity="0.2">
        <rect x="86" y="192" width="34" height="38" rx="8" />
        <rect x="132" y="152" width="34" height="78" rx="8" />
        <rect x="178" y="170" width="34" height="60" rx="8" />
      </g>
      <rect x="224" y="122" width="34" height="108" rx="8" fill="var(--accent)" />
      <g fill="var(--ink)" opacity="0.2">
        <rect x="270" y="180" width="34" height="50" rx="8" />
        <rect x="316" y="204" width="34" height="26" rx="8" />
      </g>
      <rect x="86" y="140" width="52" height="10" rx="5" fill="var(--ink)" opacity="0.25" />
    </svg>
  ),

  search: () => (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id="glow-search" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id="dots-search" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="var(--ink)" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#dots-search)" />
      <rect width="400" height="300" fill="url(#glow-search)" />
      <g fill="none" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round">
        <circle cx="158" cy="132" r="42" />
        <path d="M188 162 L238 212" />
      </g>
      <g fill="var(--ink)" opacity="0.22">
        <rect x="256" y="96" width="92" height="11" rx="5.5" />
        <rect x="256" y="122" width="120" height="11" rx="5.5" />
        <rect x="256" y="148" width="76" height="11" rx="5.5" />
      </g>
      <g fill="var(--accent)" opacity="0.85">
        <circle cx="104" cy="226" r="5" />
        <circle cx="296" cy="214" r="4" />
      </g>
    </svg>
  ),
};

export function ProjectArt({ variant }: { variant: MockVariant }) {
  const Render = art[variant];
  return (
    <div className="flex aspect-[4/3] w-full items-stretch overflow-hidden rounded-2xl border border-line bg-paper-raised">
      <Render />
    </div>
  );
}