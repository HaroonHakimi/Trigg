import React from "react";
import Nav from "./nav";
import Hero from "./hero";
import CallToAction from "./call-to-action";
import Footer from "./footer";
import Testimonials from "./testiomonials";
import Introduction from "./introduction";
import Showcase from "./showcase";
import Pricing from "./pricing";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <Introduction/>
      <Testimonials />
      <Showcase/>
      <Pricing/>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
