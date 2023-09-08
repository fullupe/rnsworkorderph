"use client"
import React, { useState} from 'react'
import {useRouter } from 'next/navigation'
import { Select, SelectItem } from '@tremor/react'
import { CalculatorIcon } from '@heroicons/react/24/outline'
import { useFetchBrache } from '../hooks/useFetchBranch'


type Props={
    selectBranch:string,
    setSelectbranch:(selectBranch: string)=>void;
    label:string
}

function SelectBranchModal({setSelectbranch,selectBranch,label}:Props):React.JSX.Element | null {

    // branch office hook
    const {BranchOffice}=useFetchBrache()


    const router = useRouter()

    
    const [branch, setBranch] = useState('')



    
    const handleClose =(e:any)=>{
        if(e.target.id === "wrap") {
            router.push("/manage")
        }
       
    }
    
   
    
    
    
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        setSelectbranch(branch)
    }
    
  
    
    return (
    <div onClick={handleClose} id="wrap" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-center items-center flex">
        
        <div className="w-[600px] flex flex-col">

            {/* <button onClick={()=>handleClose()} className=" place-self-end text-2xl text-white">x</button> */}

          <div className="bg-white p-2 rounded-lg h-full flex flex-col ">

           <p className="text-2xl font-bold tracking-[4px]">
              
                    Branch Office
             
               
               </p>

           <form onSubmit={handleSubmit} className="py-2 px-4 my-2">
         
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="select">
                    Location
                </label>
                <Select className="z-50 pb-24 flex" value={branch} onValueChange={setBranch}>
                    {
                        BranchOffice.map((val:any)=>(

                    <SelectItem key={val[0]}  value={val[0]} icon={CalculatorIcon}>
                      {val[0]}
                    </SelectItem>

                        ))

                    }

                </Select>


              
            </div>
           
    
            <button  type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {label}
            </button>
                
         </form>           


          </div>

        </div>
        
        </div>
  )
}

export default SelectBranchModal