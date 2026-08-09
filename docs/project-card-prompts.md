# Project card artwork: design prompts

Prompts for regenerating the four project cover images. Each one is
self-contained, so paste a single prompt into your tool of choice.

## Where these are used

| File | Used by | Aspect shown |
| --- | --- | --- |
| `public/taskmaster.png` | Work card + case study hero | 16:10 and 16:9 |
| `public/eap.png` | Work card + case study hero | 16:10 and 16:9 |
| `public/ai-programme.png` | Work card + case study hero | 16:10 and 16:9 |
| `public/timeline.png` | Work card + case study hero | 16:10 and 16:9 |

The same file is rendered at two aspect ratios with `object-cover`:
`aspect-[16/10]` on the work card ([Work.tsx:61](../src/components/sections/Work.tsx#L61))
and `aspect-[16/9]` on the case study hero
([work.$slug.tsx:107](../src/routes/work.$slug.tsx#L107)).

**Consequence:** design at **1600 × 900**, and keep every piece of content
inside a **centred 1440 × 900 safe area** (100 px clear on the left and right).
The 16:10 card crops the outer 10% of the width. The prompts below already
respect this.

If you would rather not think about safe areas, say the word and I will change
the work card to `aspect-[16/9]` so both surfaces show the full image.

## Which tool to use

**Use a vector or code-generating tool.** These designs are typographic and
grid-based: precise hairlines, real text, exact hex values. Good targets:

- An AI tool that outputs SVG or HTML (Claude, v0, Figma Make)
- Figma, by hand
- Hand-written SVG, which is how `ai-programme.png` was made

**Do not use a diffusion image model** (Midjourney, DALL·E, Stable Diffusion)
for these. Those models cannot render accurate text, consistent 1 px rules, or
exact colour values, and text is the entire content of these cards. Feeding
these prompts to a diffusion model is what produces the busy, glowing,
gibberish-text imagery these are replacing.

## Exporting to PNG

If your tool gives you SVG, the repo already has a working rasterisation path
that needs no extra software on macOS. Author the SVG on a **square 1600 × 1600
canvas** with the artwork in a centred band (`<g transform="translate(0,350)">`),
because `qlmanage` scales to fill a square. Then:

```bash
qlmanage -t -s 1600 -o . artwork.svg && sips -c 900 1600 artwork.svg.png --out public/taskmaster.png
```

`public/ai-programme.svg` is a working example of that structure.

## Shared design system

Every prompt below repeats this, so you do not need to paste it separately.

| Token | Value |
| --- | --- |
| Background | `#FFFFFF` |
| Ink (primary text) | `#12120F` |
| Muted (secondary text) | `#55554F` |
| Faint (meta text) | `#6F6F67` |
| Hairline rule | `#E2E2DC` |
| Accent | `#C03A1C` |
| Sans typeface | Inter |
| Mono typeface | IBM Plex Mono |

Rules that apply to all four: no rounded corners anywhere, no shadows, no
gradients, no glow, no 3D, no photography, no icons from an icon set, no
decorative illustration. Accent colour appears only as small solid marks and
the bottom bar, never as a fill behind text. Sentence case throughout, never
all-caps.

---

## Prompt 1 — TaskMaster

```
Create a flat 2D vector graphic, 1600 × 900 px, as clean inline SVG. This is a
cover image for a software engineering case study, in the Swiss / International
Typographic style. It must be information-carrying, not decorative.

Palette (use these exact values):
  background #FFFFFF, primary text #12120F, secondary text #55554F,
  meta text #6F6F67, hairlines #E2E2DC, accent #C03A1C
Type: Inter for all text. No other typeface.

Hard constraints: absolutely no rounded corners, no drop shadows, no gradients,
no glow, no 3D, no photographic elements, no stock-illustration style, no
generic "technology" imagery (circuit boards, glowing nodes, shields, clouds).
Flat fills and 1px strokes only. Sentence case, never all-caps.

Keep all content within a centred 1400 px column (100 px clear left and right):
the image is cropped to 90% width in one placement.

Layout:
1. Five vertical hairlines (#E2E2DC, 1px) at x = 266, 533, 800, 1066, 1333,
   full height, sitting behind everything as a faint column grid.
2. Top meta row at y ≈ 112: "Minet Uganda" at left (x=100), "2023 to present"
   right-aligned (x=1500). Both 22px, #6F6F67.
3. A 2px #12120F horizontal rule at y = 146, from x=100 to x=1500.
4. Headline, two lines, 46px semibold, letter-spacing -1.2, starting y ≈ 268:
      line 1 in #12120F: "Thirteen scheduled services,"
      line 2 in #6F6F67: "one auditable pipeline."
5. A horizontal data-flow diagram. One 1px #12120F baseline at y = 500 from
   x=100 to x=1500. Four stages sit on it at x = 100, 470, 840, 1210, each
   marked with a solid #C03A1C rectangle 14 × 24 px centred on the line.
   Under each mark, left-aligned to it:
      y ≈ 570: 20px #6F6F67 index: "01", "02", "03", "04"
      y ≈ 632: 34px semibold #12120F label, letter-spacing -1
      y ≈ 678: 23px #55554F caption
   Stage content:
      01  "Oracle"          / "Read-only source"
      02  "Worker service"  / "13 schedulers, gated"
      03  "Durable outbox"  / "Retry, TTL, approval"
      04  "Delivered"       / "Tenant-scoped"
   Keep captions this short. Longer strings collide with the next stage.
6. A single meta line at y ≈ 790, 24px #6F6F67:
   "Uganda · Zambia  ·  every run logged with status, duration and rows"
7. A solid #C03A1C bar across the full width at the bottom, y = 884, height 16.

The result should read as a printed technical diagram: quiet, precise, mostly
white space, with the accent colour used for perhaps 2% of the pixels.
```

---

## Prompt 2 — EAP Enterprise Portal

```
Create a flat 2D vector graphic, 1600 × 900 px, as clean inline SVG. This is a
cover image for a software engineering case study, in the Swiss / International
Typographic style. It must be information-carrying, not decorative.

Palette (use these exact values):
  background #FFFFFF, primary text #12120F, secondary text #55554F,
  meta text #6F6F67, hairlines #E2E2DC, accent #C03A1C
Type: Inter for all text. No other typeface.

Hard constraints: absolutely no rounded corners, no drop shadows, no gradients,
no glow, no 3D, no photographic elements, no stock-illustration style, no
generic "wellness" or "healthcare" imagery (hearts, shields, crosses, people
silhouettes, abstract blobs). Flat fills and 1px strokes only. Sentence case,
never all-caps.

Keep all content within a centred 1400 px column (100 px clear left and right).

The idea to communicate: three roles reach three different depths of the same
data. Confidentiality is a property of the structure, not a policy.

Layout:
1. Five vertical hairlines (#E2E2DC, 1px) at x = 266, 533, 800, 1066, 1333,
   full height, behind everything.
2. Top meta row at y ≈ 112: "Minet Uganda" left (x=100), "Multi-tenant"
   right-aligned (x=1500). Both 22px, #6F6F67.
3. A 2px #12120F rule at y = 146, x=100 to x=1500.
4. Headline, two lines, 46px semibold, letter-spacing -1.2, from y ≈ 268:
      line 1 #12120F: "Three roles, three depths"
      line 2 #6F6F67: "of the same record."
5. Three stacked horizontal lanes starting at y = 440, each 110 px tall,
   separated by 1px #E2E2DC rules spanning x=100 to x=1500.
   In each lane, vertically centred:
      x=100: role name, 34px semibold #12120F, letter-spacing -1
      x=460: what they can reach, 23px #55554F
      x=1020: a solid #C03A1C bar, 18 px tall, showing reach depth. Widths are
        480, 300 and 140 px for the three lanes, so every bar starts at the same
        left edge and none exceeds x=1500.
   Lane content, top to bottom:
      "Counsellor"   / "Session records, own clients"
      "Coordinator"  / "Scheduling, contracts, catalogue"
      "Executive"    / "Aggregate utilisation only"
   The descending bar widths are the whole point: reach shrinks as seniority
   rises. Do not label the bars with numbers.
6. A single meta line at y ≈ 800, 24px #6F6F67:
   "Entra single sign-on  ·  encrypted records  ·  complete audit trail"
7. A solid #C03A1C bar across the full width at the bottom, y = 884, height 16.

The result should read as a printed access-control diagram: quiet, precise,
mostly white space.
```

---

## Prompt 3 — Timeline

```
Create a flat 2D vector graphic, 1600 × 900 px, as clean inline SVG. This is a
cover image for a software engineering case study, in the Swiss / International
Typographic style. It must be information-carrying, not decorative.

Palette (use these exact values):
  background #FFFFFF, primary text #12120F, secondary text #55554F,
  meta text #6F6F67, hairlines #E2E2DC, accent #C03A1C
Type: Inter for headings and labels, IBM Plex Mono for hash strings.

Hard constraints: absolutely no rounded corners, no drop shadows, no gradients,
no glow, no 3D, no photographic elements, no blockchain clip-art, no glowing
chain links, no padlock icons. Flat fills and 1px strokes only. Sentence case,
never all-caps.

Keep all content within a centred 1400 px column (100 px clear left and right).

The idea to communicate: an event history where each record commits to the one
before it, and the tip is countersigned by an external timestamp authority. Any
retrospective edit becomes detectable.

Layout:
1. Five vertical hairlines (#E2E2DC, 1px) at x = 266, 533, 800, 1066, 1333,
   full height, behind everything.
2. Top meta row at y ≈ 112: "Personal project" left (x=100), "Open source"
   right-aligned (x=1500). Both 22px, #6F6F67.
3. A 2px #12120F rule at y = 146, x=100 to x=1500.
4. Headline, two lines, 46px semibold, letter-spacing -1.2, from y ≈ 268:
      line 1 #12120F: "Each event commits to the last."
      line 2 #6F6F67: "The tip is countersigned."
5. A hash chain centred around y = 520. Five squares, each 120 × 120 px,
   1px #12120F stroke, no fill, at x = 100, 340, 580, 820, 1060, all at y = 460.
   Connect consecutive squares with a 1px #12120F horizontal line through their
   centres (y = 520), spanning the 120 px gaps.
   Inside each square, centred, an 18px IBM Plex Mono #55554F truncated hash:
      "a41f…", "9c02…", "3e7b…", "d158…", "0b6a…"
   Below each square at y ≈ 615, an 18px #6F6F67 label:
      "event 1", "event 2", "event 3", "event 4", "chain tip"
6. To the right of the fifth square, a sixth element that is visually different:
   a solid #C03A1C rectangle 120 × 120 px at x = 1300, y = 460, with white
   ("#FFFFFF") 18px IBM Plex Mono text centred inside reading "RFC" on one line
   and "3161" on the next. Connect it to the fifth square with the same 1px
   line. Below it at y ≈ 615, an 18px #6F6F67 label: "timestamp token".
   This is the only filled accent shape in the composition and should read as
   the payoff of the sequence.
7. A single meta line at y ≈ 790, 24px #6F6F67:
   "Hash-chained history  ·  third-party proof of time  ·  full replay"
8. A solid #C03A1C bar across the full width at the bottom, y = 884, height 16.

The result should read as a printed cryptographic diagram: quiet, precise,
mostly white space.
```

---

## Prompt 4 — AI Adoption Programme

Already built as `public/ai-programme.png`, with editable source at
`public/ai-programme.svg`. Included here so all four can be regenerated in one
pass if you change the system.

```
Create a flat 2D vector graphic, 1600 × 900 px, as clean inline SVG. This is a
cover image for a programme case study, in the Swiss / International
Typographic style. It must be information-carrying, not decorative.

Palette (use these exact values):
  background #FFFFFF, primary text #12120F, secondary text #55554F,
  meta text #6F6F67, hairlines #E2E2DC, accent #C03A1C
Type: Inter for all text.

Hard constraints: absolutely no rounded corners, no drop shadows, no gradients,
no glow, no 3D, no photographic elements, no AI clip-art (robots, brains,
neural networks, glowing orbs, circuit patterns). Flat fills and 1px strokes
only. Sentence case, never all-caps.

Keep all content within a centred 1400 px column (100 px clear left and right).

Layout:
1. Five vertical hairlines (#E2E2DC, 1px) at x = 266, 533, 800, 1066, 1333,
   full height, behind everything.
2. Top meta row at y ≈ 112: "Minet Uganda" left (x=100), "In progress"
   right-aligned (x=1500). Both 22px, #6F6F67.
3. A 2px #12120F rule at y = 146, x=100 to x=1500.
4. Headline, two lines, 46px semibold, letter-spacing -1.2, from y ≈ 268:
      line 1 #12120F: "Which processes actually benefit from AI,"
      line 2 #6F6F67: "and which only look like they should."
5. A 1px #12120F baseline at y = 470 from x=100 to x=1500. Three stages sitting
   on it at x = 100, 620, 1140, each marked with a solid #C03A1C rectangle
   14 × 24 px on the line. Under each mark, left-aligned:
      20px #6F6F67 index: "01", "02", "03"
      44px semibold #12120F label, letter-spacing -1.4
      26px #55554F caption
   Stage content:
      01  "EXCO proposal"  / "Mandate before tooling"
      02  "Policy audit"   / "Manuals as source of truth"
      03  "User training"  / "Adoption at the desk"
6. A single meta line at y ≈ 790, 24px #6F6F67:
   "Organisation-wide  ·  proposal through to rollout"
7. A solid #C03A1C bar across the full width at the bottom, y = 884, height 16.
```

---

## Status

All four have been generated to these specs and are live. Editable sources sit
next to the exports:

| Export | Source |
| --- | --- |
| `public/taskmaster.png` | `public/taskmaster.svg` |
| `public/eap.png` | `public/eap.svg` |
| `public/ai-programme.png` | `public/ai-programme.svg` |
| `public/timeline.png` | `public/timeline.svg` |

`projects.ts` points at the `.png` files and the old `.jpg` stock images have
been deleted. To revise one, edit its SVG and re-run the export command above
with the matching filename.

## A note on dark mode

These are light-only by design. On the dark theme they render as white cards
against a near-black page, which reads as a printed insert rather than a bug,
and it is how `ai-programme.png` already behaves. If you would prefer dark
variants, the same prompts work with background `#0B0B0A`, ink `#F4F4F1`,
muted `#A6A69E`, faint `#8A8A82`, hairlines `#272724` and accent `#FF7A55`,
served through a `<picture>` element with a `prefers-color-scheme` source.
