import React,{useState} from 'react'

const SignupForm =()=> {
    const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:"",conpassword:""})
    console.log(formData);
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
            <label htmlFor="">First Name </label>
            <br />
            <input 
                type="text" 
                name='firstname'
                placeholder='Enter your first name'
                onChange={changeHandler}
            />
            <br />
            <label htmlFor="">Last Name </label>
            <br />
            <input 
                type="text" 
                name='lastname'
                placeholder='Enter your first name'
                onChange={changeHandler}
            />
            <br />
            <label htmlFor="">Email </label>
            <br />
            <input 
                type="email" 
                name='email'
                placeholder='Enter your first name'
                onChange={changeHandler}
            />
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
            <label htmlFor="">Conform Password </label>
            <br />
            <input 
                type="password" 
                name='conpassword'
                placeholder='Enter your first name'
                onChange={changeHandler}
            />
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
export default SignupForm;