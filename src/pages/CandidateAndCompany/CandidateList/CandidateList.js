import React from "react";
import { Col, Container, Row } from "reactstrap";
import CandidateDetails from "./CandidateDetails";
import JobFilters from "./JobFilters";
import Section from "./Section";
import Pagination from "../../Jobs/JobList2/Pagination";

const CandidateList = () => {
  document.title =
    "Candidate List | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <JobFilters />
          <Row>
            <Col lg={12}>
              <CandidateDetails />
            </Col>
          </Row>
          <Pagination />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateList;
