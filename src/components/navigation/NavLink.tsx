import type { NavItem } from "../../types/nav";

type NavLinkProps = {
  item: NavItem;
  onClick?: () => void;
};

export default function NavLink({ item, onClick }: NavLinkProps) {
  return (
    <a
        href={item.href}
        onClick={onClick}
        className="hover:text-light-orange transition-colors"
    >
        {item.label}
    </a>
  );
}
