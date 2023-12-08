import React from "react";

import "./assets/scss/themes.scss";


import NavBar from "./Layout/CommonLayout/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookMarkJobPost from "./pages/Profile/BookMarkJobPost/BookMarkJobPost";
import MyProfile from "./pages/Profile/MyProfile/MyProfile";
import BookMarkJobs from "./pages/Profile/BookMarkJobs/BookMarkJobs";
import ManageJobs from "./pages/Profile/ManageJobs/ManageJobs";
import Contact from "./pages/Contact/Contact";
import CompanyDetails from "./pages/CandidateAndCompany/CompanyList/CompanyDetails";
import CompanyList from "./pages/CandidateAndCompany/CompanyList/CompanyList";
import CandidateDetails from "./pages/CandidateAndCompany/CandidateList/CandidateDetails";
import CandidateGrid from "./pages/CandidateAndCompany/CandidateGrid/CandidateGrid";
import CandidateList from "./pages/CandidateAndCompany/CandidateList/CandidateList";
import JobsCategories from "./pages/Jobs/JobsCategories/JobsCategories";
import JobDetails from "./pages/Jobs/JobDetails/JobDetails";
import JobGrid2 from "./pages/Jobs/JobGrid2/JobGrid2";
import JobList2 from "./pages/Jobs/JobList2/JobList2";
import Faqs from "./pages/Company/Faqs/Faqs";
import PrivacyAndPolicy from "./pages/Company/PrivacyAndPolicy/PrivacyAndPolicy";
import Team from "./pages/Company/Team/Team";
import Services from "./pages/Company/Services/Services";
import AboutUs from "./pages/Company/AboutUs/AboutUs";
import Layout2 from "./pages/Home/Layout2/Layout2";
import Error404 from "./pages/ExtraPages/Error404";
import ComingSoon from "./pages/ExtraPages/ComingSoon";
import ResetPassword from "./pages/ExtraPages/ResetPassword";
import SignOut from "./pages/ExtraPages/SignOut";
import SignUp from "./pages/ExtraPages/SignUp";
import SignIn from "./pages/ExtraPages/SignIn";
function App() {
  return (
    <div>
<NavBar> </NavBar>
<Routes>
<Route path="" element={<Home></Home>}></Route>

  <Route path= "/bookmarkjobpost" element={ <BookMarkJobPost /> } ></Route>
  <Route path= "/myprofile" element={ <MyProfile /> }   ></Route>
  <Route path= "/bookmarkjobs" element={ <BookMarkJobs /> }  ></Route>
  <Route path= "/managejobs" element={ <ManageJobs /> }   ></Route>
  <Route path= "/elements" element={ <elements /> }  ></Route>
  <Route path= "/contact" element={ <Contact /> }  ></Route>
  <Route path= "/companydetails" element={ <CompanyDetails /> }  ></Route>
  <Route path= "/companylist"  element={ <CompanyList /> }  ></Route>
  <Route path= "/candidatedetails" element={ <CandidateDetails /> }  ></Route>
  <Route path= "/candidategrid" element={ <CandidateGrid /> }  ></Route>
  <Route path= "/candidatelist" element={ <CandidateList /> }  ></Route>
  <Route path= "/jobscategories" element={ <JobsCategories /> }  ></Route>
  <Route path= "/jobdetails" element={ <JobDetails /> }  ></Route>
  <Route path= "/jobgrid2" element={ <JobGrid2 /> } ></Route>
  <Route path= "/joblist2" element={ <JobList2 /> }  ></Route>
  <Route path= "/faqs" element={ <Faqs /> }   ></Route>
  <Route path= "/privacyandpolicy" element={ <PrivacyAndPolicy /> }   ></Route>
  <Route path= "/team" element={ <Team /> }  ></Route>
  <Route path= "/services" element={ <Services /> }  ></Route>
  <Route path= "/about-us" element={ <AboutUs/> }   ></Route>
  <Route path= "/" element={ <Layout2 /> }    ></Route>


  <Route path= "/error404" element={ <Error404 /> } ></Route>
  <Route path= "/comingsoon" element={ <ComingSoon /> } ></Route>
  <Route path= "/resetpassword" element={ <ResetPassword /> } ></Route>
  <Route path= "/signout" element={ <SignOut /> } ></Route>
  <Route path= "/signup" element={ <SignUp /> } ></Route>
  <Route path= "/signin" element={ <SignIn /> } ></Route>

</Routes>

    </div>
  );
}

export default App;
