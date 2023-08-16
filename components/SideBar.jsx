"use client";
import { useState } from 'react';
import Link from 'next/link';

import { BsArrowLeftShort, BsSearch, BsPerson } from './../node_modules/react-icons/bs/index.esm';
import { RiDashboard2Fill } from './../node_modules/react-icons/ri/index.esm';
import { AiFillPayCircle, AiOutlineLogout, AiOutlineSetting } from './../node_modules/react-icons/ai/index.esm';
function SideBar(){

    const [isSideBarOpen, setSideBarOpen] = useState(true);
    const Menus = [
        {title: "Dashboard", icon: <RiDashboard2Fill />},
        {title: "Browse Templates",spacing:true, icon: <BsSearch />},
        {title: "Payment History", icon: <AiFillPayCircle />},
        {title: "Profile", icon: <BsPerson />},
        {title: "Settings", icon: <AiOutlineSetting />},
        {title: "Logout", icon: <AiOutlineLogout />}
    ];

    return (
        <div className="flex ">
            <div className={`sidebar ${isSideBarOpen?"w-44 sm:w-52 text-[14px] sm:text-[15px] pt-3":"w-16"}`}>
                <BsArrowLeftShort className={`bg-white text-primary-color text-3xl rounded-full absolute 
                    cursor-pointer top-9 -right-3 border-primary-color border-2 
                    ${!isSideBarOpen&&"rotate-180"}`}
                    onClick={()=>setSideBarOpen(!isSideBarOpen)}
                />
                <div className='flex flex-col justify-start items-center  m-auto'>
                    <Link href="/">
                        <img src="/logo/logo.svg"  className="w-36 h-8 object-contain" placeholder='logo'/>
                    </Link>
                </div>
                <div className="mt-3">
                    <ul>
                        {
                            Menus.map((menu,index)=>(
                                <>
                                    <li className={`rounded-md text-white hover:bg-primary-light-color hover:bg-opacity-40
                                        p-2 gap-x-4 items-center flex cursor-pointer ${menu.spacing?"mb-6":""}`}
                                    >
                                        <span className='text-[22px] flex float-left'>
                                            {menu.icon}
                                        </span>
                                        <span className={`text-base flex-1 ${!isSideBarOpen&&"hidden"} duration-200`}>{menu.title}</span>
                                    </li>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar;