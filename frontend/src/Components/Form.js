import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Form =()=> {
    const[isLogin,setLogin]=useState(false);
  return (
    <div className='h-[100vh] w-[100vw] bg-blue-300 flex justify-center items-center cursor'>
        <div className='h-[400px] w-[300px] bg-white rounded-lg'>
            <div className='flex justify-around m-4 bg-blue-800 rounded-lg text-white font-bold upper'>
                <span className={isLogin ? 'bg-blue-600 px-4 rounded-lg': 'px-4' } onClick={()=>{setLogin(true)}} >Login</span>
                <span className={!isLogin ? 'bg-blue-600 px-4 rounded-lg': 'px-4'} onClick={()=>{setLogin(false)}}>Signup</span>
            </div>
            {
                isLogin?<LoginForm/>:<SignupForm/>
            }
            
        </div>
    </div>
  )
}
export default Form;
