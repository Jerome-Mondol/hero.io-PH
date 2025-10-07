import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../section/Hero/Hero'
import Stats from '../section/Stats/Stats'

const Home = () => {
  return (
    <>
        <div className='w-[100vw]' >
            <Navbar />
            <Hero />
            <Stats />
        </div>    
    </>
  )
}

export default Home
