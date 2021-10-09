import { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken"

export const useUser = () =>{
    const [user,setUser] = useState(null);
    const [token,setToken] = useState((window.localStorage.getItem("token")));
    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        setUser(jwt.decode(token));
        console.log(location.pathname)
        console.log(location.pathname !== "/" && location.pathname !== "/register" && location.pathname !== "/login" && !token)
        if(location.pathname !== "/" && location.pathname !== "/register" && location.pathname !== "/login" && !token)  history.replace("/");
    },[token,history,location.pathname]);

    const logOut = () =>{
        window.localStorage.removeItem("token");
        setToken(null)
    }

    const login = (token) =>{
        console.log(token)
        window.localStorage.setItem("token",token);
        setToken(token)
    }

    return {user,token,setToken,logOut,token,login};
}