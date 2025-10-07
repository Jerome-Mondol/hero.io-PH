import React from 'react'
import StatsCard from '../../components/StatsCard'
import { statsCard } from '../../data/data'


const Stats = () => {
  return (
    <>
        <div className='w-full bg-gradient-to-br from-purple-800 to-purple-500' >
            <div className='w-[95%] flex justify-center sm:items-center items-left flex-col py-5 mx-auto' >
                <h1 className='py-10 text-4xl font-bold  ' >Trusted by Millions, Built for You</h1> 

                <div className='flex w-[70%] lg:w-[45%] justify-between sm:items-center items-left flex-col sm:flex-row' >   
                    {
                        statsCard.map(({ id, title, count, improvement }) => (
                            <StatsCard key={id} title={title} count={count} improvement={improvement}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Stats
