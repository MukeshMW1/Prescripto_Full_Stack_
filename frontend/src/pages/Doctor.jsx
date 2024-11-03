import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
const Doctor = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);

  const navigate = useNavigate();

  const applyFilter = () => {

    speciality ?
      setFilterDoc(doctors.filter((doctor) => doctor.speciality === speciality))
      :
      setFilterDoc(doctors)

  }


  useEffect(() => {
    applyFilter();
  }, [doctors, speciality])


  return (
    <div className='max-w-[80vw] mx-auto text-[14px] mb-20 '>
      <p className='text-gray-500 mb-6'>Browse through doctors specialisit.</p>
      <div className="flex md:flex-row flex-col gap-4  justify-between">


        <div className=" flex flex-col gap-4">
          {
            specialityData.map((data, index) =>
            (
              <p onClick={()=>navigate(speciality === data.speciality ? `/doctors` : `/doctors/${data.speciality}` )} className={`border p-2 max-w-60 cursor-pointer  ${ speciality === data.speciality ? 'bg-blue-100':''}` }  key={index}>{data.speciality}</p>

            ))
          }
        </div>






        <div className="grid md:grid-cols-autos grid-cols-autosm gap-2 w-full mb-10">
          {

            filterDoc.map((doctor, index) =>

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
    </div>

  )
}

export default Doctor
