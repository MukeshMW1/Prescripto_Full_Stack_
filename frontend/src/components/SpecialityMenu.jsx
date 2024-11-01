import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import {Link} from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col gap-3 items-center justify-center mb-20'>
      <h1 className='text-[20px] md:text-[26px]  font-medium'>Find By Speciality</h1>
      <p className='w-1/2 text-center text-[12px]  text-black text-wrap'>Simply browse through our extensive list of trusted doctors,<br/> schedule your appointment hassle-free.</p>

 <div className="flex gap-4 mt-5 justify-center items-center">
        

{specialityData.map((data ,index)=>(
    <Link to={`/doctors/${data.speciality}`} key= {index} className="flex flex-col gap-2 justify-center items-center transition-all transform duration-300 hover:-translate-y-2">
    <img src={data.image} alt="" className='md:w-[88px] w-[60px]' />
   <p className='text-[12px]'>{data.speciality}</p>
   </Link>
))}

</div>
    </div>
  )
}

export default SpecialityMenu
