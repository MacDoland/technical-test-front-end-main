import React from "react";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/routes";

const app = document.getElementById("app") as HTMLElement;

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CacheProvider>
        <AsyncBoundary>
          <AppRoutes />
        </AsyncBoundary>
      </CacheProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
