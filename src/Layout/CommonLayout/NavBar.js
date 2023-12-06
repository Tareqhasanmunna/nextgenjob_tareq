/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import {Col, Row,Container, Collapse,NavbarToggler, NavItem,NavLink,Dropdown,DropdownToggle,DropdownMenu,ButtonToggle} from "reactstrap";
import { Link } from "react-router-dom";
import classname from "classnames";
import withRouter from "../../components/withRouter";
import profileImage from "../../assets/images/profile.jpg";
import logo from "../../assets/images/Nextgenjob.png"
import AboutUs from "../../pages/Company/AboutUs/AboutUs";
import { useState } from 'react';
import { useEffect } from 'react';
import auth from '../../firebase.init';


const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [home, setHome] = useState(false);
  const [company, setCompany] = useState(false);
  const [pages, setPages] = useState(false);
  const [blog, setBlog] = useState(false);

        const {user,loading,error} =  useAuthState(auth);

        const [signOut] = useSignOut(auth);
        const signout = async () => {
          try {
              await signOut();
              if (true) {
                  alert('You are sign out');
              }
          }
          catch (error) { console.error(error) }
          if (loading) {
            return <Loading></Loading>
  
        }
        
        };
      
// logout the redirect to signup and sign in 


  //Notification Dropdown
  const [notification, setNotification] = useState(false);
  const dropDownnotification = () => setNotification((prevState) => !prevState);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  //scroll navbar
  const [navClass, setnavClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = window.pageYOffset;
    if (scrollup > 0) {
      setnavClass("nav-sticky");
    } else {
      setnavClass("");
    }
  }
  //menu activation
  
  
 


return (
    <React.Fragment>
      <nav
        className={"navbar navbar-expand-lg fixed-top sticky p-0 " + navClass}
        id="navigation"
      >
        <Container fluid className="custom-container">
          <Link className="navbar-brand text-dark fw-bold me-auto" to="/">
            <img src={logo} height="22" alt="" className="logo-dark" />
            <img src={logo} height="22" alt="" className="logo-light" />
          </Link>
          <div>
            <NavbarToggler
              className="me-3"
              type="button"
              onClick={() => toggle()}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
          </div>
          <Collapse
            isOpen={isOpen}
            className="navbar-collapse"
            id="navbarCollapse"
          >
            <ul className="navbar-nav mx-auto navbar-center">
              <NavItem >
                <Link
                  to="/"
                  id="homedrop"
                  className="nav-link"
                  onClick={() => setHome(!home)}
                >
                  Home 
                </Link>
               
              </NavItem>

              <NavItem className="dropdown dropdown-hover">
                  <Link 
                  to="/about-us"
                  className="nav-link"
                  onClick={() => setCompany(!AboutUs)}>About</Link>
                  
          
              </NavItem>
              <NavItem className="dropdown dropdown-hover">
                  <Link 
                  to="/services"
                  className="nav-link"
                  onClick={() => setCompany(!AboutUs)}>We Provide</Link>
                  
          
              </NavItem>

              <NavItem className="dropdown dropdown-hover">
                <Link className="nav-link" to= "/blogs"> blog</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </NavItem>
            </ul>
          </Collapse>



          <ul className="header-menu list-inline d-flex align-items-center mb-0">
          


            {/* <Dropdown
              isOpen={notification}
              toggle={dropDownnotification}
              className="list-inline-item  me-4"
            >
              <DropdownToggle
                href="#"
                className="header-item noti-icon position-relative"
                id="notification"
                type="button"
                tag="a"
              >
                <i className="mdi mdi-bell fs-22"></i>
                <div className="count position-absolute">3</div>
              </DropdownToggle>

                     {/* //*inside of notification menu*/}
              {/* <DropdownMenu
                className="dropdown-menu-sm dropdown-menu-end p-0"
                aria-labelledby="notification"
                end
              >
                <div className="notification-header border-bottom bg-light">
                  <h6 className="mb-1"> Notification </h6>
                  <p className="text-muted fs-13 mb-0">
                    You have 4 unread Notification
                  </p>
                </div>
                <div className="notification-wrapper dropdown-scroll">
                  <Link
                    to="#"
                    className="text-dark notification-item d-block active"
                  >
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-xs bg-primary text-white rounded-circle text-center">
                          <i className="uil uil-user-check"></i>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                          22 verified registrations
                        </h6>
                        <p className="mb-0 fs-12 text-muted">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={userImage2}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">James Lemire</h6>
                        <p className="text-muted fs-12 mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>15 min ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={jobImage4}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">
                          Applications has been approved
                        </h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>45 min ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={userImage1}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-14">Kevin Stewart</h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-dark notification-item d-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <img
                          src={jobImage}
                          className="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mt-0 mb-1 fs-15">Creative Agency</h6>
                        <p className="text-muted mb-0 fs-12">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>2 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="notification-footer border-top text-center">
                  <Link className="primary-link fs-13" to="#">
                    <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span>View More..</span>
                  </Link>
                </div>
              </DropdownMenu> */}
              
              {/* </Dropdown>  */}

              <li>
                  {user ? (
                    <>
                      <Link to="/myProfile">Dashboard</Link>
                      <button onClick={signOut}>Sign Out</button>
                    </>
                  ) : (
                    <Link to="/signin">Login</Link>
                  )}
                </li>
                 
          
          </ul>




          
        </Container>
      </nav>
      </React.Fragment>
  )
                  };

export default withRouter(NavBar);
