"use client"

import SelectBranchModal from '@/app/components/SelectBranchModal'
import { useFetchData } from '@/app/hooks/useFetchData'
import Cookies from 'js-cookie'
//import { cookies } from 'next/headers'
import React, { useEffect, useState } from 'react'
import { columns } from './columns'
import MonitorDataTable from './data-table'


function Monitor() {


 const rerund: NodeJS.Timeout = setInterval(() =>{


},2000)

const {DataApi,fetchReflesh,setFetchReflesh}=useFetchData()
  

  const [selectBranch,setSelectbranch]=useState('')

  //const [getCookies,setGetCookies]=useState<string | undefined>('')

  // useEffect(()=>{
  //   const oneDay = 24 * 60 * 60 * 1000
  //   if(!getCookies){
  //     Cookies.set('branch', selectBranch, { expires: Date.now() - oneDay })
  //   }
  //   setGetCookies(Cookies.get("branch"))


  // },[selectBranch])

  
  const branch = DataApi.filter((val:any)=>val.branch.toLowerCase() == selectBranch.toLocaleLowerCase())
  
  const branchInActive = branch.filter((val:{ status: string;})=>val.status !=='Already Out')
  
  
  if(!selectBranch) return <SelectBranchModal setSelectbranch={setSelectbranch} selectBranch={selectBranch} label={"Go-Live"}/>

  return (
   <MonitorDataTable columns={columns} data={branchInActive}/>
   //<MonitorDataTable columns={columns} data={DataApi} />
  )

}

export default Monitor





