import { List, PencilRuler, BadgeDollarSign } from 'lucide-react';
import type { Feature } from '../types/features';

export const features: Feature[] = [
    {
        id: "track-task",
        number: "01",
        title: "Track your task",
        description: "Add unlimited design requests to your board.",
        icon: List,
    },
    {
        id: "custom-made",
        number: "02",
        title: "Custom made",
        description: "Ensure consistent product aesthetics with every design.",
        icon: PencilRuler,
    },
    {
        id: "fixed-price",
        number: "03",
        title: "Fixed price",
        description: "No surprises! Pay a fixed monthly price.",
        icon: BadgeDollarSign,
    },
];