import ctaGradient from "../../assets/abstract/Gradient.webp"

export default function MainCTA() {
    return (
        <section id="cta" className="relative w-[90%] min-h-75 max-w-7xl mx-auto font-instrument rounded-[4vw] overflow-hidden">
            <img src={ctaGradient} alt="cta gradient" className="w-full h-full absolute top-0 rotate-180" />
            <img src={ctaGradient} alt="cta gradient" className="w-full h-full absolute bottom-0" />
            <section className="relative flex flex-col items-center gap-4 py-10 px-6 z-10">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-5xl text-white">Let's <br /> Synergize</h2>
                    <p className="w-full max-w-lg text-sm text-white/60 md:text-base ">Traditional design has been shown the exit; the design you desire has just made it's debut.</p>
                </div>
                <form className="w-full max-w-xl flex flex-col gap-4 text-white relative md:block">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Your email..."
                        className="w-full bg-dark-gray border border-white/10 py-4 md:py-5 rounded-4xl text-white p-4
                                    focus:outline-none focus:ring-1 focus:ring-light-orange transition-all"
                    />
                    <button 
                        type="button" 
                        className="rounded-4xl py-4 px-8 bg-neon text-black font-medium
                                hover:bg-light-orange hover:text-white transition-all
                                md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:py-3
                                "
                        >Get notified
                    </button>
                </form>
            </section>
        </section>
    )
};
