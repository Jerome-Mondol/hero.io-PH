import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../section/Hero/Hero'
import Stats from '../section/Stats/Stats'
import TrendingApps from '../section/TrendingApps/TrendingApps'

const Home = () => {
  return (
    <>
        <div className='w-[100vw]' >
            <Navbar />
            <Hero />
            <Stats />
            <TrendingApps />
        </div>    
    </>
  )
}

export default Home
