/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PiArrowSquareOut } from 'react-icons/pi'
const Cards = () => {
  return (
    <div className='mx-auto mt-8 flex max-w-lg justify-between gap-x-6 rounded-xl bg-[#161616] p-3'>
      <img
        className='h-9 w-10 rounded-lg object-cover'
        src='/images/placeholder-image.webp'
        alt='card image'
      />
      <div className='flex-1 '>
        <h4 className='text-center text-lg text-white md:text-left'>Ultra</h4>
        <p className='hidden text-sm text-neutral-500 md:block'>
          A high quality framer portfolio <br /> designed for creatives.
        </p>
        <div className='boarder mt-3 hidden h-7 w-fit items-center justify-center rounded-md border-neutral-800 px-2 uppercase text-white md:flex'>
          Store
        </div>
      </div>
      <button className='flex h-fit items-center gap-x-2  rounded-xl bg-neutral-800 p-2 text-white'>
        <span className='hidden text-xs md:block'>
          View
          <PiArrowSquareOut />
        </span>
      </button>
    </div>
  )
}

export default Cards
