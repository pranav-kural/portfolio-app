import type { NextPage } from "next";
import AboutComponent from "../components/about";

import HeaderComponent from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
    </div>
  );
};

export default Home;
