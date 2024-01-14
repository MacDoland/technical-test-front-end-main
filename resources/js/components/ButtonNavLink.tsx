import { NavLink, type NavLinkProps } from "react-router-dom";

const ButtonNavLink: React.FC<NavLinkProps> = ({
  children,
  to,
}: NavLinkProps) => {
  return (
    <NavLink
      className="text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-teeak-700 dark:hover:bg-teal-900 focus:outline-none dark:focus:ring-blue-800"
      to={to}>
      {children}
    </NavLink>
  );
};

export default ButtonNavLink;
