"use client"
import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {Circles } from  'react-loader-spinner'

import { ToastContainer, toast } from 'react-toastify';

import {useFetchData} from  "../../hooks/useFetchData"
import {useChangeStatus} from  "../../hooks/useChangeStatus"
import { useUserContext } from '@/app/context/userContex'


function Receiptionist() {

  const {user}=useUserContext()

  const [activeUser,setActiveUser]=useState('')

  useEffect(()=>{
    // @ts-ignore
    setActiveUser(user.username)
  },[])

  const {add_To_Sheet2,delete_From_Sheet2, Loading}=useChangeStatus()
  
  const {DataApi,fetchReflesh,setFetchReflesh}=useFetchData()
  
  const [input, setInput] = useState<string>('')
  
  const [tpmInfo, setTpmInfo] = useState<any>('')
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const foundItem = DataApi.find((val: { tpm: string }) => val.tpm == input);

    if (foundItem) {
      // Match found
      setTpmInfo(foundItem);
      //setInput('');
      
      toast('Record Found!', {
        toastId: 'success',
        icon: '🚀',
      });
    } else {
      // No match found
      toast(`Tpm ${input} is Not a Valid Terminal`, {
        toastId: 'error',
        icon: '🚀',
      });
    }
  
        setFetchReflesh(!fetchReflesh)


  }

  const handleSubmitIn= async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    const request = {
      ...tpmInfo,
      status:"Working On",
      createdAt: new Date(),
      ruser:activeUser
    }

      add_To_Sheet2(request)
      setInput("")
  }

  const handleSubmitOut= async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
   
    const request = {
      tpm:tpmInfo.tpm
    }

    delete_From_Sheet2(request)
    setInput("")

  }




  const statusColor = tpmInfo.status == 'Ready ✅' ? 'bg-[#00C600] text-white' : // @ts-ignore 
  tpmInfo.status == 'Working On' ? 'bg-[#152E61] text-white' : // @ts-ignore 
  tpmInfo.status == 'Water Entered' ? 'bg-[#877FBF] text-white' :// @ts-ignore 
 
  tpmInfo.status == 'On Test' ? 'bg-[#315EA7] text-white' :  // @ts-ignore 
   
  tpmInfo.status == 'Waiting for Part' ? 'bg-[#8EEEF7] text-whited' :// @ts-ignore 
  
  "bg-[#E7223B] text-white "; 


  return (
    <div className="flex min-h-screen justify-center items-center bg-red-100">
     <div
      className='py-4 px-6 bg-white bg-gradient-to-r from-sky-100 to-indigo-500 shadow-2xl h-4/5 md:max-w-md !important text-lg rounded-2xl relativee absolutev  flex flex-col h leading- w-[98%] text-white mt-8 mb-12 overflow-hidden'
    >

      
      <ToastContainer />
      <div className="felx flex-col space-y-6">
        <div className=" h- bg-gray-00  items-center flex flex-col mt-8 ">
        
          <p className="text-gray-900 text-2xl font-bold border-b mb-8 italic font-poppins ">
            Receptionist Check 📮{' '}
          </p>
          
          <p> Welcome {activeUser}</p>

          <form onSubmit={handleSearch} className="flex items-center mt-3 space-x-3f mb-4">
            <div className="flex w-full bg-white border-2 border-green-900 rounded-full items-center overflow-hidden">

              <div className=" h-full bg-blue-900h mx-1 rounded-l-full ">

                <p className="text-gray-500 mx-2  text-lg">Tpm</p>
          
              </div>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={5}
                type="numeric"
              
                autoFocus={true}
                placeholder="Enter Tpm#"
                className=" px-2 pl-5 italic w-44 flex-1  rounded-full bg-gray-100 text-black outline-none placeholder:text-xs"
              />

             

              <button
                type="submit"
               
                disabled={!input}
                className="bg-transparent  hover:bg-blue-500 disabled:text-gray-800 text-white font-semibold hover:text-white py-0 ml-2 px-2  border-white hover:border-transparent"
              >
                <MagnifyingGlassIcon className=" h-8 w-8 p-1 text-black disabled:text-gray-800" />
              </button>
            </div>
          </form>

          <div className=" text-gray-900 items-center flex flex-col w-full">
            <p className="border-b text-white text-2xl italic font-poppins font-bold ">Terminal Details</p>
              {
                tpmInfo &&
            <div className="w-full flex flex-col mt-2 mb-1 items-right space-y-4 pb-1">
              <label className="font-bold">Retailer Name</label>
              <p className=" px-4 bg-gray-900 rounded-lg text-white shadow-lg border-2 border-white opacity-60">
             
                <small className="ml-2 text-center uppercase ">
                  {tpmInfo.agentName}
                </small>
              </p>

              <div className="flex space-x-1 w-full">
                <div className="fle flex-col w-full">
              <label className="font-bold">Tpm Num</label>
                <p className=" flex-1 px-4 bg-gray-900 rounded-lg text-white shadow-lg border-2 border-white opacity-60">
              
                  <small className="ml-2 text-center ">{tpmInfo.tpm}</small>
                </p>

                </div>

                <div className="flex flex-col w-full">
                <label className="font-bold"> Branch office</label>
                <p className={` flex-1 px-4 border-2 border-white  bg-gray-900   rounded-lg text-white shadow-lg opacity-60`}>
             
                  <small className="ml-2 text-center ">{tpmInfo.branch}</small>
                </p>

                </div>

              </div>
              
    
            </div>
            }


            {Loading &&<Circles color="#FC6238" height={40} width={70} />}

          </div>
        </div>

        <hr />

        <div className=" flex flex-col  w-full bg-yellow-00 pb-8 ">
          <div className=" flex  w-full justify-center space-x-4 items-center bg-red-00">
            <button
              type="submit"
              disabled={!tpmInfo.tpm || !input}
              onClick={handleSubmitIn}
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-8 border border-orange-400 hover:border-transparent rounded disabled:text-gray-500"
            >
              Tpm In
            </button>
            <button
              type="submit"
              disabled={!tpmInfo.tpm || !input}
              onClick={handleSubmitOut}
              className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-6 border border-green-400 hover:border-transparent rounded disabled:text-gray-500"
            >
              Tpm Out
            </button>
          </div>
        </div>
      </div>
    </div>
      
      </div>
  )
}

export default Receiptionist