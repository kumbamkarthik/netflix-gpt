import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img 
           src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_large.jpg 1800w" 
           alt="" 
        />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
            <input type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700' />
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        </form>
    </div>
  )
}

export default Login