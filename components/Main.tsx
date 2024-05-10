import React from 'react'
import Cards from './Cards'
import InfoHeader from './InfoHeader'

const Main = () => {
  return (
    <div className='h-screen bg-[#111111] p-3'>
      <InfoHeader />
      <Cards />
    </div>
  )
}

export default Main
