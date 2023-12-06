import React from "react";
import { Container, Row, Col, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <React.Fragment>
      <section className="bg-home2">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center text-white">
                <h3 className="mb-4">FAQ'S</h3>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </React.Fragment>
  );
};

export default Section;
