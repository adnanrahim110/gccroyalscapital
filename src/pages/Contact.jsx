import React from "react";
import { Helmet } from "react-helmet-async";
import Brands from "../components/layouts/Brands";
import ContactForm2 from "../components/layouts/ContactForm2";
import Hero from "../components/ui/Hero";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - GRC Capitals</title>
      </Helmet>
      <Hero
        title="Contact Us"
        text="We’d love to hear from you. Reach out with your questions or project ideas we’ll respond promptly."
      />
      <ContactForm2 />
      <Brands white />
    </>
  );
};

export default Contact;
