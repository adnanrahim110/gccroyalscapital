import React from "react";

const SwiperBtn = ({ direction, onClick, w_h, bg, white = false }) => {
  const isPrev = direction === "prev";

  const svgPath = isPrev
    ? "M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
    : "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18";

  return (
    <div
      className={`absolute ${w_h || "lg:w-14 lg:h-14"} ${
        bg ||
        "bg-transparent hover:bg-gradient-to-r from-primary-400 to-primary-200"
      } border-1 ${
        white
          ? "border-white text-white hover:text-black"
          : "border-black text-black"
      } hover:border-transparent rounded-full inline-flex items-center justify-center w-[38px] h-[38px] transition-all duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] z-[1] top-1/2 max-lg:-translate-y-1/2 lg:top-full lg:mt-10 2xl:mt-0 2xl:top-[50%] 2xl:-translate-y-[50%] cursor-pointer group ${
        isPrev
          ? "lg:pr-px -left-2.5 lg:left-[44.8%] 2xl:-left-20 right-auto"
          : "lg:pl-0.5 -right-2.5 lg:right-[44.8%] 2xl:-right-20 left-auto"
      }`}
      onClick={onClick}
    >
      {isPrev ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          style={{ enableBackground: "new 0 0 100 100" }}
        >
          <path d="M2.5,50l53.4-30.9v61.7L2.5,50z M97.5,50v5.3H50.6V50v-5.3h46.9V50z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.7 18">
          <path d="M12.1,18V10.6H0V7.4H12.1V0L27.7,9Z"></path>
        </svg>
      )}
    </div>
  );
};

export default SwiperBtn;
