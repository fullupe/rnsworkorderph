import { useEffect, useState } from "react"
import { useChangeStatus } from "./useChangeStatus"

const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export const useFetchData=()=>{

    const [fetchReflesh, setFetchReflesh] = useState<boolean>(false)

    //const {reflesh}=useChangeStatus()

    const [DataApi, setDataApi] = useState<any>([])

    function httpGet(URL: string | URL) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', `${URL}getData`, false) // false for synchronous request
    //xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlHttp.send(null)
    const ApiData = JSON.parse(xmlHttp.responseText)
    setDataApi(ApiData.data)
   
  }

  useEffect(() => {
    
    httpGet(URL)

  }, [fetchReflesh])


  return {DataApi,fetchReflesh, setFetchReflesh}

}