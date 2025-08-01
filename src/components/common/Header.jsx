import React from "react";
import { Link, useLocation } from "react-router-dom";
import { logo3 } from "../../assets";
import { navigation } from "../../constants";
import Button from "../ui/Button";

const Header = () => {
  const location = useLocation();
  return (
    <header className="absolute z-[999] w-full">
      <div className="px-[30px] flex">
        <div className="grow shrink size-full pt-[30px]">
          <div className="flex px-[30px] relative before:bg-white/10 before:backdrop-blur-[10px] before:absolute before:border before:border-white/10 rounded-xl before:rounded-xl before:inset-0 *:relative *:z-[2]">
            <div className="lg:w-1/4">
              <Link to="/" className="flex items-center size-full">
                <img
                  src={logo3}
                  alt="GCC Royals Capital"
                  className="max-w-[150px]"
                />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <ul className="w-full flex justify-center">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block align-middle relative transition-all duration-300 ease-linear"
                  >
                    <Link
                      to={item.url}
                      className={`inline-block p-[33px_22px] align-middle relative capitalize ${
                        location.pathname === item.url
                          ? "text-secondary"
                          : "text-white hover:text-secondary"
                      } transition-all duration-300 ease-linear`}
                    >
                      <span
                        className={`before:absolute before:size-[7px] before:top-0 before:bottom-0 before:left-2 before:right-auto before:m-auto before:rounded-full ${
                          location.pathname === item.url
                            ? "before:translate-x-0 before:opacity-100"
                            : "before:opacity-0 before:-translate-x-1"
                        } before:bg-secondary before:transition before:duration-200 before:ease-[cubic-bezier(0.7,0,0.3,1)]`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/4">
              <div className="flex items-center h-full justify-end">
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
