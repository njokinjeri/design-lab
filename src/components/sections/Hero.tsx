import heroGradient from "../../assets/abstract/hero-gradient.webp";
import heroDashboard from "../../assets/Design dashboard.webp";
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative w-full h-120 p-8 flex items-center bg-transparent font-instrument text-white mb-10 overflow-hidden">
            <img 
                src={heroGradient} 
                alt="hero gradient" 
                className="absolute w-full h-full max-w-300 object-cover rounded-4xl  bottom-0 left-1/2 -translate-x-1/2"
            />
            <div className="w-full relative flex flex-col items-center gap-4 lg:items-start">
                <div className="flex flex-col items-center gap-4 lg:items-start">
                    <h2 className="text-4xl sm:text-6xl">Design by <br /> Drag & Drop</h2>
                    <p>Design subscriptions for every brand. <br />
                        Pause or cancel anytime.
                    </p>
                </div>
                    <a 
                        href="#plans" 
                        className="w-40 bg-neon text-black flex items-center justify-center gap-4 py-3
                            hover:bg-light-orange hover:text-white transition-all rounded-full"
                        >See Plan <ArrowRight />
                    </a>
            </div>
            <div className="hidden lg:block w-full relative">
                <img 
                    src={heroDashboard} 
                    alt="hero dashboard" 
                    className="w-full max-w-200 h-auto object-contain"
                />
            </div>
        </section>
    )
};
