/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Col, Row, Container, Collapse, NavbarToggler, NavItem } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Nextgenjob.png";
import { useState } from 'react';
import auth from '../../firebase.init';
import withRouter from '../../components/withRouter';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
const navigate = useNavigate();
  const [user]  = useAuthState(auth);

if(user){

  navigate('/myProfile');
}


  const handleSignOut = async () => {
    try {
      await signOut();
      if(true)
      {alert('You are signed out');}
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <nav className={"navbar navbar-expand-lg fixed-top sticky p-0"} id="navigation">
        <Container fluid className="custom-container container">
          <Row className="w-100 align-items-center">
            <Col xs={2}>
              <Link className="navbar-brand text-dark fw-bold" to="/">
                <img src={logo} height="22" alt="" className="logo-dark" />
                <img src={logo} height="22" alt="" className="logo-light" />
              </Link>
            </Col>
            <Col xs={6}>
              <NavbarToggler className="me-3" type="button" onClick={toggle}>
                <i className="mdi mdi-menu"></i>
              </NavbarToggler>
              <Collapse isOpen={isOpen} className="navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mx-auto navbar-center">
                  <NavItem>
                    <Link to="/" className="nav-link">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about-us" className="nav-link">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/services" className="nav-link">We Provide</Link>
                  </NavItem>
               
                  <NavItem>
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </NavItem>
                </ul>
              </Collapse>
            </Col>
            <Col xs={4} className="d-flex justify-content-end">
              {user ? (
                <div className="d-flex align-items-center">
                 
                  <img src={user.photoURL || 'default-user-image-url'} alt={user.displayName || 'User'} className="rounded-circle me-2" style={{ height: '40px', width: '40px' }} />
                  <div className="me-3">{user.displayName || user.email}</div>
                  <button className="btn btn-primary" onClick={handleSignOut}>Sign out</button>
                </div>
              ) : (
                <div>
                  <Link className="btn btn-primary me-2" to="/signin">Login</Link>
                  <Link className="btn btn-primary me-2" to="/signup">Signup</Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(NavBar);
