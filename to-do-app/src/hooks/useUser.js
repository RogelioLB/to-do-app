import { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom";

export const useUser = () =>{
    const [user,setUser] = useState(null);
    const [token,setToken] = useState((window.localStorage.getItem("token")));

    useEffect(()=>{
        setUser(token)
        fetch("/users",{
            headers:{
                "Authorization":"Bearer "+ token
            }
        }).then(res=>res.json()).then(res=>setUser(res[0]));
    },[token]);

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