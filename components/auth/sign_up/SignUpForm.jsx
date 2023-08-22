import { ParallelInputFields, SimpleInputField } from "@components/utils/InputFields";

const SignUpForm = () => {
    return (
        <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-3">
                <ParallelInputFields id={"first_name"} placeholder={"Naruto"} title={"First Name"} type={"text"}/>
                <ParallelInputFields id={"last_name"} placeholder={"Uzumaki"} title={"First Name"} type={"text"}/>
            </div>
            <SimpleInputField type={"email"} id={"email"} title={"Email"} placeholder={"naruto@gmail.com"}/>
            <SimpleInputField type={"password"} id={"password"} title={"Password"} placeholder={"********"}/>
        </form>
    );
}

export default SignUpForm;