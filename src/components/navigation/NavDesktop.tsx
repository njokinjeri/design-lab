import type { NavItem } from "../../types/nav";
import NavLink from "../navigation/NavLink";
import NavCTA from "../ui/NavCTA";
import Logo from "../ui/Logo";

type NavDesktopProps = {
    items: NavItem[];
};

export default function NavDesktop({ items }: NavDesktopProps) {
    return (
        <nav className="w-full py-3 px-4 bg-dark-gray rounded-full lg:flex justify-between items-center hidden">
            <Logo />
            <div className="flex gap-4">
                <ul className="flex items-stretch gap-8 text-sm text-white">
                    {items.map((item) => (
                        <li 
                            key={item.href} 
                            className="relative flex items-center px-6 text-base font-light cursor-pointer group
                                    
                            ">
                            <NavLink item={item} />
                                  <span className="absolute left-0 right-0 top-0 -bottom-3.5 bg-linear-to-t 
                                                from-light-orange/25 to-transparent 
                                                opacity-0 group-hover:opacity-100 
                                                transition-opacity duration-300 pointer-events-none" />
                                  <span className="absolute -bottom-3.5 left-0 w-full h-0.5 
                                  bg-light-orange opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300" />
                        </li>
                    ))}
                </ul>
                <NavCTA />
            </div>
        </nav>
    )
};
