import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ClinicSite, { type PageKey } from "../ClinicSite";

const pages: Record<string, { key: PageKey; title: string; description: string }> = {
  about: { key: "about", title: "About the Clinic", description: "Discover the Lumière philosophy: exceptional clinical standards, thoughtful hospitality, and care designed around you." },
  dentists: { key: "dentists", title: "Meet the Dentists", description: "Meet Lumière’s experienced orthodontic, implant, cosmetic, family, and pediatric dental clinicians." },
  treatments: { key: "treatments", title: "Dental Treatments", description: "Explore preventive, restorative, cosmetic, orthodontic, implant, family, and emergency dental treatment." },
  emergency: { key: "emergency", title: "Emergency Dentist", description: "Same-day urgent dental care in Algiers for pain, swelling, trauma, broken teeth, and lost restorations." },
  gallery: { key: "gallery", title: "Smile Gallery", description: "Explore natural-looking outcomes from whitening, orthodontics, veneers, implants, and complete smile care." },
  technology: { key: "technology", title: "Dental Technology", description: "See how 3D scanning, digital X-ray, CAD/CAM, lasers, and AI-assisted diagnostics improve your visit." },
  testimonials: { key: "testimonials", title: "Patient Testimonials", description: "Read verified patient stories about the comfort, clarity, expertise, and results experienced at Lumière." },
  pricing: { key: "pricing", title: "Treatment Pricing", description: "Transparent dental treatment fees, written estimates, insurance support, and flexible payment options." },
  insurance: { key: "insurance", title: "Dental Insurance", description: "Get help understanding benefits, verifying coverage, submitting claims, and planning dental treatment costs." },
  blog: { key: "blog", title: "Dental Health Journal", description: "Clinician-reviewed guidance about implants, orthodontics, children’s dentistry, prevention, and smile care." },
  faq: { key: "faq", title: "Frequently Asked Questions", description: "Answers about appointments, emergencies, anxiety, insurance, pricing, payments, and your first visit." },
  contact: { key: "contact", title: "Contact the Clinic", description: "Contact Lumière Dental Atelier in Hydra, Algiers. Call, message, get directions, or request an appointment." },
  "book-appointment": { key: "book-appointment", title: "Book a Dental Appointment", description: "Choose your treatment, dentist, date, and live available appointment time online in under two minutes." },
  "patient-portal": { key: "patient-portal", title: "Patient Portal", description: "Secure access to appointments, treatment plans, records, invoices, prescriptions, insurance, and messages." },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: `${page.title} | Lumière Dental Atelier`, description: page.description, url: `/${slug}` },
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <ClinicSite pageKey={page.key}/>;
}
