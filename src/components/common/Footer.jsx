import React from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { logo3, shade_3 } from "../../assets";
import { navigation, socialDetails } from "../../constants";

const Footer = () => {
  return (
    <footer
      className="bg-black bg-cover bg-center bg-no-repeat rounded-t-[40px] -mt-10"
      style={{ backgroundImage: `url(${shade_3})` }}
    >
      <span className="absolute inset-0 block bg-[#161616] rounded-t-[40px] opacity-70" />
      <div className="pt-20 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-[30px] pb-[90px] border-b border-b-[#D0D0D033]">
          <div className="lg:w-[35%] pr-10 flex flex-col gap-[25px] text-white">
            <div>
              <img src={logo3} className="max-h-[55px] w-auto -ml-4" alt="" />
            </div>
            <p className="pb-6 pr-5">
              Delivering insight-driven financial solutions backed by expertise,
              strategy, and global reach.
            </p>
            <h5 className="text-white tracking-[0.2px]">Stay Tuned</h5>
            <div>
              <ul className="flex items-center gap-5">
                {socialDetails.map((social, idx) => (
                  <li key={idx}>
                    <Link to={social.url}>
                      <div className="border border-white/25 text-primary hover:bg-gradient-to-r from-primary-400 to-secondary-300 hover:text-black transition-all duration-300 ease-linear p-3 flex items-center justify-center rounded-full">
                        {<social.icon className="size-6" />}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-[65%] flex flex-col">
            <div className="flex flex-col lg:flex-row w-full gap-[30px] border-b border-b-[#D0D0D033] pb-10">
              <div className="max-w-full w-[300px]">
                <h4 className="text-white">Register For Our Updates!</h4>
              </div>
              <div className="max-w-full w-[500px]">
                <div>
                  <form className="flex text-left justify-start items-start w-full relative flex-wrap">
                    <div className="w-full mb-3 relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="text-black p-[15px_30px] pr-[90px]"
                      />
                      <div className="absolute z-[1] top-0 bottom-0 right-0 left-auto">
                        <button className="inline-flex items-center justify-center w-20 h-full rounded-xl text-black bg-gradient-to-r from-secondary-200 via-primary-400 to-secondary-200 bg-no-repeat btn_main text-xl">
                          <HiPaperAirplane />
                        </button>
                      </div>
                    </div>
                    <div className="inline-grid items-baseline grid-cols-[25px_1fr] ml-2">
                      <input type="checkbox" />
                      <p className="text-white text-[1em]">
                        I acknowledge all the Terms & Conditions
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="lg:w-1/3 grow-0 shrink basis-auto flex flex-col gap-[30px] pt-12">
                <h5 className="text-white">Support Pages</h5>
                <ul className="flex gap-2 flex-col">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Live Chat
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Trading Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Risk Disclosure
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 grow-0 shrink basis-auto flex flex-col gap-[30px] pt-12">
                <h5 className="text-white">About</h5>
                <ul className="flex gap-2 flex-col">
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Client Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Security Promise
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/3 grow-0 shrink basis-auto flex flex-col gap-[30px] pt-12">
                <h5 className="text-white">Quick Links</h5>
                <ul className="flex gap-2 flex-col">
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Pricing Plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Market Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Deposit & Withdrawals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out"
                    >
                      Account Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between py-[30px] text-white">
          <p>© {new Date().getFullYear()} GCC Capitals. All Rights Reserved</p>
          <ul className="flex flex-wrap -mx-[25px]">
            <li className="mx-[25px] relative [work-break:break-word] flex after:absolute after:h-3/5 after:border-l after:border-l-[#ddd] after:top-1/2 after:-translate-y-1/2 after:-right-[25px]">
              <Link className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out">
                Privacy Policy
              </Link>
            </li>
            <li className="mx-[25px] relative [work-break:break-word] flex">
              <Link className="text-white underline underline-offset-4 decoration-transparent hover:decoration-white transition-all duration-300 ease-in-out">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
