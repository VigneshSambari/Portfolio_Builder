"use client";
import { useState } from 'react';
import Link from 'next/link';

import { BsArrowLeftShort, BsSearch, BsPerson, } from 'react-icons/bs/index.esm';
import { RiDashboard2Fill, RiPaypalFill, } from 'react-icons/ri/index.esm';
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai/index.esm';
import { logoUrl } from "@public";
import { signOut } from 'next-auth/react';


const SideBar = () => {

    const [isSideBarOpen, setSideBarOpen] = useState(true);

    const Menus = [
        {title: "Home", icon: <RiDashboard2Fill />},
        {title: "Browse Templates",spacing:true, icon: <BsSearch />},
        {title: "Payment History", icon: <RiPaypalFill />},
        {title: "Profile", icon: <BsPerson />},
        {title: "Settings", icon: <AiOutlineSetting />},
        {title: "Logout", icon: <AiOutlineLogout />, key: "logout"}
    ];

    return (
        <div className="flex">
            <div className={`sidebar ${isSideBarOpen?"w-44 sm:w-52 text-[14px] sm:text-[15px] pt-3":"w-16"}`}>
                <BsArrowLeftShort className={`bg-white text-primary-color text-2xl rounded-full absolute 
                    cursor-pointer bottom-5 -right-2 border-primary-color border-2 
                    ${!isSideBarOpen&&"rotate-180"}`}
                    onClick={()=>setSideBarOpen(!isSideBarOpen)}
                />
                <div className='flex flex-col justify-start items-center  m-auto'>
                    <Link href="/">
                        <img src={logoUrl}  className="w-36 h-8 object-contain" placeholder='logo'/>
                    </Link>
                </div>
                <div className="mt-5">
                    <ul>
                        {
                            Menus.map((menu,index)=>(
                                <div key={index}>
                                    <li className={`rounded-md text-white hover:bg-primary-light-color 
                                        hover:bg-opacity-40
                                        p-2 gap-x-3 items-center flex cursor-pointer ${menu.spacing?"mb-6":""}`}
                                        onClick={async ()=>{
                                            if(menu.key==="logout"){
                                                signOut();
                                                
                                            }
                                        }}
                                        
                                    >
                                        <span className='text-[20px] flex float-left'>
                                            {menu.icon}
                                        </span>
                                        <span className={` flex-1 ${!isSideBarOpen&&"hidden"} duration-200 text-base`}>
                                            {menu.title}
                                        </span>
                                    </li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar;