import React from 'react';
import { FaRegCalendarCheck } from "react-icons/fa6";
import { PiSlideshow } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";


const Dashboard = () => {
    const stats = [
        { label: 'Sessions', value: 89, icon: <PiSlideshow/>, bgColor: 'bg-blue-100', iconColor: 'bg-blue-500' },
        { label: 'Bookings', value: 89, icon: <FaRegCalendarCheck/>, bgColor: 'bg-purple-100', iconColor: 'bg-purple-500' },
        { label: 'Mentors', value: 5, icon: <IoPeopleOutline/>, bgColor: 'bg-orange-100', iconColor: 'bg-orange-500' },
    ];

    const bookings = [
        {
            mentor: {
                name: 'Juliaya',
                email: 'juliya123@gmail.com',
                avatar: 'https://via.placeholder.com/50x50.png',
            },
            session: 'Make your site AI friendly',
            price: '₹ 1000.00',
            duration: '30 Minutes',
            date: '27 Aug 2024',
            time: '06:00 am–06:30 am',
        },
        {
            mentor: {
                name: 'Maxim',
                email: 'maxim123@gmail.com',
                avatar: 'https://via.placeholder.com/50x50.png',
            },
            session: 'Make your Skill in web development',
            price: '₹ 500.00',
            duration: '30 Minutes',
            date: '27 Aug 2024',
            time: '02:00 pm–02:30 pm',
        },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-11/12">
                {stats.map((stat, index) => (
                    <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow">
                       
                        <div className="ml-4 flex-1">
                            <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                            <p className="text-gray-400">{stat.label}</p>
                        </div>
                        <div className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full mr-5 ${stat.bgColor}`}>
                            <div className={`text-white text-xl p-2 ${stat.iconColor}`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Upcoming Bookings Section */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Bookings</h2>
            <div className="bg-white p-6 rounded-lg shadow w-11/12">
                
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-left text-gray-600 border-b">
                            <th className="p-2">Mentor</th>
                            <th className="p-2">Session</th>
                            <th className="p-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className="text-gray-700">
                                <td className="p-2 flex items-center">
                                    <img
                                        src={booking.mentor.avatar}
                                        alt={booking.mentor.name}
                                        className="w-10 h-10 rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="font-semibold">{booking.mentor.name}</p>
                                        <p className="text-sm">{booking.mentor.email}</p>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <p className="font-semibold">{booking.session}</p>
                                    <p className="text-sm">
                                        {booking.price} · {booking.duration}
                                    </p>
                                </td>
                                <td className="p-2">
                                    <p>{booking.date}</p>
                                    <p className="text-sm">{booking.time}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
            <div className="flex justify-center mt-4">
                    <a href="/booking"><button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-slate-700 transform transition-transform hover:scale-105">See All →</button></a>
                </div>
        </div>
    );
};

export default Dashboard;
