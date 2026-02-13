import { useState } from "react";
import { X, Menu } from 'lucide-react';
import NavLink from "./NavLink";
import NavCTA from "../ui/NavCTA";
import type { NavItem } from "../../types/nav";
import Logo from "../ui/Logo";


type NavMobileProps = {
  items: NavItem[];
};

export default function NavMobile({ items }: NavMobileProps) {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <nav className="w-full p-4 bg-dark-gray rounded-full flex justify-between items-center text-white lg:hidden relative z-50">
            <Logo />
            <button onClick={() => setOpen(!open)} className="relative z-50">
                {open ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div 
                className={`absolute top-full left-0 mt-4 w-full bg-dark-gray rounded-4xl shadow-lg overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] grid ${
                    open ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
                <div className="min-h-0">
                    <div className="p-4">
                        <ul className="flex flex-col gap-6 py-6">
                            {items.map((item, i) => (
                                <li 
                                    key={item.href} 
                                    style={{ transitionDelay: open ? `${i * 75}ms` : '0ms' }}
                                    className={`text-4xl font-light text-white transition-all duration-500 ${
                                        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                >
                                    <NavLink item={item} onClick={() => setOpen(false)}/>
                                </li>
                            ))}
                        </ul>
                        <div className={`pb-10 transition-all duration-700 delay-300 ${open ? "opacity-100" : "opacity-0"}`}>
                            <NavCTA />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
