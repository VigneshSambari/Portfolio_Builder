import Link from "next/link";

const NavBar = () => {
    
    return (
        <div className="navbar">
            <div className="flex flex-1">
                <Link href="/" className="cursor-pointer">
                    <img src="/logo/logo.svg" placeholder="logo" 
                        className="sm:w-36 w-24 object-contain"
                    />
                </Link>
            </div>
            <div className="flex gap-2 sm:gap-3">
                <div className="login-signup-buttons">
                    <span>Login</span>
                </div>
                <div className="login-signup-buttons">
                    <span>Sign up</span>
                </div>
            </div>
           
        </div>
    )
}

export default NavBar;