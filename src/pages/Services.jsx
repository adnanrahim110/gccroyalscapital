import { Helmet } from "react-helmet-async";
import ContactForm from "../components/layouts/ContactForm";
import ServiceSec from "../components/layouts/ServiceSec";
import Hero from "../components/ui/Hero";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - GCC Royals Capital</title>
      </Helmet>
      <Hero
        title="Our Services"
        text="We design practical, finance-led services that drive growth, strengthen operations, and control risk. From strategy and funding to tech upgrades and process optimization, every solution is built around your goals."
      />
      <ServiceSec />
      <ContactForm />
    </>
  );
};

export default Services;
