import React, { useState } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
import Header from './Header';

const StudentProfile = () => {
    const [student, setStudent] = useState({
        name: "Jane Doe",
        email: "jane.doe@example.com",
        gender:"Male",
        about: "As a passionate learner focused on full-stack web development, I'm constantly exploring new technologies and techniques to enhance my skills. I'm driven by a desire to create innovative and user-friendly web applications that solve real-world problems. From crafting elegant front-end interfaces to building robust back-end systems, I'm committed to delivering high-quality solutions. My enthusiasm for learning and problem-solving has fueled my growth as a developer, and I'm excited to continue expanding my expertise in this dynamic field.",
        avatar: "https://via.placeholder.com/150",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        mentor: "John Smith",
        mentorEmail: "john.smith@example.com",
        category: "Software Engineering",
        topics: ["React State Management", "API Integration"],
    });

    const [editData, setEditData] = useState({ ...student });
    const [avatarPreview, setAvatarPreview] = useState(student.avatar);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
                setEditData((prevData) => ({
                    ...prevData,
                    avatar: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setStudent(editData);
    };
    const [selectedHeader,setSelectedHeader] = useState(1);

    const profileHeader = [
        {id:1 , label:'About'},
        {id:2 , label:'Skills'},
        {id:3 , label:'Categories'},
        {id:4 , label:'Topics'},
    ]

    return (
        <div>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-200 to-blue-600">
            
            <div className="bg-white shadow-xl rounded-3xl p-10 max-w-6xl w-full mb-5 flex flex-col md:flex-row ">
                <div className="flex flex-col items-center md:w-1/3 mb-6 mt-12 md:mb-0 ">
                    <img
                        className="w-32 h-32 md:w-48 md:h-48 rounded-lg border- border-indigo-500 mb-4"
                        src={student.avatar}
                        alt={student.name}
                    />
                    <Dialog>
                            <DialogTrigger>
                                <button className="bg-blue-700 p-2 text-white rounded-md text-sm">Edit Profile</button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Profile</DialogTitle>
                                    <DialogDescription>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={editData.name}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                                            <input
                                                type="text"
                                                name="gender"
                                                value={editData.gender}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={editData.email}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">About</label>
                                            <textarea
                                                name="bio"
                                                value={editData.bio}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Avatar</label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleAvatarChange}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                            />
                                            <img
                                                src={avatarPreview}
                                                alt="Avatar Preview"
                                                className="mt-4 w-32 h-32 rounded-full border-2 border-gray-300"
                                            />
                                        </div>
                                        <div className="text-right">
                                            <button
                                                onClick={handleSave}
                                                className="bg-blue-700 p-2 text-white rounded-md text-sm"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{student.name}</h2>
                    <p className="text-gray-600">{student.gender}</p>
                    <p className="text-gray-600 mb-4">{student.email}</p>
                </div>
                <div className="md:w-2/3 md:pl-10 ">
                    <div className='flex flex-row gap-16 '>
                    {
                        profileHeader.map((item,i)=>(
                            <div key={item.id} onClick={()=>setSelectedHeader(item.id)} className={` p-3 py-[5px] text-lg border border-blue-500 hover:cursor-pointer hover:bg-blue-600 hover:text-white rounded-lg ${selectedHeader===item.id ? 'bg-blue-600 text-white':''}`}>{item.label}</div>
                        ))
                    }
                    </div>
                    {selectedHeader===1 &&
                        <div className='pr-20'>
                        <h3 className='text-lg font-medium text-gray-700 mb-2 mt-10 flex'> <MdOutlineKeyboardDoubleArrowRight className='mr-1 mt-1'/> About me</h3>
                        <p className="text-gray-700 text-base md:text-sm mb-5">{student.about}</p>
                        </div>
                    }
                    
                    {
                        selectedHeader===2 &&
                        <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-1 mt-10 flex"><MdOutlineKeyboardDoubleArrowRight className='mr-1 mt-1'/> Skills</h3>
                    <ul className="flex flex-row p-3 gap-6 rounded-md w-32 list-inside text-gray-700 text-sm mb-2">
                        {student.skills.map((skill, index) => (
                            <div className='bg-gray-200 text-black font-light p-2 rounded-xl' key={index}>{skill}</div>
                        ))}
                    </ul>
                    </div>
                    
                    }
                    {
                        selectedHeader===3 &&
                        <div className=" text-center md:text-left mb-3">
                        <h3 className="text-lg font-medium text-gray-700 mb-4 flex mt-10"><MdOutlineKeyboardDoubleArrowRight className='mr-1 mt-1'/> Mentorship Categories : </h3>
                        <p className=" text-base w-44 text-center mt-[4px] ml-2 bg-gray-200 text-black font-light p-2 rounded-xl">
                            {student.category}
                        </p>
                    </div>
                    }
                    
                   {
                    selectedHeader===4 && 
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-medium text-gray-700 mb-4 mt-10 flex"><MdOutlineKeyboardDoubleArrowRight className='mr-1 mt-1'/> Topics for Mentorship</h3>
                        <ul className="list-disc list-inside text-gray-700 text-base ml-3">
                            {student.topics.map((topic, index) => (
                                <li key={index}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                   }
                    
                </div>
            </div>
======= mentee
            
=======
======= main
        </div>
        </div>
        
    );
};

export default StudentProfile;
