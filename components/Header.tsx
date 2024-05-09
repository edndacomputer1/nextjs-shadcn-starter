/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='relative -z-10 h-60 w-full'>
        <img
          src='/images/background.jpg'
          className='absolute h-full w-full object-cover opacity-40 blur-xl'
          alt='background'
        />
      </div>
      <div className='relative -top-9 z-10 flex w-full justify-center'>
        <div className='absolute rounded-full object-cover p-1'>
          <img
            src='/images/avatar.jpg'
            alt='edndacomputer avatar'
            className='h-24 w-24 rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
