import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='xl:flex hidden p-6 justify-around xl:mx-[-15rem] relative top-[34rem] text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600'>
      <div>
      <p className='text-white'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      </div>
      <div className='flex'>
        <a href="">Documentation</a>
        <a href="">Support</a>
      </div>
    </div>

       <div className='sm:top-[34rem] xl:hidden md:top-[34rem] p-5 text-center   relative bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600'>
       <div className='flex relative gap-[5rem] top-[-0.2rem] justify-center'>
        <a href="">Documentation</a>
        <a href="">Support</a>
      </div>
      <div className='relative top-2'>
      <p className='text-white'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      </div>
    </div>
    </>
  )
}

export default Footer
