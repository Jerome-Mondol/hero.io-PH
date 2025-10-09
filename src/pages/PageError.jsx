import React from 'react'
import ErrorImage from '../assets/error-404.png'
import { Link } from 'react-router'


const PageError = () => {
  return (
    <>
        <div>
            <div className='bg-dark flex justify-center items-center py-50 flex-col' >
                <img src={ErrorImage} alt="" className='w-50 sm:w-70 h-auto object-cover'  />
                <h1 className='text-dark font-bold text-4xl text-center mt-5' >OOPS! App not found</h1>
                <p className='text-highlighted mt-3' >The App you are requesting is not found on our system.  please try another apps</p>

                <Link to={'/'} ><button className='bg-gradient-to-br from-purple-700 to-purple-500 px-6 py-2 mt-3 rounded-sm' >Go back</button></Link>
            </div>
        </div>
    </>
  )
}

export default PageError
