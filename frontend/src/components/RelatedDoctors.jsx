import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality,id}) => {
    const {doctors} = useContext(AppContext)
const [relDoc,setRelDoc] = useState([]);

const navigate = useNavigate();
useEffect(()=>{


  if(doctors.length > 0 && speciality)
  {
    const docData = doctors.filter((doc)=>(doc.speciality === speciality && doc._id != id))
    setRelDoc(docData)
  }



},[doctors,id,speciality])

    

    return (


<div className='flex flex-col gap-4 max-w-[80vw] mt-20'>
      <h1 className='text-center font-medium md:text-[24px] text-[16px]'>Related Doctors</h1>

      <p className='w-1/2 mx-auto text-center  md:text-[14px] text-[10px]'>Simply browse through our extensive list of trusted doctors.</p>


      <div className="grid md:grid-cols-autos grid-cols-autosm gap-2 w-full mb-10">
          {

            relDoc.map((doctor, index) =>

            (

              <div onClick={() => { navigate(`/appointment/${doctor._id}`); scrollTo(0, 0) }} className='flex flex-col border-blue-200 border rounded-[20px] transform transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer ' key={index}>
                <img src={doctor.image} alt="" className='bg-blue-50 ' />
                <div className="flex gap-4 items-center px-3 pt-4 text-green-600">
                  <p className='h-[8px] w-[8px] rounded-full bg-green-500 '></p><p>Available</p>

                </div>
                <p className='px-4  text-[18px] font-medium'>{doctor.name}</p>
                <p className='px-4 pb-2'>{doctor.speciality}</p>
              </div>

            )
            )
          }
        </div>
    </div>
  )
}

export default RelatedDoctors
