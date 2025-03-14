import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const handleGoogleSignIn = () => {

  }
  
  return (
    <div className='h-[calc(100vh-125px)] flex items-center justify-center px-4'>
      <div className='w-full max-w-sm shadow-md px-6 py-8 bg-white rounded-md'>
        <h2 className='text-xl font-semibold mb-4'>Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label htmlFor="email" className='text-sm font-bold block mb-2'>Email</label>
            <input
              {...register("email", { required: true })}
              type="email" id='email' name='email' placeholder='Email Address'
              className='w-full px-3 box-border py-2 focus:outline-none shadow' />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='text-sm font-bold block mb-2'>Email</label>
            <input 
            {...register("password", { required: true })}
            type="password" id='password' name='password' placeholder='Password'
              className='w-full px-3 box-border py-2 focus:outline-none shadow' />
          </div>
          <div>
            <button className='bg-blue-500 px-6 py-2 text-white rounded hover:bg-blue-600 font-bold focus:outline-none'>Login</button>
          </div>
        </form>
        <p className='text-sm mt-3 align-baseline'>Haven't an account? Please
          <Link to={'/register'} className='text-blue-500 hover:text-blue-700'> Register</Link></p>

        <div className='mt-3'>
          <button  onClick={handleGoogleSignIn}
          className='flex justify-center items-center w-full bg-secondary hover:bg-blue-700 text-white py-2
          focus:outline-none font-bold gap-2'>
            <FaGoogle /> Sign in with Google
          </button>
        </div>
        <p className='text-gray-500 text-xs text-center mt-3'>&copy;2025 Book Store. All rights reserved.</p>

      </div>
    </div>
  )
}

export default Login
