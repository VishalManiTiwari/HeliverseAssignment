import React from 'react';

const MainContent = () => {
  return (
    <div className="mt-[2.1rem] relative">
      <div className=" xl:mx-[7.5rem] flex justify-between ">
       <p className='md:ml-4'><img src="https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png" alt="" /></p> 
        <button className='bg-white px-9 font-semibold text-[16px] xl:flex hidden rounded-md py-3 text-[black]'>Purchage Now</button>
      </div>
       <div className='mt-[5rem] relative md:ml-[1rem] xl:ml-[8.5rem] flex'>
       <div className="text-lg space-y-2 mx-4 w-full">
        <span className="text-transparent text-[20px] bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600 relative ">Transform Your <br /> Website</span>
        <p>With Motion Art <br /> Effect</p>
      </div>
      <div className='top-[-2px] relative md:mr-[11rem] md:w-[112rem] xl:w-[200rem] xl:mr-[30rem]'>
      <h1 className="md:text-[3rem] xl:text-[4.3rem]  top-8  font-semibold">
        Attract Your Visitors Attention With Colorful
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600">
        Motion Art Effect
        </span>
      </h1>
      
      <div className=" text-lg text-gray-400">
        Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default MainContent;
