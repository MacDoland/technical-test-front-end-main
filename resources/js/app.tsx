import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Farms from "./pages/Farms";
import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/errors/PageNotFound";
import Farm from "./pages/Farm";
import Turbines from "./pages/Turbines";

const app = document.getElementById("app") as HTMLElement;

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Welcome />} />
          <Route path="farms" element={<Farms />} />
          <Route path="farm">
            <Route path=":id" element={<Farm />} />
          </Route>
          <Route path="turbines" element={<Turbines />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
