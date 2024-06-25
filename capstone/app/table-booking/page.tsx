'use client'

import { ReactTyped } from "react-typed";

export default function BookingForm(props: {
  data: any,
  setData: any;
}) {

  const handleChange = (e: any) => {
    props.setData({
      ...props.data,
      [e.target.name]: e.target.value
    });
  };



  if (!props.data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-2xl mt-4 px-[2%] md:px-0 text-yellow-800 text-center font-[500] md:text-4xl">
        Book a table for Little Lemon and feel the <ReactTyped className="text-2xl mt-4 text-yellow-600 text-center font-[500] mb-4 md:text-4xl" strings={["adventure", "world of taste", "hype"]} typeSpeed={80} backSpeed={100} loop></ReactTyped>
      </h1>

      <form className="mt-14">
        <div className="datetime flex flex-col md:flex-row md:justify-center items-center border-2 border-yellow-300 py-3">
          <div className="date pb-4 md:pb-0">
            <label htmlFor="date" className="text-md md:text-lg text-yellow-800">Choose when to book the table: </label>
            <input onChange={handleChange} className="px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl mr-5" type="date" id="date" name="date" />
          </div>

          <div className="time">
            <label htmlFor="time" className="text-md md:text-lg text-yellow-800">Choose the time: </label>
            <select onChange={handleChange} name="time" id="time" className="px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl">
              <option selected className="border-2 border-yellow-600 rounded-xl">time</option>
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
          <input onChange={handleChange} name="num_of_guests" type="number" className=" px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl" />
        </div>
        <div className="mt-6 occasion flex flex-col md:flex-row md:justify-center items-center border-2 border-yellow-300 py-3">
          <label htmlFor="occasion" className="text-md md:text-lg text-yellow-800 mr-2">Occasion? </label>
          <select onChange={handleChange} name="occasion" id="occasion" className="px-2 border-2 border-yellow-600 bg-yellow-100 rounded-xl">
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button type="submit" className="bg-yellow-500 px-3 py-2 rounded-lg hover:bg-transparent hover:text-yellow-900 transition-all duration-500">Submit</button>
        </div>
      </form>
    </>
  );
}
