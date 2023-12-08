import React from "react";
import Home from "../Home";
import Section from "../Layout2/Section";

const Layout2 = () => {
  document.title = "Home | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <Home />
    </React.Fragment>
  );
};
export default Layout2;
