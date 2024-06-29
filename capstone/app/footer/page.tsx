// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-900 text-white py-4 pb-14 overflow-x-hidden">
      <div className="container mx-auto text-center">
        <div className="flex justify-between mx-[3%]">
          <div>
            <p className='underline'>Contact:</p>
            <p>littlelemon-info@gmail.com</p>
            <p>+123456789</p>
          </div>
          <div>
            <p className='underline'>Social Media:</p>
            <p>Instagram: @little_lemon_chicago</p>
            <p>Discord: little.lemon#1234</p>
          </div>
          <div>
            <p>This website is provided to you by Little Lemon Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
