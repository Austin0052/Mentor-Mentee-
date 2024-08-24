import React from 'react'
  

const Booking = () => {
  const bookings = [
    {
        mentor: {
            name: 'Juliaya',
            email: 'juliya123@gmail.com',
            avatar: 'https://via.placeholder.com/50x50.png',
        },
        seq:1,
        bookingId:'#87023619',
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
        seq:2,
        bookingId:'#90154736',
        session: 'Make your Skill in web development',
        price: '₹ 500.00',
        duration: '30 Minutes',
        date: '27 Aug 2024',
        time: '02:00 pm–02:30 pm',
    },
    {
        mentor: {
            name: 'Maxim',
            email: 'maxim123@gmail.com',
            avatar: 'https://via.placeholder.com/50x50.png',
        },
        seq:2,
        bookingId:'#90154736',
        session: 'Make your Skill in web development',
        price: '₹ 500.00',
        duration: '30 Minutes',
        date: '27 Aug 2024',
        time: '02:00 pm–02:30 pm',
    },
    {
        mentor: {
            name: 'Maxim',
            email: 'maxim123@gmail.com',
            avatar: 'https://via.placeholder.com/50x50.png',
        },
        seq:2,
        bookingId:'#90154736',
        session: 'Make your Skill in web development',
        price: '₹ 500.00',
        duration: '30 Minutes',
        date: '27 Aug 2024',
        time: '02:00 pm–02:30 pm',
    },
];
  return (
    <div className='flex flex-col p-6 min-h-screen'>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Bookings Details</h2>
            <div className="bg-white p-6 rounded-lg shadow w-11/12">
                
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-left text-gray-600 border-b">
                            <th className='p-2'>#</th>
                            <th className='p-2'>Booking Id</th>
                            <th className="p-2">Mentor</th>
                            <th className="p-2">Session</th>
                            <th className="p-2">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index} className="text-gray-700">
                                <td className='p-2'>{booking.seq}</td>
                                <td className='p-2'>{booking.bookingId}</td>
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

    </div>
  )
}

export default Booking