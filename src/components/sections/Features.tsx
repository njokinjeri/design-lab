import { features } from '../../config/features';
import { ArrowRight } from 'lucide-react';
import heroGradient from "../../assets/abstract/hero-gradient.webp";

export default function Features() {
    return (
        <section id="features" className="w-[90%] max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 font-instrument text-white mb-20">
            <h2 className="text-5xl">Why DesignLab</h2>
            <section className="w-full">
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.id} className="h-80 bg-subtle rounded-4xl p-8 pb-16 flex flex-col justify-between">
                                <div className="size-14 rounded-full bg-neon flex items-center justify-center">
                                    <Icon className="text-black"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-white/60">{feature.number}</span>
                                    <h3 className="text-4xl text-white/80">{feature.title}</h3>
                                    <p className="text-white/60">{feature.description}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="h-80 bg-subtle flex flex-col justify-between rounded-4xl p-8 
                                relative overflow-hidden group">
                        <img src={heroGradient} 
                            alt="hero gradient" 
                            className="w-full h-full object-cover absolute inset-0
                                    transform scale-100 transition-transform duration-700 
                                    ease-out group-hover:scale-125" 
                        />
                        <h3 className="relative z-50 text-white/80  text-4xl text-center">Get started today</h3>
                        <div>
                            <button id="plans" 
                                className="w-full bg-neon text-black flex justify-center items-center py-3 px-6 rounded-full relative z-50 cursor-pointer
                                         hover:bg-light-orange hover:text-white transition-all"
                                >See Plan <ArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
};

