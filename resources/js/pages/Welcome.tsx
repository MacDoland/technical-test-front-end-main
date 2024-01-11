import { Helmet } from "react-helmet-async";

const Welcome: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Helmet>
        <title>Cyberhawk - technical-test-front-end</title>
      </Helmet>
    </>
  );
};

export default Welcome;
