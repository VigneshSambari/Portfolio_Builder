"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

import { NavContext } from "@context_handler/nav_context";
import { logoUrl } from "@public";

const NavBar = () => {
    const {component, updateAuthComponent} = useContext(NavContext);
    const router = useRouter();
    
    useEffect(()=>{
        // Get the query parameters from window.location.search
        let searchParams = new URLSearchParams(window.location.search);

        // Get the value of a specific query parameter
        let compParam = searchParams.get('component');

        updateAuthComponent({
            component: compParam,
        });
    },[router]);
    

    function updateRoute({route}){
        component!=route&&updateAuthComponent({
            component: route,
        });
        router.push(`/?component=${route}`);
    }

    return (
        <div className="navbar">
            <div className="flex flex-1">
                <Link href="/" className="cursor-pointer">
                    <img src={logoUrl} placeholder="logo" 
                        className="sm:w-36 w-24 object-contain"
                    />
                </Link>
            </div>
            <div className="flex gap-2 sm:gap-3">
                <div className="login-signup-buttons"
                    onClick={() => updateRoute({route: "signin"})}
                >
                    <span>Login</span>
                </div>
                <div className="login-signup-buttons"
                    onClick={() => updateRoute({route: "signup"})}
                >
                    <span>Sign up</span>
                </div>
            </div>
           
        </div>
    )
}

export default NavBar;