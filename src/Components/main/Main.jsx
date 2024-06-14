import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const Main = () => {

  // Typing Effect
  const [text, setText] = useState("");
  const message = "Hello, Dev.";
  const typingSpeed = 120;

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";

    const type = () => {
      if (currentIndex < message.length) {
        currentText = message.slice(0, currentIndex + 1);
        setText(currentText);
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout();
  }, []);



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
        <div className="greet p-2 mx-3  pb-10 mt-10 max-sm:text-5xl text-7xl text-[#c4c7c5] font-medium">
          <p>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-left">
              {text}
            </span>
          </p>
          <p className="mt-3">How can I help you today?</p>
        </div>
        <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5">
          <div className="card h-52  p-4 transition-transform duration-500 transform hover:scale-110 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.compass_icon}
              alt=""
            />
          </div>
          <div className="card transition-transform duration-500 transform hover:scale-110 h-52 p-4 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Breifly summerize this concept: Urban Planning
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.bulb_icon}
              alt=""
            />
          </div>
          <div className="card transition-transform duration-500 transform hover:scale-110 h-52 p-4 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
            <p className="text-[#585858] text-lg">
              Brainstrom team bonding activities for our work retreat
            </p>
            <img
              className=" w-9 p-1 absolute bg-white rounded-3xl bottom-2 right-2"
              src={assets.message_icon}
              alt=""
            />
          </div>
          <div className="card transition-transform duration-500 transform hover:scale-110 h-52 p-4 hover:bg-[#dfe4ea] bg-[#f0f4f9] relative rounded-2xl cursor-pointer shadow-xl">
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
        {/* Main-Bottom */}
        <div className="main-bottom max-sm:py-1 absolute bottom-0 w-full max-w-[900px] px-0 py-5 m-auto max-sm:px-3 max-sm: max-sm:max-w-full">
          <div className="search flex justify-between items-center gap-5 bg-[#f0f4f9] px-3 p-4 shadow-md max-sm:py-1  mb-1 rounded-[50px]">
            <input className="flex-1 bg-transparent outline-none border-none p-2 text-lg" type="text" placeholder="Enter a prompt Here" />
            <div className="flex gap-3 items-center max-sm:gap-1">
              <img className=" w-6 cursor-pointer" src={assets.gallery_icon} alt="" />
              <img className=" w-6 cursor-pointer" src={assets.mic_icon} alt="" />
              <img className=" w-6 cursor-pointer" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="info mx-4 font-light text-center my-0 text-[14px]">
          Gemini may display inaccurate info, including about people, so double-check its responses. <a className="text-[14px] underline underline-offset-4" href="#">Your privacy & Gemini Apps.</a> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
