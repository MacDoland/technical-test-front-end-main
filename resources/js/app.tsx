import React from "react";
import { AsyncBoundary, CacheProvider } from "@rest-hooks/react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import Loading from "./pages/Loading";
import Layout from "./components/Layout";

const app = document.getElementById("app") as HTMLElement;

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CacheProvider>
        <BrowserRouter>
          <Layout>
            <AsyncBoundary fallback={<Loading />}>
              <AppRoutes />
            </AsyncBoundary>
          </Layout>
        </BrowserRouter>
      </CacheProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
