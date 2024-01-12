import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./components/App";
import Farms from "./pages/Farms";
import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/errors/PageNotFound";
import Farm from "./pages/Farm";
import Turbine from "./pages/Turbine";
import Turbines from "./pages/Turbines";
import { WindFarmProvider } from "./providers/WindFarmProvider";

const app = document.getElementById("app") as HTMLElement;

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <WindFarmProvider>
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
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </WindFarmProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
