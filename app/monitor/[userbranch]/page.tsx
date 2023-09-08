"use client"


import { useFetchData } from '@/app/hooks/useFetchData'
import React from 'react'

import { columns } from './columns'
import MonitorDataTable from './data-table'



function Monitor({params}:{params:{userbranch:string}}) {

  const {DataApi}=useFetchData()
  
  
     const branch = DataApi.filter((val:any)=>val.branch.toLowerCase() == params.userbranch.toLocaleLowerCase())
     const branchInActive = branch.filter((val:{ status: string;})=>val.status !=='Already Out')

  
  

  return (
   <MonitorDataTable columns={columns} data={branchInActive}/>
  
  )

}

export default Monitor





