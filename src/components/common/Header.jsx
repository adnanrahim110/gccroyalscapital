import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo3 } from "../../assets";
import { navigation } from "../../constants";
import Button from "../ui/Button";

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute z-[999] w-full"
    >
      <div className="px-[30px] flex">
        <div className="grow shrink size-full pt-[30px]">
          <div className="flex items-center max-lg:justify-between max-lg:p-5 lg:px-[30px] mx-auto w-full xl:max-w-[1300px] relative before:bg-white/10 before:backdrop-blur-[10px] before:absolute before:border before:border-white/10 rounded-xl before:rounded-xl before:inset-0 *:relative *:z-[2]">
            {/* Logo */}
            <div className="lg:w-1/4">
              <Link to="/" className="flex items-center size-full">
                <img
                  src={logo3}
                  alt="GRC Capitals"
                  className="max-w-[120px] lg:max-w-[150px]"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="lg:w-1/2 max-lg:hidden">
              <ul className="w-full flex justify-center">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block align-middle relative transition-all duration-300 ease-linear"
                  >
                    <Link
                      to={item.url}
                      className="inline-block p-[33px_22px] align-middle relative capitalize text-white hover:text-primary transition-all duration-300 ease-linear"
                    >
                      <span
                        className={`before:absolute before:size-[7px] before:top-0 before:bottom-0 before:left-2 before:right-auto before:m-auto before:rounded-full ${
                          location.pathname === item.url
                            ? "before:translate-x-0 before:opacity-100"
                            : "before:opacity-0 before:-translate-x-1"
                        } before:bg-white before:transition before:duration-200 before:ease-[cubic-bezier(0.7,0,0.3,1)]`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop CTA */}
            <div className="lg:w-1/4 max-lg:hidden">
              <div className="flex items-center h-full justify-end">
                <Button to="/services">Get Started</Button>
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="w-[30%] lg:hidden flex justify-end items-center">
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="cursor-pointer inline-block h-[1.3rem] leading-none"
              >
                <i className="bg-primary-500 h-[3px] relative w-[18px] transition-colors duration-[10ms] delay-300 ease-in rounded-[5px] inline-block text-[1.1rem] align-middle mr-1.5 before:absolute before:bg-white before:h-[3px] before:left-0 before:w-6 before:rounded-[5px] before:transition-[left] before:duration-300 before:delay-[300ms] before:ease-in before:-top-2 after:absolute after:bg-white after:h-[3px] after:left-0 after:w-6 after:rounded-[5px] after:transition-[left] after:duration-300 after:delay-[300ms] after:ease-in after:top-2" />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mx-auto w-full xl:max-w-[1300px] px-5"
              >
                <div className="mt-2 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md">
                  <ul className="py-2">
                    {navigation.map((item, idx) => {
                      const active = location.pathname === item.url;
                      return (
                        <li key={idx}>
                          <Link
                            to={item.url}
                            onClick={() => setOpen(false)}
                            className={`block px-4 py-3 capitalize transition-colors ${
                              active
                                ? "text-primary"
                                : "text-white hover:text-primary"
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="px-4 pb-4">
                    <Button to="/services" onClick={() => setOpen(false)}>
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
