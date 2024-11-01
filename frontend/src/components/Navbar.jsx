import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import  {assets} from '../assets/assets_frontend/assets'
const Navbar = () => {
  const [token,setToken] = useState(true);
  const [showMenu,setShowMenu] = useState(false);
    const navigate = useNavigate();
  return (
    
    <div className='flex  mt-4 items-center justify-around  mb-5 pb-4 border-b border-b-gray-400 mx-10'>
      <NavLink to='/'><img src={assets.logo} alt="" className='w-[140px] md:w-[160px] cursor-pointer ' /></NavLink>
      <div className="flex items-center gap-4">
        <ul className='md:flex gap-4 items-center text-base font-medium md:text-[14px] text-[10px]  hidden'>
           <NavLink to='/'> <li>HOME<hr  className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/></li> </NavLink>
           <NavLink to='/doctors'> <li>ALL DOCTORS<hr  className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/></li> </NavLink>
           <NavLink to='about'> <li>ABOUT<hr  className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/></li> </NavLink>
           <NavLink to='contact'> <li>CONTACT<hr  className='border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden'/></li> </NavLink>
        </ul>
        <button className='border rounded-[20px] py-1 px-5 md:flex items-center hidden text-[12px] font-medium'>Admin Panel</button>
      </div>


<div className="flex gap-2 items-center">
 
      
      {token ?
      <div className='flex gap-2 items-center relative group cursor-pointer'>
<img src={assets.profile_pic} alt="" className='rounded-full w-[25px] '/>
<img src={assets.dropdown_icon} alt="" className='w-[10px]'/>


  <div className="text-[12px] font-medium absolute top-0 right-0 pt-10 group-hover:block hidden z-20 rounded">
<div className="p-2 min-w-48 rounded flex flex-col gap-3 bg-gray-200">

  <p className='hover:text-black  text-gray-500 ' onClick={()=>navigate('/my-profile')}>My Profile</p>
  <p className='hover:text-black  text-gray-500 ' onClick={()=>navigate('/my-appointments')}>My Appoinments</p>
  <p className='hover:text-black  text-gray-500 ' onClick={()=>navigate('/')}>Source Code</p>
  <p className='hover:text-black  text-gray-500 ' onClick={()=>setToken(false)}>Log Out</p>
  
</div>
</div>

      </div>
      :
      <button onClick={()=>navigate('/login')} className='border rounded-[20px] py-2 px-4 bg-primary text-white text-[12px] md:flex items-center hidden'>Create Account</button>
}
      </div>
      
    </div >
   
  )
}

export default Navbar
