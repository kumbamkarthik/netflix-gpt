import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header />
        <div>
        <img 
           src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/US-en-20241008-TRIFECTA-perspective_428ffa03-8f7f-42b1-9739-f2cd5b7311a6_large.jpg 1800w" 
           alt="" 
        />
        </div>
        <form>
            <input type='text' placeholder='Email Address' className='p-2 m-2' />
            <input type='password' placeholder='password' className='p-2 m-2' />
            <button className="p-4 m-4 ">Sign In</button>
        </form>
    </div>
  )
}

export default Login