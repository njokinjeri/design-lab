import appleBrand from "../../assets/partners/apple-icon.webp";
import XBrand from "../../assets/partners/x-icon.webp";
import grabBrand from "../../assets/partners/grab-icon.webp";
import vercelBrand from "../../assets/partners/vercel-icon.webp";
import framerBrand from "../../assets/partners/framer-icon.webp";
import linearBrand from "../../assets/partners/linear-icon.webp";
import notionBrand from "../../assets/partners/notion-icon.webp";
import shopifyBrand from "../../assets/partners/shopify-icon.webp";
import githubBrand from "../../assets/partners/github-icon.webp";

export default function Partners() {
  const brands = [appleBrand, XBrand, grabBrand, vercelBrand, framerBrand, linearBrand, notionBrand, shopifyBrand, githubBrand];

  return (
    <section className="w-full text-white mb-20 flex items-center gap-4 p-8">
        <h3 className="text-base text-white/40 tracking-wide shrink-0">Trusted by</h3>
        <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max gap-24">
                {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-24 animate-marquee will-change-transform">
                        {brands.map((logo, index) => (
                            <img 
                                key={`${setIndex}-${index}`}
                                src={logo} 
                                alt="Brand Logo" 
                                className="w-auto max-h-7 object-contain shrink-0 drop-shadow-lg drop-shadow-white/50"
                                draggable="false"
                            />
                        ))}
                    </div>
                ))}
            </div>
           
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent" />
        </div>
    </section>
  );
}

