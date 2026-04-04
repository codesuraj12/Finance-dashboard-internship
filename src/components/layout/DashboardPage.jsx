import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'


const DashboardPage = () => {
   
  return (
    <div className="flex min-h-screen bg-gray-100">
   
   
 <div className="hidden md:block sticky top-0 h-screen">
    <Sidebar />
  </div>
   
         {/* Main Content */}
         <div className="flex-1 overflow-y-auto">
   
   
           <Header  />
   <div className="p-6">

           <Outlet/>
   </div>
         </div>
       </div>
  )
}

export default DashboardPage