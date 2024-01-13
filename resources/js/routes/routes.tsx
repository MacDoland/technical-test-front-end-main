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
import Inspection from "../pages/Inspection";
import Grades from "../pages/Grades";
import Grade from "../pages/Grade";
import Components from "../pages/Components";
import GradeTypes from "../pages/GradeTypes";
import GradeType from "../pages/GradeType";
import ComponentType from "../pages/ComponentType";
import Component from "../pages/Component";
import TurbinesFarm from "../pages/TurbinesFarm";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Welcome />} />
          <Route path="farms">
            <Route path="" element={<Farms />} />
            <Route path=":id" element={<Farm />} />
            <Route path=":id/turbines/" element={<TurbinesFarm />} />
            <Route path=":farmId/turbines/:id" element={<Turbine />} />
          </Route>
          <Route path="turbines">
            <Route path="" element={<Turbines />} />
            <Route path=":id" element={<Turbine />} />
          </Route>
          <Route path="components">
            <Route path="" element={<Components />} />
            <Route path=":id" element={<Component />} />
          </Route>
          <Route path="inspections">
            <Route path="" element={<Inspections />} />
            <Route path=":id" element={<Inspection />} />
          </Route>
          <Route path="grades">
            <Route path="" element={<Grades />} />
            <Route path=":id" element={<Grade />} />
          </Route>
          <Route path="component-types">
            <Route path="" element={<ComponentTypes />} />
            <Route path=":id" element={<ComponentType />} />
          </Route>
          <Route path="grade-types">
            <Route path="" element={<GradeTypes />} />
            <Route path=":id" element={<GradeType />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
