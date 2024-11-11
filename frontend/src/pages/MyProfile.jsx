import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
const MyProfile = () => {

  const [isEdit,setIsEdit] = useState(true);
 
  const [userData,setUserData] = useState({
    name:"Edward Reigns",
    image:assets.profile_pic,
    email: 'abcde@gmail.com',
    phone:'+1 00 00 00 00',
    address:
    {
      line1:'22, New York',
      line2:"Turnbell Houston"
    },
    gender:'male',
    dob:'2222-22-22'
    });
    
 
  return (
    
    <div className='max-w-[80vw] mx-auto mb-20'>
      <img src={userData.image} alt="" />
<div className="border-b border-b-gray-500 py-4">


      { isEdit?
      <input type="text" placeholder='Name' onChange={(e)=>setUserData(prev=>({...prev,name:e.target.value}))} value={userData.name}/>
      :
      <p>{userData.name}</p>
    }
    </div>

<div className="">
  <p>Contact Information </p>
  <div className="">

<p>Email:{userData.email}</p>
<p>Phone:</p>
{isEdit ?
<input type="tel" value={userData.phone} onChange={(e)=>setUserData(prev=>({...prev,phone:e.target.value}))} placeholder='phone' />
:
<p>{userData.phone}</p>
}

<p>Address:</p>
{
  isEdit ?
  <div className="">

  <input type="text" value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} placeholder='phone' />
 <input type='text' value={userData.address.line2} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} />
  </div>:
  <p>{userData.address.line1}
  <br/>
  {userData.address.line2}
  </p>
}
  </div>

  </div>

<div className="">
  <p>Basic Information</p>
<div className="">
  <p>Gender: </p>
  {

isEdit ?
<select value={userData.gender} onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))}>
<option value='Male' >Male</option>
<option value='Female'>Female</option>
</select>
:
<p>{userData.gender}</p>
  }
  <p>Birthday:</p>
  {
    isEdit ?
    <input type='date' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))}/>
    :
    <p>{userData.dob}</p>
  }
</div>



</div>

{
  isEdit ?
  <button onClick={
    ()=>setIsEdit(false)
  } className='border border-blue-300 px-4 py-2 rounded-[20px] hover:bg-primary hover:text-white'>Save Information</button>
  :
  <button className='border border-blue-300 px-8 py-2 rounded-[20px] hover:bg-primary hover:text-white' onClick={()=>setIsEdit(true)}>Edit</button>
}

    </div>
  )
}

export default MyProfile
