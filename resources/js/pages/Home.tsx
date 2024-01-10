type Farm = {
  id: number;
  name: string;
  created_at: string;
  update_at: string;
};

type HomeModel = {
  errors: any;
  farms: {
    data: Farm[];
  };
};

export default function Farm(props: HomeModel) {
  const farms = props.farms.data;
  return (
    <>
      <h1>Farms</h1>
      {farms &&
        farms.map(farm => {
          return <div key={farm.id}>{farm.name}</div>;
        })}
    </>
  );
}
