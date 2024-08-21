import React, { useEffect, useState } from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { Calendar } from "./ui/calendar"
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from './ui/button'; // Assuming you have a custom Button component

const AppointmentBooking = () => {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectTimeSlot, setSelectTimeSlot] = useState();

    useEffect(() => {
        getTime();
    }, []);

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({ time: i + ':00 AM' });
            timeList.push({ time: i + ':30 AM' });
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({ time: i + ':00 PM' });
            timeList.push({ time: i + ':30 PM' });
        }
        setTimeSlot(timeList);
    }

    const isPastDay = (day) => {
        return day < new Date();
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <button className='bg-blue-500 p-1 w-48 text-white rounded-md transform transition-transform hover:scale-105'>Book Now</button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Book Appointment</DialogTitle>
                        <DialogDescription>
                            <div>
                                <div className='grid grid-cols-2'>
                                    {/* Calendar */}
                                    <div className='flex flex-col mr-3'>
                                        <h2 className='flex gap-2 text-primary items-center mb-1'>
                                            <FaCalendarDays className='mt-[2px]' />
                                            Select Date
                                        </h2>
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            disabled={isPastDay}
                                            className="rounded-md border text-primary ml-4"
                                        />
                                    </div>

                                    {/* Time Slot */}
                                    <div>
                                        <h2 className='mb-1 text-primary'>Select Time Slot</h2>
                                        <div className='grid grid-cols-3 gap-3 border rounded-lg p-2'>
                                            {
                                                timeSlot.map((item, i) => (
                                                    <h2 key={i}
                                                        onClick={() => setSelectTimeSlot(item.time)}
                                                        className={`p-2 border rounded-full text-center hover:cursor-pointer hover:bg-blue-500 hover:text-white transform transition-transform hover:scale-105 ${selectTimeSlot === item.time ? 'bg-blue-500 text-white' : 'text-black'}`}>
                                                        {item.time}
                                                    </h2>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <>
            <Button type="button" className="bg-gray-200 text-red-700 hover:bg-red-600 border border-red-700 hover:text-white px-4 py-2 rounded" variant="secondary">
              Close
            </Button>
            <Button type="button" className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded" variant="secondary">
              Submit
            </Button>
            </>
          </DialogClose>
        </DialogFooter>
                    
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AppointmentBooking;
