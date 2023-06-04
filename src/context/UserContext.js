import { createContext, useContext, useEffect, useState } from "react";
import api from "../apiServices/api"

const userContext = createContext();

export const UserContext =({children}) => {

    useEffect (()=>{
        localStorage.setItem("user", '')
    },[])
    
    const [user, setUser] = useState(()=>{
        const saved_user =localStorage.getItem("user");
        return( saved_user!==''?JSON.parse(saved_user):'');

    });
    const [apiToken,setApiToken] = useState('')

      const value ={
          user,
          setUser,
          apiToken,
          setApiToken,
          

      }
    const getUserData =async()=>{
        if(apiToken!==''){
            const resp = await api.get(`/user`, {
                headers: { Authorization: `Bearer ${apiToken}` },
              });
        }
        
    }
    
    return (
        <userContext.Provider value ={value}>
        {children}
        </userContext.Provider>
    )

}
export const useUser=()=>{
    return useContext(userContext);
}