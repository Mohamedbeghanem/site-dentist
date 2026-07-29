# EvoDentist

A premium, conversion-focused dental clinic website built with the EvoDesign
language. The experience combines luxury healthcare branding, complete
patient education, a multi-step online booking journey, emergency access, and a
secure patient portal demo.

## Experiences

- Complete public website across 15 linked routes
- Appointment booking with treatment, clinician, date, live time, patient
  details, confirmation, and reminder preferences
- Treatment discovery, specialist profiles, interactive smile comparison,
  technology education, pricing, insurance, journal, FAQ, and contact journeys
- Patient portal demo for appointments, treatment plans, invoices, insurance,
  and records
- Sticky emergency, booking, and WhatsApp actions with one-thumb mobile
  navigation
- Local SEO metadata, Dentist schema, Open Graph, X card, canonical URLs, and
  route-specific descriptions
- Responsive EvoDesign system with accessible controls and reduced-motion
  support

## Development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Build and verify:

```bash
npm test
```

The project uses Next-compatible React through vinext and produces a
Cloudflare Worker-compatible deployment.

Product, content, conversion, SEO, responsive, and design-system decisions are
documented in `docs/product-blueprint.md`.
