# Soliman Advocates website

Marketing site for an Egyptian maritime law firm. Next.js 16, React 19, Tailwind 4, shadcn (`base-nova`). Work on a branch and open a PR.

## Where things are
- `app/`: routes, metadata, `sitemap.ts`, `robots.ts`
- `components/`: page sections; `components/ui/`: shadcn parts
- `components/language-provider.tsx`: Arabic and English switching
- `lib/content.ts`: site copy; `lib/insights.ts`: articles
- `SEO-GUIDE.md`: search plan

## Large content
Do not read `lib/content.ts`, `lib/insights.ts`, or lockfiles whole. Use `rg -n 'term' <file>`, then read that line range.

## Commands
- `npm run build`

## Rules
- Reply in Arabic when the user writes in Arabic.
- Never invent cases, clients, results, rankings, statistics, laws, or court rulings. Legal content needs the lawyer's review.
- The firm's name, address, and phone numbers must stay identical everywhere.
- Arabic UI: no `letter-spacing`, use logical CSS properties.
- Do not add a dependency when existing code covers the need.
- A change is finished only after `npm run build` passes.
