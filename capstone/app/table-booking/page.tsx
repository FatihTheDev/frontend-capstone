'use client'

import { useState, ChangeEvent, FormEvent, useCallback } from "react";
import { ReactTyped } from "react-typed";

interface BookingData {
  date: string;
  time: string;
  num_of_guests: string;
  occasion: string;
}

interface BookingFormProps {
  onSubmit: (data: BookingData) => void;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingData>({
    date: '',
    time: '',
    num_of_guests: '',
    occasion: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    if (typeof onSubmit === 'function') {
      onSubmit(formData);
    } else {
      console.error('onSubmit is not a function');
    }
  };

  const formValid = useCallback(() => {
    if (formData.date !== '' &&
        formData.time !== '' &&
        formData.num_of_guests !== '' &&
        formData.occasion !== '') {
      return true;
    } else {
      return false;
    }
  }, [formData]);

  return (
    <>
      <h1 className="text-2xl mt-4 px-[2%] md:px-0 text-yellow-800 text-center font-[500] md:text-4xl">
        Book a table for Little Lemon and feel the <ReactTyped className="text-2xl mt-4 text-yellow-600 text-center font-[500] mb-4 md:text-4xl" strings={["adventure", "world of taste", "hype"]} typeSpeed={80} backSpeed={100} loop />
      </h1>

      <form className="mt-14" onSubmit={handleSubmit}>
        <div className="datetime flex flex-col md:flex-row md:justify-center items-center border-2 border-yellow-300 py-3">
          <div className="date pb-4 md:pb-0">
            <label htmlFor="date" className="text-md md:text-lg text-yellow-800">Choose when to book the table: </label>
            <input value={formData.date} onChange={handleChange} className="px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl mr-5" type="date" id="date" name="date" required />
          </div>

          <div className="time">
            <label htmlFor="time" className="text-md md:text-lg text-yellow-800">Choose the time: </label>
            <select aria-multiselectable value={formData.time} onChange={handleChange} name="time" id="time" className="px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl" required>
              <option value="">Select time</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>
        </div>
        <div className="guests flex flex-col md:flex-row justify-center items-center mt-6 border-2 border-yellow-300 py-3">
          <label htmlFor="num_of_guests" className="text-md md:text-lg text-yellow-800 mr-2">How many guests will be at the table? </label>
          <input value={formData.num_of_guests} onChange={handleChange} name="num_of_guests" type="number" className=" px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl" required />
        </div>
        <div className="mt-6 occasion flex flex-col md:flex-row md:justify-center items-center border-2 border-yellow-300 py-3">
          <label htmlFor="occasion" className="text-md md:text-lg text-yellow-800 mr-2">Occasion? </label>
          <select aria-multiselectable value={formData.occasion} onChange={handleChange} name="occasion" id="occasion" className="px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl" required>
            <option value="">Select occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button 
            type="submit" 
            className={`px-3 py-2 rounded-lg transition-all duration-500 ${formValid() ? "bg-yellow-500 hover:bg-transparent hover:text-yellow-900" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!formValid()}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}