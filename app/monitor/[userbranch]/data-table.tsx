"use client"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel

  
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import React, { useEffect, useRef } from 'react'

import { ColorRing } from "react-loader-spinner"


//const Base_URL:string = process.env.NEXT_PUBLIC_BASE_URL_DATA as string;


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  branch:string
}

function MonitorDataTable<TData, TValue>({columns,data,branch}: DataTableProps<TData, TValue>) {
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel:getCoreRowModel(),
    //getPaginationRowModel:getPaginationRowModel()
  })

  //const tableRef:React.MutableRefObject<undefined> = useRef();
  const tableBodyRef: any = useRef();

  useEffect(() => {
    const tableBody: any = tableBodyRef.current;
    const numRows: number = data.length;
    let currentRow: number = 0;

    const scrollInterval: NodeJS.Timeout = setInterval(() => {
      // Scroll to the next row
      if (tableBody && tableBody.children[currentRow]) {
        tableBody.children[currentRow].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
      
      // Increment the current row index, and loop back to the beginning if necessary
      currentRow++;
      if (currentRow >= numRows) {
        currentRow = 0;
      }
      
    }, 2000); // Adjust the scroll interval (in milliseconds) as needed
    
    //window.location.reload();
    return () => clearInterval(scrollInterval);
  },[data]);
  
 // Simulated data source change (replace with your actual data source change logic)
 const simulateDataSourceChange = () => {
  // Simulate data source change after 5 seconds
  setInterval(() => {
    // Reload the current page
  window.location.reload();
  }, 300000); // Adjust the time interval as needed
};

// Use useEffect to listen for data source changes
useEffect(() => {
  // Call your function to listen for data source changes
  simulateDataSourceChange();
  //window.location.reload();
  
}, []);


  return (
    <div className="" >
    <div className="rounded-md border" >
        <Table className=" mt-10" >
          <TableHeader className=" " >
            {table.getHeaderGroups().map(headerGroup=>{

              return(
                <>
                <TableRow key={headerGroup.id} className="bg-blue-700 fixed top-0   w-screen ">
                  
                    {headerGroup.headers.map(header=>{
                      return(
                        <TableHead key={headerGroup.id} className=" font-bold uppercase w-screen text-center text-white items-center justify-center  ">

                          {flexRender(header.column.columnDef.header, header.getContext())}

                        </TableHead>
                      )
                    })}
                </TableRow>

                </>
              )
            })}
        
          </TableHeader>
     

           
           
           
          <TableBody className="" ref={tableBodyRef} style={{ height: '300px', marginTop: 100, overflowY: 'scroll' }}>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row=>{

                                                                                      // @ts-ignore 
                 const rowClass = row.original.status == 'Ready ✅' ? 'bg-[#00C600] text-white' : // @ts-ignore 
                                  row.original.status == 'Working On' ? 'bg-[#152E61] text-white' : // @ts-ignore 
                                  row.original.status == 'Water Entered' ? 'bg-[#877FBF] text-white' :// @ts-ignore 
                                 
                                  row.original.status == 'On Test' ? 'bg-[#315EA7] text-white' :  // @ts-ignore 
                                  // row.original.status == 'See Management' ? 'bg-red-900' :// @ts-ignore 
                                  row.original.status == 'Waiting for Part' ? 'bg-[#8EEEF7] text-whited' :// @ts-ignore 
                                  
                                  "bg-[#E7223B] text-white "; 
              

                return (

                  

                  <TableRow key={row.id} className={`container`} style={{marginTop:12}}>
                  

                    {row.getVisibleCells().map(cell=>(
                      <TableCell key={cell.id} className={`border-b-2 uppercase lg:text-2xl  border-red-400 font-bold text-center  ${rowClass}`}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}

                  </TableRow>
                
              )})

            ):(
              <TableRow className={` items-center justify-center w-full flexs`}>
                  <TableCell className="w-full items-center justifycenter bg-gray-200 min-h-screen">
                    <div className="text-center flex flex-col w-full items-center justify-center min-h-screen" >

                    <ColorRing
                    visible={true}
                    height="60"
                    width="60"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{ marginTop:"20"}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                  />

      <p className="text-center text-6xl font-extrabold tracking-[10px] italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-bounce uppercase">{branch} office</p>
                    
                    </div>
                  </TableCell>
              </TableRow>
            )}

          </TableBody>
      
        </Table>
    </div>

    {/* pagination */}
    {/* <div className="flex items-center justify-start space-x-2 py-4">
      <Button variant="light" size="md" onClick={()=>{
     
        table.previousPage()
      }} disabled ={!table.getCanPreviousPage()}>Previous</Button>

      <Button variant="light" size="md" onClick={()=>{

        table.nextPage()
      }} disabled ={!table.getCanNextPage()}>Next</Button>

    </div> */}
    </div>
  )
}

export default MonitorDataTable; 


