"use client"
 
import React, { createContext,Dispatch, useContext, SetStateAction, useState } from 'react'


type userType={
    id: string,
    role:string,
    passcode:string,
    username:string,
    userbranch:string,
    status: string,
}


type UserContextType={
   
    user:userType | undefined; // Start with undefined;
    setUser:Dispatch<SetStateAction<userType | undefined>>;

    isAuth:boolean;
    setIsAuth:(isAuth:boolean)=>void

}

 const UserContext = createContext<UserContextType>({
   
    user:undefined,
    setUser:() =>{},

    isAuth:false,
    setIsAuth:()=>{}



    
})

export const UserContextProvider = ({children}:any)=>{

const [user, setUser] = useState<userType | undefined>(undefined)
const [isAuth, setIsAuth]=useState<boolean>(false)

return(
    <UserContext.Provider value={{user, setUser,isAuth, setIsAuth}}>
            {children}
    </UserContext.Provider>
)

}


export const useUserContext=()=>useContext(UserContext);