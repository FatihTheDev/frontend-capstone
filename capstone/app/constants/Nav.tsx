import Link from "next/link";

const Nav = () => {
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
                <Link href="/reservations" className="mx-3 hover:opacity-75">Reservations</Link>
                <Link href="/order" className="ml-3 mr-8 hover:opacity-75">Order a Meal</Link>
                <Link href="/login" className="mr-3 hover:opacity-75">Log In</Link>
            </ul>
        </section>
        </div>
        </>
    )
}

export default Nav;