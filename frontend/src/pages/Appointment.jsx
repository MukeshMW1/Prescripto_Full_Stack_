import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import  { AppContext } from '../context/AppContext';
const Appointment = () => {
  const {doctors} = useContext(AppContext)
  const {id} = useParams();
  const [fetched,setFetched] = useState();

  
console.log(id);
console.log(fetched);
  useEffect(()=>{

    setFetched( doctors.find((doctor)=>doctor._id === id))
  }
    ,[doctors,id])


  return (
    <div>
    </div>
  )
}

export default Appointment
