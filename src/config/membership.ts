import type { Plan } from "../types/membership";
import { Gem, Rocket } from "lucide-react";

export const plans: Plan[] = [
    {
        icon: Rocket,
        name: "Standard",
        spotsLeft: "2 spots left",
        description: "Experience the power of collaboration and excellence.",
        monthly: 1800,
        yearly: 2000,
        features: [
            "One request at a time",
            "Average 24 hour delivery",
            "Unlimited design requests",
            "Unlimited brands",
            "Pause or cancel anytime",
            "Lightning fast delivery"
        ]
    },
    {
        icon: Gem,
        name: "Pro",
        spotsLeft: "1 spot left",
        description: "Double the requests. Pause or cancel anytime.",
        monthly: 5000,
        yearly: 4800,
        features: [
            "Two requests at a time",
            "Average 24hr delivery",
            "Unlimited design requests",
            "Unlimited brands",
            "Pause or cancel anytime",
            "Lightning fast delivery"
        ]
    }
];