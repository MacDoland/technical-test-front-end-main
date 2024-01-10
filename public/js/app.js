import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    root.render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsxs(Route, { path: "/", element: _jsx(App, {}), children: [_jsx(Route, { path: "/", element: _jsx(Welcome, {}) }), _jsx(Route, { path: "farms", element: _jsx(Farms, {}) }), _jsx(Route, { path: "farm", children: _jsx(Route, { path: ":id", element: _jsx(Farm, {}) }) })] }), _jsx(Route, { path: "*", element: _jsx(PageNotFound, {}) })] }) }) }));
}
