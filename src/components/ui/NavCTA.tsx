import { ArrowRight } from 'lucide-react';

export default function navCta() {
    return (
        <>
            <a
                href="#plans"
                className="bg-neon text-black px-6 py-3 flex items-center justify-center gap-4 
                 hover:bg-light-orange hover:text-white rounded-full hover:drop-shadow-xl hover:drop-shadow-white/20 lg:hover:drop-shadow-white/40 transition-all"
            >
            See Plan <ArrowRight />
            </a>
        </>
    )
}