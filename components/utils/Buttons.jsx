import { InsideButtonLoader, InsideButtonLoder } from "./Loaders";

export const GithubLinkedin = (props) => {
    return (
        <div className="flex bg-gray-200 rounded-md p-2 justify-items-center 
            text-white cursor-pointer"
        >
            <props.child className="text-gray-700 text-xl"/>
        </div>
    );
}


export const SignInUpButtons = ({title, onSubmit, isLoading}) => {
    return (
        <div className="flex" >
            <span className={`px-16 rounded-md text-white font-bold
                bg-pink-500 text-sm ${!isLoading ?"py-1.5 cursor-pointer":""}`}
                onClick={()=>!isLoading?onSubmit():null}
            >
                {!isLoading ? title : <InsideButtonLoader className="p-0 m-0 
                    max-w-2xl object-cover "/>
                }
            </span>
        </div>
    );
}