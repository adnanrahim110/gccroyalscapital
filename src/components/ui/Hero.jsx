import React from "react";
import { hero3, hero_shade2 } from "../../assets";

const Hero = ({ title, text, white = false }) => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat ${
        white ? "bg-white" : "bg-black"
      } pt-28 pb-10 relative`}
      style={{ backgroundImage: `url(${white ? hero3 : hero_shade2})` }}
    >
      {white && (
        <div className="absolute inset-0 bg-gradient-to-t from-white opacity-70 to-black z-0" />
      )}
      <div className="p-[clamp(5.625rem,1.8662rem_+_4.6948vw,7.5rem)_0_clamp(9.6875rem,4.0493rem_+_7.0423vw,12.5rem)] backface-hidden text-center relative z-[1]">
        <h1 className="text-white mb-2.5">{title}</h1>
        <p className="text-white/90 lg:w-3/4 xl:w-[60%] mx-auto">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
