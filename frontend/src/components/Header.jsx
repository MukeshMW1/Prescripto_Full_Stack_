import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
const Header = () => {
  return (
    <div className='max-w-[80vw] mx-auto rounded-lg flex md:flex-row flex-col justify-end  gap-4 bg-primary md:px-6 px-10 md:pt-2 pt-10 mb-20    relative'>



      {/* left part */}
<div className="md:w-1/2 flex flex-col md:items-start justify-center gap-6 md:py-20 lg:px-10  ">
<h1 className='text-[20px] md:text-[30px] text-white font-bold'>Book Appointment <br/> With Trusted Doctors</h1>
<div className="flex md:flex-row flex-col justify-center items-center gap-3 ">
  <img src={assets.group_profiles} alt="" className='h-[40px]'/>
  <p className='text-white md:text-[14px] text-[12px] '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle free.</p>
</div>
<a href="#speciality" className='flex gap-2 border rounded-[20px] px-4 py-1 bg-gray-50 text-gray-500 text-[12px] items-center  transition-all transform duration-300  justify-center  hover:scale-105 '>Book Appointment <img src={assets.arrow_icon} alt="" className='h-[8px]'/></a>
</div>


  
      {/* right part */}
  <div className="md:w-1/2 flex items-end">
<img src={assets.header_img} alt="" className='  ' />

  </div>
    </div>
  )
}

export default Header
