import React from "react";
import { Container } from "reactstrap";
import JobFilters from "../CandidateList/JobFilters";
import CandidateGridDetails from "./CandidateGridDetails";
import Section from "./Section";
import Pagination from "../../Jobs/JobList2/Pagination";

const CandidateGrid = () => {
  document.title =
    "Candidate Grid | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <JobFilters />
          <CandidateGridDetails />
          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateGrid;
