// import React from "react";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineXMark }from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";

function Header(){
    const [toggle, setToggle] = useState(false)
    const menuList = [
        {
            id:1,
            title:'HOME'
        },
        {
            id:2,
            title:'ABOUT'
        },
        {
            id:3,
            title:' OUR ROOMS'
        },
        {
            id:4,
            title:'SERVICES'
        },
        {
            id:5,
            title:'GALLERY'
        },
        {
            id:6,
            title:'LOCATION & CONTACT'
        },
    ]
    return(
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-[24px] font-bold text-white'>U lounge
                <span className="text-pink-500"> BA</span>
                </h2>
            </div>
            
            <div className="hidden md:flex gap-4">
                {menuList.map((item)=>(
                    <div key={item.id}>
                        <h2 className="text-white hover:border-[1px] border-red-500 rounded-full text-[15px] px-3 py-1 cursor-pointer">
                            {item.title}
                        </h2>
                    </div>
                ))}

                <h2 className='text-white hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800 '>
                    GROUPS BOOKING
                </h2>
            </div>
            < div className="md:hidden">
                {
                    !toggle? <HiMenuAlt3 onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
                    : <HiOutlineXMark onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
                }
                {
                    toggle? <MenuOverlay menuList={menuList}/> : null
                }
            </div>
        </div>
    );
}

export default Header;