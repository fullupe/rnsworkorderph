"use client"
import React, { useState} from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TpmNewAlocate from './TpmNewAlocate'
import TpmReAlocate from './TpmReAlocate'


type Props={
   
    setOpenModal:(openModal:boolean)=>void;
}

function TpmReAlocateModal({setOpenModal}:Props):React.JSX.Element | null {


  
    
    const handleClose =(e:any)=>{
        if(e.target.id === "wrap") {
          
            setOpenModal(false)
        }
       
    }
    

  
    return (
    <div onClick={handleClose} id="wrap" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex">
        
        <div className="w-full flex flex-col justify-center items-center">

         <button onClick={()=>setOpenModal(false)} className=" place-self-end text-2xl text-white">x</button>

         <div className="bg-white p-1 rounded-lg h-full w-full md:w-[50%] mx-2 flex flex-col ">

        <Tabs defaultValue="Realocate" className={`w-full items-center justify-center`}>
        <TabsList className="">
            <TabsTrigger className="bg-red-500 text-white font-bold" value="Realocate">Re-Allocate TPM</TabsTrigger>

            <TabsTrigger className="bg-orange-500 text-white font-bold" value="NewAlocate">New Allocate TPM</TabsTrigger>
        </TabsList>

        <TabsContent value="Realocate">

    
          <TpmReAlocate/>

        </TabsContent>

        <TabsContent value="NewAlocate">

          <TpmNewAlocate/>

        </TabsContent>

        </Tabs>


        </div>
        
        </div>

       </div>
  )
}

export default TpmReAlocateModal