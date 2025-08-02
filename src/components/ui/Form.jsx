import React from "react";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <div className="grid md:grid-cols-2 gap-[22px] mb-[22px]">
        <input type="text" name="fname" placeholder="First Name*" />
        <input type="text" name="lname" placeholder="Last Name*" />
        <input type="email" name="email" placeholder="Email Address*" />
        <input type="tel" name="phone" placeholder="Phone Number*" />
      </div>
      <div className="mb-[0.75rem]">
        <textarea
          name="message"
          cols={40}
          rows={4}
          placeholder="Additional Message"
        />
      </div>
      <div className="mt-14">
        <Button primary>Submit</Button>
      </div>
    </form>
  );
};

export default Form;
