import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-[400px] bg-[#212731]'>
            <div className='my-0 mx-auto w-full md:w-[90%] xl:w-3/5 px-5 md:px-0 py-10 flex flex-wrap items-start justify-start gap-x-40 gap-y-10 text-[#B6BDC4] '>
                <ul className='flex flex-col gap-4 text-[14px]'>
                    <h1 className='text-[16px] text-white'>CATEGORIES</h1>
                    <li className="hover:cursor-pointer">Web Builder</li>
                    <li className="hover:cursor-pointer">Hosting</li>
                    <li className="hover:cursor-pointer">Data Center</li>
                    <li className="hover:cursor-pointer">Robotic-Automation</li>
                </ul>
                <ul className='flex flex-col gap-4 text-[14px]'>
                    <h1 className='text-[16px] text-white'>CONTACT</h1>
                    <li className="hover:cursor-pointer">Contact</li>
                    <li className="hover:cursor-pointer">Privacy Policy</li>
                    <li className="hover:cursor-pointer">Terms of Service</li>
                    <li className="hover:cursor-pointer">Categories</li>
                    <li className="hover:cursor-pointer">About</li>
                </ul>
                <select className='md:ml-auto self-center bg-transparent font-[600] text-[18px]'>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                </select>
            </div>
        </div>
    )
}

export default Footer