'use client'

import React, { useEffect } from 'react';
import { BookingData } from '../page';

interface BookingsProps {
  data: BookingData[];
}

function Bookings({ data }: BookingsProps) {
  useEffect(() => {
    console.log("Bookings component received data:", data);
  }, [data]);

  return (
    <>
      <h1 className="text-center text-yellow-800 text-3xl mt-4">Reservations:</h1>
      <div className="flex items-center justify-center mt-8">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Date</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Time</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Guests</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-yellow-100 text-left text-sm uppercase font-semibold text-gray-700">Occasion</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td className="py-2 px-4 border-b border-gray-200" colSpan={4}>No reservations yet</td>
              </tr>
            ) : (
              data.map((booking, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.date}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.time}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.num_of_guests}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{booking.occasion}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Bookings;