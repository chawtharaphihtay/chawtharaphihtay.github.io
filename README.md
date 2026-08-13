# Chaw Tharaphi Htay — Portfolio

A premium, editorial developer portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> **First run needs internet access.** The site uses `next/font/google`
> (Space Grotesk, Inter, JetBrains Mono), which Next.js fetches and
> self-hosts automatically the first time you build or run the dev server.
> If you're behind a firewall/proxy, see the Next.js docs for
> `next/font/local` as an alternative.

## Editing content

Everything on the site — your bio, projects, experience, skills, links, and
résumé path — lives in one place:

```
src/content/data.ts
```

Edit that file and the whole site updates. No content is hard-coded inside
components.

### Adding your résumé

Drop your PDF into `public/resume/` and name it
`chaw-tharaphi-htay-resume.pdf` (or update `personal.resumeUrl` in
`src/content/data.ts` to match whatever filename you use).

### Project images

Each case study in "Selected Work" currently shows a placeholder frame.
Replace it with a real screenshot by editing `src/components/SelectedWork.tsx`
(swap the placeholder `div` for a Next.js `<Image />`) once you have images
to use.

### Social links

Update `socials.github` and `socials.linkedin` in `src/content/data.ts` —
currently placeholders.

### Domain / SEO

`src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` all
reference a placeholder domain (`https://chawtharaphihtay.dev`). Replace it
with your real domain once you have one.

## Structure

```
src/
  app/            Routes: page, layout, sitemap, robots
  components/     One component per section (Hero, SelectedWork, About, ...)
  content/        data.ts — all editable content
  lib/            Small utilities
public/
  resume/         Put your résumé PDF here
```

## Tech

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for animation
- lucide-react for icons

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com) — no
extra configuration needed.
