import React from 'react'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import HeroImg from '../../assets/hero.png'


const Hero = () => {
  return (
    <>
        <div className='w-full bg-gray-100' >
            <div className=' flex justify-center items-center flex-col pt-10 w-[95%] mx-auto' >
                <h1 className='text-4xl sm:text-5xl text-dark font-bold text-center py-5' >We Build <br /> <span className='text-violet-500' > Productive </span> Apps</h1>
                <p className='text-highlighted text-center mt-2 text-sm sm:text-lg' >At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className=' my-5 flex gap-10' >
                    <a href="https://play.google.com/store" target='_blank' className='flex justify-center items-center gap-2 border border-gray-300 py-2 px-4 rounded-sm text-dark' ><FaGooglePlay />Google Play</a>
                    <a href="https://play.google.com/store" target='_blank' className='flex justify-center items-center gap-2 border border-gray-300 py-2 px-4 rounded-sm text-dark'><FaAppStoreIos />App Store</a>
                </div>

                <div>
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </div> 
    </>
  )
}

export default Hero
