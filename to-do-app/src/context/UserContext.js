import { createContext } from "react";
import { useUser } from "../hooks/useUser";

export const UserContext = createContext();

const UserContextProvider = ({children}) =>{
    const {user,token,setToken,logOut,login} = useUser();

    return(
    <UserContext.Provider value={{user,token,setToken,logOut,login}}>
        {children}
    </UserContext.Provider>
    );
}

export default UserContextProvider;