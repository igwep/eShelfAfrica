// eslint-disable-next-line no-unused-vars
import React from 'react'

const Hero = () => {
  return (
<div className="flex flex-col gap-8 h-auto py-8 px-4 tablet:px-24 mt-8 mx-2 tablet:mx-28">
  {/* Image and Write-up */}
  <div className="flex flex-col md:flex-row gap-8 items-center">
    {/* Image */}
    <div className="w-full tablet:w-[45%] h-[500px] bg-cover bg-center">
      <img 
        src="images/beautiful-black-happy-lady-operating-a-laptop-in-a-library-425261406 1.png" 
        className="w-full h-full object-cover rounded-2xl" 
        alt="Happy Lady with Laptop" 
      />
    </div>

    {/* Write-up */}
    <div className="flex flex-col gap-6 justify-center w-full tablet:w-[50%]">
      <p className="font-medium text-[32px] tablet:text-[45px] leading-[48px] tablet:leading-[64px] text-gray-900 text-center tablet:text-left">
        Build your career and watch your bank balance grow with our referral program.
      </p>
      <div className="flex gap-4 justify-center tablet:justify-start">
        <input 
          type="text" 
          placeholder="Search a book" 
          className="bg-gray-100 w-[70%] tablet:w-[60%] p-4 rounded-md  focus:outline-none   focus:ring-2 focus:ring-primary" 
        />
        <button className="text-white px-6 py-2 rounded-md bg-primary hover:bg-primary-dark">
          Search
        </button>
      </div>
    </div>
  </div>

  {/* Navigation */}
  <div className="flex gap-4 justify-center items-center mt-6">
    <div className="tablet:w-[150px] w-[80px] h-[15px] rounded-full bg-navigation1"></div>
    <div className="tablet:w-[60px] w-[30px] h-[15px] rounded-full bg-navigation2"></div>
  </div>
</div>


  )
}

export default Hero