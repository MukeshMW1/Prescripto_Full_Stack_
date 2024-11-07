import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import  { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';
const Appointment = () => {
  const {doctors} = useContext(AppContext)
  const {docId} = useParams();
  const [fetched,setFetched] = useState(null);
const [docSlots,setDocSlots] = useState([]);
const [slotIndex,setSlotIndex] = useState(0);
const [slotTime,setSLotTime] = useState('');
const weekDays =['SUN','MON','TUE','WED','THU','Fri','SAT'];  
const [spec,setSpec] = useState(null);
const getAvailableSlots = async ()=>{


let today = new Date();

for(let i=0;i<7;i++)
{
let currentDate = new Date(today);
currentDate.setDate(today.getDate()+i);

let endTime = new Date()
endTime.setDate(today.getDate()+i)
endTime.setHours(21,0,0,0)

//setting hours

if(today.getDate() === currentDate.getDate())
{
currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1:10);
currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30:0);
}
else{
  currentDate.setHours(10);
  currentDate.setMinutes(0)

}

let timeSlots = [];
while(currentDate < endTime)
{

  let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit'});
  timeSlots.push({
dateTime:new Date(currentDate),
time:formattedTime
  });
 currentDate.setMinutes(currentDate.getMinutes()+30);
}
setDocSlots(prev=>([...prev, timeSlots]))
}
}


  useEffect(()=>{
if(doctors && docId)
{
  setFetched( doctors.find((doctor)=>doctor._id === docId));
}
  }
    ,[doctors,docId])




    useEffect(()=>{

getAvailableSlots();


    },[])


    useEffect(()=>{


console.log(docSlots);

    },[docSlots])

  return (
    <div className='max-w-[80vw] mx-auto mb-40'>

      {fetched ?
      <div className="flex flex-col gap-4 ">
<div className="flex gap-4 md:flex-row flex-col ">

        <img src={fetched.image} alt="" className='bg-blue-400 rounded-[20px] md:max-w-[260px] md:max-h-[280px] w-full' />
         
         <div className="md:max-w-[50vw] lg:max-w-[60vw]">

         <div className="border rounded-[10px] border-blue-300 p-8 mb-10 ">

         <div className="flex gap-2  text-center">
          <p className='text-[30px] font-medium'>{fetched.name}</p>
          <img src={assets.verified_icon} alt="Verified" className='w-4 '/>

          </div>     
<div className="flex items-center gap-2 text-gray-500 mb-4 text-[16px]">
  <p>{fetched.degree} -</p>
  <p>{fetched.speciality}</p>
<p className='border text-[10px] p-1 rounded-[20px]  cursor-pointer'>{fetched.experience}</p>
</div>
<div className="flex flex-col justify-center gap-2">
  <p className='flex gap-2 text-[14px]'>About  <img src={assets.info_icon} alt="" className='w-3'/> </p>
  <p className='text-gray-500 text-[14px]'>{fetched.about}</p>
  <p className='text-gray-500 font-medium'>Appointment Fee : <span className='text-black'>${fetched.fees}</span></p>
 
</div>



         </div>
         <div className="pb-10 ">

<p>Booking Slots</p>
</div>


<div className="flex md:gap-4 gap-2  overflow-x-scroll" >
{
  
  docSlots.length && docSlots.map((item,index)=>(
    <div onClick={()=>setSlotIndex(index)} className={`text-[12px] md:text-[16px] border rounded-full md:p-8 p-6 w-10 h-10 flex flex-col items-center justify-center cursor-pointer ${slotIndex === index ? 'bg-primary':''}`} key={index}> 
<p>{item[0] && weekDays[item[0].dateTime.getDay()]}</p>
<p>{item[0] && item[0].dateTime.getDate()}</p>

    </div>
    
    
  ))
}
  </div>
<div className=" flex pt-6 overflow-x-scroll gap-2 max-w-[66vw] mb-8 ">

  {
    
    docSlots.length && docSlots[slotIndex].map((item,index)=>(
      
      
      <p onClick={()=>setSLotTime(item.time)} className={`border py-4 text-sm font-light flex-shrink-0 px-5 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400'}`} key={index}>{item.time.toLowerCase()}</p>
      
      
      
    ))
  }
  </div>
  <button className='flex gap-2 border rounded-[20px] px-10 py-3 bg-primary text-white text-[12px] items-center  transition-all transform duration-300  justify-center  hover:scale-105 '>Book Appointment </button>
  </div>
</div>
<RelatedDoctors speciality={fetched.speciality} id={docId}/>


</div>

        :
        <p className='text-[40px] flex items-center justify-center font-medium'>Please Type the correct id</p>
      }
    </div>
  )
}

export default Appointment
