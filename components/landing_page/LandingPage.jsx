"use client";

import { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai/index.esm";
import { useRouter } from "next/navigation";

import { Discover,Present,HelloAnim,EditAnim,EditAnim1,Success,CreateAnim } from "@assets";
import CarouselSlider from "./CarousalSlider";
import LottieAnim from "@components/utils/LottieAnim";
import { landingPageLiterals } from "@constants";
import SignUp from "@components/auth/sign_up/SignUp";
import { NavContext } from "@context_handler/nav_context";
import { entryScreenBackground } from "@public";
import SignIn from "@components/auth/sign_in/SignIn";


const LandingPage = () => {
    const {component, updateAuthComponent} = useContext(NavContext);
    const router = useRouter();
    
    return (
        <div>
            <div className={`absolute flex flex-col lg:flex-row w-full px-10 py-5 justify-items-center`}>
                <div className="flex flex-col w-full sm:w-4/5 md:w-3/5 lg-w-1/2 justify-items-center px-20 gap-10 m-auto">
                    <div className="flex text-bold text-black text-2xl">
                        {landingPageLiterals.heading}
                    </div>
                    <div>
                        {landingPageLiterals.subHeading}
                    </div>
                </div>
                <div className="relative flex w-full sm:w-1/5 md:w-2/5 lg-w-1/2 justify-items-center m-auto">
                    <CarouselSlider 
                        mediaItems={[Discover,Present,HelloAnim,EditAnim,EditAnim1,Success,CreateAnim]}
                    />
                </div>
                
            </div>
            <div>
                <img src={entryScreenBackground} 
                    className="fixed right-0 top-0 bottom-0 w-full h-full -z-10"
                />
            </div>
            {component=="signup" && <div className={`auth-overlay relative`}><SignUp /></div>}
            {component=="signin" && <div className={`auth-overlay relative`}><SignIn /></div>}
        </div>
        
        
    );
}

export default LandingPage;