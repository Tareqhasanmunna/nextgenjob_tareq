import React from "react";
import { Container } from "reactstrap";
import CompanyDetails from "./CompanyDetails";
import Section from "./Section";

const CompanyList = () => {
  document.title = "Company List | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <CompanyDetails />
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyList;
