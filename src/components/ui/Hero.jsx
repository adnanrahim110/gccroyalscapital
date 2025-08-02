import React from "react";
import { hero_shade2 } from "../../assets";

const Hero = ({ title, text }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-black backface-hidden pt-28 pb-10"
      style={{ backgroundImage: `url(${hero_shade2})` }}
    >
      <div className="p-[clamp(5.625rem,1.8662rem_+_4.6948vw,7.5rem)_0_clamp(9.6875rem,4.0493rem_+_7.0423vw,12.5rem)] backface-hidden text-center">
        <h1 className="text-white mb-2.5">{title}</h1>
        <p className="text-white/90 lg:w-3/4 xl:w-[60%] mx-auto">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
