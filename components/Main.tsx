import Link from 'next/link'
import React from 'react'
import { BsGlobe, BsPatchCheckFill, BsPhone } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go'

const Main = () => {
  return (
    <div className='h-screen bg-[#111111] p-3'>
      <div className='mx-auto max-w-lg bg-[#111111] pt-14'>
        <div>
          <div className='text-center'>
            <h3 className='flex items-center justify-center gap-x-2 text-2xl text-white'>
              edndacomputer
              <BsPatchCheckFill className='text-xl text-[#1DA1F2]' />
            </h3>
            <div className='mt-3 flex items-center justify-center gap-x-2 text-neutral-500'>
              <p>Est. 1985</p>
              <GoDotFill className='h-[3px] w-[3px] text-neutral-600' />
              <p>Ventura, California</p>
              <GoDotFill className='h-[3px] w-[3px] text-neutral-600' />
              <p>He/Him</p>
            </div>
          </div>
        </div>
        <p className='my-3 text-center text-neutral-500'>
          edndacomputer is a technology enthusiast and developer
        </p>
        <div className='flex justify-center gap-x-7'>
          <Link
            href='http://www.edndacomputer.xyz'
            className='flex items-center gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900'
          >
            <BsGlobe className='text-xl text-neutral-500' />
            <p className='text-white'>edndacomputer.xyz</p>
          </Link>
          <a
            href='tel:+18881235467'
            className='flex cursor-pointer items-center gap-x-2 rounded-xl p-1 px-2 transition-all duration-100 ease-in hover:bg-neutral-900'
          >
            <BsPhone className='text-xl text-neutral-500' />
            <p className='text-white'>+1 805 667 3000</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Main
