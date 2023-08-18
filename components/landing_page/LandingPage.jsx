"use client";

import { useContext, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai/index.esm";
import { useRouter } from "next/navigation";

import { Discover,Present,HelloAnim,EditAnim,EditAnim1,Success,CreateAnim } from "@assets";
import CarouselSlider from "./CarousalSlider";
import LottieAnim from "@components/utils/LottieAnim";
import { landingPageLiterals } from "@constants";
import SignIn from "@components/signin/SignIn";
import SignUp from "@components/signup/SignUp";
import { NavContext } from "@context_handler/nav_context";


const LandingPage = () => {
    const {component, updateAuthComponent} = useContext(NavContext);
    const router = useRouter();

    const anims = [<LottieAnim asset={Discover} />,<LottieAnim asset={Discover} />,<LottieAnim asset={Discover} />];
    
    return (
        <div>
            <div className={`absolute flex flex-row w-full px-10 py-5 `}>
                <div className="flex flex-col w-1/2  justify-center items-center px-20 gap-10">
                    <div className="flex text-bold text-black text-2xl">
                        {landingPageLiterals.heading}
                    </div>
                    <div>
                        {landingPageLiterals.subHeading}
                    </div>
                </div>
                <div className="relative flex w-1/2 justify-center items-center">
                    <CarouselSlider 
                        mediaItems={[Discover,Present,HelloAnim,EditAnim,EditAnim1,Success,CreateAnim]}
                    />
                </div>
                
            </div>
            <div>
                <img src="/images/landing_page/background_2.jpeg" 
                    className="fixed right-0 top-0 bottom-0 w-full h-full -z-10"
                />
            </div>
            {component!=="signin"?<></>:
            <div className={`auth-overlay relative`}>
                <div className="absolute right-5 top-5 text-black text-3xl 
                    hover:text-red-400"
                    onClick={()=>{
                        updateAuthComponent({component: null});
                        router.replace("/");
                    }}
                >
                    <AiOutlineCloseCircle />
                </div>
                <div className="flex w-1/2 bg-red-400 justify-items-center">
                        text
                </div>
            </div>}
        </div>
        
        
    );
}

export default LandingPage;