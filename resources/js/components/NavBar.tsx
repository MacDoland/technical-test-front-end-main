import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerButton from "./HamburgerButton";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }: NavBarProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = (isOpen: boolean): void => {
    setShowMenu(isOpen);
  };
  const closeMenu = (): void => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-teal-700">
      <div
        className={`flex gap-4 bg-teal-700 text-white boldtop-0 justify-between md:justify-start ${className}`}>
        <NavLink end to="/" className="">
          <img
            alt="Logo - spinning wind turbine"
            className="w-12 h-12 m-2"
            src="/img/wind-turbine-sm.gif"
          />
        </NavLink>
        <ul className="flex gap-4 p-4 bold items-center hidden md:flex">
          <li>
            <NavLink className="bold" end to="/farms">
              Farms
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" end to="/turbines">
              Turbines
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" end to="/components">
              Components
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" end to="/inspections">
              Inspections
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" end to="/grades">
              Grades
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" end to="/component-types">
              Component Types
            </NavLink>
          </li>
          <li>
            <NavLink className="bold" end to="/grade-types">
              Grade Types
            </NavLink>
          </li>
        </ul>
        <HamburgerButton
          isOpen={showMenu}
          onToggle={toggleMenu}
          className="md:hidden mr-4"
        />
      </div>
      {showMenu ? (
        <ul className="flex gap-4 p-4 bolditems-center flex-col text-white md:hidden">
          <li>
            <NavLink onClick={closeMenu} className="bold" end to="/farms">
              Farms
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} end to="/turbines">
              Turbines
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} end to="/components">
              Components
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} end to="/inspections">
              Inspections
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} end to="/grades">
              Grades
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} end to="/component-types">
              Component Types
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} end to="/grade-types">
              Grade Types
            </NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

NavBar.defaultProps = {
  className: "",
};

export default NavBar;
