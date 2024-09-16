import React from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { CiClock2 } from 'react-icons/ci';
import { FaClock } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';

const Booking = () => {
  const bookings = [
    {
      mentor: {
        name: 'Juliaya',
        email: 'juliya123@gmail.com',
        avatar: 'https://via.placeholder.com/50x50.png',
      },
      seq: 1,
      bookingId: '#87023619',
      paymentStatus: 'Done',
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
      seq: 2,
      bookingId: '#90154736',
      paymentStatus: 'Pending',
      session: 'Make your Skill in web development',
      price: '₹ 500.00',
      duration: '30 Minutes',
      date: '27 Aug 2024',
      time: '02:00 pm–02:30 pm',
    },
    // Add more bookings if needed
  ];

  return (
    <div className='flex flex-col p-6 min-h-screen'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>Booking Details</h2>
      <div className='bg-white p-6 rounded-lg shadow w-[1100px] overflow-x-auto whitespace-nowrap border border-gray-300'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='text-left text-gray-600 border-b'>
              <th className='p-3 pt-0'>#</th>
              <th className='p-3 pt-0'>Booking Id</th>
              <th className='p-3 pt-0'>Mentor</th>
              <th className='p-3 pt-0'>Session</th>
              <th className='p-3 pt-0'>Date & Time</th>
              <th className='p-3 pt-0'>Meeting</th>
              <th className='p-3 pt-0'>Payment Status</th>
              <th className='p-3 pt-0'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className='text-gray-700 hover:bg-gray-200'>
                <td className='p-3'>{booking.seq}</td>
                <td className='p-3 font-bold text-base'>{booking.bookingId}</td>
                <td className='p-3 flex items-center'>
                  <img
                    src={booking.mentor.avatar}
                    alt={booking.mentor.name}
                    className='w-12 h-12 rounded-full mr-2'
                  />
                  <div>
                    <p className='font-semibold'>{booking.mentor.name}</p>
                    <p className='text-sm'>{booking.mentor.email}</p>
                  </div>
                </td>
                <td className='p-3'>
                  <p className='font-semibold'>{booking.session}</p>
                  <p className='text-sm'>{booking.price} · {booking.duration}</p>
                </td>
                <td className='p-3'>
                  <p className='flex font-bold'><FaRegCalendarCheck className='mr-1' />{booking.date}</p>
                  <p className='flex text-sm'><CiClock2 className='mr-1' />{booking.time}</p>
                </td>
                <td className='p-3'>
                  <a href="https://meet.google.com/landing" target='_blank' rel='noreferrer'>
                    <button className='bg-slate-200 rounded-md p-1 text-xs text-black flex transform transition-transform hover:scale-150'>
                      <SiGooglemeet size={10} className='mr-1' /> Start
                    </button>
                  </a>
                </td>
                <td className='p-3'>
                  <div className='flex justify-center'>
                    <p className={`text-sm flex font-medium p-1 rounded ${booking.paymentStatus === 'Done' ? 'bg-green-600 text-white' : 'bg-amber-500 text-amber-950'}`}>
                      <FaClock size={12} className='mr-1' /> {booking.paymentStatus}
                    </p>
                    {booking.paymentStatus === 'Pending' && (
                      <a href='#' className='ml-2'>
                        <p className='text-sm bg-red-800 text-white p-1 rounded h-7 transform transition-transform hover:scale-110'>Pay Now</p>
                      </a>
                    )}
                  </div>
                </td>
                <td className='p-3'>
                  <a href='#'>
                    <p className='text-5xl'>...</p>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
