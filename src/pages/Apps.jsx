import React from 'react'
import data from '../data/apps.json'
import AppCard from '../components/AppCard';
const appsCard = data.appsCards;

const Apps = () => {


  return (
    <>
        <div className='bg-dark' >
            <div>
                <h1 className='text-center text-3xl font-bold text-dark py-5' >Our All Applications</h1>    
                <p className='text-center text-highlighted py-3' >Explore All Apps on the Market developed by us. We code for Millions</p>
                <div></div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-10 mt-5 w-[80%] mx-auto pb-10' >
                    {
                        appsCard.map(({image, title, companyName, id, description, size, reviews, ratingAvg, downloads, ratings}) => (
                            <AppCard key={id} image={image} title={title} ratingAvg={ratingAvg} download={downloads} />
                        ))
                    }                    
                </div>
            </div>    
        </div> 
    </>
  )
}

export default Apps
