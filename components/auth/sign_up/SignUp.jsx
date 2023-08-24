"use client";

import { useContext } from "react";

import { signUpTitle, signUpWelcomeText } from "@constants";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/navigation";
import { OverlayCloseButton, SignInUpBody } from "../utils";
import { SignUpFieldsContext } from "@context_provider/signup_fields_context";
import { landingPageRoutes } from "@constants/routeHelpers";
import { NavContext } from "@context_provider/nav_context";

const SignUp = () => {
    const { onSubmit, error } = useContext(SignUpFieldsContext);
    const { updateAuthComponent } = useContext(NavContext);
    const router = useRouter();


    function callback(){
        updateAuthComponent({
            component: "signin",
        });
        router.replace(`/?component=signin`);
    }

    function signUpUser(){
        onSubmit({callback: callback});
    }
    
    return (
        <>
            <OverlayCloseButton />
            <SignInUpBody welcomeText={signUpWelcomeText} authStateFlag={true} 
                signInUpTitle={signUpTitle} FormComponent={<SignUpForm />} onSubmit={signUpUser} 
                errorText={error} 
            />
        </>
    );
}



export default SignUp;