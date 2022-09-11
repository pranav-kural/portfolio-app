import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import HeaderComponent from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

export default Home;
