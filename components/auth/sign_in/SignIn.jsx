"use client";

import { signInTitle, signInWelcomeText } from "@constants";
import { OverlayCloseButton, SignInUpBody } from "../utils";
import SignInForm from "./SignInForm";

const SignIn = () => {
    return (
        <>
            <OverlayCloseButton />
            <SignInUpBody welcomeText={signInWelcomeText} authStateFlag={false} 
                signInUpTitle={signInTitle} FormComponent={<SignInForm />}   
            />
        </>
    );
}



export default SignIn;