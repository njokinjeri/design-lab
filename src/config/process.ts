import type { ProcessStep } from '../types/process';
import { MailCheck, PackageOpen, SlidersHorizontal  } from 'lucide-react';

export const processSteps: ProcessStep[] = [
  {
    id: "subscribe",
    title: "Subscribe",
    description: "Subscribe to a plan that fits your needs and request as many designs as you want.",
    icon: MailCheck,
    borderColor: "border-l-blue-500",
  },
  {
    id: "receive",
    title: "Receive",
    description: "Receive your design within 1–3 business days depending on complexity.",
    icon: PackageOpen,
    borderColor: "border-l-green-500",
  },
  {
    id: "revise",
    title: "Revise",
    description: "Unlimited feedback changes until you are 200% happy. There are no limits.",
    icon: SlidersHorizontal,
    borderColor: "border-l-orange-500",
  },
];