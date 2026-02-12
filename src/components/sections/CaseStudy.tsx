import { caseStudies } from "../../config/casestudies.ts";

export default function CaseStudy() {
    return (
        <section className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 font-instrument mb-20">
            <div className="w-[90%] max-w-xl py-6 rounded-2xl bg-dark-gray text-white text-center hover:md:max-w-2xl">
                <h2 className="text-3xl">Made by DesignLab </h2>
            </div>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 px-4 py-4">
                {caseStudies.map((item) => (
                    <div key={item.id} className="relative overflow-hidden rounded-4xl cursor-pointer group">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="w-full h-24 absolute top-0 left-0 bg-linear-to-b from-black/80 via-black/50 to-transparent transition-all duration-500 p-6 flex flex-col gap-2">
                            <div className="flex justify-between text-sm text-white transform -translate-y-6 opacity-0 transition-all duration-500
                                            group-hover:translate-y-0 group-hover:opacity-100">
                                <span>{item.category}</span>
                                <span>{item.year}</span>
                            </div>
                            <span className="text-white text-3xl font-medium transform -translate-y-6 opacity-0 transition-all duration-500
                                            group-hover:translate-y-0 group-hover:opacity-100" 
                            >{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};
