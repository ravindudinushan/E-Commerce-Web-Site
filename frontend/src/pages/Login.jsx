import React, { useState } from 'react'

const Login = () => {

  const [ state, setState ] = useState("Login");

  const [ formData, setFormData ] = useState({
    username:"",
    password:"",
    email:""
  });

  const login = async () => {
    console.log("Login function execute")
  }

  const signup = async () => {
    console.log("Signup function execute")
  }

  return (
    <section className='max_padd_container flexCenter flex-col pt-32'>
      <div className='max-w-[555px] h-[600px] bg-white m-auto px-14 py-10'>
        <h3 className='h3'>{state}</h3>
        <div className='flex flex-col gap-4 mt-7'>
          {state==="Sign Up"?<input name='username' type="text" placeholder='Your Name' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>:''}
          <input type="email" placeholder='Email Address' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
          <input type="password" placeholder='Password' className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
        </div>
        <button className='btn_dark_rounded my-5 w-full !rounded-md'>Continue</button>
        {state==="Sign Up"?<p className='text-black font-bold'>Already have an account? <span onClick={()=> {setState("Login")}} className='text-secondary underline cursor-pointer'>Login</span></p>
         : 
        <p className='text-black font-bold'>Create an account? <span onClick={()=> {setState("Sign Up")}} className='text-secondary underline cursor-pointer'>Click here</span></p>}
        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login
