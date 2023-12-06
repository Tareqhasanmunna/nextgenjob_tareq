import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <React.Fragment>
      <section className="p-3  bg-green-dark">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center text-white">
                <h3 className="mb-4">Team</h3>
                <div className="page-next">
                  <nav
                    className="d-inline-block"
                    aria-label="breadcrumb text-center"
                  >
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="#">Company</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {" "}
                        Team{" "}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="shape">
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section;
