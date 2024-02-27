import React from 'react'

const DealCard = ({ data }) => {
    return (
        <div className='min-w-[280px] bg-white flex items-start flex-col shadow-md rounded-lg p-5'>
            <img src={data.image} className='self-center' />
            <div className='my-5'>
                {data?.currentOffers.map((offer, index) => (
                    <span key={index} className='text-xs text-[#074786] bg-[#F2F4F7] rounded-md px-2 py-1 mr-2'>{offer}</span>
                ))}
            </div>
            <h1 className='text-xl text-[#6B7280] font-bold self-center'>{data.name}</h1>
            <p className='text-sm text-[#6B7280] my-2'>{data.desc}</p>
            <div className='text-[#6B7280] my-2'>
                <h1 className='text-xl inline text-black'>{data.offerPrice}</h1>
                <p className='inline mt-2 ml-2'>{data.originalPrice}</p>
                <span className='mx-2 text-sm text-red-400'>({data.discount})</span>
            </div>
            <button className='w-full bg-[#1B88F4] py-2 rounded-md text-white'>
                View Deal
            </button>
        </div>
    )
}

export default DealCard