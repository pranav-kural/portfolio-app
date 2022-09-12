import type { NextPage } from "next";
import AboutComponent from "../components/about";
import CareerComponent from "../components/career";
import EducationComponent from "../components/education";

import HeaderComponent from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
      <AboutComponent />
      <EducationComponent />
      <CareerComponent />
    </div>
  );
};

export default Home;
