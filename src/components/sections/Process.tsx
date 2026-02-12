import React, { Suspense } from 'react';
import { processSteps } from "../../config/process";
import { ArrowRight } from 'lucide-react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Process() {
    return (
        <section id="process" className="max-w-7xl mx-auto text-white font-instrument mb-20">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl tracking-wide">How to get started </h2>
                    <p className="text-sm text-white/80 text-center">Conventional design has been shown the door; <br />
                        the design you crave has just made its appearance.
                    </p>
                </div>
                 <button 
                    id="plans" 
                    className="w-40 bg-neon text-black flex items-center justify-center gap-4 py-3
                            hover:bg-light-orange hover:text-white transition-all rounded-full"
                 >See Plan <ArrowRight />
                 </button>
            </div>

            <div className="flex flex-col items-center lg:flex-row-reverse pt-10">
                <div className="hidden lg:block w-full h-140" >
                    <Suspense fallback={null}>
                        <Spline scene="https://prod.spline.design/25TjFZQV6HRFMQ2W/scene.splinecode" />
                    </Suspense>
                </div>
                <div className="flex flex-col gap-6 px-6">
                    {processSteps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div 
                                key={step.id} 
                                className={`flex flex-col gap-2 px-4 py-6 bg-dark-gray shadow-(--billing-shadow)
                                            hover:border-l border-transparent transition-all 
                                            ${step.borderColor}
                                `}>
                                <Icon className="text-white/40"/>
                                <h3 className="text-4xl text-white/80">{step.title}</h3>
                                <p className="text-base text-white/60">{step.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};
