'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  pass: string;
  passagain: string;
}

const Login = () => {
  const [data, setData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    pass: '',
    passagain: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const changeData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}
    let isValid = true

    if (!data.firstname.trim()) {
      newErrors.firstname = 'First name is required'
      isValid = false
    }

    if (!data.lastname.trim()) {
      newErrors.lastname = 'Last name is required'
      isValid = false
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    }

    if (!data.pass) {
      newErrors.pass = 'Password is required'
      isValid = false
    } else if (data.pass.length < 8) {
      newErrors.pass = 'Password must be at least 8 characters long'
      isValid = false
    }

    if (data.pass !== data.passagain) {
      newErrors.passagain = 'Passwords do not match'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', data)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl text-center mt-6">Log In to <span className="text-yellow-700">Little Lemon</span></h1>
      <div className="container p-5 ml-14 mt-6">
        <div className="name flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0 md:mr-8">
            <label htmlFor="firstname" className="block mb-2">Enter your first name: </label>
            <input value={data.firstname} onChange={changeData} name='firstname' type="text" placeholder="Enter your first name..." className={`text-center border-2 ${errors.firstname ? 'border-red-500' : 'border-yellow-400'} rounded-md hover:border-yellow-600`} />
            {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
          </div>

          <div>
            <label htmlFor="lastname" className="block mb-2">Enter your last name: </label>
            <input value={data.lastname} onChange={changeData} name='lastname' type="text" placeholder="Enter your last name..." className={`text-center border-2 ${errors.lastname ? 'border-red-500' : 'border-yellow-400'} rounded-md hover:border-yellow-600`} />
            {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
          </div>
        </div>

        <div className="email flex flex-col justify-center items-center my-16">
          <label htmlFor="email" className="block mb-2">Enter your email: </label>
          <input value={data.email} onChange={changeData} name='email' type="email" placeholder="Enter your email..." className={`text-center border-2 ${errors.email ? 'border-red-500' : 'border-yellow-400'} rounded-md hover:border-yellow-600`} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="pass flex flex-col md:flex-row justify-center items-center">
          <div className="mb-4 md:mb-0 md:mr-8">
            <label htmlFor="pass" className="block mb-2">Enter your password: </label>
            <input value={data.pass} onChange={changeData} name='pass' type="password" placeholder="Enter your password..." className={`text-center border-2 ${errors.pass ? 'border-red-500' : 'border-yellow-400'} rounded-md hover:border-yellow-600`} />
            {errors.pass && <p className="text-red-500 text-sm mt-1">{errors.pass}</p>}
          </div>

          <div>
            <label htmlFor="passagain" className="block mb-2">Please repeat your password: </label>
            <input value={data.passagain} onChange={changeData} name='passagain' type="password" placeholder="Repeat your password..." className={`text-center border-2 ${errors.passagain ? 'border-red-500' : 'border-yellow-400'} rounded-md hover:border-yellow-600`} />
            {errors.passagain && <p className="text-red-500 text-sm mt-1">{errors.passagain}</p>}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button type="submit" className='bg-yellow-600 text-yellow-100 w-24 px-4 py-2 rounded-full'>Log In</button>
      </div>
    </form>
  )
}

export default Login;