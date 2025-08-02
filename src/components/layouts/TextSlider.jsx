import React from "react";
import { fav } from "../../assets";

const textSliderData = [
  "Recognized for exellence",
  "Award-Winning Performance",
  "Honors and Achievements",
];

const TextSlider = () => {
  return (
    <div className="pb-[90px]">
      <div className="w-full max-w-full">
        <div className="relative inline-block w-full align-top overflow-hidden">
          <div className="flex whitespace-nowrap text-[0px] overflow-hidden">
            <div className="flex items-baseline animate-marquee">
              {textSliderData.map((text, i) => (
                <React.Fragment key={i}>
                  <span
                    className={`text-[clamp(4.375rem,3.539rem_+_3.8217vw,8.125rem)] capitalize leading-[1.15] font-semibold inline-block text-black/10 p-[0_clamp(1.875rem,1.5963rem_+_1.2739vw,3.125rem)]`}
                  >
                    {text}
                  </span>
                  <span className="flex h-auto text-center relative p-[0_clamp(1.875rem,1.5963rem_+_1.2739vw,3.125rem)]">
                    <img
                      src={fav}
                      className="w-[100px] max-w-[100px] grayscale hover:grayscale-0 transition-all duration-200 ease-in-out cursor-pointer"
                      alt=""
                    />
                  </span>
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-baseline marquee-copy">
              {textSliderData.map((text, i) => (
                <React.Fragment key={i}>
                  <span
                    className={`text-[clamp(4.375rem,3.539rem_+_3.8217vw,8.125rem)] capitalize leading-[1.15] font-semibold inline-block text-black/10 p-[0_clamp(1.875rem,1.5963rem_+_1.2739vw,3.125rem)]`}
                  >
                    {text}
                  </span>
                  <span className="flex h-auto text-center relative p-[0_clamp(1.875rem,1.5963rem_+_1.2739vw,3.125rem)]">
                    <img src={fav} className="w-[100px] max-w-[100px]" alt="" />
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
