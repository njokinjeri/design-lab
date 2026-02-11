import type { LucideIcon } from "lucide-react";

export type Billing = "monthly" | "yearly";

export type Plan = {
    icon: LucideIcon;
    name: string;
    spotsLeft: string;
    description: string;
    monthly: number;
    yearly: number;
    features: string[];
};