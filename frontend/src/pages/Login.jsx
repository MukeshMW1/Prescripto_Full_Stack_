import React, { useState } from 'react'

const Login = () => {

const [state,setState] = useState('Sign Up');

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

const onSubmitHandler = async (event) =>
{
  event.preventDefault();
}


  return (
    <div className='max-w-[80vw] mt-10 mb-32 mx-auto flex flex-col items-center '>
      <div className="flex flex-col border border-blue-200 rounded-[10px] px-10 py-8 gap-2  shadow-md min-w-[400px]">
        <h1 className='text-[24px] font-medium text-gray-600'>{state === 'Sign Up' ?"Create Account" :"Login"}</h1>
        <p className='text-[14px] text-gray-500'>Please {state === 'Sign Up' ?"sign up" :"login"} to book appointment</p>
        
      <form action="" className='flex flex-col  '>
        {
          state === 'Sign Up' ?
          <>
        <label htmlFor="name" className='text-[14px] mb-1 text-gray-600'>Full Name</label>
        <input type='text' name='name' onChange={(e)=>setName(e.target.value)}  value={name} className='border border-zinc-300 h-10'/>
          </>
        :
        <></>
}
        <label htmlFor="email" className='text-[14px] mb-1 mt-4 text-gray-600 '  >Email</label>
        <input type='email' name='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-zinc-300 h-10'/>

        <label htmlFor="password" className='text-[14px] mb-1 mt-4 text-gray-600'>Password</label>
        <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-zinc-300 h-10'/>

        <button className='border px-4 py-2 rounded-[10px] mt-4 bg-primary text-white'>{state === 'Sign Up' ?"Create Account" :"Login"}</button>
      </form>
      {
        state === 'Sign Up' ?
        <p className='mt-2 text-[14px] text-gray-600'>Already have an account? <span className='text-[14px] text-primary cursor-pointer underline' onClick={()=>setState('Login')}> Login Here </span></p>
        :<p className='mt-2 text-[14px] text-gray-600' >Create a new account? <span onClick={()=>setState('Sign Up')}  className='text-[14px] text-primary cursor-pointer underline'> Click Here </span></p>
}
      </div>
    </div> 
  )
}

export default Login
