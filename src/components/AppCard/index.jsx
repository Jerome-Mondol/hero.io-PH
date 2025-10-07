import React from 'react'
import Download from '../../assets/icon-downloads.png'
import Rating from '../../assets/icon-ratings.png'

const AppCard = ({image, title, download, ratingAvg}) => {
  return (
    <>
        <div className='w-full' >
        <div className='bg-light p-4 rounded-md shadow-lg h-30 sm:h-auto w-[100%] sm:w-[90%] flex flex-row sm:flex-col' >
            <img src={image} alt="" className='w-20 h-20 sm:h-72 sm:w-auto rounded-sm' />    

            <div>
                <h1 className='text-dark' >{title}</h1>
                <div className='text-dark flex justify-between mt-2' >
                    <h1 className='flex gap-2' >
                        <img src={Download} className='w-5 h-5' alt="" />
                        <p>{download}</p>
                    </h1>
                    <h1 className='flex gap-2' >
                        <img src={Rating} className='w-5 h-5' alt="" />
                        <p>{ratingAvg}</p>
                    </h1>
                </div>
            </div>
        </div> 
        </div>
    </>
  )
}

export default AppCard
