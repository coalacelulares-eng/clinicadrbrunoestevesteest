# Internationalization Fix Plan

Address untranslated text in the "Smile Consultant" simulation goals, photo tips, testimonials, legal notice, and "Our Team" member details.

## Proposed Changes

### Internationalization Dictionary (`src/lib/i18n.tsx`)
- Add keys for all simulation goals: `clareamento`, `espacos`, `alinhamento`, `facetas`, `implantes`, `hof`, `pele`, `avaliacao`.
- Add keys for photo tips: `tips.photo`, `tips.light`, `tips.front`, `tips.filter`, `tips.teeth`.
- Add keys for testimonials in the consultant section: `test.smile.q1`, `test.smile.q2`, `test.smile.q3`, `test.smile.q4`.
- Add keys for legal notice: `consultant.legal`.
- Add missing translations for Spanish/English for these new keys.

### Simulation Library (`src/lib/smile-consultant.ts`)
- Add `ids` to `PHOTO_TIPS` and `TESTIMONIALS` to facilitate translation.

### Smile Consultant Component (`src/components/site/SmileConsultant.tsx`)
- Update `goals.map` to use `t(g.id)` for labels.
- Update `PHOTO_TIPS.map` to use specific translation keys.
- Update `TESTIMONIALS.map` to use translated quote/author keys.
- Update legal notice footer to use `t("consultant.legal")`.

### Our Team Component (`src/components/site/OurTeam.tsx`)
- Refactor to use `TEAM` from `src/lib/site.ts` and translate content using the `team.member.{id}.role` and `team.member.{id}.desc` keys.

## Technical Details
- Map `Goal` objects to translation keys using their `id`.
- Ensure `src/lib/site.ts` contains the definitive list of team IDs to avoid duplication.
- Verify `src/routes/index.tsx` is correctly passing the translated items.
