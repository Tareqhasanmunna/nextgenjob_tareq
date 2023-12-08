import React from "react";
import Jobcatogaries from "../Home/jobCatogaries";
import JobList from "./JobList/jobList";
import HowItWorks from "./HowItWorks";
import Cta from "./Cta";
import Testimonal from "./Testimonal";
import Blog from "../Home/Blog";
import Client from "./Client";
import Layout2 from "./Layout2/Layout2";

const Home = () => {
  return (
    <React.Fragment>
      <Layout2/>
      <Jobcatogaries />
      <JobList />
      <HowItWorks />
      <Cta />
      <Testimonal />
      {/* <Blog /> */}
      <Client />
    </React.Fragment>
  );
};

export default Home;
