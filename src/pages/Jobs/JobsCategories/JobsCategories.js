import React from "react";
import Categories from "./Categories";
import Section from "./Section";

const JobsCategories = () => {
  document.title =
    "Job Categories | NextGenJob - Code Canva Team | NextGenJob";
  return (
    <React.Fragment>
      <Section />
      <Categories />
    </React.Fragment>
  );
};

export default JobsCategories;
