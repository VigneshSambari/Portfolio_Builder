"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import Lottie from "lottie-react";

import { Loading1 } from "@assets";
import { NavContext } from "@context_provider/nav_context";

const NavigationWrapper = ({children}) => {
    const {data: session, status} = useSession();

    // const router = useRouter();

    useEffect(()=>{
        console.log(window.location.pathname)
        if(status !== "loading"){ 
            if(!session?.user){
                router.replace("/");
            }
        }
    },[status]);


    const loader = (
        <div className="fixed flex w-full h-full justify-items-center">
                <Lottie animationData={Loading1} className="w-[100px] h-[100px] object-contain"/>
        </div>
    );

    return (
        <>
           {status==="loading"?loader:<></>}
           {children}
        </>
    );
}

export default NavigationWrapper;