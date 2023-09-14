
"use client"
import { ArrowUturnLeftIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import {useUserContext} from "../../app/context/userContex"

import React, { useContext } from 'react'

function AdminNavBar() {

  const {user}=useUserContext()
    
    const handleReflesh = ()=>{
       
        window.location.reload()
    }
    const loginname = user?.username

  return (
    <div className="w-full fixed z-20 flex h-12 items-center  bg-gray-200 shadow-lg justify-center">

        <div className="flex w-full md:w-[80%] justify-between mx-3 items-center bg-gray-200k rounded-lgd  h-full">
        
        <button onClick={handleReflesh}  className="flex flex-col items-center cursor-pointer ">
        <ArrowUturnLeftIcon className="h-5 w-5"/>
        <p className="text-xs">Back</p>

        </button>

        <div className="flex flex-col items-center cursor-pointer ">
        <UserCircleIcon className="h-5 w-5"/>
        <p className="text-xs">
       
          {loginname}</p>
        </div>
        </div>
    </div>
  )
}

export default AdminNavBar