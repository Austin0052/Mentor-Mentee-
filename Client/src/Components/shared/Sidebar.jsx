import React from 'react';
import { Sidebar_Links, Sidebar_Logout } from '../../lib/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import logo from './logo.png';

const ClassLinks = 'flex items-center gap-2 p-3 font-light px-3 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-100 hover:no-underline hover:text-white active:bg-neutral-600 rounded-md text-base';

function SideLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'text-white bg-gradient-to-r from-blue-800 to-blue-100'
          : 'text-black',
        ClassLinks
      )}
    >
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  );
}

function SideBottom({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'text-white bg-purple-800'
          : 'text-black',
        ClassLinks,
        'font-bold pl-14 text-red-500'
      )}
    >
      <span className='text-2xl'>{item.icon}</span>
      {item.label}
    </Link>
  );
}

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-white min-w-64 min-h-screen text-black'>
      <div className='flex flex-row mt-1 mb-[4px] ml-3'>
        <img src={logo} alt="MentorShip" />
      </div>
      <div className='border-b border-slate-300 w-64 mt-[6px]'></div>
      <div className='flex-1 flex flex-col py-5 gap-0.5 mx-3'>
        {Sidebar_Links.map((item) => (
          <SideLink key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col py-3 pt-2 border-t border-gray-500 mx-3'>
        {Sidebar_Logout.map((item) => (
          <SideBottom key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
