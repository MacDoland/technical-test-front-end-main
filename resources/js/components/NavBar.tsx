import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="flex bg-teal-700 text-white font-bold sticky top-0">
      <NavLink end to="/" className="">
        <img
          alt="Logo - spinning wind turbine"
          className="w-12 h-12 m-2"
          src="./img/wind-turbine-sm.gif"
        />
      </NavLink>
      <div className="flex gap-4 p-4 bold items-center">
        <NavLink className="font-bold" end to="/farms">
          Farms
        </NavLink>
        <NavLink end to="/turbines">
          Turbines
        </NavLink>
        <NavLink end to="/components">
          Components
        </NavLink>
        <NavLink end to="/inspections">
          Inspections
        </NavLink>
        <NavLink end to="/grades">
          Grades
        </NavLink>
        <NavLink end to="/component-types">
          Component Types
        </NavLink>
        <NavLink end to="/grade-types">
          Grade Types
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
