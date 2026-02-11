import { useState } from "react";
import { faqs } from "../../config/faqs";
import { Plus } from 'lucide-react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <section id="faqs" className="w-full max-w-7xl mx-auto py-20 rounded-4xl font-instrument flex flex-col lg:flex-row">
            <div className="px-6">
                <h2 className="text-5xl text-white pb-10 lg:min-w-[45%]">Frequently<br /> 
                    <span className="text-white/60">Asked Questions</span>
                </h2>
                <p className="text-sm text-white/60 max-w-md pb-10 text-left">
                        Have questions? Our FAQ section has you covered with 
                        quick answers to the most common inquiries..
                </p>
            </div>

            <div className="w-full flex flex-col items-center gap-6 transition-all">
                {faqs.map((faq, index) => { 
                    const isOpen = activeIndex === index;
                    return (
                        <div key={index} className="bg-subtle w-[90%] flex flex-col gap-2 p-6 rounded-4xl overflow-hidden">
                            <button 
                                onClick={() => setActiveIndex(isOpen ? null : index)}
                                className="w-full flex justify-between items-center text-left"
                                >
                                    <h3 className="w-[85%] text-lg text-white font-medium">{faq.question}</h3>
                                    <div className="size-10 rounded-full bg-subtle flex justify-center items-center shadow-(--my-shadow) cursor-pointer">
                                        <Plus className={`transition-transform text-white ${isOpen ? "rotate-45" : ""}`} />
                                    </div>
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${
                                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4"
                                           : "grid-rows-[0fr] opacity-0" }`}
                            >
                                <p className="overflow-hidden text-white/60">{faq.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
};
