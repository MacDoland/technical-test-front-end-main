import React from "react";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
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
import Inspections from "./pages/Inspections";

const app = document.getElementById("app") as HTMLElement;

const root = createRoot(app);

// TODO: refactor/extract BrowserRouter section as it is quite noisey

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CacheProvider>
        <WindFarmProvider>
          <AsyncBoundary>
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
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </AsyncBoundary>
        </WindFarmProvider>
      </CacheProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
