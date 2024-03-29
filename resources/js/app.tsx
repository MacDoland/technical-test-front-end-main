import React from "react";
import {
  AsyncBoundary,
  CacheProvider,
  NetworkErrorBoundary,
} from "@rest-hooks/react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import AppRoutes from "./routes/routes";
import Loading from "./pages/Loading";
import Layout from "./layouts/Layout";
import ErrorPage from "./pages/errors/ErrorPage";

interface AuthSettings {
  authName: string;
  authType: string;
  cookieDomain: string;
  cookieSecure: boolean;
}

const store = createStore<AuthSettings>({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:",
});

const app = document.getElementById("app") as HTMLElement;

const root = createRoot(app);

root.render(
  <React.StrictMode>
    <AuthProvider store={store}>
      <HelmetProvider>
        <CacheProvider>
          <NetworkErrorBoundary fallbackComponent={ErrorPage}>
            <BrowserRouter>
              <Layout>
                <AsyncBoundary fallback={<Loading />}>
                  <AppRoutes />
                </AsyncBoundary>
              </Layout>
            </BrowserRouter>
          </NetworkErrorBoundary>
        </CacheProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
