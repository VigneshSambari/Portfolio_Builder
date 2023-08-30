"use client"

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import SideBar from "@components/dashboard/SideBar"
import { FullLoader } from "@components/utils/Loaders";

const DashBoard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(()=>{

        if(status !== "loading"){
            if(!session?.user ){
                console.log("router");
                router.replace("/");
            }
            else{
                setIsLoading(false);
            }
        }
    },[status]);

    return (
        <>
        {isLoading && <FullLoader />}
        {
            !isLoading &&
            <div className="flex flex-row">
            <SideBar />
            <div className="flex-1">
                Dashboard
            </div>
        </div>
        }
        </>
    );
}

export default DashBoard;