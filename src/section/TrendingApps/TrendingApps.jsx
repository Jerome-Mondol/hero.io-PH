import React from 'react'
import { homeAppCards } from '../../data/data'
import AppCard from '../../components/AppCard'

const TrendingApps = () => {
  return (
    <>
        <div className='w-full bg-dark' >
            <div className='mx-auto w-[95%] flex justify-center items-left sm:items-center flex-col' >
                <h1 className='text-dark text-4xl mt-15 font-bold' >Trending Apps</h1>
                <p className='text-sm text-highlighted my-5' >Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-10 mt-5 w-full mx-auto' >
                    {
                        homeAppCards.map(({image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings}) => (
                            <AppCard key={id} image={image} title={title} ratingAvg={ratingAvg} download={downloads} />
                        ))
                    }                    
                </div>
            </div>
        </div>
    </>
  )
}

export default TrendingApps
