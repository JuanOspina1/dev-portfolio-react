import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#222629] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#86C232]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. Here's a little about me.</p>
          </div>
          <div>
            <p>
              I have been a passionate, hobbyist developer on and off since
              2018, looking to turn my hobby into my career. I attended a full
              stack bootcamp at the Universtiy of Miami in order to consult and
              assist in managing a new web development branch at a previous
              company. We focused on creating an in-house Transporation
              Management System (TMS) & CRM for our internal departments. Now, I
              am interested in directly designing and developing applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
