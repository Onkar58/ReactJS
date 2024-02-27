import React from 'react'
import Breadcrumbs from './BreadCrump'
import ProjectCard from './cards/ProjectCard'
import projectData from './data/ProjectData'
import Header from './Header'
import RelatedDeals from './RelatedDeals'
import Newsletter from './Newsletter'


const HomeSection = () => {
    return (
        <div className='my-0 mx-auto w-full md:w-[90%] xl:w-3/5 px-5 md:px-0 py-10'>
            <Header />
            <Breadcrumbs />
            <div className=' flex flex-col gap-10 mt-10'>
                {projectData.map((project, index) => (
                    <ProjectCard data={project} key={index} idx={index + 1} />
                ))
                }
            </div>
            <RelatedDeals />
            <Newsletter />
        </div>
    )
}

export default HomeSection