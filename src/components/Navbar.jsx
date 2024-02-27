import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-[50px] bg-[#212731]'>
            <ul className='w-full h-full list-none flex items-center justify-center gap-10 text-[#D1D6DA] font-[400] text-[14px]'>
                <li className='relative'>
                    <svg className='absolute top-1/2 left-1 -translate-y-1/2 size-[20px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z" fill="#626E79" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.081 16.0805C16.3739 15.7876 16.8488 15.7876 17.1417 16.0805L21.3843 20.3232C21.6772 20.6161 21.6772 21.0909 21.3843 21.3838C21.0914 21.6767 20.6165 21.6767 20.3236 21.3838L16.081 17.1412C15.7881 16.8483 15.7881 16.3734 16.081 16.0805Z" fill="#626E79" />
                    </svg>
                    <input type='text' className='hidden md:block md:w-[200px] md:h-[30px] p-2 pl-8 bg-white rounded-md' />
                </li>
                <li>
                    Categories
                </li>
                <li>
                    Website Builders
                </li>
                <li className='ml-5'>
                    Today's Deals
                </li>

            </ul>
        </div>
    )
}

export default Navbar