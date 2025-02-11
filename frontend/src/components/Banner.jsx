import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
import {useNavigate} from 'react-router-dom'
const Banner = () => {

  const navigate = useNavigate();
  return (
    <div className="w-[70vw]  mx-auto bg-primary flex   rounded-[20px]  px-6 sm:px-10 md:px-12 mb-40  relative " >
      {/* left side  */}
<div className='flex flex-col gap-4 mb-10 flex-1 py-8 sm:py-10 md:py-16 lg:pl-5'>
<div className="flex flex-col gap-2 ">
<p className='text-white text-[24px] md:text-[30px] font-medium'>Book Appointment</p>
<p className='text-white text-[24px] font-medium md:text-[30px]'>With 100+ Trusted Doctors</p>
</div>
<button onClick={()=>{navigate('/login');scrollTo(0,0)}}  className='flex gap-2 border rounded-[20px] px-4 py-1 bg-gray-50 text-gray-500 text-[12px] items-center  transition-all transform duration-300  justify-center  hover:scale-105 max-w-40 '>Create Account </button>
</div>



{/* right side */}
<div className="hidden md:block  md:w-1/2 lg:w-[370px] ">
<img src={assets.appointment_img} alt="" className='absolute bottom-0 md:right-3 lg:right-20 right-0 max-w-[300px]'/>
</div>


    </div>
  )
}

export default Banner
