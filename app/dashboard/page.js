"use client"

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import SideBar from "@components/dashboard/SideBar"

const DashBoard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(()=>{
        if(status !== "loading"){
            if(!session?.user ){
                router.replace("/");
            }
        }
    },[status]);

    return (
        <div className="flex flex-row">
            <SideBar />
            <div className="flex-1">
                Dashboard
            </div>
        </div>
    );
}

export default DashBoard;