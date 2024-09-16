import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { GoPerson } from 'react-icons/go';
import { MdNotificationsActive } from 'react-icons/md';
import { IoAlertCircle, IoEyeOutline } from 'react-icons/io5';
import { BiLogOut, BiMessageRoundedDots } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { SlCalender } from 'react-icons/sl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const Layout = () => {
  return (
    <div className="flex flex-row min-h-screen bg-neutral-100 overflow-hidden">
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-row items-center h-[71px] w-full border-b border-slate-200 bg-white">
          <div className="flex ml-4">
            <Link to="/UserProfile">
              <button className="bg-blue-600 rounded-sm text-base h-8 px-3 py-1 text-white text-center mb-1 w-36 flex flex-row items-center">
                <IoEyeOutline size={15} className="mr-1" />
                View Profile
              </button>
            </Link>
          </div>

          {/* Right-side Icons */}
          <div className="flex-1 flex justify-end gap-5 text-2xl mr-10">
            <Link className="text-black hover:text-stone-400">
              <MdNotificationsActive />
            </Link>
            <Link className="text-black hover:text-stone-400">
              <IoAlertCircle />
            </Link>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="focus:outline-none">
                  <GoPerson size={25} className="hover:cursor-pointer" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LuLayoutDashboard size={15} className="mr-2" />
                  <Link to="/">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SlCalender size={15} className="mr-2" />
                  <Link to="/booking">Booking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BiMessageRoundedDots size={15} className="mr-2" />
                  <Link to="/message">Message</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BiLogOut size={15} className="mr-2" />
                  LogOut
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Outlet for Nested Routes */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
