import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";



export const Sidebar_Links  = [
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/',
        icon:<MdSpaceDashboard/>
    },
    {
        key:'KYC',
        label:'KYC',
        path:'/KYC',
        icon:<ImProfile/>
    },
    {
        key:'Profile',
        label:'Profile',
        path:'/UserProfile',
        icon:<CgProfile/>
    },
    {
        key:'Booking',
        label:'Booking',
        path:'/Booking',
        icon:<FaWpforms/>
    },
]
export const Sidebar_Logout  = [
    {
        key:'logout',
        label:'Logout',
        path:'/login',
        icon:<BiLogOut/>
    }
]