import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { SiGooglemeet } from "react-icons/si";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import Header from './Header';
import AppointmentBooking from './AppointmentBooking';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/api/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-100">
      <Header />

      <div className="container mx-auto bg-slate-100">

        {/* Cover Photo */}
        <div className="bg-gray-200 rounded-lg p-4">
          <div className="relative">
            <img
              src={user.coverPhoto}
              alt="Cover"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-800 to-transparent p-4 rounded-b-lg">
              <div className='flex-1'></div>
              <h2 className="text-white text-2xl font-bold">{user.name}'s Profile</h2>
            </div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="bg-slate-100 shadow rounded-lg p-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src={user.image}
              alt={user.name}
              className="absolute top-52 left-40 w-48 h-48 rounded-full border-4 border-slate-100"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-600 text-lg">{user.position} at {user.company}</p>
            <p className="text-gray-500 flex text-base"><IoLocationOutline className='m-1' />{user.city}</p>
            <div className="text-gray-700 flex flex-col">
              <span className="mr-4 flex text-sm"><IoTimeOutline className='m-1' />Active now</span>
              <span className="mr-4 flex text-sm"><GrPowerReset className='m-1' />Usually responds in 12 hours</span>
            </div>
            {/* Social Media Links */}
            <div className='flex flex-row mt-2 ml-2 gap-5'>
              <a href={user.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={20} className='hover:cursor-pointer' /></a>
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} className='hover:cursor-pointer' /></a>
              <a href={user.medium} target="_blank" rel="noopener noreferrer"><AiFillMediumCircle size={22} className='hover:cursor-pointer' /></a>
            </div>
          </div>

          {/* Conditional rendering based on userType */}
          {user.userType === 'Mentee' && (
            <div className='flex flex-col w-72 h-36 bg-slate-200 p-5 rounded'>
              <div className='flex-1'>
                <span className='text-sm flex flex-row p-1 border-[1px] w-24 rounded-md border-black '><SiGooglemeet size={15} className='m-[2px] ml-3 mr-1' />1:1 call</span>
                <p className='text-lg '><i>Menter Meet</i></p>
              </div>
              <div className='full'>
                <AppointmentBooking />
              </div>
            </div>
          )}
        </div>

        {/* Profile Details */}
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p className='text-sm mb-3'>{user.overview}</p>
          <div className="flex flex-row mb-2">
            <div className="w-full md:w-1/2 mb-1 shadow-lg p-3 rounded-md border-[1px]">
              <h3 className="text-lg font-bold">Skills</h3>
              <div className="flex flex-wrap">
                {user.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-500 text-white px-3 py-1 mt-1 rounded-md text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 mb-1 ml-3 rounded-md shadow-lg p-3 border-[1px] ">
              <h3 className="text-lg font-bold">Languages</h3>
              <div className="flex flex-wrap">
                {user.languages.map((lang, index) => (
                  <span key={index} className="bg-green-500 text-white px-3 py-1 mt-1 rounded-md text-sm mr-2 mb-2">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='p-3 w-1/2'>
            <h2 className="text-xl font-bold mb-4">Experience</h2>
            {user.experiences.map((exp, index) => (
              <div key={index} className="mb-4 shadow-md border p-3 rounded-md">
                <h3 className="text-lg font-bold">{exp.position}</h3>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-gray-400">{exp.duration}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className='p-3 w-1/2 mt-1 rounded-md'>
            <h2 className="text-xl font-bold mb-4">Education</h2>
            {user.educations.map((edu, index) => (
              <div key={index} className="mb-4 border shadow-lg w-3/4 rounded p-3">
                <h3 className="text-lg font-bold">{edu.school}</h3>
                <p className="text-gray-500">{edu.course}</p>
                <p className="text-gray-400">{edu.duration}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default UserProfile;
