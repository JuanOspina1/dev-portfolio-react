import React from "react";
import InventoryMngr from "../assets/inventory-manager.PNG";
import SneekPeek from "../assets/sneek-peek-lux.PNG";
// import Pokedex from "../assets/internal-pokedex.PNG";
// import Netflix from "../assets/netflix-clone.PNG";
import Weather from "../assets/weather-app.PNG";
import Upsoled from "../assets/upsoled.PNG";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#222629]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-gray-300 ">
          <p className="text-4xl font-bold inline border-b-4 border-[#86C232]">
            Work
          </p>
          <p className="py-6">Check out my work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-gol-3 gap-4">
          {/* Grid Item */}

          <div
            style={{
              backgroundImage: `url(${Upsoled})`,
              backgroundSize: "contain",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <h1 className="text-2xl font-bold text-white tracking-wider">
                Upsoled
              </h1>
              <span className="text-1xl font-bold text-white tracking-wider">
                Developing a web-base asset management application for the
                luxury shoe market utilizing a web scraping API to compare
                pricing from various sites.
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                {/* <a href="https://github.com/JuanOspina1/aqua-dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${SneekPeek})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <h1 className="text-2xl font-bold text-white tracking-wider">
                Sneek Peek Luxury
              </h1>
              <span className="text-1xl font-bold text-white tracking-wider">
                Developing a full stack, E-Commerce platform for a brick and
                mortar luxury goods store in Miami, FL.
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                {/* <a href="https://github.com/JuanOspina1/aqua-dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a> */}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${InventoryMngr})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <h1 className="text-2xl font-bold text-white tracking-wider">
                Inventory Manager
              </h1>
              <span className="text-1xl font-bold text-white tracking-wider">
                Developing an inventory manager to track products & create
                orders across multiple warehouses in the US.
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/JuanOspina1/aqua-dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* I can refactor image sizing once I have several examples */}
          {/* <div
            style={{
              backgroundImage: `url(${Pokedex})`,
              // backgroundSize: "300px",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS Pokedex App
              </span>
              <div className="pt-8 text-center">
                <a href="https://juanospina1.github.io/pokedex-js/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanOspina1/pokedex-js">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          <div
            style={{
              backgroundImage: `url(${Weather})`,
              // backgroundSize: "300px",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a href="https://mysterious-wildwood-88292.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JuanOspina1/weather-react-express">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
