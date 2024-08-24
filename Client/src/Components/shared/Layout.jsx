import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { IoAlertCircle } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";





const Layout = () => {
  return (
    <div className='flex flex-row min-h-screen bg-neutral-100 overflow-hidden'>
        <Sidebar />
        <div>
        <div className='flex flex-row items-center h-[70px] w-[1265px] bg-white border-x border-slate-300'>
            <div className='flex'>
            <button to='/UserProfile' className=' bg-blue-600 rounded-sm text-base h-8 px-3 py-1 text-white text-center mb-1 w-36 ml-4 flex flex-row'><IoEyeOutline size={15} className='mr-1 mt-[4px]'/>View Profile</button>
            </div>
              <div className='flex-2 w-full flex flex-row gap-5 text-2xl Active:neutral-400 ml-[880px]'>
                <Link className='text-black hover:text-stone-400'><MdNotificationsActive/></Link>
                <Link className='text-black hover:text-stone-400'><IoAlertCircle/></Link>
                <Link to='/UserProfile.jsx' className='text-black hover:text-stone-400'><CgProfile /></Link>
              </div>
            </div>
            <div>{<Outlet />}</div>
        </div>
        
    </div>
  )
}

export default Layout