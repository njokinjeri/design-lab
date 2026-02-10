import Logo from "../ui/Logo";
import footerIcon from "/favicon.svg"
import Socials from "../ui/Socials";
import { footerSections } from "../../config/footerLinks.config.ts";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-300/20 font-instrument">
            <section className="max-w-7xl mx-auto p-6 py-10 flex flex-col md:flex-row md:justify-between md: items-start gap-8">
                <div className="flex flex-col gap-4 justify-center">
                    <img src={footerIcon} alt="footer icon" className="w-10" />
                    <Logo />
                </div>

                {footerSections.map((section) => (
                    <div key={section.title} className="text-white">
                        <h3 className="text-lg font-bold pb-2">{section.title}</h3>
                        <ul className="flex flex-col gap-3 text-white/40">
                            {section.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-dark-orange"> {link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="text-white">
                    <h3 className="text-lg font-bold pb-2">Socials</h3>
                    <Socials />
                </div>
            </section>
            <section className="flex flex-col items-center gap-4 py-6 text-white/50">
              <div className="w-full max-w-7xl h-px bg-gray-300/10 mb-2"></div>
                <div className="flex items-center gap-4">
                    <h4 className="cursor-pointer hover:text-white/70">Terms & Conditions</h4>
                    <div className="w-px h-6 bg-gray-300/20"></div>
                    <h4 className="cursor-pointer hover:text-white/70">Privacy Policy</h4>
                </div>
                <h4 className="hover:text-dark-orange">&copy; 2026 Design Lab</h4>
            </section>
        </footer>
    )
};
