import React from "react";
import Section from "../Contact/Section";
import ContactContent from "../Contact/ContactContent";

const Contact = () => {
  document.title = "Contact | NextGenJob - Job Listing Template | Code Canva Team";
  return (
    <React.Fragment>
      <Section />
      <ContactContent />
    </React.Fragment>
  );
};

export default Contact;
