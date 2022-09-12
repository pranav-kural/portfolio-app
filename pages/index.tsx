import type { NextPage } from "next";
import dynamic from "next/dynamic";

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

  const Contact = dynamic(() => import("../components/contact"), {
    ssr: false,
  });

  const Footer = dynamic(() => import("../components/footer"), {
    ssr: false,
  });

  return (
    <div>
      <Header />
      <About />
      <Education />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
