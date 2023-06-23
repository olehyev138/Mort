import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = (props: any) =>
{
    const { loginWithRedirect , isAuthenticated, } = useAuth0();
    const { Component } = props;
    useEffect(()=>
    {
        if(!isAuthenticated)
        {
            loginWithRedirect();
        }
    },[])
    return(
        <>
        <Component/>
        </>
    )

}
export default ProtectedRoute;