import React from 'react'
import DealCard from './cards/DealCard'
import prjImg from "../assets/projectImg.png"
const deals = [
    {
        image: prjImg,
        currentOffers: ["20% Off", "Limited Time"],
        name: "WebBuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offerPrice: "$39.96",
        originalPrice: "$49.96",
        discount: "20% Off",
        link: "https://www.google.com/",
    },
    {
        image: prjImg,
        currentOffers: ["20% Off", "Limited Time"],
        name: "WebBuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offerPrice: "$39.96",
        originalPrice: "$49.96",
        discount: "20% Off",
        link: "https://www.google.com/",
    },
    {
        image: prjImg,
        currentOffers: ["20% Off", "Limited Time"],
        name: "WebBuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offerPrice: "$39.96",
        originalPrice: "$49.96",
        discount: "20% Off",
        link: "https://www.google.com/",
    },
    {
        image: prjImg,
        currentOffers: ["20% Off", "Limited Time"],
        name: "WebBuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offerPrice: "$39.96",
        originalPrice: "$49.96",
        discount: "20% Off",
        link: "https://www.google.com/",
    },
    {
        image: prjImg,
        currentOffers: ["20% Off", "Limited Time"],
        name: "WebBuilder 1",
        desc: "Computer  Modern clasic with wix support",
        offerPrice: "$39.96",
        originalPrice: "$49.96",
        discount: "20% Off",
        link: "https://www.google.com/",
    },
]


const RelatedDeals = () => {
    return (
        <div className='my-20'>
            <h1 className='text-xl mb-10'>Related Deals you might like for</h1>
            <div className='flex gap-10 overflow-x-scroll p-2' id="dealsDiv">
                {
                    deals.map((deal, index) => (
                        <DealCard data={deal} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedDeals