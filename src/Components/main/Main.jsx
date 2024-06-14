import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    // Main
    <div className="font-custom flex-1 min-h-[100vh] pb-[15vh] relative max-sm:absolute">
      {/* Navbar */}
      <div className="nav flex justify-between  items-center text-3xl p-5 text-[#585858]">
        <p>Gemini</p>
        <img className="w-12 rounded-full" src={assets.user_icon} alt="" />
      </div>
      {/* Main-Container */}
      <div className="main-container max-w-[900px]  m-auto ">
        <div className="greet p-2 mx-3 mb-10 pb-10 mt-10 max-sm:text-5xl text-7xl text-[#c4c7c5] font-medium">
          <p>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-left">
              Hello, Dev.
            </span>
          </p>
          <p className="mt-3">How can I help you today?</p>
        </div>
        <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
          <div className="card h-52  p-4 transition-transform duration-500 transform hover:scale-105 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.compass_icon}
              alt=""
            />
          </div>
          <div className="card transition-transform duration-500 transform hover:scale-105 h-52 p-4 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Breifly summerize this concept: Urban Planning
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.bulb_icon}
              alt=""
            />
          </div>
          <div className="card transition-transform duration-500 transform hover:scale-105 h-52 p-4 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Brainstrom team bonding activities for our work retreat
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="card transition-transform duration-500 transform hover:scale-105 h-52 p-4 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Improve the readability of the following code.
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.code_icon}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
