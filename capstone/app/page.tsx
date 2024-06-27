'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import lemon from "./assets/lemon.jpg"
import Specials from "./specials/page";
import Testimonials from "./testimonials/page";
import AboutUs from "./about_us/page";
import Footer from "./footer/page";
import Order from "./order/page";
import BookingForm from "./table-booking/page";
import Bookings from "./bookings/page";

export interface BookingData {
  date: string;
  time: string;
  num_of_guests: string;
  occasion: string;
}

export default function Home() {
  const initialBookingData: BookingData = {
    date: '',
    time: '',
    num_of_guests: '',
    occasion: ''
  };
  const [bookings, setBookings] = useState<BookingData[]>([]);

  const handleBookingSubmit = (newBooking: BookingData) => {
    console.log("Received new booking:", newBooking);

    const existingBooking = bookings.find(booking => booking.date === newBooking.date && booking.time === newBooking.time);

    if (existingBooking) {
      alert("That date and time is already reserved");
    } else {
      setBookings([...bookings, newBooking]);
    }
  };

  useEffect(() => {
    console.log("Bookings updated:", bookings);
  }, [bookings]);

  return (
    <>
      <header className="bg-yellow-100 p-4 md:p-6">
        <div className="container mx-auto px-4 md:ml-16">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4 md:mb-0">Little Lemon</h1>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <p className="text-yellow-800">Chicago</p>
              <p className="mt-2">We are a family-owned Mediterranean restaurant which brings the best restaurant experience to you.</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full hover:text-yellow-700 w-full md:w-auto"><Link href="/table-booking">Reserve a Table</Link></button>
            </div>
            <div className="order-first md:order-last mb-4 md:mb-0">
              <Image className="w-full md:w-[40%] mx-auto md:ml-auto rounded-lg" src={lemon} alt="lemon image" />
            </div>
          </div>
        </div>
      </header>
      <Specials/>
      <BookingForm onSubmit={handleBookingSubmit} />
      <Bookings data={bookings} />
      <Testimonials/>
      <AboutUs/>
      <Order/>
      <Footer/>
    </>
  );
}