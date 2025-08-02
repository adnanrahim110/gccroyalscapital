import React from "react";

const SwiperBtn = ({ direction, onClick, w_h, bg }) => {
  const isPrev = direction === "prev";

  const svgPath = isPrev
    ? "M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
    : "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18";

  return (
    <div
      className={`absolute ${w_h || "lg:w-14 lg:h-14"} ${
        bg ||
        "bg-transparent hover:bg-gradient-to-r from-primary-400 to-secondary-200"
      } border-1 border-black hover:border-transparent text-black  rounded-full inline-flex items-center justify-center w-[38px] h-[38px] transition-all duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] z-[1] top-1/2 max-lg:-translate-y-1/2 lg:top-full lg:mt-10 2xl:mt-0 2xl:top-[50%] 2xl:-translate-y-[50%] cursor-pointer group ${
        isPrev
          ? "lg:pr-px -left-2.5 lg:left-[44.8%] 2xl:-left-20 right-auto"
          : "lg:pl-0.5 -right-2.5 lg:right-[44.8%] 2xl:-right-20 left-auto"
      }`}
      onClick={onClick}
    >
      <svg
        className={`lg:w-7 w-[26px] h-auto object-contain origin-center ${
          isPrev
            ? "group-hover:[animation:btn-arrow-move-r_0.375s_linear]"
            : "group-hover:[animation:btn-arrow-move_0.375s_linear]"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        color="currentColor"
        fill="none"
      >
        <path
          d={svgPath}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default SwiperBtn;
