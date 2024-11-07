import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
const About = () => {
  return (
    <div className='max-w-[80vw] mx-auto flex flex-col items-center gap-4 justify-center mb-32'>
       <h1 className='text-[20px] text-gray-400 font-bold'>ABOUT <span className='text-black'>US</span></h1>
<div className="flex md:flex-row flex-col  justify-center gap-8">
  <img src={assets.about_image} alt="" className='lg:w-[20vw] lg:h-[20vw] md:w-[400px] md:h-[300px] w-[500px] h-[450x] mx-auto' />

      <div className="text-[14px] text-gray-500 flex flex-col gap-10 lg:max-w-[510px]  ">

     <div className=" flex flex-col gap-8 ">

      <p className=''>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>

      <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
     </div>
<div className="flex flex-col gap-2">
      <h1 className='font-medium text-[20px] text-black'>Our Vision</h1>
      <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
</div>
      </div>
    </div>

<div className="">
  <h1 className='text-[22px] my-4 '>WHY <span className='text-gray-500'>CHOOSE US </span></h1>
  <div className="flex md:flex-row flex-col">
    <div className="border border-blue-200 px-10  py-10 hover:bg-primary flex flex-col ">

    <h1 className='text-gray-600 text-[15px] font-medium mb-4'>EFFECIENCY:</h1>
    <p className='text-[14px] text-gray-600 md:max-w-[200px]'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>

    <div className="border border-blue-200 px-10 py-10 hover:bg-primary flex flex-col ">

    <h1 className='text-gray-600 text-[15px] font-medium mb-4'>CONVENIENCE:</h1>
    <p className='text-[14px] text-gray-600 md:max-w-[200px]'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>


    <div className="border border-blue-200 px-10 py-10 hover:bg-primary flex flex-col ">

    <h1 className='text-gray-600 text-[15px] font-medium mb-4'>PERSONALIZATION:</h1>
    <p className='text-[14px] text-gray-600 md:max-w-[200px]'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>
  </div>

</div>




  </div>      
  )
}

export default About
