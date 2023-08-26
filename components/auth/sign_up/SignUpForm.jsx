
import { useContext } from "react";
import { ParallelInputFields, SimpleInputField } from "@components/utils/InputFields";
import { SignUpFieldsContext } from "@context_provider/signup_fields_context";


const SignUpForm = () => {
    const { signUpComponent,updateSignUpComponent, inputErrors } = useContext(SignUpFieldsContext);

    function onInputChange({name, value}) {
        updateSignUpComponent(
            {   
                ...signUpComponent,
                [name]: value,
            }
        )  
    }

    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-3">
                <ParallelInputFields id={"firstName"} placeholder={"Naruto"} title={"First Name"} type={"text"} 
                onChange={onInputChange} value={signUpComponent.firstName} error={inputErrors.firstName}/>
                <ParallelInputFields id={"lastName"} placeholder={"Uzumaki"} title={"Last Name"} type={"text"} 
                onChange={onInputChange} value={signUpComponent.lastName} error={inputErrors.lastName}/>
            </div>
            <SimpleInputField type={"email"} id={"email"} title={"Email"} placeholder={"naruto@gmail.com"} 
            onChange={onInputChange} value={signUpComponent.email} error={inputErrors.email}/>
            <SimpleInputField type={"password"} id={"password"} title={"Password"} placeholder={"********"} 
            onChange={onInputChange} value={signUpComponent.password} error={inputErrors.password}/>
        </form>
    );
}

export default SignUpForm;