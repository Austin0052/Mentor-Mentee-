import React from 'react'
import logo from './shared/logo.png'
import { GoPerson } from "react-icons/go";
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
  } from "./ui/dropdown-menu"
  

const Header = () => {
  return (
    <div className='bg-white h-14 w-full flex flex-row'>
        <div className='flex-1'>
======= mentee
        <a href="/"><img src={logo} alt="MentorShip" className='h-14' /></a>
=======
        <img src={logo} alt="MentorShip" className='h-14' />
======= main
        </div>
        
        
        <DropdownMenu >
        <DropdownMenuTrigger>
        <div className='focus:outline-none pl-4 h-8 w-16'>
======= mentee
            <GoPerson size={25} className='mt-4  hover:cursor-pointer focus:outline-none'/>
=======
            <GoPerson size={25} className='mt-4 mr-10 hover:cursor-pointer focus:outline-none'/>
======= main
        </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
======= mentee
            <DropdownMenuItem><LuLayoutDashboard size={15} className='mr-2'/><a href='/'>Dashboard</a></DropdownMenuItem>
            <DropdownMenuItem><SlCalender size={15} className='mr-2'/> <a href="/booking">Booking</a></DropdownMenuItem>
            <DropdownMenuItem><BiMessageRoundedDots size={15} className='mr-2'/><a href="/message">Message</a></DropdownMenuItem>
=======
            <DropdownMenuItem><LuLayoutDashboard size={15} className='mr-2'/>Dashboard</DropdownMenuItem>
            <DropdownMenuItem><SlCalender size={15} className='mr-2'/>Booking</DropdownMenuItem>
            <DropdownMenuItem><BiMessageRoundedDots size={15} className='mr-2'/>Message</DropdownMenuItem>
======= main
            <DropdownMenuItem><BiLogOut size={15} className='mr-2'/> LogOut</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        <div className='w-12 h-12'></div>

        
    </div>
  )
}

export default Header