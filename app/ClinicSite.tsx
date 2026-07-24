"use client";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  CreditCard,
  FileHeart,
  HeartHandshake,
  Languages,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Upload,
  UserRound,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export type PageKey =
  | "home"
  | "about"
  | "dentists"
  | "treatments"
  | "emergency"
  | "gallery"
  | "technology"
  | "testimonials"
  | "pricing"
  | "insurance"
  | "blog"
  | "faq"
  | "contact"
  | "book-appointment"
  | "patient-portal";

const navItems = [
  ["The clinic", "/about"],
  ["Our dentists", "/dentists"],
  ["Treatments", "/treatments"],
  ["Technology", "/technology"],
  ["Smile gallery", "/gallery"],
  ["Patient info", "/faq"],
] as const;

const allLinks = [
  ["Home", "/"],
  ["About the clinic", "/about"],
  ["Meet the dentists", "/dentists"],
  ["Treatments", "/treatments"],
  ["Emergency dentistry", "/emergency"],
  ["Smile gallery", "/gallery"],
  ["Technology", "/technology"],
  ["Testimonials", "/testimonials"],
  ["Pricing", "/pricing"],
  ["Insurance", "/insurance"],
  ["Journal", "/blog"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
] as const;

const treatments = [
  { icon: Activity, title: "Dental implants", text: "Natural-feeling, precisely planned tooth replacement.", time: "From $1,850" },
  { icon: Sparkles, title: "Invisalign & orthodontics", text: "Confident alignment with discreet modern options.", time: "Free consultation" },
  { icon: WandSparkles, title: "Professional whitening", text: "A brighter smile, safely tailored to your enamel.", time: "60 minutes" },
  { icon: Stethoscope, title: "Root canal therapy", text: "Comfort-first treatment that preserves your natural tooth.", time: "Same-week care" },
  { icon: BadgeCheck, title: "Same-day crowns", text: "Digital design and ceramic restorations in one visit.", time: "One appointment" },
  { icon: Zap, title: "Emergency dentistry", text: "Rapid relief for pain, trauma, swelling, or a broken tooth.", time: "Seen today" },
  { icon: HeartHandshake, title: "Children’s dentistry", text: "Gentle, positive visits that build lifelong confidence.", time: "Family-friendly" },
  { icon: Sparkles, title: "Hygiene & prevention", text: "A tailored clean, screening, and prevention plan.", time: "From $120" },
];

const doctors = [
  {
    name: "Dr. Amel Rahmani",
    role: "Orthodontics & smile design",
    bio: "Amel combines digital planning with a deeply human approach to create balanced, natural smiles.",
    experience: "16 years",
    languages: "Arabic · French · English",
    education: "MSc Orthodontics · Paris Cité",
    crop: "doctor-one",
  },
  {
    name: "Dr. Elias Moretti",
    role: "Implants & oral surgery",
    bio: "Elias is known for calm, precise surgery and restorative outcomes designed to last.",
    experience: "19 years",
    languages: "English · French · Italian",
    education: "DDS · Advanced Implantology",
    crop: "doctor-two",
  },
  {
    name: "Dr. Hana Kim",
    role: "Pediatric & family dentistry",
    bio: "Hana creates relaxed, positive dental experiences for children, families, and anxious patients.",
    experience: "12 years",
    languages: "English · Korean · French",
    education: "DMD · Pediatric Residency",
    crop: "doctor-three",
  },
];

const technologies = [
  { icon: ScanLine, title: "3D intraoral scanner", text: "Comfortable, highly accurate digital impressions—without traditional trays." },
  { icon: Activity, title: "Low-dose digital X-ray", text: "Instant diagnostic clarity with significantly reduced radiation exposure." },
  { icon: Sparkles, title: "Same-day CAD/CAM", text: "Beautiful ceramic restorations designed and crafted inside our clinic." },
  { icon: Zap, title: "Laser dentistry", text: "More precise treatment, less discomfort, and faster healing where appropriate." },
  { icon: Microscope, title: "AI-assisted diagnostics", text: "A second layer of insight that helps our clinicians identify changes earlier." },
];

const testimonials = [
  {
    quote: "I expected a clinical appointment. It felt more like being cared for at a five-star hotel.",
    name: "Leila M.",
    treatment: "Smile transformation",
  },
  {
    quote: "They explained every option without pressure. For the first time, I felt completely in control.",
    name: "Daniel R.",
    treatment: "Dental implants",
  },
  {
    quote: "My daughter now asks when she can go back to the dentist. That says everything.",
    name: "Sarah K.",
    treatment: "Family care",
  },
];

const pageCopy: Record<Exclude<PageKey, "home">, { eyebrow: string; title: string; accent: string; text: string }> = {
  about: {
    eyebrow: "THE LUMIÈRE STANDARD",
    title: "Dentistry designed around",
    accent: "how you want to feel.",
    text: "A modern clinic where advanced care, thoughtful hospitality, and quiet confidence belong together.",
  },
  dentists: {
    eyebrow: "MEET YOUR CLINICAL TEAM",
    title: "Exceptional clinicians.",
    accent: "Genuinely human care.",
    text: "Specialists chosen for technical excellence, clear communication, and an uncommon ability to put people at ease.",
  },
  treatments: {
    eyebrow: "COMPLETE MODERN DENTISTRY",
    title: "Care that fits",
    accent: "your life and your goals.",
    text: "Preventive, restorative, cosmetic, surgical, orthodontic, and emergency care—all thoughtfully connected.",
  },
  emergency: {
    eyebrow: "URGENT DENTAL CARE",
    title: "In pain?",
    accent: "You can be seen today.",
    text: "Speak directly with our care team. We reserve same-day capacity for pain, swelling, dental trauma, and broken teeth.",
  },
  gallery: {
    eyebrow: "REAL PATIENT OUTCOMES",
    title: "Subtle changes.",
    accent: "Remarkable confidence.",
    text: "Explore natural-looking results planned around facial harmony, long-term health, and each patient’s goals.",
  },
  technology: {
    eyebrow: "CLINICAL TECHNOLOGY",
    title: "More precision.",
    accent: "A more comfortable visit.",
    text: "Technology earns its place in our clinic by making diagnosis clearer, treatment gentler, and results more predictable.",
  },
  testimonials: {
    eyebrow: "PATIENT STORIES",
    title: "The experience matters",
    accent: "as much as the outcome.",
    text: "Our patients describe care that feels considered, transparent, unhurried, and remarkably comfortable.",
  },
  pricing: {
    eyebrow: "CLEAR, CONSIDERED PRICING",
    title: "Invest in your smile",
    accent: "with complete clarity.",
    text: "No surprises and no pressure. You’ll receive transparent options, written estimates, and flexible ways to pay.",
  },
  insurance: {
    eyebrow: "INSURANCE & PAYMENT",
    title: "We make the financial side",
    accent: "feel simple.",
    text: "Our team helps you understand benefits, estimate coverage, and choose a payment approach that feels comfortable.",
  },
  blog: {
    eyebrow: "THE LUMIÈRE JOURNAL",
    title: "Clear guidance for",
    accent: "better oral health.",
    text: "Thoughtful, clinician-reviewed answers to the questions patients ask us every day.",
  },
  faq: {
    eyebrow: "BEFORE YOUR VISIT",
    title: "Everything you need",
    accent: "to feel prepared.",
    text: "Simple answers about appointments, comfort, payment, insurance, emergencies, and what to expect.",
  },
  contact: {
    eyebrow: "CONTACT LUMIÈRE",
    title: "We’re here",
    accent: "when you’re ready.",
    text: "Ask a question, share a concern, or let our care team help you choose the right next step.",
  },
  "book-appointment": {
    eyebrow: "ONLINE APPOINTMENT",
    title: "Your next visit,",
    accent: "beautifully simple.",
    text: "Choose what you need and find a time that works. Most bookings take less than two minutes.",
  },
  "patient-portal": {
    eyebrow: "PRIVATE PATIENT PORTAL",
    title: "Your care,",
    accent: "always within reach.",
    text: "Appointments, treatment plans, invoices, prescriptions, records, insurance, and secure messages in one private place.",
  },
};

function Logo() {
  return (
    <span className="logo-lockup">
      <span className="logo-mark"><i/><i/></span>
      <span><strong>Lumière</strong><small>DENTAL ATELIER</small></span>
    </span>
  );
}

function Rating({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`rating ${compact ? "compact" : ""}`}>
      <span>{[1, 2, 3, 4, 5].map((item) => <Star key={item} size={compact ? 12 : 14} fill="currentColor"/>)}</span>
      <b>4.9</b>
      {!compact && <small>from 486 verified patients</small>}
    </span>
  );
}

export default function ClinicSite({ pageKey }: { pageKey: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="clinic-site">
      <div className="top-notice">
        <span><CircleCheck size={13}/> Same-day emergency appointments available</span>
        <a href="tel:+2135550100"><Phone size={13}/> +213 555 0100</a>
      </div>
      <header className="site-header">
        <Link href="/" className="site-logo" aria-label="Lumière Dental Atelier home"><Logo/></Link>
        <nav className={menuOpen ? "open" : ""}>
          {navItems.map(([label, href]) => <Link onClick={() => setMenuOpen(false)} href={href} key={href}>{label}</Link>)}
          <Link onClick={() => setMenuOpen(false)} href="/patient-portal">Patient portal</Link>
        </nav>
        <div className="header-actions">
          <Link href="/patient-portal" className="portal-link"><UserRound size={15}/> Portal</Link>
          <button className="button primary header-book" onClick={() => setBookingOpen(true)}>Book appointment <ArrowRight size={16}/></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>

      {pageKey === "home" ? <Home onBook={() => setBookingOpen(true)}/> : <InnerPage pageKey={pageKey} onBook={() => setBookingOpen(true)}/>}

      <Footer onBook={() => setBookingOpen(true)}/>
      <a className="whatsapp-float" href="https://wa.me/2135550100" aria-label="Chat with Lumière on WhatsApp"><MessageCircle size={20}/><span>Chat with us</span></a>
      <div className="mobile-actions">
        <a href="tel:+2135550100"><Phone size={18}/><span>Call</span></a>
        <button onClick={() => setBookingOpen(true)}><CalendarDays size={18}/><span>Book appointment</span></button>
        <a href="https://wa.me/2135550100"><MessageCircle size={18}/><span>WhatsApp</span></a>
      </div>
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)}/>}
    </div>
  );
}

function Home({ onBook }: { onBook: () => void }) {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-image" role="img" aria-label="Dentist welcoming a patient in a modern treatment room"/>
        <div className="hero-shade"/>
        <div className="hero-content reveal">
          <span className="eyebrow light"><i/> MODERN DENTISTRY · HUMAN CARE</span>
          <h1>Your smile deserves<br/><em>exceptional care.</em></h1>
          <p>Advanced dentistry, considered comfort, and a team who takes the time to truly understand you.</p>
          <div className="hero-buttons">
            <button className="button primary large" onClick={onBook}>Book appointment <ArrowRight size={18}/></button>
            <Link className="button glass large" href="/dentists">Meet our team</Link>
          </div>
          <div className="hero-trust">
            <Rating/>
            <i/>
            <span><b>Open today</b><small>8:00 AM — 7:00 PM</small></span>
          </div>
        </div>
        <div className="hero-card">
          <span className="hero-card-icon"><Sparkles size={19}/></span>
          <div><small>NEW PATIENT EXPERIENCE</small><strong>Everything begins with a conversation.</strong><p>Your first visit includes a comprehensive scan, clinical assessment, and a clear plan—never a rushed sales pitch.</p></div>
          <Link href="/about"><ArrowRight size={18}/></Link>
        </div>
      </section>

      <section className="trust-ribbon">
        <span><ShieldCheck size={18}/><small>ACCREDITED</small><b>Clinical Excellence</b></span>
        <span><BadgeCheck size={18}/><small>RECOGNIZED</small><b>Top Patient Care 2026</b></span>
        <span><HeartHandshake size={18}/><small>PARTNER</small><b>Major Insurers Accepted</b></span>
        <span><Sparkles size={18}/><small>RATED</small><b>4.9 / 5 Patient Score</b></span>
      </section>

      <section className="intro-section section-shell">
        <div className="section-copy">
          <span className="eyebrow"><i/> THE LUMIÈRE DIFFERENCE</span>
          <h2>Dentistry can feel<br/><em>remarkably different.</em></h2>
        </div>
        <div className="intro-copy">
          <p>We created Lumière for people who expect more from healthcare: more clarity, more comfort, more time, and outcomes that feel completely natural.</p>
          <Link href="/about" className="text-link">Discover our philosophy <ArrowRight size={16}/></Link>
        </div>
      </section>

      <section className="metrics-section section-shell">
        {[
          ["12,000+", "patients cared for"],
          ["18", "years of clinical experience"],
          ["97%", "patients recommend us"],
          ["24h", "emergency response"],
        ].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="services-section section-shell">
        <div className="section-heading">
          <div><span className="eyebrow"><i/> COMPLETE CARE, ONE PLACE</span><h2>Treatments tailored<br/><em>to your life.</em></h2></div>
          <p>From everyday prevention to complete smile rehabilitation, every plan begins with your priorities.</p>
        </div>
        <TreatmentGrid onBook={onBook} limit={8}/>
      </section>

      <section className="experience-section">
        <div className="experience-image">
          <div className="equipment-orb"><ScanLine size={22}/><span><b>No uncomfortable impressions</b><small>Precision 3D scanning in under 60 seconds</small></span></div>
        </div>
        <div className="experience-copy">
          <span className="eyebrow light"><i/> DESIGNED FOR COMFORT</span>
          <h2>Advanced care.<br/><em>A calmer experience.</em></h2>
          <p>Every detail—from quieter equipment and warm lighting to digital scanning and longer appointments—has been chosen to help you feel at ease.</p>
          <ul>
            <li><Check/> Pain-conscious, minimally invasive care</li>
            <li><Check/> Unhurried appointments and clear explanations</li>
            <li><Check/> Same-day treatment where possible</li>
            <li><Check/> Private suites and family-friendly spaces</li>
          </ul>
          <Link className="button light" href="/technology">Explore our technology <ArrowRight size={16}/></Link>
        </div>
      </section>

      <DoctorsSection onBook={onBook}/>
      <TechnologySection/>
      <GallerySection/>
      <TestimonialsSection/>
      <FinalCta onBook={onBook}/>
    </main>
  );
}

function InnerPage({ pageKey, onBook }: { pageKey: Exclude<PageKey, "home">; onBook: () => void }) {
  const copy = pageCopy[pageKey];
  const emergency = pageKey === "emergency";
  return (
    <main className="inner-page">
      <section className={`inner-hero ${emergency ? "emergency-hero" : ""}`}>
        <div className="inner-hero-copy">
          <span className="eyebrow"><i/> {copy.eyebrow}</span>
          <h1>{copy.title}<br/><em>{copy.accent}</em></h1>
          <p>{copy.text}</p>
          <div>
            {emergency ? <a className="button primary large" href="tel:+2135550100"><Phone size={17}/> Call emergency line</a> : <button className="button primary large" onClick={onBook}>Book appointment <ArrowRight size={17}/></button>}
            {!["book-appointment", "patient-portal"].includes(pageKey) && <Link className="button subtle large" href="/contact">Ask a question</Link>}
          </div>
        </div>
        <div className={`inner-hero-art art-${pageKey}`}>
          <span className="art-card"><Rating compact/><b>{emergency ? "A clinician will speak with you now" : "Trusted by 12,000+ patients"}</b></span>
        </div>
      </section>
      <div className="page-breadcrumb"><Link href="/">Home</Link><ChevronRight size={13}/><span>{copy.eyebrow.toLowerCase()}</span></div>
      {renderPageContent(pageKey, onBook)}
      {!["book-appointment", "patient-portal", "contact"].includes(pageKey) && <FinalCta onBook={onBook}/>}
    </main>
  );
}

function renderPageContent(pageKey: Exclude<PageKey, "home">, onBook: () => void) {
  switch (pageKey) {
    case "about":
      return <AboutContent/>;
    case "dentists":
      return <><DoctorsSection onBook={onBook} expanded/><ValuesBand/></>;
    case "treatments":
      return <section className="services-section section-shell page-section"><TreatmentGrid onBook={onBook}/><CareJourney/></section>;
    case "emergency":
      return <EmergencyContent onBook={onBook}/>;
    case "gallery":
      return <><GallerySection expanded/><TestimonialsSection/></>;
    case "technology":
      return <><TechnologySection expanded/><ComfortSection/></>;
    case "testimonials":
      return <><TestimonialsSection expanded/><ReviewWall/></>;
    case "pricing":
      return <PricingContent onBook={onBook}/>;
    case "insurance":
      return <InsuranceContent/>;
    case "blog":
      return <BlogContent/>;
    case "faq":
      return <FaqContent/>;
    case "contact":
      return <ContactContent/>;
    case "book-appointment":
      return <section className="inline-booking section-shell"><BookingFlow inline/></section>;
    case "patient-portal":
      return <PortalContent/>;
  }
}

function TreatmentGrid({ onBook, limit }: { onBook: () => void; limit?: number }) {
  return (
    <div className="service-grid">
      {treatments.slice(0, limit).map(({ icon: Icon, title, text, time }, index) => (
        <article className="service-card" key={title}>
          <span className={`service-icon tone-${index % 4}`}><Icon size={21}/></span>
          <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3><p>{text}</p>
          <div><small>{time}</small><button onClick={onBook} aria-label={`Book ${title}`}><ArrowRight size={17}/></button></div>
        </article>
      ))}
    </div>
  );
}

function DoctorsSection({ onBook, expanded = false }: { onBook: () => void; expanded?: boolean }) {
  return (
    <section className={`doctors-section section-shell ${expanded ? "expanded" : ""}`}>
      <div className="section-heading">
        <div><span className="eyebrow"><i/> YOUR CLINICAL TEAM</span><h2>Expertise you can trust.<br/><em>People you’ll feel at ease with.</em></h2></div>
        <p>Multi-disciplinary care means the right expertise is always close—without losing the warmth of a familiar team.</p>
      </div>
      <div className="doctor-grid">
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.name}>
            <div className={`doctor-photo ${doctor.crop}`}><span><Star size={13} fill="currentColor"/> 4.9</span></div>
            <div className="doctor-info">
              <small>{doctor.role}</small><h3>{doctor.name}</h3>
              <p>{doctor.bio}</p>
              <div className="doctor-details">
                <span><Clock3 size={14}/>{doctor.experience}</span>
                <span><Languages size={14}/>{doctor.languages}</span>
                {expanded && <span><BadgeCheck size={14}/>{doctor.education}</span>}
              </div>
              <button className="text-link" onClick={onBook}>Book a consultation <ArrowRight size={15}/></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnologySection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className={`technology-section section-shell ${expanded ? "expanded" : ""}`}>
      <div className="tech-intro">
        <span className="eyebrow"><i/> PURPOSEFUL TECHNOLOGY</span>
        <h2>Better information.<br/><em>Better decisions.</em></h2>
        <p>We invest in technology that makes your care more accurate, efficient, and comfortable—not technology for its own sake.</p>
        <Link className="text-link" href="/technology">See how technology improves your visit <ArrowRight size={15}/></Link>
      </div>
      <div className="tech-list">
        {technologies.map(({ icon: Icon, title, text }, index) => (
          <article key={title}><span>0{index + 1}</span><Icon size={20}/><div><h3>{title}</h3><p>{text}</p></div><ChevronRight size={17}/></article>
        ))}
      </div>
    </section>
  );
}

function GallerySection({ expanded = false }: { expanded?: boolean }) {
  const [position, setPosition] = useState(52);
  const filters = ["All", "Whitening", "Alignment", "Veneers", "Implants"];
  const [filter, setFilter] = useState("All");
  return (
    <section className={`gallery-section section-shell ${expanded ? "expanded" : ""}`}>
      <div className="section-heading">
        <div><span className="eyebrow"><i/> BEFORE & AFTER</span><h2>Real care.<br/><em>Beautifully natural results.</em></h2></div>
        <p>Every smile is planned to look like it belongs to you. Drag to compare a representative whitening and alignment result.</p>
      </div>
      {expanded && <div className="gallery-filters">{filters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>}
      <div className="comparison-card">
        <div className="smile-before"><span>BEFORE</span><div className="smile-teeth muted">{[1,2,3,4,5,6,7,8].map((n) => <i key={n}/>)}</div></div>
        <div className="smile-after" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><span>AFTER</span><div className="smile-teeth">{[1,2,3,4,5,6,7,8].map((n) => <i key={n}/>)}</div></div>
        <input aria-label="Before and after comparison" type="range" min="8" max="92" value={position} onChange={(event) => setPosition(Number(event.target.value))}/>
        <div className="comparison-handle" style={{ left: `${position}%` }}><ArrowLeft size={14}/><ArrowRight size={14}/></div>
        <div className="comparison-caption"><small>{filter === "All" ? "WHITENING + ALIGNMENT" : filter.toUpperCase()}</small><b>Confidence, without looking “done”.</b><span>Individual results vary · Patient consent obtained</span></div>
      </div>
    </section>
  );
}

function TestimonialsSection({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className={`testimonials-section ${expanded ? "expanded" : ""}`}>
      <div className="section-shell">
        <div className="testimonial-intro">
          <Quote size={30}/>
          <span className="eyebrow light"><i/> PATIENT STORIES</span>
          <h2>Care people<br/><em>remember.</em></h2>
          <Rating/>
          <Link href="/testimonials" className="button glass">Read all patient stories</Link>
        </div>
        <div className="testimonial-cards">
          {testimonials.map((item) => (
            <article key={item.name}>
              <div>{[1,2,3,4,5].map((star) => <Star fill="currentColor" size={13} key={star}/>)}</div>
              <blockquote>“{item.quote}”</blockquote>
              <span><i>{item.name.split(" ").map((part) => part[0]).join("")}</i><span><b>{item.name}</b><small>{item.treatment}</small></span></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ onBook }: { onBook: () => void }) {
  return (
    <section className="final-cta section-shell">
      <div className="cta-orbit one"/><div className="cta-orbit two"/>
      <span className="eyebrow light"><i/> YOUR NEXT STEP</span>
      <h2>Let’s begin with<br/><em>a conversation.</em></h2>
      <p>Tell us what you would like to change—or simply what has been worrying you. We’ll help you choose the right next step.</p>
      <div><button className="button light large" onClick={onBook}>Book your appointment <ArrowRight size={17}/></button><a className="button glass large" href="tel:+2135550100"><Phone size={16}/> Call the care team</a></div>
      <small><ShieldCheck size={13}/> No pressure · Transparent options · Your questions welcomed</small>
    </section>
  );
}

function AboutContent() {
  return (
    <>
      <section className="story-section section-shell">
        <div><span className="eyebrow"><i/> OUR STORY</span><h2>Built on a simple idea:<br/><em>clinical excellence should feel human.</em></h2></div>
        <div><p className="lead">Lumière was founded in 2008 by clinicians who believed that modern dentistry could be both technically exceptional and deeply reassuring.</p><p>Today, our multidisciplinary team combines specialist knowledge, digital planning, and a hospitality-led experience. We give appointments the time they deserve, explain every option clearly, and design care around the person—not just the tooth.</p></div>
      </section>
      <ValuesBand/>
      <section className="manifesto section-shell"><span>Our promise</span><blockquote>“You will never feel rushed, judged, or left without a clear answer.”</blockquote><p>That promise shapes our clinic, our team, and every conversation.</p></section>
    </>
  );
}

function ValuesBand() {
  return (
    <section className="values-band section-shell">
      {[
        [ShieldCheck, "Clinically exact", "Evidence-led care, thoughtful planning, and uncompromising standards."],
        [HeartHandshake, "Personally considered", "Your comfort, goals, time, and preferences shape every decision."],
        [Sparkles, "Naturally beautiful", "Results designed for harmony, longevity, and complete confidence."],
        [BadgeCheck, "Radically clear", "Plain language, transparent fees, and no pressure—ever."],
      ].map(([Icon, title, text]) => {
        const ValueIcon = Icon as typeof ShieldCheck;
        return <article key={String(title)}><ValueIcon/><h3>{String(title)}</h3><p>{String(text)}</p></article>;
      })}
    </section>
  );
}

function CareJourney() {
  return (
    <div className="care-journey">
      <div><span className="eyebrow"><i/> WHAT TO EXPECT</span><h2>A clear path from<br/><em>question to confidence.</em></h2></div>
      <ol>
        {[
          ["01", "Listen", "Your goals, concerns, health, and previous experiences."],
          ["02", "Understand", "Digital records and a complete clinical assessment."],
          ["03", "Plan together", "Clear options, benefits, timeframes, and costs."],
          ["04", "Care", "Comfortable treatment with every step explained."],
        ].map(([number, title, text]) => <li key={number}><span>{number}</span><div><b>{title}</b><p>{text}</p></div></li>)}
      </ol>
    </div>
  );
}

function EmergencyContent({ onBook }: { onBook: () => void }) {
  return (
    <section className="emergency-content section-shell">
      <div className="emergency-callout"><span><Phone size={23}/></span><div><small>CALL NOW FOR CLINICAL TRIAGE</small><strong>+213 555 0100</strong><p>Open today, 8:00 AM–7:00 PM. Out-of-hours guidance is available.</p></div><a className="button primary" href="tel:+2135550100">Call now</a></div>
      <div className="emergency-grid">
        <div><h2>We can help with</h2>{["Severe toothache or sensitivity", "Facial swelling or dental infection", "Broken, chipped, or lost tooth", "Knocked-out tooth or dental trauma", "Lost filling, crown, or bridge", "Bleeding after dental treatment"].map((item) => <p key={item}><Check/>{item}</p>)}</div>
        <div className="emergency-advice"><span><ShieldCheck/></span><h3>Knocked-out adult tooth?</h3><p>Hold it by the crown, not the root. If clean, gently place it back in position—or keep it in milk. Call us immediately. The first 30 minutes matter.</p><button onClick={onBook} className="text-link">Request an emergency slot <ArrowRight/></button></div>
      </div>
    </section>
  );
}

function ComfortSection() {
  return (
    <section className="comfort-section section-shell">
      <div className="comfort-visual"><ScanLine/><span>60 sec</span><small>complete 3D scan</small></div>
      <div><span className="eyebrow"><i/> TECHNOLOGY WITH PURPOSE</span><h2>The best technology<br/><em>disappears into the experience.</em></h2><p>You won’t see technology used for spectacle. You’ll notice fewer uncomfortable impressions, clearer explanations, more predictable visits, and greater confidence in your options.</p><Link className="text-link" href="/book-appointment">Experience a digital-first visit <ArrowRight/></Link></div>
    </section>
  );
}

function ReviewWall() {
  return (
    <section className="review-wall section-shell">
      {[
        ["“A clinic that truly listens.”", "Mina T. · Hygiene"],
        ["“Beautiful work and zero pressure.”", "Alex P. · Veneers"],
        ["“My implant feels completely natural.”", "Rami B. · Implants"],
        ["“Every detail feels considered.”", "Nora S. · Invisalign"],
        ["“Kind, calm, and incredibly precise.”", "Emma W. · Root canal"],
        ["“The whole family now comes here.”", "Karim A. · Family care"],
      ].map(([quote, name]) => <article key={name}><Rating compact/><blockquote>{quote}</blockquote><span>{name}</span></article>)}
    </section>
  );
}

function PricingContent({ onBook }: { onBook: () => void }) {
  return (
    <section className="pricing-content section-shell">
      <div className="pricing-grid">
        {[
          ["Essential care", "$120", "For prevention and everyday oral health.", ["Comprehensive exam from $95", "Hygiene visit from $120", "Digital X-rays from $35"]],
          ["Smile care", "$350", "For confidence, alignment, and natural aesthetics.", ["Whitening from $350", "Invisalign from $3,200", "Ceramic veneer from $950"]],
          ["Restorative care", "$650", "For strength, function, and long-term health.", ["Ceramic crown from $1,050", "Root canal from $650", "Dental implant from $1,850"]],
        ].map(([title, price, text, items], index) => <article className={index === 1 ? "featured" : ""} key={String(title)}>{index === 1 && <span className="recommended">MOST REQUESTED</span>}<small>STARTING FROM</small><h3>{String(title)}</h3><strong>{String(price)}</strong><p>{String(text)}</p><ul>{(items as string[]).map((item) => <li key={item}><Check/>{item}</li>)}</ul><button onClick={onBook} className={index === 1 ? "button primary" : "button subtle"}>Book consultation</button></article>)}
      </div>
      <div className="finance-note"><CreditCard/><div><h3>Flexible payment options</h3><p>Spread eligible treatment costs over 3, 6, or 12 months. Decisions remain subject to provider approval.</p></div><Link href="/contact" className="text-link">Ask our care coordinator <ArrowRight/></Link></div>
    </section>
  );
}

function InsuranceContent() {
  return (
    <section className="insurance-content section-shell">
      <div className="insurance-panel"><ShieldCheck/><span className="eyebrow"><i/> BENEFITS SUPPORT</span><h2>Bring your plan.<br/><em>We’ll help make sense of it.</em></h2><p>We work with major insurance providers and can submit eligible claims directly. Before treatment begins, we’ll provide a written estimate showing expected coverage and your likely contribution.</p><Link href="/contact" className="button primary">Verify my insurance <ArrowRight/></Link></div>
      <div className="insurance-steps">{[["01", "Send your details", "Upload your insurance card securely or bring it to your visit."], ["02", "We check benefits", "Our coordinator reviews eligibility, limits, and waiting periods."], ["03", "You receive clarity", "We explain expected coverage before you decide on treatment."]].map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>
  );
}

function BlogContent() {
  const posts = [
    ["IMPLANTS · 7 MIN", "Dental implants: what the first month really feels like", "A calm, honest guide to healing, eating, comfort, and what is normal."],
    ["ORTHODONTICS · 5 MIN", "Invisalign or braces—which is right for your lifestyle?", "The clinical differences that matter beyond appearance."],
    ["PREVENTION · 4 MIN", "Six signs you should not wait until your next check-up", "When sensitivity, bleeding, or a small change deserves attention."],
    ["CHILDREN · 6 MIN", "How to prepare an anxious child for the dentist", "Language and routines that make the first visit feel positive."],
    ["SMILE DESIGN · 8 MIN", "Why the best cosmetic dentistry is almost invisible", "Facial harmony, proportion, translucency, and restraint."],
    ["TECHNOLOGY · 5 MIN", "What AI can—and cannot—do in dental diagnosis", "How our clinicians use technology as a second pair of eyes."],
  ];
  return <section className="blog-grid section-shell">{posts.map(([tag, title, text], index) => <article key={title}><div className={`blog-art art-${index}`}><span>{String(index + 1).padStart(2, "0")}</span></div><small>{tag}</small><h3>{title}</h3><p>{text}</p><button className="text-link">Read article <ArrowRight/></button></article>)}</section>;
}

function FaqContent() {
  const questions = [
    ["Can I book online?", "Yes. Choose your treatment, preferred clinician, date, and a live available time. You’ll receive confirmation by SMS and email."],
    ["Do you see dental emergencies today?", "We reserve same-day capacity for pain, swelling, trauma, broken teeth, and lost restorations. Call us for immediate clinical triage."],
    ["I feel anxious about dental treatment. Can you help?", "Absolutely. Tell us when booking. We offer longer appointments, step-by-step communication, comfort breaks, and appropriate sedation options."],
    ["Do you accept insurance?", "We work with major providers and can help verify benefits and submit eligible claims. Coverage depends on your individual plan."],
    ["Will I know the cost before treatment?", "Yes. We provide clear written options, expected insurance contribution, and your estimated total before treatment begins."],
    ["Can I spread the cost of treatment?", "Eligible treatments can be divided across flexible payment plans, subject to approval and terms."],
    ["What should I bring to my first visit?", "Bring photo ID, medication information, insurance details, and any recent dental records or X-rays if available."],
  ];
  const [open, setOpen] = useState(0);
  return <section className="faq-content section-shell"><div className="faq-list">{questions.map(([question, answer], index) => <button className={open === index ? "open" : ""} onClick={() => setOpen(open === index ? -1 : index)} key={question}><span><b>{String(index + 1).padStart(2, "0")}</b><strong>{question}</strong><ChevronDown/></span>{open === index && <p>{answer}</p>}</button>)}</div><aside><MessageCircle/><h3>Still unsure?</h3><p>Our care coordinators are here to answer questions without pressure.</p><Link className="button primary" href="/contact">Ask the care team</Link><a href="tel:+2135550100"><Phone/> +213 555 0100</a></aside></section>;
}

function ContactContent() {
  const [sent, setSent] = useState(false);
  return (
    <section className="contact-content section-shell">
      <div className="contact-details">
        <span className="eyebrow"><i/> VISIT OR CONTACT US</span><h2>We’d love to<br/><em>welcome you.</em></h2>
        <div><MapPin/><span><b>14 Avenue des Oliviers</b><small>Hydra, Algiers · Private parking available</small></span></div>
        <div><Phone/><span><b>+213 555 0100</b><small>Emergency and appointment line</small></span></div>
        <div><Mail/><span><b>care@lumieredental.com</b><small>Replies within one business day</small></span></div>
        <div><Clock3/><span><b>Monday–Saturday</b><small>8:00 AM–7:00 PM · Friday by appointment</small></span></div>
        <div className="map-card"><MapPin/><span>LUMIÈRE</span><i/><button>Open in Google Maps <ArrowRight/></button></div>
      </div>
      <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
        {sent ? <div className="form-success"><CircleCheck/><h3>Thank you. We’ll be in touch shortly.</h3><p>A care coordinator will contact you within one business day.</p><button type="button" className="button subtle" onClick={() => setSent(false)}>Send another message</button></div> : <><small>CONTACT THE CARE TEAM</small><h3>How can we help?</h3><label>Full name<input required placeholder="Your name"/></label><label>Email address<input required type="email" placeholder="you@email.com"/></label><label>Phone number<input placeholder="+213"/></label><label>What would you like help with?<select defaultValue=""><option value="" disabled>Select a topic</option><option>New patient appointment</option><option>Emergency care</option><option>Treatment question</option><option>Insurance or payment</option></select></label><label>Message<textarea placeholder="Tell us anything that would help us care for you…"/></label><button className="button primary" type="submit">Send message <ArrowRight/></button><p><ShieldCheck/> Your information is private and encrypted.</p></>}
      </form>
    </section>
  );
}

function PortalContent() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) {
    return (
      <section className="portal-content section-shell">
        <form onSubmit={(event) => { event.preventDefault(); setLoggedIn(true); }}>
          <span className="portal-icon"><ShieldCheck/></span><small>SECURE PATIENT ACCESS</small><h2>Welcome back.</h2><p>Use your clinic email and password to continue.</p>
          <label>Email address<input required type="email" defaultValue="patient@lumiere.demo"/></label>
          <label>Password<input required type="password" defaultValue="Lumiere2026!"/></label>
          <button className="button primary" type="submit">Sign in securely <ArrowRight/></button>
          <button type="button" className="forgot-link">Forgot your password?</button>
          <div><ShieldCheck/> 256-bit encrypted · Private · Audit protected</div>
        </form>
        <aside><FileHeart/><h3>Everything about your care, in one calm place.</h3><ul><li><Check/> Book or reschedule appointments</li><li><Check/> Review treatment plans and records</li><li><Check/> View invoices and payment history</li><li><Check/> Upload insurance documents</li><li><Check/> Message your clinical team securely</li></ul></aside>
      </section>
    );
  }
  return <PortalDashboard/>;
}

function PortalDashboard() {
  return (
    <section className="portal-dashboard section-shell">
      <div className="portal-welcome"><div><small>GOOD MORNING</small><h2>Welcome back, Sofia.</h2><p>Your next visit is confirmed and everything is ready.</p></div><Link className="button primary" href="/book-appointment">Book another visit <ArrowRight/></Link></div>
      <div className="portal-grid">
        <article className="next-visit"><span><CalendarDays/></span><small>NEXT APPOINTMENT</small><h3>Invisalign progress review</h3><p>Tuesday, July 28 · 10:30 AM</p><div><b>Dr. Amel Rahmani</b><span>Confirmed</span></div><button>Manage appointment</button></article>
        <article><span><FileHeart/></span><small>TREATMENT PLAN</small><h3>Smile alignment</h3><p>3 of 8 milestones completed</p><i><b style={{ width: "38%" }}/></i><button>View treatment plan</button></article>
        <article><span><CreditCard/></span><small>ACCOUNT</small><h3>$0.00 due</h3><p>Your account is up to date.</p><button>View payment history</button></article>
        <article><span><Upload/></span><small>INSURANCE</small><h3>Plan verified</h3><p>Coverage checked June 18.</p><button>Upload a new document</button></article>
      </div>
    </section>
  );
}

function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="booking-layer" onMouseDown={onClose}>
      <div className="booking-modal" role="dialog" aria-modal="true" aria-label="Book an appointment" onMouseDown={(event) => event.stopPropagation()}>
        <button className="booking-close" onClick={onClose} aria-label="Close booking"><X/></button>
        <BookingFlow onClose={onClose}/>
      </div>
    </div>
  );
}

function BookingFlow({ inline = false, onClose }: { inline?: boolean; onClose?: () => void }) {
  const [step, setStep] = useState(0);
  const [treatment, setTreatment] = useState("New patient consultation");
  const [dentist, setDentist] = useState("First available");
  const [date, setDate] = useState(2);
  const [time, setTime] = useState("10:30 AM");
  const days = ["Today", "Tomorrow", "Sat 26", "Mon 28", "Tue 29"];
  const slots = ["8:30 AM", "9:15 AM", "10:30 AM", "11:45 AM", "2:00 PM", "3:30 PM", "5:15 PM"];
  const headings = ["What can we help with?", "Choose your clinician", "Find your time", "A few final details", "You’re booked."];
  const canGoBack = step > 0 && step < 4;
  const progress = step === 4 ? 100 : ((step + 1) / 4) * 100;

  return (
    <div className={`booking-flow ${inline ? "inline" : ""}`}>
      <div className="booking-side">
        <Logo/>
        <div className="booking-progress"><span style={{ height: `${progress}%` }}/></div>
        <ol>{["Treatment", "Dentist", "Date & time", "Your details"].map((item, index) => <li className={step === index ? "active" : step > index ? "done" : ""} key={item}><span>{step > index ? <Check/> : index + 1}</span>{item}</li>)}</ol>
        <div><ShieldCheck/><span><b>Your privacy matters.</b><small>Information is encrypted and used only to arrange your care.</small></span></div>
      </div>
      <div className="booking-main">
        {canGoBack && <button className="booking-back" onClick={() => setStep(step - 1)}><ArrowLeft/> Back</button>}
        {step < 4 && <><small>STEP {step + 1} OF 4</small><h2>{headings[step]}</h2></>}
        {step === 0 && <div className="booking-options">{["New patient consultation", "Emergency appointment", "Hygiene & check-up", "Dental implants", "Invisalign / orthodontics", "Cosmetic dentistry", "Other concern"].map((item) => <button className={treatment === item ? "selected" : ""} onClick={() => setTreatment(item)} key={item}><span>{item === "Emergency appointment" ? <Zap/> : <Stethoscope/>}</span><b>{item}</b>{treatment === item && <CircleCheck/>}</button>)}</div>}
        {step === 1 && <div className="dentist-options"><button className={dentist === "First available" ? "selected" : ""} onClick={() => setDentist("First available")}><span className="smart-avatar"><Sparkles/></span><span><b>First available</b><small>Fastest appointment across the team</small></span><strong>Recommended</strong></button>{doctors.map((doctor) => <button className={dentist === doctor.name ? "selected" : ""} onClick={() => setDentist(doctor.name)} key={doctor.name}><span className={`mini-doctor ${doctor.crop}`}/><span><b>{doctor.name}</b><small>{doctor.role}</small></span><ChevronRight/></button>)}</div>}
        {step === 2 && <div className="date-time"><div className="day-tabs">{days.map((day, index) => <button className={date === index ? "selected" : ""} onClick={() => setDate(index)} key={day}><small>{day.includes(" ") ? day.split(" ")[0] : "JUL"}</small><b>{day.includes(" ") ? day.split(" ")[1] : day}</b></button>)}</div><div className="availability-note"><Sparkles/><span><b>Best availability</b><small>These times match your treatment length and clinician preferences.</small></span></div><div className="time-slots">{slots.map((slot) => <button className={time === slot ? "selected" : ""} onClick={() => setTime(slot)} key={slot}>{slot}{slot === "10:30 AM" && <small>Best match</small>}</button>)}</div></div>}
        {step === 3 && <form className="patient-form" onSubmit={(event) => { event.preventDefault(); setStep(4); }}><div><label>First name<input required placeholder="Sofia"/></label><label>Last name<input required placeholder="Martinez"/></label></div><label>Mobile number<input required type="tel" placeholder="+213 555 0100"/></label><label>Email address<input required type="email" placeholder="sofia@email.com"/></label><label className="booking-check"><input type="checkbox" defaultChecked/><span><b>Send appointment reminders</b><small>Receive confirmation and reminders by SMS, email, and WhatsApp.</small></span></label><label className="booking-check"><input type="checkbox"/><span><b>I’m anxious about dental treatment</b><small>We’ll allow extra time and let your care team know.</small></span></label><button className="button primary booking-submit" type="submit">Confirm appointment <ArrowRight/></button></form>}
        {step === 4 && <div className="booking-confirmation"><span><Check/></span><small>APPOINTMENT CONFIRMED</small><h2>{headings[4]}</h2><p>We sent confirmation by SMS and email. You can reschedule or cancel from the secure link at any time.</p><div><CalendarDays/><span><b>{treatment}</b><small>{days[date]} · {time}</small><small>{dentist}</small></span></div><button className="button primary" onClick={onClose}>Done</button><button className="text-link">Add to Google Calendar <ArrowRight/></button></div>}
        {step < 3 && <button className="button primary booking-next" onClick={() => setStep(step + 1)}>Continue <ArrowRight/></button>}
      </div>
    </div>
  );
}

function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-brand"><Link href="/"><Logo/></Link><p>Modern dentistry, thoughtful hospitality, and care that feels entirely personal.</p><Rating compact/><div><a href="#" aria-label="Social updates"><Sparkles/></a><a href="#" aria-label="Community messages"><MessageCircle/></a></div></div>
        <div className="footer-links"><b>Explore</b>{allLinks.slice(1, 7).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
        <div className="footer-links"><b>Patient care</b>{allLinks.slice(7).map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<Link href="/patient-portal">Patient portal</Link></div>
        <div className="footer-contact"><b>Visit Lumière</b><p><MapPin/>14 Avenue des Oliviers<br/>Hydra, Algiers</p><p><Clock3/>Mon–Sat · 8:00 AM–7:00 PM</p><a href="tel:+2135550100"><Phone/>+213 555 0100</a><button className="button primary" onClick={onBook}>Book appointment</button></div>
      </div>
      <div className="newsletter section-shell"><div><Mail/><span><b>A healthier smile, delivered thoughtfully.</b><small>Monthly guidance from our clinical team. No noise.</small></span></div><form onSubmit={(event) => event.preventDefault()}><input type="email" aria-label="Newsletter email" placeholder="Your email address"/><button aria-label="Join newsletter"><ArrowRight/></button></form></div>
      <div className="footer-bottom section-shell"><span>© 2026 Lumière Dental Atelier</span><span><a href="#">Privacy</a><a href="#">Accessibility</a><a href="#">Terms</a></span><span><i/> Accepting new patients</span></div>
    </footer>
  );
}
