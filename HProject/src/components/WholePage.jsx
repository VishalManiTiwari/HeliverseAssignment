import React from 'react'

const WholePage = () => {
  return (
    <>
      <div className='relative mt-[22rem]'>
        <h1 className='md:ml-[12rem] text-center md:w-[30rem] xl:ml-[26rem] xl:text-[3rem] xl:w-[44rem] items-center flex justify-center text-[2rem]'>
        Apply On Any Section Or 
        Enable For Whole Page
        </h1>
        <div className=' sm:grid sm:grid-cols-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 relative md:ml-[1rem]  xl:mx-[8rem] md:px-[5px] top-[4rem]  justify-around'>
            <div className='md:w-[24rem] w-[18rem] xl:w-[38rem] rounded-2xl h-[29rem] xl:h-[39rem] md:h-[30rem] p-[2rem] border border-gray-700'>
             <h1 className='text-[23px] text-gray-300 font-medium'>Apply On Section</h1>
             <p className='xl:w-[20rem] md:w-[20rem] w-[12rem] text-[18px] font-medium text-gray-500 relative top-[2rem]'>
             Apply on section a game-changer, 
             offering an unparalleled way to
             manage application directly from your
             website
             </p>
             <img className='top-[4rem] relative' src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png" alt="" />
            </div>
            <div className='md:w-[24rem] w-[18rem] h-[29rem] xl:w-[38rem] relative top-[5rem] rounded-2xl xl:h-[37.5rem] md:h-[30rem] p-[2rem] border border-gray-700'>
             <h1 className='text-[23px] text-gray-300 font-medium'>Apply On Page</h1>
             <p className='md:w-[20rem] xl:w-[20rem] w-[12rem] text-[18px] font-medium text-gray-500 relative top-[2rem]'>
             Take your website to new heights with Motion 
             Art for Elementor. Embrace the power of motion and animation
             </p>
             <img className='top-[4rem] relative' src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png" alt="" />
            </div>
        </div>
        <div className='relative border  border-gray-500 py-[4rem] xl:mx-[8.6rem] rounded-2xl md:px-[5rem] justify-center items text-center md:mx-[1.5rem] xl:mt-[4rem] md:top-[11.5rem]'>
            <h1 className='text-[30px] relative text-gray-300 top-[-2rem] font-bold'>
             Supported by All Popular Browsers
            </h1>
            <p className='relative text-[18px] md:ml-[2.7rem] xl:ml-[18.6rem] xl:w-[30rem] md:w-[32rem] text-gray-400 font-medium'>
            Rest assured, Motion Art is designed to be complete
            with all major web browsers
            </p>
            <p className='relative xl:ml-[19.7rem] md:ml-[4rem] top-7'>
            <img src="https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png" alt="" />
            </p>
        </div>
      </div>
    </>
  )
}

export default WholePage
