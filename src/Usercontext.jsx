import { createContext, useState } from "react";

let UserContext=createContext();


export const Userprovider=({children})=>{
    
    const [username,setUsername]=useState("hello")

    return(
        <UserContext.Provider value={{ username,setUsername}}>
            {children}
        </UserContext.Provider>
    )

}




export default UserContext;


  