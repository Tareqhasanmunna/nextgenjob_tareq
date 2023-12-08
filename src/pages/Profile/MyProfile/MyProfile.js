import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";

const MyProfile = () => {
  document.title = "My Profile | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <RightSideContent />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
