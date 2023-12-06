import React from "react";
import ServicePage from "../Services/ServicePage";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Features from "../AboutUs/Features";
const Services = () => {
  return (
    <React.Fragment>
     <section className="pt-5 mt-5  bg-green-dark " >
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
      < Features/>
      <ServicePage />
    </React.Fragment>
  );
};

export default Services;
