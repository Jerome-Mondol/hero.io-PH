import React from 'react'

const InstalledAppCard = ( { image, title, downloads, ratingAvg, size } ) => {
  return (
    <>
        <div>
            <div>
                <img src={image} alt="" />
                <div>
                    <h1 className='text-dark' >{title}</h1>
                    <div>
                        <div>
                            <img src="none" alt="" />
                            <h1>5m</h1>
                        </div>
                        <div>
                            <img src="none" alt="" />
                            <h1>5</h1>
                        </div>
                        <div>
                            <h1>size</h1>
                        </div>
                    </div>
                </div>

                <button>Unistall</button>
            </div>
        </div>
    </>
  )
}

export default InstalledAppCard
