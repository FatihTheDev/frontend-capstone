'use client'

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-yellow-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="logo bg-white w-14 h-14 text-black rounded-full flex items-center justify-center">Logo</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="hover:opacity-75">Home</Link>
                            <Link href="/about" className="hover:opacity-75">About</Link>
                            <Link href="/order" className="hover:opacity-75">Menu</Link>
                            <Link href="/#bookings" className="hover:opacity-75">Your Reservations</Link>
                            <Link href="/order" className="bg-yellow-500 px-3 py-2 rounded-lg hover:opacity-75">Order a Meal</Link>
                            <Link href="/table-booking" className="block bg-yellow-500 px-3 py-2 rounded-md text-base font-medium hover:opacity-75">Book a table</Link>
                            <Link href="/login" className="bg-yellow-500 px-3 py-2 rounded-full hover:opacity-75">Log In</Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block hover:opacity-75 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="/about" className="block hover:opacity-75 px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="/order" className="block hover:opacity-75 px-3 py-2 rounded-md text-base font-medium">Menu</Link>
                        <Link href="/bookings" className="block hover:opacity-75 px-3 py-2 rounded-md text-base font-medium">Your Reservations</Link>
                        <Link href="/order" className="block bg-yellow-500 px-3 py-2 rounded-md text-base font-medium hover:opacity-75">Order a Meal</Link>
                        <Link href="/table-booking  " className="block bg-yellow-500 px-3 py-2 rounded-md text-base font-medium hover:opacity-75">Book a table</Link>
                        <Link href="/login" className="block bg-yellow-500 px-3 py-2 rounded-md text-base font-medium hover:opacity-75">Log In</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;