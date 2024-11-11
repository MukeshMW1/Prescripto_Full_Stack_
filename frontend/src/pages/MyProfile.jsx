import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
const MyProfile = () => {
const handleFile= (e)=>{
const file =e.target.files[0];
if(file)
{
  const reader = new FileReader();
  reader.onloadend = ()=>{
    setUserData((prev)=>({
      ...prev,
image:reader.result
    }))
  }
  reader.readAsDataURL(file);
}
}
  const [isEdit,setIsEdit] = useState(false);
 
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
      {
        isEdit ?
        <input type='file' accept='image/*' onChange={handleFile} />
:
        <img src={userData.image} alt="" className='w-40  mt-10' />
}
<div className="border-b border-b-gray-500 py-4">


      { isEdit?
      <input type="text" placeholder='Name' onChange={(e)=>setUserData(prev=>({...prev,name:e.target.value}))} value={userData.name} required className='bg-gray-100 text-center'/>
      :
      <p className='text-[20px] text-gray-600'>{userData.name}</p>
    }
    </div>

<div className="mt-4 mb-4 flex flex-col gap-4">
  <p className='text-gray-500 underline underline- text-[16px]'>Contact Information </p>
  <div className="flex gap-12">

<p className='text-gray-600 font-bold text-[14px]'>Email:</p>
<p className='text-blue-600 cursor-pointer text-[14px]'>{userData.email}</p>
 </div>
<div className="flex gap-10">

<p className='text-gray-600 font-bold text-[14px]'>Phone:</p>
{isEdit ?
<input type="tel" value={userData.phone} onChange={(e)=>setUserData(prev=>({...prev,phone:e.target.value}))} placeholder='phone' className='bg-gray-100 text-center' />
:
<p className='text-gray-500 text-[14px]'>{userData.phone}</p>
}
</div>
<div className="flex gap-8">

<p className='text-gray-600 font-bold text-[14px]'>Address:</p>
{
  isEdit ?
  <div className="flex flex-col gap-2">

  <input type="text" value={userData.address.line1} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))} placeholder='phone' className='bg-gray-100 text-center' />
 <input type='text' value={userData.address.line2} onChange={(e)=>setUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} className='bg-gray-100 text-center' />
  </div>:
  <p className='text-gray-500  text-[14px]'>{userData.address.line1}
  <br/>
  {userData.address.line2}
  </p>
}
  </div>

  </div>

<div className="flex flex-col gap-2 mb-8">
  <p className='text-gray-500 underline underline- text-[16px] mb-2 '>Basic Information</p>
<div className="flex gap-10">
  <p className='text-gray-600 font-bold text-[14px]'>Gender: </p>
  {

isEdit ?
<select value={userData.gender} onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} className='bg-gray-100 text-center'>
<option value='Male' >Male</option>
<option value='Female'>Female</option>
</select>
:
<p className='text-gray-500 text-[14px]'>{userData.gender}</p>
  }

  </div>
  <div className="flex gap-6">
    
  <p>Birthday:</p>
  {
    isEdit ?
    <input type='date' value={userData.dob} onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))} className='bg-gray-100 text-center'/>
    :
    <p className='text-gray-500 text-[14px]'>{userData.dob}</p>
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
