import type { NextPage } from "next";
import AboutComponent from "../components/about";
import EducationComponent from "../components/education";

import HeaderComponent from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <EducationComponent />
    </div>
  );
};

export default Home;
