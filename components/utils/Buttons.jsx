export const GithubLinkedin = (props) => {
    return (
        <div className="flex bg-gray-200 rounded-md p-2 justify-items-center 
            text-white cursor-pointer"
        >
            <props.child className="text-gray-700 text-xl"/>
        </div>
    );
}


export const SignInUpButtons = ({title}) => {
    return (
        <div className="flex jusitfy-start">
            <span className="px-16 py-1.5 rounded-md text-white font-bold
                    cursor-pointer bg-pink-500 text-sm"
            >
                {title}
            </span>
        </div>
    );
}