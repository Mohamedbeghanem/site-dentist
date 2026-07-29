# EvoDentist — Product Blueprint

## 1. Brand and conversion strategy

EvoDentist is positioned as a premium, calm, technology-forward dental clinic.
The brand promise is “exceptional clinical standards without the usual
clinical anxiety.” The primary conversion is an appointment booking. Secondary
conversions are an emergency call, WhatsApp conversation, portal sign-in,
insurance verification, and contact request.

The conversion model is:

1. Communicate safety and quality immediately.
2. Show a human clinician and a calm real-world environment.
3. Support claims with rating, patient volume, accreditation, experience, and
   transparent care principles.
4. Help the visitor recognize their treatment need.
5. Reduce uncertainty with clinicians, technology, outcomes, prices, insurance,
   and FAQs.
6. Keep booking, calling, and WhatsApp available at every decision point.
7. Complete booking without asking the patient to create an account.

## 2. Information architecture

### Global layer

- Utility bar: emergency availability and telephone
- Primary navigation: clinic, dentists, treatments, technology, gallery, patient
  information, portal
- Persistent conversion: book appointment
- Mobile action bar: call, book, WhatsApp
- Footer: complete navigation, address, hours, emergency number, social,
  newsletter, policy links

### Discovery layer

- Brand story and clinic philosophy
- Services and treatment categories
- Doctor expertise and language support
- Technology and comfort
- Before-and-after proof
- Patient reviews
- Pricing and insurance
- Education and FAQs

### Transaction layer

- Appointment booking
- Emergency call
- Contact form
- Insurance verification
- Patient portal

## 3. Sitemap

| Route | Purpose | Primary conversion |
|---|---|---|
| `/` | Brand, trust, service discovery | Book appointment |
| `/about` | Philosophy, values, clinic story | Meet / book |
| `/dentists` | Clinician expertise and profiles | Book consultation |
| `/treatments` | Complete service catalog | Choose treatment |
| `/emergency` | Immediate triage and urgent care | Call now |
| `/gallery` | Outcomes and social proof | Book consultation |
| `/technology` | Explain precision and comfort | Book digital-first visit |
| `/testimonials` | Patient experience evidence | Book appointment |
| `/pricing` | Fee transparency and payment | Book consultation |
| `/insurance` | Coverage support and claims | Verify insurance |
| `/blog` | Search-led patient education | Explore care |
| `/faq` | Remove pre-booking objections | Ask / book |
| `/contact` | Questions, directions, lead capture | Send message |
| `/book-appointment` | Full booking workflow | Confirm appointment |
| `/patient-portal` | Existing-patient self-service | Secure sign-in |

## 4. Page and section inventory

### Home

- Emergency utility bar
- Sticky global header
- Hero with primary and secondary CTA
- Rating, hours, and new-patient promise
- Accreditation and insurance trust ribbon
- Brand-positioning introduction
- Live proof metrics
- Eight-treatment grid
- Comfort and technology story
- Three doctor profiles
- Five-technology explainer
- Interactive before-and-after comparison
- Patient testimonials
- High-intent closing CTA
- Complete footer

### Inner pages

Every inner page has a route-specific hero, supporting proof card, breadcrumb,
relevant content, persistent appointment action, and closing CTA. Dedicated
content includes doctor education and languages, emergency first-aid guidance,
gallery filters, treatment pathways, pricing tiers, insurance steps, article
cards, FAQ accordion, contact form, and portal dashboard.

## 5. Booking workflow

1. Treatment: quick-select reason for visit, including emergency.
2. Dentist: first-available recommendation or named clinician.
3. Date and time: day carousel, smart availability callout, live-style slots.
4. Patient details: name, mobile, email, reminder consent, anxiety preference.
5. Confirmation: treatment, clinician, date/time, SMS/email confirmation, and
   Google Calendar action.

The modal can be opened from any page. `/book-appointment` presents the same
workflow inline. The production integration contract should connect availability
to the practice-management calendar and create a provisional hold while patient
details are entered.

## 6. Component library

### Navigation

- Utility notice
- Sticky site header
- Responsive menu
- Breadcrumb
- Footer link groups
- Mobile action bar

### Actions

- Primary orange button
- White-on-dark button
- Glass button
- Subtle outlined button
- Editorial text link
- Floating WhatsApp action

### Content

- Eyebrow label
- Editorial headline
- Rating and trust indicator
- Metric tile
- Service card
- Doctor card
- Technology row
- Testimonial card
- Price card
- Journal card
- FAQ disclosure
- Contact information row
- Insurance step

### Transaction

- Booking modal
- Booking progress rail
- Selectable treatment card
- Clinician selector
- Day selector
- Time slot
- Patient details form
- Confirmation summary
- Contact form
- Portal login and portal cards

## 7. EvoDesign tokens

### Color

- Primary orange: `#FF6B00`
- Primary hover: `#D95800`
- Orange wash: `#FFF0E5`
- Ink: `#191817`
- Secondary ink: `#504C47`
- Muted text: `#817B73`
- Matte canvas: `#F5F2ED`
- Paper surface: `#FFFEFC`
- Hairline: `#E7E1D9`
- Success: `#287C64`

### Type

- Interface: Geist / system sans
- Display: Iowan Old Style / Baskerville / editorial serif fallback
- Display sizing: 39–97 px desktop, 31–68 px mobile
- Body sizing: 9–14 px in the intentionally restrained luxury scale
- Eyebrows: uppercase, 7–8 px, increased tracking

### Shape and depth

- Controls: 9–13 px radius
- Cards: 14–19 px radius
- Editorial panels: 18–21 px radius
- Soft premium shadow: `0 24px 70px rgba(53,42,31,.10)`
- Glass only on hero, modal support, and floating proof surfaces

## 8. Responsive behavior

### Desktop

- Maximum content width: 1240 px
- Multi-column discovery and comparison layouts
- Sticky header and floating WhatsApp
- Appointment modal with progress sidebar

### Tablet

- Two-column treatment grid
- Collapsible global menu
- Simplified footer composition
- Preserved side-by-side editorial layouts where legible

### Mobile

- 17 px page gutters
- Full-height image-first hero
- Single-column cards and content
- One-thumb fixed action bar
- Full-screen appointment flow
- Horizontal day-slot selection
- Touch targets of at least 42 px for primary controls

## 9. Motion

- Hero content reveal on initial load
- Header transparency and blur
- Card lift, shadow, and border transitions
- Technology-row disclosure motion
- Doctor and hero image scale on hover
- Before-and-after drag interaction
- Modal transitions and progress animation
- Reduced-motion media query disables non-essential motion

Motion should be 180–350 ms for controls and 600–850 ms for editorial reveals.
No animation may delay appointment actions or create layout shift.

## 10. SEO and local discovery

- Unique title and description for every route
- Canonical URL for every route
- Dentist JSON-LD with address, phone, hours, specialties, rating, and geo
- Open Graph and X large-image metadata
- Original 1200×630 social preview
- Local intent keywords for dentist, emergency dentist, implants, Invisalign,
  cosmetic dentistry, and Hydra / Algiers
- Semantic headings and descriptive links
- Journal topics aligned to high-intent patient questions

Google Business optimization should use the same name, address, telephone,
hours, service catalog, appointment URL, and photography. Publish weekly posts,
answer all reviews, and create individual service entries for emergency,
implants, orthodontics, cosmetic, pediatric, and hygiene care.

## 11. Accessibility

- Semantic navigation, sections, forms, labels, and buttons
- Visible focus states on fields and interactive controls
- High-contrast primary actions
- Text alternatives for meaningful imagery
- `prefers-reduced-motion` support
- Large mobile action targets
- No color-only state communication in the booking flow
- Dialog semantics and explicit close label

Production should add focus trapping to the booking modal, field-level error
summaries, live-region confirmation, and a full WCAG 2.2 AA audit.

## 12. Frontend architecture

- Next-compatible React rendered through vinext
- Shared client experience in `app/ClinicSite.tsx`
- Static home route in `app/page.tsx`
- Metadata-aware dynamic public routes in `app/[slug]/page.tsx`
- Central responsive design system in `app/globals.css`
- Project imagery in `public/images`
- Structured metadata in `app/layout.tsx`
- Cloudflare Worker-compatible output with Sites configuration

Future production integrations:

- Practice-management availability API
- Transactional SMS, email, and WhatsApp
- Google and Outlook calendar writes
- Secure patient identity and healthcare-record authorization
- Insurance eligibility and claims
- CRM lead routing
- Consent management and analytics

## 13. Low-fidelity wireframes

### Home

```text
[Emergency utility bar]
[Logo] [Primary navigation] [Portal] [Book]
[Full-width editorial hero image + copy + trust + CTA]
[Accreditation / insurance / rating ribbon]
[Brand positioning copy] [Proof statement]
[Four metrics]
[Eight treatment cards]
[Clinic image] [Comfort + technology copy]
[Three doctor cards]
[Technology explanation] [Technology list]
[Before/after comparison]
[Review introduction] [Review cards]
[Final booking CTA]
[Footer + newsletter]
```

### Booking

```text
[Progress rail] [Current step heading]
[1 Treatment]  [Selectable treatment options]
[2 Dentist]    [First available + named clinicians]
[3 Date/time]  [Days + smart availability + times]
[4 Details]    [Patient data + reminder/anxiety preferences]
               [Confirmation summary]
```

### Mobile

```text
[Emergency message]
[Logo] [Menu]
[Image-first hero]
[Headline + stacked CTAs]
[Single-column content cards]
...
[Fixed: Call | Book appointment | WhatsApp]
```

## 14. Roadmap

### Launch

- Replace demonstration clinic data with verified business details
- Connect live booking and notifications
- Add production consent, privacy, and accessibility content
- Add measured analytics events for each conversion step

### Growth

- Treatment-specific campaign landing pages
- Doctor detail routes with indexable schedules and reviews
- Multilingual Arabic, French, and English content
- Google Reviews feed and reputation workflow
- Online deposits for high-value consultations

### Patient experience

- Authenticated portal with records and invoices
- Secure pre-visit medical forms
- Treatment financing pre-qualification
- Post-treatment instructions and two-way messaging
- Recall and preventive-care personalization
