import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, NavLink } from "react-router-dom";
const App = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { children: [_jsx(NavLink, { end: true, to: "/", children: "Home" }), _jsx(NavLink, { end: true, to: "/farms", children: "Farms" })] }), _jsx("main", { children: _jsx(Outlet, {}) })] }));
};
export default App;
