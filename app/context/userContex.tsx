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
   
    user:userType[];
    setUser:Dispatch<SetStateAction<userType[]>>;

    isAuth:boolean;
    setIsAuth:(isAuth:boolean)=>void

}

 const UserContext = createContext<UserContextType>({
   
    user:[],
    setUser:():userType[] =>[],

    isAuth:false,
    setIsAuth:(isAuth:boolean)=>isAuth



    
})

export const UserContextProvider = ({children}:any)=>{

const [user, setUser] = useState<[] | userType[]>([])
const [isAuth, setIsAuth]=useState<boolean>(false)

return(
    <UserContext.Provider value={{user, setUser,isAuth, setIsAuth}}>
            {children}
    </UserContext.Provider>
)

}


export const useUserContext=()=>useContext(UserContext);