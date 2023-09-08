//"use client"
import React from 'react'
import ManageUserAccount from './ManageUserAccount'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddUserAccount from './AddUserAccount'


function Account() {
  
  return (
    <div className="flex h-screen  flex-col items-center justify-center">

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Add New User</TabsTrigger>
    <TabsTrigger value="password">Manage User Accounts</TabsTrigger>
  </TabsList>
  <TabsContent value="account">

    
      <AddUserAccount/>

    </TabsContent>

    <TabsContent value="password">

    <ManageUserAccount/>

  </TabsContent>
</Tabs>

     
    </div>
  )
}

export default Account