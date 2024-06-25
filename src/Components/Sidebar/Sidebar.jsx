import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const {onSent,prevPrompt,setRecentPrompt} = useContext(Context)

  return (
    // Sidebar
    <div
      className={`sidebar max-sm:invisible max-h-[100vh] inline-flex px-4 py-4 flex-col justify-between bg-[#f0f4f9] font-custom transition-all duration-500 ${
        extend ? "w-64" : "w-20"
      }`}
    >
      {/* Topbar */}
      <div>
        <img
          onClick={() => setExtend((prev) => !prev)}
          className="w-7 block ml-1 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
        {/* New-Chat */}
        <div className=" mt-12 inline-flex items-center gap-3 px-4 py-3 bg-[#dde1e7] hover:text-gray-700 cursor-pointer rounded-[50px] text-base text-gray-500">
          <img className="w-5" src={assets.plus_icon} alt="" />
          {extend ? <p className="">New Chat</p> : null}
        </div>
        {/* Recent */}
        {extend ? (
          <div className="flex flex-col">
            <p className=" mt-7 mb-5">Recent</p>
            {prevPrompt.map((item,index)=>{
                return (

            <div className="recent-entry  flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img className=" w-5" src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}....</p>
            </div>
                )
            })}
          </div>
        ) : null}
      </div>

      {/* BottomBar */}
      <div className="flex flex-col  -mx-3.5">
        <div className="bottom-item recent-entry flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-8" src={assets.question_icon} alt="" />
          <p
            className={`transition-opacity duration-500 ${
              extend ? "opacity-100" : "opacity-0  "
            }`}
          >
            Help
          </p>
        </div>
        <div className="bottom-item recent-entry flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-8" src={assets.history_icon} alt="" />
          <p
            className={`transition-opacity duration-500 ${
              extend ? "opacity-100" : "opacity-0"
            }`}
          >
            Activity
          </p>
        </div>
        <div className="bottom-item recent-entry flex items-center gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className={`w-8 ${
              extend ? "w-8" : "w-10"
            }`} src={assets.setting_icon} alt="" />
          <p
            className={`transition-opacity duration-500 ${
              extend ? "opacity-100" : "opacity-0"
            }`}
          >
            Setting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
