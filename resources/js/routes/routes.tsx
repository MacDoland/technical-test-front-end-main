import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Welcome from "../pages/Welcome";
import Farm from "../pages/Farm";
import Farms from "../pages/Farms";
import Turbines from "../pages/Turbines";
import Turbine from "../pages/Turbine";
import Inspections from "../pages/Inspections";
import PageNotFound from "../pages/errors/PageNotFound";
import ComponentTypes from "../pages/ComponentTypes";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Welcome />} />
          <Route path="farms">
            <Route path="" element={<Farms />} />
            <Route path=":id" element={<Farm />} />
          </Route>
          <Route path="turbines">
            <Route path="" element={<Turbines />} />
            <Route path=":id" element={<Turbine />} />
          </Route>
          <Route path="inspections">
            <Route path="" element={<Inspections />} />
          </Route>
          <Route path="component-types">
            <Route path="" element={<ComponentTypes />} />
            {/* <Route path=":id" element={<ComponentType />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
