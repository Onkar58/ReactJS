import React from 'react';
// import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const breadcrumbs = [
        {
            label: "Home",
            link: "/home"
        },
        {
            label: "Hosting for All",
            link: "/hostings"
        },
        {
            label: "Hosting",
            link: "/hosting"
        },
        {
            label: "Hosting6",
            link: "/hosting6"
        },
        {
            label: "Hosting5",
            link: "/hosting5"
        },
    ]
    return (
        <div className='text-[#727D87] my-10'>
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={index}>
                    {index > 0 && <span className='mx-3 font-[600]'> &gt; </span>}
                    {breadcrumb.link ? (
                        <a href={breadcrumb.link}>{breadcrumb.label}</a>
                    ) : (
                        <span>{breadcrumb.label}</span>
                    )}
                </span>
            ))
            }
        </div >
    );
};

export default Breadcrumbs;