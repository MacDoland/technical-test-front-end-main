import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Welcome: React.FC = () => {
  return (
    <>
      <h1 className="text-white text-xl">Welcome</h1>
      <Helmet>
        <title>Cyberhawk - technical-test-front-end</title>
        <style>
          {`
  .background {
    background-image: url(/img/tim-van-der-kuip-d33hYz_iQEY-unsplash.jpg);
    background-size: cover;
  }
  `}
        </style>
      </Helmet>
    </>
  );
};

export default Welcome;
