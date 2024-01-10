import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const Home = (props) => {
    // TODO: Explore just doing this in the controller
    const { farms, turbines } = props;
    const farmTurbines = (farmId) => {
        return turbines.data.filter(turbine => turbine.farm_id === farmId);
    };
    const turbinesByFarm = farms.data.map((farm) => {
        return Object.assign(Object.assign({}, farm), { turbines: [...farmTurbines(farm.id)] });
    });
    // Assumption: that in the absence of a lat/lng position for a farm that any turbine lat/lng will suffice for that farm
    const getLatLng = (windTurbines) => {
        if (Array.isArray(windTurbines) && windTurbines.length > 0) {
            return {
                lat: parseFloat(windTurbines[0].lat),
                lng: parseFloat(windTurbines[0].lng),
            };
        }
        return null;
    };
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: "Farms" }), turbinesByFarm.map(farm => {
                const farmLatLng = getLatLng(farm.turbines);
                return (_jsxs("div", { children: [farm.name, " ", farmLatLng === null || farmLatLng === void 0 ? void 0 : farmLatLng.lat, " ", farmLatLng === null || farmLatLng === void 0 ? void 0 : farmLatLng.lng] }, farm.id));
            })] }));
};
export default Home;
