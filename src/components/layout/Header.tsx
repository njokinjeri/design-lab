import NavDesktop from "../navigation/NavDesktop";
import NavMobile from "../navigation/NavMobile";
import { navItems } from "../../config/navItems";

export default function Header() {
    return (
        <header className="sticky top-0 w-full flex items-center justify-between py-8 px-4 font-instrument z-100">        
            <NavDesktop items={navItems} />
            <NavMobile items={navItems} />
        </header>
    )
};
