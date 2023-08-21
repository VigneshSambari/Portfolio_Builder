"use client";

import { useRouter } from "next/navigation";
import { NavContext } from "@context_handler/nav_context";
import { useContext } from "react";
import { AiOutlineGoogle, AiFillLinkedin, AiFillGithub, AiOutlineClose } from "react-icons/ai/index.esm";
import { abstractBackground } from "@public";
import { signUpTermsAndPolicy, signUpWithGoogle } from "@constants";
import { GithubLinkedin, SignInUpButtons } from "@components/utils/Buttons";
import { OrBorderLine } from "@components/utils/Borders";

export const OverlayCloseButton = () => {
    const router = useRouter();
    const {component, updateAuthComponent} = useContext(NavContext);
    return (
        <div className="absolute right-5 top-5 text-white text-3xl 
            cursor-pointer"
            onClick={()=>{
                updateAuthComponent({component: null});
                router.replace("/");
            }}
        >
            <AiOutlineClose />
        </div>
    );
}

export const SignInUpBody = ({welcomeText, authStateFlag, signInUpTitle, FormComponent}) => {
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
        <div className="flex flex-row w-full lg:w-4/5 h-[650px] rounded-xl bg-white">
            <div className="w-[40%] justify-start items-start hidden lg:flex relative">
                <img src={abstractBackground} 
                    className="w-full h-[650px] object-cover bg-no-repeat rounded-xl"
                />
                <div className="absolute w-full h-full flex justify-items-center text-center
                text-white p-10 font-bold font-caveat text-4xl"
                >
                    {welcomeText}
                </div>
            </div>
            <div className="flex relative w-[60%] justify-items-center px-10 py-5">
                <div className="absolute right-7 top-4 text-black text-[14px]">
                    {authStateFlag?"Already a member?":"Don't have an account?"} &nbsp;
                    <span className="text-blue-500 font-semibold m-auto cursor-pointer" 
                        onClick={() => updateRoute({route: authStateFlag?"signin":"signup"})}
                    >
                        {authStateFlag?"Sign in":"Sign up"}
                    </span>
                </div>
                <div className="flex flex-col gap-2 min-w-[400px]">
                    <div className="flex sign-in-up-titles mb-4 font-andika">
                        {signInUpTitle}
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="flex-1 bg-blue-500 rounded-md p-2  text-white cursor-pointer">
                            <div className="flex flex-row relative justify-items-center gap-2 font-bold">
                                <AiOutlineGoogle className="absolute left-0 top-0 bottom-0 text-xl"/> 
                                <span className="text-sm ">
                                    {authStateFlag?"Sign up with Google":"Sign in with Google"}
                                </span>
                            </div>
                        </div>
                        <GithubLinkedin child={AiFillGithub}/>
                        <GithubLinkedin child={AiFillLinkedin}/>   
                    </div>
                    <OrBorderLine />
                    {FormComponent}
                    <div className={`${authStateFlag?"":"hidden"} flex items-center  mt-1 mb-2`}>
                        <input type="checkbox" id="myCheckbox" className="mr-2" />
                        <label htmlFor="myCheckbox" className="text-gray-500 text-sm">
                            {signUpTermsAndPolicy}
                        </label>
                    </div>
                    <SignInUpButtons title={authStateFlag?"Create Account":"Sign In"}/>
                </div>
            </div>
        </div>        
    );
}