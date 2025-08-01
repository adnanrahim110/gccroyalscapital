import React from "react";

const Subtitle = ({ children, white = false }) => {
  return (
    <div className={`subtitle ${white ? "text-white" : "text-black"}`}>
      {children}
    </div>
  );
};

export default Subtitle;
