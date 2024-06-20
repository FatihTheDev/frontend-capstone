'use client'

import { useState } from "react";
import Image from "next/image";
import lemon from "./assets/lemon.jpg"
import Specials from "./specials/page"; 
import Testimonials from "./testimonials/page";
import AboutUs from "./about_us/page";
import Footer from "./footer/page";
import Order from "./order/page";

export default function Home() {

  return (
    <>
     <header className="bg-yellow-100 p-6">
      <div className="container mx-auto ml-16">
        <h1 className="text-4xl font-bold text-yellow-500">Little Lemon</h1>
        <div className="grid grid-cols-2">
        <div>
        <p className="text-yellow-800">Chicago</p>
        <p className="mt-2">We are a family-owned Mediterranean restaurant which brings the best restaurant experience to you.</p>
        </div>
        <div>
        <Image className="ml-24 rounded-lg" src={lemon} alt="lemon image"></Image>
        </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full hover:text-yellow-700">Reserve a Table</button>
      </div>
    </header>

    <Specials/>
    <Testimonials/>
    <AboutUs/>
    <Order/>
    <Footer/>
    </>
  );
}
