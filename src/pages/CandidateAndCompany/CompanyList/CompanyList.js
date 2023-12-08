import React from "react";
import { Container } from "reactstrap";
import CompanyDetails from "./CompanyDetails";
import Section from "./Section";

const CompanyList = () => {
  document.title = "Company List | NextGenJob - Code Canva Team | NextGenJob";
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
