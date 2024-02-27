import React from 'react'
import Stars from '../Stars'

const ProjectCard = ({ data, idx }) => {
    return (
        <div className='w-full bg-white rounded-lg shadow-md relative -5'>
            {
                data?.label && <div className='absolute -top-3 bg-[#FF7724] text-white p-1 rounded-r-md'>
                    {data.label.icon} {data.label.text}
                </div>
            }
            <div className='absolute top-10 -translate-x-1/2 size-10 flex items-center justify-center rounded-full shadow-lg bg-white'>
                {idx}
            </div>
            <div className='md:px-14 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-between w-full text-[#4B5665]'>
                <div className='flex flex-col items-center justify-center gap-5 py-5 lg:py-0'>
                    <img src={data.image} />
                    <h3>{data.name}</h3>
                </div>
                <div className='basis-[60%] px-2 pt-5 text-[14px]'>
                    <h1 className=''><span className='font-[700]'>{data.data.heading}</span> - {data.data.desc}</h1>
                    {data.discount &&
                        <span className='text-[#074786] bg-[#F2F4F7] px-2 py-1'>{data?.discount} Off</span>
                    }
                    <h2 className='font-[600] my-2'>Main highlights</h2>
                    <p className='px-5'>[What You Get]: {data.data.highlight}</p>
                    <button className='text-[#1B88F4] text-[12px] font-[500] my-2'>
                        Show More
                        <svg className='size-5 inline' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z" fill="#1B88F4" />
                        </svg>
                    </button>
                </div>
                <div className='flex flex-col gap-3 pb-3 items-center'>
                    <div className='w-1/ bg-[#F3F9FF] text-[#074786] p-5 flex items-center justify-center flex-col gap-2'>
                        <h1 className='font-[500] text-2xl'>{data.reviews.rating}</h1>
                        <p className='font-[400] text-[14px]'>{data.reviews.remark}</p>
                        <div><Stars rating={4.7} /></div>
                    </div>
                    <a href={data.link} className='w-full px-16 py-2 mt-auto rounded-md text-white text-[14px]  bg-[#1B88F4]'>
                        <button className='mx-[50%] -translate-x-1/2'>View</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard