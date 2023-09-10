
import { useState } from "react"
import { toast } from "react-toastify";
import { useFetchData } from "./useFetchData";

type Props = {
    tpm: string;
    agentName: string;
    status: string;
    branch: string;
    createdAt: Date;

    //input:()=>void

}

const Base_URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string;

export const useChangeStatus=()=>{

  const {DataApi,fetchReflesh,setFetchReflesh}=useFetchData()

  const [Loading, SetLoading] = useState<boolean>(false);

  const updateRecords=(request:Props)=>{
    
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open('POST', `${Base_URL}upDate`, true) // false for synchronous request
   
    if(xmlHttp.readyState==1){
      SetLoading(true)
    }else {
      SetLoading(false)
    }

    xmlHttp.send(JSON.stringify(request)) // Make sure to stringify
    
    xmlHttp.onload = function (){
    
        SetLoading(false)
    

      toast('Records Updated!', {
        icon: '🚀',
      })
      //console.log(xmlHttp.responseText)
    
      setFetchReflesh(!fetchReflesh)
    }
    
    xmlHttp.onerror = function () {
   
      //console.log(xmlHttp.responseText)
    }
   

 }

    return { Loading,SetLoading,updateRecords}

}