
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

    try {
      const response = await axios.get("/api/fetchdatasheet2");
      const data = response.data;
      setDataApi2(data.data);

      //console.log(data.data);
    } catch (error) {
      // Handle any errors, e.g., network issues or failed requests
      console.error("Error fetching data:", error);
    }


    //console.log("saa",userData)

    //const ApiData = JSON.parse(xmlHttp.responseText)
    
   
  }

  useEffect(() => {
    
    httpGet()

  },[fetchReflesh2])


  return {DataApi2,fetchReflesh2, setFetchReflesh2}

}