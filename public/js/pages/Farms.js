import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Farm = () => {
    const [farms, setFarms] = useState([]);
    useEffect(() => {
        axios.get("/api/farms").then(response => {
            if (response && response.data) {
                setFarms(response.data.data);
            }
        });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Farms" }), farms.map(farm => {
                return (_jsxs("div", { children: [_jsx("span", { children: farm.name }), _jsx(NavLink, { to: `/farm/${farm.id}`, children: "view" })] }, farm.id));
            })] }));
};
export default Farm;
