import React, { Suspense } from "react";

//Importing Section

import NavBar from "../CommonLayout/NavBar";
import Subscribe from "../CommonLayout/Subscribe";
import Footer from "../CommonLayout/Footer";
import StyleSwitcher from "../CommonLayout/StyleSwitcher";
import ScrolltoTop from "../../components/ScrolltoTop";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Suspense>
        <div>
          <NavBar />
          <div className="main-content">
            <div className="">{props.children}</div>
            <Subscribe />
            <Footer />
            <StyleSwitcher />
            <ScrolltoTop />
          </div>
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default Layout;
