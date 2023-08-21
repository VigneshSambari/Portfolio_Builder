"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineGoogle, AiFillLinkedin, AiFillGithub } from "react-icons/ai/index.esm";

import { NavContext } from "@context_handler/nav_context";
import { signUpTitle, signUpWithGoogle, signUpTermsAndPolicy } from "@constants";
import { GithubLinkedin, SignInUpButtons } from "@components/utils/Buttons";
import { OrBorderLine } from "@components/utils/Borders";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
    const router = useRouter();
    const {component, updateAuthComponent} = useContext(NavContext);

    function updateRoute({route}){
        component!=route&&updateAuthComponent({
            component: route,
        });
        router.push(`/?component=${route}`);
        console.log(router.query);
    }
    
    return (
        <>
            <div className="absolute right-5 top-5 text-white text-3xl 
                cursor-pointer"
                onClick={()=>{
                    updateAuthComponent({component: null});
                    router.replace("/");
                }}
            >
                <AiOutlineClose />
            </div>
            <div className="flex flex-row w-full lg:w-4/5 h-[650px] rounded-xl bg-white">
                <div className="w-[40%] justify-start items-start hidden lg:flex">
                    <img src="/images/auth/abstract-background.jpg" 
                         className="w-full h-[650px] object-cover bg-no-repeat rounded-xl"
                    />
                </div>
                <div className="flex relative w-[60%] justify-items-center py-5">
                    <div className="absolute right-7 top-4 text-black text-[14px]">
                        Already a member? &nbsp;
                        <span className="text-blue-500 font-semibold m-auto cursor-pointer" 
                            onClick={() => updateRoute({route: "signin"})}
                        >
                            Sign in
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex sign-in-up-titles mb-4 font-andika">
                            {signUpTitle}
                        </div>
                        <div className="flex flex-row gap-3">
                            <div className="flex-1 bg-blue-500 rounded-md p-2  text-white cursor-pointer">
                                <div className="flex flex-row relative justify-items-center gap-2 font-bold">
                                    <AiOutlineGoogle className="absolute left-0 top-0 bottom-0 text-xl"/> 
                                    <span className="text-sm ">{signUpWithGoogle}</span>
                                </div>
                            </div>
                            <GithubLinkedin child={AiFillGithub}/>
                            <GithubLinkedin child={AiFillLinkedin}/>   
                        </div>
                        <OrBorderLine />
                        <SignUpForm />
                        <div class="flex items-center  mt-1 mb-2">
                            <input type="checkbox" id="myCheckbox" class="mr-2" />
                            <label for="myCheckbox" class="text-gray-500 text-sm">
                                {signUpTermsAndPolicy}
                            </label>
                        </div>
                        <SignInUpButtons title={"Create Account"}/>
                    </div>
                </div>
            </div>
        </>
    );
}



export default SignUp;