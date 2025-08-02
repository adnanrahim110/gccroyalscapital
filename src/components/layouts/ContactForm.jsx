import React from "react";
import { Link } from "react-router-dom";
import { contact_sec } from "../../assets";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Subtitle from "../ui/Subtitle";

const ContactForm = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover rounded-t-[40px] -mt-10 relative"
      style={{ backgroundImage: `url(${contact_sec})` }}
    >
      <div className="absolute inset-0 bg-black/40 max-w-full rounded-t-[40px]" />
      <div className="grow shrink basis-auto py-[120px] flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 p-10 flex flex-col rounded-[20px] bg-white/70 backdrop-blur-[7px]">
          <div className="space-y-2.5 pb-[15px]">
            <Subtitle>Let's Talk</Subtitle>
            <h2>Connect With Us</h2>
          </div>
          <div>
            <p className="ml-[2%]">
              Hey! Connect us with&nbsp;
              <Link className="text-black underline underline-offset-4">
                0987-6543-210
              </Link>
              , or email us through&nbsp;
              <Link className="text-black underline underline-offset-4">
                info@example.com
              </Link>
              , or fill the following form. We will contact you back within 12
              hours or prior.
            </p>
          </div>
          <div>
            <div className="pt-10">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
