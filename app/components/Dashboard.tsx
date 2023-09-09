"use client"
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { BarList, Card, Title, Bold, Flex, Text, Metric, CategoryBar, Legend,Divider,ListItem, DonutChart,  BarChart, Subtitle  } from "@tremor/react";
import { useFetchData } from '../hooks/useFetchData';
import { useUserContext } from '../context/userContex';

function Dashboard() {


  const [branch, setBranch]= useState('')

  const [filtedBrach, SetFiltedBrach]=useState([])

  const {DataApi,fetchReflesh,setFetchReflesh}=useFetchData()


  //groupBy BRANCH
  const result = DataApi.reduce(function(r: { [x: string]: any[]; }, a: { branch: string | number; }){
    r[a.branch]=r[a.branch] || [];
    r[a.branch].push(a);
    return r;

  },Object.create(null));


  //groupBy problem
  const result2 = filtedBrach.reduce(function(r: { [x: string]: any[]; }, a: { status: string | number; }){
    r[a.status]=r[a.status] || [];
    r[a.status].push(a);
    return r;

  },Object.create(null));


 const newdata = Object.entries(result)

 const newdata2 = Object.entries(result2)



 // total Tpm 
const TotalTpm = filtedBrach.length;


//   working tpm
 const TotalWorkingTpm = filtedBrach.filter((record: { status: string; })=>{

 return record.status=="Already Out"

})

const Active = TotalWorkingTpm.length
const Inactive = TotalTpm - TotalWorkingTpm.length;

 useEffect(()=>{

  const filted = DataApi.filter((val:any)=>val.branch.toLowerCase() == branch[0].toLocaleLowerCase())

  SetFiltedBrach(filted);
 },[branch])


  const data = newdata.map((val:any)=>{
     return {
       name:val[0],
       value:val[1].length,
       href:"false",
      icon:function uyo(){
        return null
      },

     }
  })

  // Inactive tpm Per branch
  const data1 = newdata.map((val:any)=>{
     return {
       name:val[0],
       value:val[1].filter((val:{ status: string;})=>val.status !=='Already Out').length,
       href:"false",
      icon:function uyo(){
        return null
      },

     }
  })


 // comparing Both Active & InActive
  const data1al = newdata.map((val:any)=>{
     return {
       name:val[0],
       "InActive":val[1].filter((val:{ status: string;})=>val.status !=='Already Out').length,
       "Active":val[1].filter((val:{ status: string;})=>val.status =='Already Out').length,
       
      }

     
  })

  

  
 const problems1 = newdata2.map((val)=>{

  
  return {
    name:val[0],
    value:val[1].length,
    href:"false",
    icon:function uyo(){
      return null
    }
  }
 })

  

  const activities = [
    {
      active: "Active",
      count: Active,
    },
    {
      inactive: "Inactive",
      count: Inactive,
    },
  ]


  return (
    <div className="flex flex-col min-h-screen w-full items-center m-auto bg-[#16113A]">
  
    <div className="flex flex-col w-full ">


      <div className="flex  md:flex w-full min-h-screen ">

      <div className="hidden md:flex text-white w-44 bg-[#262951] pt-12 fixed z-10"> 


      <div className="flex flex-col text-white space-y-6  ">

        {
          newdata.map((val:any)=>(

            <div key={val.id} className="flex  gap-4 w-40 bg-green-800h px-2  py-2 mt-2 items-center shadow-lg">

           <div key={val[0]} onClick={()=>setBranch(val)} className={` ${val[0] == branch[0] ? "text-white underline " : "text-gray-400 "}  flex w-60 px-2 items-center justify-center border-2 border-white rounded-full h-12 cursor-pointer `}>
            
             <p className=" flex">{val[0]}</p>
            
             </div>
             <p className=" flex">{val[1].length}</p>

             </div>

          ))
        }
        </div>

      </div>




    
      <div className=" flex flex-col md:flex-row  w-full md:pl-60 ">
    {/* <div className="w-fulld flex justify-center md:justify-starth ">
      <Card className="max-w-md m-2 mt-16 h-[500px]">
    <Title> Branch </Title>
    <Flex className="mt-0">
      <Text>
        <Bold>Locations</Bold>
      </Text>
      <Text>
        <Bold>Qnt</Bold>
      </Text>
    </Flex>
    <BarList color={"teal"||"red"}
     data={data} className="mt-2 " />
    </Card>
    </div> */}


        <div className="w-full flex flex-col">


        <p className="flex justify-center items-center uppercase  mt-4 ">{branch[0]} <span className="mx-2 uppercase ">office</span></p>
    <hr className="flex bg-gray-300 h-0.5 mt-2 "/>
    <div className="flex flex-wrap md:flex-rowd w-full justify-center items-center md:items-baseline text-white  ">

    <Card className="max-w-sm m-3 h-[400px] bg-[#262951]">
    <Text className="text-white">Total Tpm's  {branch[0]}</Text>
    <Metric className="text-white">{TotalTpm}</Metric>
    <CategoryBar className="mt-3 text-white  w-full" values={[Active, Inactive]} colors={["emerald", "red"]} />
    <Legend
      className="mt-3"
      categories={["Active Tpm", "Inactive Tpm"]}
      colors={["emerald", "red"]}
    />

     
      
       <DonutChart
        className="mt-6 text-4xl font-extrabold  "
        data={activities}
        category="count"
        index="Active"
        //valueFormatter={valueFormatter}
        colors={["emerald", "red"]}
        color="black"
        
        //label={`${(activities[0].count * 10).toFixed()}%`}
        
        label="Tpm's"
      />
   


    
  </Card>


  <Card  className="max-w-sm m-3 text-4xl font-extrabold   h-[400px] bg-[#262952]">
    <Title className="text-white">Problem Descriptions</Title>

    <Flex color={'violet'} className="my-1">
      <Text >
        <Bold className="text-gray-400">Problem</Bold>
      </Text>
      <Text >
        <Bold className=" text-gray-400">Qnt</Bold>
      </Text>
      </Flex>
    <BarList  data={problems1}  color="orange" className=" uppercase italic text-black "/>
  </Card>
    </div>
      <hr className="flex bg-gray-300 h-0.5 mt-2 "/>

    
<div className="flex gap-2 md:gap-0 flex-col md:flex-row w-full items-centerh justify-center p-2">

      <Card className="max-w-full mx-3 mt-1 bg-[#262951]">
    <Title className="text-white">InActive Machine Per Branch Offices</Title>
    {/* <Subtitle>
      Number of Machines Waiting for Parts and Ready for collecting. 
    </Subtitle> */}
    <BarChart
      className="mt-2 text-white"
      data={data1}
      index="name"
      categories={["value"]}
      colors={["orange"]}
      //  valueFormatter={dataFormatter}
       yAxisWidth={45}
    />
  </Card>



  <Card className="bg-[#262951] text-white">
    <Title className="text-white">Compare Active And InActive Terminal</Title>
    <BarChart
      className="mt-6"
      data={data1al}
      index="name"
      categories={["InActive", "Active"]}
      colors={["emerald", "orange",]}
      //valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>

</div>
      



    </div>



    </div>
      </div>
      </div>



    
      <Footer newdata={newdata} branch={branch} setBranch={setBranch}/>
    </div>
  )
}

export default Dashboard
