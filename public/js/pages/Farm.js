import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Farm = () => {
    const { id } = useParams();
    const [farm, setFarm] = useState();
    useEffect(() => {
        axios.get(`/api/farms/${id}`).then(response => {
            if (response && response.data) {
                setFarm(response.data.data);
            }
        });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Farms" }), farm && _jsx("div", { children: farm.name })] }));
};
export default Farm;
