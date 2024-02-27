import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between'>
        <h1 className='text-3xl'>SignUp and get exclusive special deals</h1>
        <div className='w-full md:w-1/3 flex'>
            <input type="text" placeholder="Enter your email" className='p-2 rounded-l-md outline-none' />
            <button className='basis-[200px] break-keep bg-[#1B88F4] text-white p-2 rounded-r-md'>Sign Up</button>
        </div>
    </div>
  )
}

export default Newsletter