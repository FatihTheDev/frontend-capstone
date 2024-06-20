'use client'

import Link from "next/link";
import { useState } from "react";

const Nav = () => {

    const[visible, setVisible] = useState<boolean>(false);

    const toggleChange = () => {
        setVisible(!visible);
    }

    return(
        <>
        <div className="flex justify-between items-center bg-yellow-200">

        <section>
            <div className="logo ml-3 my-2 bg-white w-14 h-14 text-black rounded-full flex items-center justify-center">Logo</div>
        </section>

        <section>
            <ul>
                <Link href="/" className="mx-3 hover:opacity-75">Home</Link>
                <Link href="/about" className="mx-3 hover:opacity-75">About</Link>
                <Link href="/menu" className="mx-3 hover:opacity-75">Menu</Link>
                <Link href="/reservations" className="mx-3 hover:opacity-75" onClick={toggleChange}>Ordered Food</Link>
                <Link href="/order" className="ml-3 mr-8 bg-yellow-500 px-1 py-1 rounded-lg hover:opacity-75">Order a Meal</Link>
                <Link href="/login" className="mr-3 bg-yellow-500 px-2 py-2 rounded-full hover:opacity-75">Log In</Link>
            </ul>
        </section>
        </div>
        
        </>
    )
}

export default Nav;