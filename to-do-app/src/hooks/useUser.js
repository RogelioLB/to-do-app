import { useEffect, useState } from "react"
import { useLocation, useHistory } from "react-router-dom";

export const useUser = () =>{
    const [user,setUser] = useState(null);
    const [token,setToken] = useState((window.localStorage.getItem("token")));
    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        setUser(token)
        fetch("http://localhost:3000/users",{
            headers:{
                "Authorization":"Bearer "+ token
            }
        }).then(res=>res.json()).then(res=>setUser(res[0]));
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