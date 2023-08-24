import { SimpleInputField } from "@components/utils/InputFields";
import { SignInFieldsContext } from "@context_provider/signin_fields_context";
import { useContext } from "react";

const SignInForm = () => {
    const {signInComponent, updateSignInComponent} = useContext(SignInFieldsContext);

    function onInputChange({name,value}) {
        updateSignInComponent(
            {
                ...signInComponent,
                [name]: value,
            }
        )  
    }

    return (
        <form className="w-full max-w-lg">
            <SimpleInputField type={"email"} id={"email"} title={"Email"} placeholder={"naruto@gmail.com"} 
                value={signInComponent.email} onChange={onInputChange}/>
            <SimpleInputField type={"password"} id={"password"} title={"Password"} placeholder={"********"} 
                value={signInComponent.password} onChange={onInputChange}/>
        </form>
    );
}

export default SignInForm;