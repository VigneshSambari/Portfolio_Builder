"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { signInTitle, signInWelcomeText } from "@constants";
import { OverlayCloseButton, SignInUpBody } from "../utils";
import SignInForm from "./SignInForm";
import { SignInFieldsContext } from "@context_provider/signin_fields_context";
import { dashBoardRoutes } from "@constants/routeHelpers";


const SignIn = () => {
    const { onSubmit, error,isLoading } = useContext(SignInFieldsContext);
    const router = useRouter();

    function callback(){
        router.replace(dashBoardRoutes.dashboard);
    }

    function signInUser(){
        onSubmit({callback: callback});
    }

    return (
        <>
            <OverlayCloseButton />
            <SignInUpBody welcomeText={signInWelcomeText} authStateFlag={false} 
                signInUpTitle={signInTitle} FormComponent={<SignInForm />} 
                onSubmit={signInUser}  errorText={error} isLoading={isLoading}
            />
        </>
    );
}



export default SignIn;