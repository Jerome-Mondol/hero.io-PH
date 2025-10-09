import React from 'react'
import data from '../../data/data.json'
import AppCard from '../../components/AppCard'
import { Link } from 'react-router'

const homeAppCards = data.homeAppCards;  
const TrendingApps = () => {
  return (
    <>
        <div className='w-full bg-dark' >
            <div className='mx-auto w-[95%] flex justify-center items-left sm:items-center flex-col' >
                <h1 className='text-dark text-4xl mt-15 font-bold text-center' >Trending Apps</h1>
                <p className='text-sm text-highlighted my-5 text-center' >Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-10 mt-5 w-[80%] mx-auto' >
                    {
                        homeAppCards.map(({image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings}) => (
                            <Link to={`apps/${id}`} key={id} ><AppCard key={id} image={image} title={title} ratingAvg={ratingAvg} download={downloads} /></Link>
                        ))
                    }                    
                </div>
                <Link to={'/apps'} ><button className="px-7 py-2 bg-gradient-to-br from-purple-700 to-purple-500 flex justify-center items-center gap-2 rounded-sm my-5" >Show all</button></Link>
            </div>
        </div>
    </>
  )
}

export default TrendingApps
