import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
const Footer = () => {
  return (
    <div className=" w-[80vw] mx-auto  mb-10">

    <div className='flex md:flex-row flex-col  gap-4 mb-10 border-b-gray-400 border-b-[1px] py-4 justify-between'>
      <div className="md:w-1/3 flex flex-col gap-4 mb-8  ">
        <img src={assets.logo} alt="" className='w-[140px]'/>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] w-full '>This is a doctor appointment app you can use to connect to a doctor and get some insights on your health.Checkup,prescriptions and so other things can be done with you sitting at home infront of your screen. </p>
      </div>
      <div className="flex md:flex-row flex-col gap-20 mb-4">

      <div className="w-1/3">
        <h1 className='text-[18px] font-semibold mb-2'>COMPANY</h1>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] max-w-[200px] '>Home</p>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] max-w-[200px] '>About Us</p>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] max-w-[200px] '>Delivery</p>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] max-w-[200px] '>Privacy Policy</p>
      </div>
      <div className="">
        <h1 className='text-[18px] font-semibold mb-2'>GET IN TOUCH</h1>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] max-w-[200px] '>+0 00 0 0 0 000</p>
        <p className=' text-[12px] text-gray-600 md:max-w-[300px] max-w-[200px] '>mukeshbhattampb111@gmail.com</p>
      </div>
      </div>
    </div>
      <p className=' text-[14px] text-black font-bold  text-center '>Copyright 2024 @ MW - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
