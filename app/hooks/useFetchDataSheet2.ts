"use client"
import { useEffect, useState } from "react"


//const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export const useFetchDataSheet2=()=>{

    const [fetchReflesh2, setFetchReflesh2] = useState<boolean>(false)

    const [DataApi2, setDataApi2] = useState<any>([])

  async  function httpGet() {

    // var xmlHttp = new XMLHttpRequest()
    // xmlHttp.open('GET', `${URL}getDataFromSheet2`, false) // false for synchronous request
    // xmlHttp.send(null)

    
    const Data =  await  fetch("/api/fetchdatasheet2",{ cache: 'no-store' }).then((res)=>res.json().then(data=>data.data))


    //console.log("saa",userData)

    //const ApiData = JSON.parse(xmlHttp.responseText)
    
    setDataApi2(Data)
   
  }

  useEffect(() => {
    
    httpGet()

  },[fetchReflesh2])


  return {DataApi2,fetchReflesh2, setFetchReflesh2}

}