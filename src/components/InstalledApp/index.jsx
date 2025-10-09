import React from 'react'
import DownloadIcon from '../../assets/icon-downloads.png'
import RatingsIcon from '../../assets/icon-ratings.png'

const InstalledAppCard = ( { image, id, title, downloads, ratingAvg, size, handleUninstall } ) => {
  return (
    <>
        <div className='bg-dark' >
            <div className='flex justify-between text-dark bg-light gap-2 w-[80%] mx-auto mt-5 py-5 px-5' >
                <div className="flex gap-3" >
                <img src={image} className='w-10 h-10 object-cover' alt="" />
                <div>
                    <h1 className='text-dark' >{title}</h1>
                    <div className='flex gap-3' >
                        <div className='flex justify-center items-center gap-1' >
                            <img src={DownloadIcon} className='w-3 h-3'  alt="" />
                            <h1 className='text-xs' >{downloads}</h1>
                        </div>
                        <div className='flex justify-center items-center gap-1' >
                            <img src={RatingsIcon} className='w-3 h-3'  alt="" />
                            <h1 className='text-xs' >{ratingAvg}</h1>
                        </div>
                        <div>
                            <h1 className='text-highlighted text-xs'  >{size} MB</h1>
                        </div>
                    </div>
                </div>
                </div>

                <button className='bg-orange-500 px-2 py-2 text-light rounded ' onClick={() => handleUninstall(id)} >Uninstall</button>
            </div>
        </div>
    </>
  )
}

export default InstalledAppCard
