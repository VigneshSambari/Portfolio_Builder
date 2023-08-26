"use client";

import { useRouter } from "next/navigation";
import { NavContext } from "@context_provider/nav_context";
import { useContext, useEffect, useState } from "react";
import { AiOutlineGoogle, AiFillLinkedin, AiFillGithub, AiOutlineClose, } from "react-icons/ai/index.esm";
import { BiErrorCircle } from "react-icons/bi/index.esm"
import { abstractBackground } from "@public";
import { signUpTermsAndPolicy } from "@constants";
import { GithubLinkedin, SignInUpButtons } from "@components/utils/Buttons";
import { OrBorderLine } from "@components/utils/Borders";
import { getProviders, signIn } from "next-auth/react";


export const SignInUpBody = ({welcomeText, authStateFlag, signInUpTitle, 
                                    FormComponent, onSubmit, errorText, isLoading}) => {
    const router = useRouter();
    const {component, updateAuthComponent} = useContext(NavContext);

    const [ providers, setProviders ] = useState(null); 

    useEffect(()=>{
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        } 

        setUpProviders();
    },[]);

    function updateRoute({route}){
        component!=route&&updateAuthComponent({
            component: route,
        });
        router.replace(`/?component=${route}`);
    }

    return (
        <div className="flex flex-row lg:w-4/5 rounded-xl bg-white justify-items-center m-5 relative">
            <div className="w-[40%] justify-start items-start hidden lg:flex relative">
                <img src={abstractBackground} 
                    className="w-full h-[650px] object-cover bg-no-repeat rounded-xl"
                />
                <div className="absolute inset-0 flex justify-items-center text-center
                text-white p-10 font-bold font-caveat text-4xl"
                >
                    {welcomeText}
                </div>
            </div>
            <div className="flex md:px-20 md:py-20 px-10 py-14 w-full h-full lg:w-[60%] 
                    justify-items-center lg:px-10 lg:py-0"
            >
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
                        <div className="flex-1 bg-blue-500 rounded-md p-2  text-white cursor-pointer"
                            type='button' key={providers && providers["google"].name}
                            onClick={async () => {
                                providers && providers["google"] && signIn(providers["google"].id, {callbackUrl:"/dashboard"});
                            }}
                        >
                            <div className="flex flex-row relative justify-items-center gap-2 font-bold">
                                <AiOutlineGoogle className="absolute left-0 top-0 bottom-0 text-xl" /> 
                                <span className="text-sm ">
                                    Sign in with Google
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
                    {errorText && <div className="text-red-500 flex flex-row font-semibold items-center font-poppins text-sm">
                        {errorText && <BiErrorCircle />} &nbsp; {errorText}
                    </div>}
                    <SignInUpButtons title={authStateFlag?"Create Account":"Sign In"} 
                        onSubmit={onSubmit} isLoading={isLoading}
                    />
                </div>
            </div>
        </div>        
    );
}

export const OverlayCloseButton = () => {
    const router = useRouter();
    const {component, updateAuthComponent} = useContext(NavContext);

    return (
        <div className="absolute right-5 top-5 text-white shadow-md z-40 bg-black bg-opacity-30 rounded-full text-3xl 
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
