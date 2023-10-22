import { useEffect, useState } from "react"
import { useUserContext } from "../context/userContex"
import { useChangeStatus } from "./useChangeStatus"

const URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string

export const useFetchData=()=>{
  const {user}=useUserContext()

    const [fetchReflesh, setFetchReflesh] = useState<boolean>(false)

    const [activeUserBranchName,setActiveUserBranchName]=useState('')

    useEffect(()=>{
       if(user){
         setActiveUserBranchName(user.userbranch)
       }
 
     },[])

    const [DataApi, setDataApi] = useState<any>([])

    async function httpGet() {

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', `${URL}getData`, false) // false for synchronous request
    //xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlHttp.send(null)
    const ApiData = JSON.parse(xmlHttp.responseText)


    //const Data =  await fetch("/api/fetchMainData").then((res)=>res.json().then(data=>data.data))
    //const branchDAta = Data.filter((B_data:any)=>B_data.branch == activeUserBranchName)

    setDataApi(ApiData.data)
   
  }

  useEffect(() => {
    
    httpGet()

  }, [])


  return {DataApi,fetchReflesh, setFetchReflesh}

}