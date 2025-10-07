import React from 'react'

const StatsCard = ({ title, count, improvement }) => {
  return (
    <>
      <div className='my-5 ' >
        <h1 >{title}</h1>
        <h1 className='text-4xl font-bold py-3' >{count}</h1>
        <h1>{improvement}</h1>
      </div>
    </>
  )
}

export default StatsCard
