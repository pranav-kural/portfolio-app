import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import TotopButton from "../components/totop";

const Home: NextPage = () => {
  const propss = {
    suppressHydrationWarning: true,
  };

  const Header = dynamic(() => import("../components/header"), {
    ssr: false,
  });

  const About = dynamic(() => import("../components/about"), {
    ssr: false,
  });

  const Education = dynamic(() => import("../components/education"), {
    ssr: false,
  });

  const Career = dynamic(() => import("../components/career"), {
    ssr: false,
  });

  const Skills = dynamic(() => import("../components/skills"), {
    ssr: false,
  });

  const Contact = dynamic(() => import("../components/contact"), {
    ssr: false,
  });

  const Footer = dynamic(() => import("../components/footer"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>Pranav&rsquo;s Portfolio</title>
        <meta property="og:title" content="Pranav's Portfolio" key="title" />
      </Head>
      <div>
        <Header />
        <About />
        <Education />
        <Career />
        <Skills />
        <Contact />
        <Footer />
        <TotopButton />
      </div>
    </>
  );
};

export default Home;
