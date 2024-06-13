import React, { useState } from 'react'
import {assets} from '../../assets/assets'

const Sidebar = () => {

    const [extend,setExtended] = useState(false)
    
  return (
    // Sidebar
    <div className='sidebar min-h-[100vh] inline-flex px-6 py-4 flex-col justify-between bg-[#f0f4f9]'>


        {/* Topbar */}
        <div>
            <img className='w-5 block ml-2 cursor-pointer' src={assets.menu_icon} alt="" />
            {/* New-Chat */}
            <div className=' mt-12 inline-flex items-center gap-3 px-5 py-3 bg-[#dde1e7] rounded-[50px] text-base text-gray-500'>
                <img className=' w-5' src={assets.plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            {/* Recent */}
            <div className='flex flex-col'>
                <p className=' mt-7 mb-5'>Recent</p>
                <div className="recent-entry flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className=' w-5' src={assets.message_icon} alt="" />
                    <p>What is react ....</p>
                </div>
            </div>
        </div>


        {/* BottomBar */}
        <div className='flex flex-col'>
            <div className="bottom-item  recent-entry flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                <img className=' w-5' src={assets.question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                <img className=' w-5' src={assets.history_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                <img className=' w-5' src={assets.setting_icon} alt="" />
                <p>Setting</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar