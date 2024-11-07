import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div className='max-w-[80vw] mx-auto flex flex-col items-center gap-4 justify-center mb-32'>
       <h1 className='text-[20px] text-gray-400 font-bold'>CONTACT <span className='text-black'>US</span></h1>
       <div className="flex md:flex-row flex-col  justify-center gap-8 mt-10">
       <img src={assets.contact_image} alt="" className='md:w-[350px] md:h-[350px] w-[500px] h-[450x] mx-auto' />
       <div className="text-[14px] text-gray-500 flex flex-col gap-6 lg:max-w-[510px]  ">
        <h1 className='text-[20px] text-gray-500 font-medium'>OUR OFFICE</h1>

        <div className="">
          <p>0000 MW Paradise</p>
          <p>Suite 111,WM,Paradise</p>
        </div>
        <div className="">
          <p>Tel:(000) 111-0000 </p>
          <p>Email:mukeshbhattampb@gmail.com </p>
        </div>
        <div className="">
          <h1 className='text-[16px] font-medium mb-6'>CARRERS AT PRESCRIPTO</h1>
          <p>Learn more about our teams and job openings.</p>
          <button className='text-gray-600 hover:bg-black px-8 py-4 hover:text-white border mt-10 transition-all duration-500 border-black'>Explore Jobs</button>
        </div>

</div>
       </div>
    </div>
  )
}

export default Contact
