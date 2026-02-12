import type { CaseStudyItem } from "../types/case-study";

import cups from "../assets/images/caffeine.webp";
import audio from "../assets/images/audio-feature.webp";
import phones from "../assets/images/phones.webp";
import packages from "../assets/images/packages.webp";
import interior from "../assets/images/interior.webp";
import cream from "../assets/images/cream.webp";
import solaris from "../assets/images/solaris.webp";
import fragrance from "../assets/images/fragrance.webp"
import akira from "../assets/images/akira-logo.webp";


export const caseStudies: CaseStudyItem[] = [
  {
    id: "caffeine",
    title: "Caffeine",
    category: "Branding",
    year: "2026",
    image: cups,
  },
  {
    id: "audio-feature",
    title: "Daft Punk",
    category: "Branding",
    year: "2025",
    image: audio,
  },
  {
    id: "phones",
    title: "Phone Identity",
    category: "Branding",
    year: "2026",
    image: phones,
  },
  {
    id: "packages",
    title: "Package System",
    category: "Branding",
    year: "2024",
    image: packages,
  },
  {
    id: "interior",
    title: "Interior Studio",
    category: "Branding",
    year: "2025",
    image: interior,
  },
  {
    id: "cream",
    title: "Cream Co.",
    category: "Branding",
    year: "2026",
    image: cream,
  },
  {
    id: "solaris",
    title: "Solaris",
    category: "Branding",
    year: "2025",
    image: solaris,
  },
  {
    id: "fragrance",
    title: "Fragrance Lab",
    category: "Branding",
    year: "2024",
    image: fragrance,
  },
  {
    id: "akira",
    title: "Akira",
    category: "Branding",
    year: "2026",
    image: akira,
  },
];
