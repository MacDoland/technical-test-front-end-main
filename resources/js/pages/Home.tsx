// TODO: extract types to dts file

interface Farm {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
}

interface Turbine {
  id: number;
  farm_id: number;
  name: string;
  lat: string;
  lng: string;
}

interface FarmWithTurbines extends Farm {
  turbines: Turbine[];
}

interface LatLng {
  lat: number;
  lng: number;
}

interface HomeModel {
  farms: {
    data: Farm[];
  };
  turbines: {
    data: Turbine[];
  };
}

const Home: React.FC<HomeModel> = (props: HomeModel) => {
  // TODO: Explore just doing this in the controller
  const { farms, turbines } = props;
  const farmTurbines = (farmId: number): Turbine[] => {
    return turbines.data.filter(turbine => turbine.farm_id === farmId);
  };
  const turbinesByFarm = farms.data.map((farm): FarmWithTurbines => {
    return {
      ...farm,
      turbines: [...farmTurbines(farm.id)],
    };
  });

  // Assumption: that in the absence of a lat/lng position for a farm that any turbine lat/lng will suffice for that farm
  const getLatLng = (windTurbines: Turbine[]): LatLng | null => {
    if (Array.isArray(windTurbines) && windTurbines.length > 0) {
      return {
        lat: parseFloat(windTurbines[0].lat),
        lng: parseFloat(windTurbines[0].lng),
      };
    }

    return null;
  };

  return (
    <>
      <h1>Farms</h1>
      {turbinesByFarm.map(farm => {
        const farmLatLng = getLatLng(farm.turbines);

        return (
          <div key={farm.id}>
            {farm.name} {farmLatLng?.lat} {farmLatLng?.lng}
          </div>
        );
      })}
    </>
  );
};

export default Home;
