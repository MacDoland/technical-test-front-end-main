import { Outlet, NavLink } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink end to="/farms">
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
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
