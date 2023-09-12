import { useEffect, useState } from "react"


const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export const useFetchDataSheet2=()=>{

    const [fetchReflesh, setFetchReflesh] = useState<boolean>(false)

    const [DataApi2, setDataApi2] = useState<any>([])

    function httpGet(URL: string | URL) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', `${URL}getDataFromSheet2`, false) // false for synchronous request
    xmlHttp.send(null)
    const ApiData = JSON.parse(xmlHttp.responseText)
    setDataApi2(ApiData.data)
   
  }

  useEffect(() => {
    
    httpGet(URL)

  }, [fetchReflesh])


  return {DataApi2,fetchReflesh, setFetchReflesh}

}