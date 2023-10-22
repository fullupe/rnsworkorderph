
import { useEffect, useState } from "react"

const axios = require('axios');


//const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export const useFetchDataSheet2=()=>{

    const [fetchReflesh2, setFetchReflesh2] = useState<boolean>(false)

    const [DataApi2, setDataApi2] = useState<any>([])

  async  function httpGet() {

    // var xmlHttp = new XMLHttpRequest()
    // xmlHttp.open('GET', `${URL}getDataFromSheet2`, false) // false for synchronous request
    // xmlHttp.send(null)

    
    //const Data =  await  axios.get("/api/fetchdatasheet2").then((res:any)=>res.json().then((data: { data: any; })=>data.data))

    axios.get("/api/fetchdatasheet2").then((res:any)=>{
      let Data =res.json().then((data:any)=>data.data)
      setDataApi2(Data)
    })


    //console.log("saa",userData)

    //const ApiData = JSON.parse(xmlHttp.responseText)
    
   
  }

  useEffect(() => {
    
    httpGet()

  },[fetchReflesh2])


  return {DataApi2,fetchReflesh2, setFetchReflesh2}

}