import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import Sidebar from './Sidebar'
======= mentee
import { GoPerson } from "react-icons/go";
import { MdNotificationsActive } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { BiMessageRoundedDots } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
=======
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
======= main





const Layout = () => {
  return (
    <div className='flex flex-row min-h-screen bg-neutral-100 overflow-hidden'>
        <Sidebar />
        <div>
======= mentee
        <div className='flex flex-row items-center h-[71px] w-[1265px] border-b border-[1px] border-slate-200 bg-white border-x'>
            <div className='flex'>
            <a href="/UserProfile"><button className=' bg-blue-600 rounded-sm text-base h-8 px-3 py-1 text-white text-center mb-1 w-36 ml-4 flex flex-row'><IoEyeOutline size={15} className='mr-1 mt-[4px]'/>View Profile</button></a>
            </div>
              <div className='flex-2 w-full flex flex-row gap-5 text-2xl Active:neutral-400 ml-[850px]'>
                <Link className='text-black hover:text-stone-400'><MdNotificationsActive/></Link>
                <Link className='text-black hover:text-stone-400'><IoAlertCircle/></Link>
                <DropdownMenu >
                  <DropdownMenuTrigger>
                  <div className='focus:outline-none '>
                      <GoPerson size={25} className='hover:cursor-pointer focus:outline-none'/>
                  </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      
                      <DropdownMenuItem><LuLayoutDashboard size={15} className='mr-2'/><a href='/'>Dashboard</a></DropdownMenuItem>
                      <DropdownMenuItem><SlCalender size={15} className='mr-2'/> <a href="/booking">Booking</a></DropdownMenuItem>
                      <DropdownMenuItem><BiMessageRoundedDots size={15} className='mr-2'/><a href="/message">Message</a></DropdownMenuItem>
                      <DropdownMenuItem><BiLogOut size={15} className='mr-2'/> LogOut</DropdownMenuItem>
                  </DropdownMenuContent>
                  </DropdownMenu>
=======
        <div className='flex flex-row items-center h-[70px] w-[1265px] bg-white border-x border-slate-300'>
            <div className='flex'>
            <button to='/UserProfile' className=' bg-blue-600 rounded-sm text-base h-8 px-3 py-1 text-white text-center mb-1 w-36 ml-4 flex flex-row'><IoEyeOutline size={15} className='mr-1 mt-[4px]'/>View Profile</button>
            </div>
              <div className='flex-2 w-full flex flex-row gap-5 text-2xl Active:neutral-400 ml-[880px]'>
                <Link className='text-black hover:text-stone-400'><MdNotificationsActive/></Link>
                <Link className='text-black hover:text-stone-400'><IoAlertCircle/></Link>
                <Link to='/UserProfile.jsx' className='text-black hover:text-stone-400'><CgProfile /></Link>
======= main
              </div>
            </div>
            <div>{<Outlet />}</div>
        </div>
        
    </div>
  )
}

export default Layout