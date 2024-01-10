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
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
