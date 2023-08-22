import { ParallelInputFields, SimpleInputField } from "@components/utils/InputFields";

const SignInForm = () => {
    return (
        <form className="w-full max-w-lg">
            <SimpleInputField type={"email"} id={"email"} title={"Email"} placeholder={"naruto@gmail.com"}/>
            <SimpleInputField type={"password"} id={"password"} title={"Password"} placeholder={"********"}/>
        </form>
    );
}

export default SignInForm;