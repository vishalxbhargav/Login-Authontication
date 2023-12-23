import React, { useState } from 'react'

const LoginForm =()=> {
    const [formData,setFormData]=useState({email:"",password:"",})
    console.log(formData.email,formData.password);
    function changeHandler(event){
       setFormData(prevFormData=>{
        return{
            ...prevFormData,
            [event.target.name]:event.target.value
        }
       })
    }
  return (
    <div>
        <form action="">
            <label htmlFor="">email </label>
            <br />
            <input 
                type="email" 
                name='email'
                placeholder='Enter your first name'
                onChange={changeHandler}
            />
            <br />
            <br />
            <label htmlFor="">password </label>
            <br />
            <input 
                type="password" 
                name='password'
                placeholder='Enter your first name'
                onChange={changeHandler}
            />
            <br />
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
export default LoginForm;