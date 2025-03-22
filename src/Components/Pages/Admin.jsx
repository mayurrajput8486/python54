import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()

  const loginHandler = () =>{
    if(username === "ADMIN" && password === "Admin@123"){
      alert('Login Successful')
      navigate('/studetails')
    }else{
      setUsername('')
      setPassword('')
      alert('Check Username and Password')
    }
  }

  /* const checkUsername = (event) =>{
    setUsername(event.target.value)
  } */

  return (
    <div>
      <h1 className='text-center'>ADMIN LOGIN</h1>
      <div className='w-50 bg-dark text-center mx-auto mt-5 mb-5 p-4 rounded-3'>
        <div className='mb-2'>
          <input 
            type='text' 
            placeholder='Enter Username'
            className='form-control'
            value={username}
            onChange={(event)=>setUsername(event.target.value)}
          />
        </div>
        <div className='mb-2'>
          <input 
            type="password" 
            placeholder='Enter Password'
            className='form-control'
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            />
        </div>
        <div>
          <button className='btn btn-success' onClick={loginHandler}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Admin