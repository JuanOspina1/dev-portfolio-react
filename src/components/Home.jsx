import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#222629] px-8">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <p className="text-[#86C232]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Juan Ospina
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          I'm a full stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications
        </p>
        <div>
          {/* Add Link later on */}
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 border-[#86C232] px-6 py-3 my-2 flex items-center hover:bg-[#86C232] hover:border-[#86C232]">
              View Work
              <span className=" group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
