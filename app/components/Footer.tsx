import React from 'react'

type Props ={
  newdata:[] | any,
  branch:[]|any
  setBranch:(branch:any)=>void
}
function Footer({newdata, branch, setBranch}:Props) {
  return (
    <div className="flex md:hidden h-24 w-full  bg-black mx-12 items-center justify-center">
        <div className="flex text-white space-x-6 overflow-x-auto ">
        {
          newdata.map((val:any)=>(

           <div key={val[0]} onClick={()=>setBranch(val)} className={` ${val[0] == branch[0] ? "text-white underline " : "text-gray-400 "}  flex px-2 items-center justify-center border-2 border-white rounded-full h-12 cursor-pointer `}>
            
             {/* <p className=" flex">{val[0]}</p> */}
            <p className="flex px-2 border-2 border-white rounded-full w-[200px] ">{val[0]}</p>
            
             </div>

          ))
          }

        </div>
       
    </div>
  )
}

export default Footer