import React from "react";
import InventoryMngr from "../assets/inventory-manager.PNG";
import Pokedex from "../assets/internal-pokedex.PNG";
import Netflix from "../assets/netflix-clone.PNG";
import Weather from "../assets/weather-app.PNG";

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
            style={{ backgroundImage: `url(${InventoryMngr})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Inventory Manager
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
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflix Clone
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/JuanOspina1/netflix-clone">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* I can refactor image sizing once I have several examples */}
          <div
            style={{
              backgroundImage: `url(${Pokedex})`,
              // backgroundSize: "300px",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
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
          </div>
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
