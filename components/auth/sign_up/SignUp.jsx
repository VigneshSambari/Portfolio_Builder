"use client";

import { signUpTitle, signUpWelcomeText } from "@constants";
import SignUpForm from "./SignUpForm";
import { OverlayCloseButton, SignInUpBody } from "../utils";

const SignUp = () => {
    return (
        <>
            <OverlayCloseButton />
            <SignInUpBody welcomeText={signUpWelcomeText} authStateFlag={true} 
                signInUpTitle={signUpTitle} FormComponent={<SignUpForm />}   
            />
        </>
    );
}



export default SignUp;