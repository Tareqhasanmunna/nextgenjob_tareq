import React from "react";
import About from "../../../pages/Company/AboutUs/About";
import Section from "../../../pages/Company/AboutUs/Section";
import Counter from "../../../pages/Company/AboutUs/Counter";
import Features from "../../../pages/Company/AboutUs/Features";
import Cta from "../../../pages/Company/AboutUs/Cta";
import Faqs from "../Faqs/Faqs";
import Team from "../Team/Team";

const AboutUs = () => {
  document.title = "About Us | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <About />
      <Counter />
      <Features />
      <Team/>
      <Cta />
      <Faqs/>
    </React.Fragment>
  );
};

export default AboutUs;
