import type { Metadata } from "next";
import ClinicSite from "./ClinicSite";

export const metadata: Metadata = {
  title: "Lumière Dental Atelier | Exceptional Modern Dentistry",
  description: "Advanced, comfort-first dentistry in Algiers. Book implants, Invisalign, cosmetic, family, preventive, and same-day emergency dental care online.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <ClinicSite pageKey="home"/>;
}
