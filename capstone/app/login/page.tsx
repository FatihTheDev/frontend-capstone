'use client'

import { useState } from 'react'

const Login = () => {

    const[data, setData] = useState<any>({
        firstname: '',
        lastname: '',
        email: '',
        pass: '',
        passagain: ''
    })

    const changeData = (e:any) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    return(
    <form action="submit.php" method="POST">
        <h1 className="text-3xl text-center mt-6">Log In to <span className="text-yellow-700">Little Lemon</span></h1>
        <div className="container p-5 ml-14 mt-6">
            <div className="name flex justify-center items-center">
                <label htmlFor="firstname" className="mr-3">Enter your first name: </label>
                <input value={data.firstname} onChange={changeData} name='firstname' type="text" placeholder="Enter your first name..." className="mr-8 text-center border-2 border-yellow-400 rounded-md hover:border-yellow-600"/>

                <label htmlFor="last" className="mr-3" >Enter your last name: </label>
                <input value={data.lastname} onChange={changeData} name='lastname' type="text" placeholder="Enter your last name..." className="mr-8 text-center border-2 border-yellow-400 rounded-md hover:border-yellow-600"/>
            </div>

            <div className="email flex justify-center items-center my-16">
                <label htmlFor="email" className="mr-3">Enter your email: </label>
                <input value={data.email} onChange={changeData} name='email' type="email" placeholder="Enter your email..." className="mr-8 text-center border-2 border-yellow-400 rounded-md hover:border-yellow-600"/>
            </div>

            <div className="pass flex justify-center items-center">
                <label htmlFor="pass" className="mr-3" >Enter your password: </label>
                <input value={data.pass} onChange={changeData} name='pass' type="password" placeholder="Enter your password..." className="mr-8 text-center border-2 border-yellow-400 rounded-md hover:border-yellow-600"/>

                <label htmlFor="passagain" className="mr-3">Please repeat your password: </label>
                <input value={data.passagain} onChange={changeData} name='passagain' type="password" placeholder="Repeat your password..." className="mr-8 text-center border-2 border-yellow-400 rounded-md hover:border-yellow-600"/>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <button className='bg-yellow-600 text-yellow-100 w-24 px-4 py-2 rounded-full'>Log In</button>
        </div>
    </form>
    )
}

export default Login;