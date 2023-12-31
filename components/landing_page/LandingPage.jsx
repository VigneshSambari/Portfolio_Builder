"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { landingPageLiterals } from "@constants";
import SignUp from "@components/auth/sign_up/SignUp";
import { NavContext } from "@context_provider/nav_context";
import { entryScreenBackground } from "@public";
import SignIn from "@components/auth/sign_in/SignIn";
import { dashBoardRoutes } from "@constants/routeHelpers";
import { SignInFieldsContextProvider } from "@context_provider/signin_fields_context";
import { SignUpFieldsContextProvider } from "@context_provider/signup_fields_context";


const LandingPage = () => {
    const {component, updateAuthComponent} = useContext(NavContext);
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(()=>{
        if(status !== "loading"){
            if(session?.user){
                console.log("router");
                router.replace(dashBoardRoutes.dashboard);
            }
        }
    },[session, status]);
    
    return (
        <div>
            {
                <div>
                    <div className={`absolute flex flex-col lg:flex-row w-full px-10 py-5 justify-items-center`}>
                        <div className="flex flex-col w-full lg:w-1/2 justify-items-center
                                pt-10 px-3 sm:px-6 md:px-12 gap-10  m-auto">
                            <div>
                                {landingPageLiterals.heading}
                            </div>
                            <div className="text-yellow-600">
                                {landingPageLiterals.subHeading}
                            </div>
                        </div>
                        <div className="relative flex w-full sm:w-1/5 md:w-2/5 lg-w-1/2 font-andika text-yellow-500 
                                        justify-items-center m-auto">
                            {/* <CarouselSlider 
                                mediaItems={landingPageLiterals.carousalAnimations}
                                captions={landingPageLiterals.carousalCaptions}
                            /> */}
                        </div>
                        
                    </div>
                    <div>
                        <img src={entryScreenBackground} 
                            className="fixed right-0 top-0 bottom-0 w-full h-full -z-10"
                        />
                    </div>
                </div>    
            }
            {
                component==="signup" && 
                <div className={`auth-overlay relative`}>
                    <SignUpFieldsContextProvider>
                        <SignUp />
                    </SignUpFieldsContextProvider>
                </div>
            }
            {
                component==="signin" && 
                <div className={`auth-overlay relative`}>
                    <SignInFieldsContextProvider>
                        <SignIn />
                    </SignInFieldsContextProvider>
                </div>
            }
        </div>
        
        
    );
}

export default LandingPage;