import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../section/Hero/Hero'
import Stats from '../section/Stats/Stats'
import TrendingApps from '../section/TrendingApps/TrendingApps'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <div className='w-[100vw]' >
            <Navbar />
            <Hero />
            <Stats />
            <TrendingApps />
            <Footer />
        </div>    
    </>
  )
}

export default Home
