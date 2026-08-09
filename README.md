# henryssekibo.com

Personal portfolio for Henry Ssekibo, Senior Software Engineer and Digital
Transformation Specialist, Kampala, Uganda.

Built with TanStack Start, React 19, Tailwind CSS v4 and TypeScript.

## Getting started

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
```

Runs the production build followed by `tsc --noEmit`.

## Structure

| Path | Purpose |
| --- | --- |
| `src/config/site.ts` | Identity, contact details, social links, nav. Single source of truth. |
| `src/data/` | Projects, experience, education, certifications, skills, headline metrics. |
| `src/components/ui/` | Shared primitives: `Section`, `Reveal`, `Metric`, `NumberedList`, `TagList`. |
| `src/components/layout/` | Navigation, footer, theme toggle. |
| `src/components/sections/` | Home page sections. |
| `src/routes/work.$slug.tsx` | Case study pages, one per project. |
| `src/styles/app.css` | Design tokens and component styles. |

### Content rules

These exist because breaking them is what makes a portfolio read as unreliable.

- **Every metric carries a source.** `src/data/metrics.ts` requires a `source`
  field naming the system or role a number came from. If a figure cannot be
  attributed, it does not go on the site.
- **Links are a list, not a string.** A private project has `links: []`, so no
  button renders. There is no way to express a link that goes nowhere.
- **The data files must agree with the CV.** Dates, titles, technologies and
  certifications are the things a recruiter cross-checks.

## Before deploying

1. Set `resumeUrl` in `src/config/site.ts` and drop the PDF into `public/`.
   While it is `null`, the résumé buttons stay hidden rather than 404.
2. Add the institution for the Master's entry in `src/data/experience.ts`.
3. Set `url` in `src/config/site.ts` to the deployed origin so `og:image`
   resolves absolutely.
4. Verify each project's `stack` array against the current CV.

## Contact form

Posts to a TanStack server function that sends via [Resend](https://resend.com).
Without `RESEND_API_KEY` set, submissions are logged to the console and no mail
is sent, which is the intended development behaviour.

Regenerate the social card after editing `public/og.svg`:

```sh
qlmanage -t -s 1200 -o . public/og.svg && sips -c 630 1200 og.svg.png --out public/og.png
```
