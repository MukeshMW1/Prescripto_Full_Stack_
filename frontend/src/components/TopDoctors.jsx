import {React,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
const TopDoctors = () => {

const navigate = useNavigate();
const {doctors} = useContext(AppContext);
  return (
    <div className='w-[80vw] mx-auto flex flex-col items-center justify-center gap-4 mb-20 lg:px-20 md:px-16 px-10 '>
      <h1 className='text-center
       text-[20px] md:text-[26px]  font-medium'>Top Doctors To Book</h1>
      <p className='w-1/2 text-center text-[12px]  text-black text-wrap'>Simply browse through our extensive <br/>
      list of trusted doctors.</p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 ">
{
    doctors.slice(0,10).map((doctor,index)=>(
        <div onClick={()=>{navigate(`/appointment/${doctor._id}`);scrollTo(0,0)}} className="border border-blue-200 rounded-xl transition-all overflow-hidden cursor-pointer duration-300 hover:-translate-y-3 transform " key={index}>
<img src={doctor.image} alt="" className='bg-blue-50'/>
<div className="flex items-center gap-2 text-green-600 text-center px-3 pt-3">

<p className='w-[7px] h-[7px] rounded-full bg-green-600  '></p><p className='text-[13px]'>Available</p>
</div>
<p className='text-gray-900 text-md font-medium px-3'>{doctor.name}</p>
<p className='text-gray-900 text-sm px-2 pb-2 '>{doctor.speciality}</p>

        </div>
    ))
}

      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='border rounded-[20px] px-6 py-1 bg-blue-50 mt-10'>More</button>
    </div>
  )
}

export default TopDoctors
