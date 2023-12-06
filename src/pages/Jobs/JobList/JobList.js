import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Section from "../../Jobs/JobList/Section";
import JobSearchOptions from "./JobSearchOptions";
import JobVacancyList from "./JobVacancyList";
import Popular from "./Popular";
import Sidebar from "./Sidebar";

const JobList = () => {
  document.title = "Job List | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <JobSearchOptions />
                <Popular />
                <JobVacancyList />
              </div>
            </Col>
            <Sidebar />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobList;
