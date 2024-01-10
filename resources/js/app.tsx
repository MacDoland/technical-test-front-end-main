import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Farms from "./pages/Farms";
import Welcome from "./pages/Welcome";
import PageNotFound from "./pages/errors/PageNotFound";
import Farm from "./pages/Farm";

const app = document.getElementById("app");

if (app) {
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
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
