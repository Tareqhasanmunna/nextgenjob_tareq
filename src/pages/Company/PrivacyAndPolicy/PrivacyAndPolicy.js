import React from "react";
import Section from "./Section";
import PrivacyAndPolicyPage from "../../Company/PrivacyAndPolicy/PrivacyAndPolicyPage";

const PrivacyAndPolicy = () => {
  document.title =
    "Privacy & Policy | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <PrivacyAndPolicyPage />
    </React.Fragment>
  );
};
export default PrivacyAndPolicy;
