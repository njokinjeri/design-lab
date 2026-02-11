import { useState } from "react";
import type { Billing } from "../../types/membership";
import { plans } from "../../config/membership";
import { ArrowRight } from 'lucide-react';
import { Timer } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import ctaGradient from "../../assets/abstract/Gradient.webp"


export default function Membership() {
      const [billing, setBilling] = useState<Billing>("yearly");

    return (
        <section className="w-[90%] max-w-7xl mx-auto text-white font-instrument">
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-5xl">Memberships</h2>
                <p className="text-white/60">Flexible pricing designed to scale with your needs.</p>
                <div className="inline-flex bg-white/10 rounded-full shadow-(--billing-shadow)">
                    <button onClick={() =>setBilling("monthly")}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                                billing === "monthly"
                                        ? "bg-white text-black"
                                        : "text-white/70 hover:text-white"
                }`}
                    >Monthly</button>
                    <button onClick={() => setBilling("yearly")}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                        billing === "yearly"
                                ? "bg-white text-black"
                                : "text-white/70 hover:text-white"
                        }`}
                    >Yearly</button>
                </div>
            </div>
            <section className="w-full flex flex-col gap-8 xl:flex-row pt-16">
                <div className="flex flex-col gap-8  xl:md:w-[70%]">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        return (
                            <div key={plan.name} className="bg-subtle h-170 flex flex-col justify-between border border-white/10 rounded-[8vw] md:rounded-[4vw] overflow-hidden
                                                            md:h-100 md:flex-row md:items-center">
                                <div className="flex flex-col">
                                    <div className="relative flex flex-col gap-3 py-8 px-6">
                                        <div className="size-10 rounded-full bg-neon flex items-center justify-center">
                                            <Icon className="text-black"/>
                                        </div>
                                        <h3 className="text-3xl text-white/80">{plan.name}</h3>
                                        <p className="inline-flex items-center gap-1 text-sm text-white/60 absolute right-6 top-[46%]">
                                            <Timer className="text-white/80"/>
                                            {plan.spotsLeft}
                                        </p>
                                        <p className="text-sm text-white/50">{plan.description}</p>
                                    </div>
                                    <div className="flex items-center gap-2 py-8 px-6">
                                        <span className="text-6xl font-bold text-white">${billing === "monthly" ? plan.monthly : plan.yearly}</span>
                                        <span className="text-white/80 text-sm"> / month</span>
                                    </div>

                                    <button className="w-[80%] py-2 mb-8 bg-neon self-center text-black/80 flex justify-center items-center gap-2 rounded-full
                                                    hover:bg-light-orange hover:text-white transition-all"
                                    >Get started <ArrowRight />
                                    </button>
                                </div>
                                <div className="w-full h-[45%] p-4 flex flex-col gap-4 bg-dark-gray md:w-1/2 md:h-full md:justify-center md:pl-10">
                                    <h3 className="text-3xl">What's included</h3>
                                    <ul className="flex flex-col gap-2">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex gap-2 text-sm text-white/60">
                                                <BadgeCheck className="text-light-orange"/>
                                                    {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full relative h-72 flex flex-col justify-center items-center border 
                            border-white/10 rounded-[8vw] md:rounded-[4vw] overflow-hidden 
                            xl:md:w-[30%] xl:h-120 xl:justify-between xl:py-10">
                    <img src={ctaGradient} alt="cta gradient" className="w-full h-full absolute top-0 rotate-180" />
                    <div className="px-6 z-50 flex flex-col gap-2 py-6">
                        <h3 className="text-4xl text-white/80">Need Custom Pricing?</h3>
                        <p className="text-sm text-white/70">Let’s discuss your needs and tailor a solution that works for you.</p>
                    </div>
                    <button className="w-[80%] flex justify-center items-center gap-3 py-3 px-6 
                                    bg-white text-black rounded-full z-50
                                    hover:bg-light-orange hover:text-white transition-all"
                    >
                        Set Calendar
                        <ArrowRight />
                    </button>
                </div>
            </section>
        </section>
    )
};

