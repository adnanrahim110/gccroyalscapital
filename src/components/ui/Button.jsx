import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick,
  className,
  type,
  disabled,
  to,
  small,
  primary = false,
  white = false,
}) => {
  const Tag = to ? Link : "button";
  return (
    <Tag
      {...(to ? { to } : { onClick: onClick, type: type, disabled: disabled })}
      className={`text-base p-[clamp(1.125rem,1.0971rem_+_0.1274vw,1.25rem)_clamp(1.5rem,1.2771rem_+_1.0191vw,2.5rem)] font-medium leading-none flex items-center text-black btn_main rounded-xl cursor-pointer bg-gradient-to-r ${
        white
          ? "bg-white"
          : primary
          ? "from-secondary-200 via-primary-400 to-secondary-200"
          : "from-primary-400 via-secondary-200 to-primary-400"
      }`}
    >
      <span>{children}</span>
      <span className="ml-2.5 inline-flex leading-0 btn_icn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-black size-4"
          viewBox="0 0 27.7 18"
        >
          <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z"></path>
        </svg>
      </span>
    </Tag>
  );
};

export default Button;
