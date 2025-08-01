import React from "react";
import { Helmet } from "react-helmet-async";
import { home_sec1 } from "../assets";
import HomeHero from "../components/layouts/HomeHero";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - GCC Royals Capital</title>
      </Helmet>
      <HomeHero />
      <section className="bg-[#F3F5F4] rounded-t-[60px] -mt-[60px]">
        <div className="pt-[100px] pb-[70px]">
          <div className="flex flex-col gap-[60px]">
            <div className="[flex:0_0_calc(72%_-_calc(60px_/_2))] relative">
              <div className="w-full h-fit relative">
                <div className="w-full">
                  <div className="flex gap-[60px]">
                    <div
                      className="bg-center bg-cover w-1/2 rounded-[30px] h-[500px] grow-0 shrink basis-auto"
                      style={{ backgroundImage: `url(${home_sec1})` }}
                    />
                    <div className="w-1/2 flex flex-col grow-0 shrink basis-auto gap-y-[50px] py-20">
                      <div className="*:mb-2.5">
                        <Subtitle>Guidance, Trust, Results.</Subtitle>
                        <h2>
                          Guiding business growth through expert strategy.
                        </h2>
                        <p className="pr-[15%]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Obcaecati sit omnis earum quaerat saepe est
                          veniam alias voluptates in laudantium!
                        </p>
                      </div>
                      <div>
                        <Button>Get Started</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
