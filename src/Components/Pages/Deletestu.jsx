import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Deletestu = () => {

  const {students} = useParams()
  const [stu,setStu] = useState('')
  const navigate = useNavigate()
  //const myurl = `http://localhost:8005/students/${students}`
  const getData = async () =>{
    const response = await axios.get(`http://localhost:8005/students/${students}`)

    const result = response.data
    //console.log(result)
    setStu(result)
  }
  useEffect(()=>{
    getData()
  },[])

  const deleteData = () =>{
    axios.delete(`http://localhost:8005/students/${students}`)
    alert('Data Delete !!!')
    navigate('/studetails')
  }

  return (
    <div>
        <div className='bg-dark p-4 w-50 mx-auto text-warning mt-4 mb-4 rounded-5'>
            <h1 className='text-center'>Delete Record For :</h1>
            <h2>Unique ID - {stu.id}</h2>
            <h2>Full Name - {stu.first_name} {stu.last_name}</h2>
            <h2>Email - {stu.email}</h2>
            <div className='text-center mt-4'>
                <button className='btn btn-danger me-3' onClick={deleteData}>YES</button>
                <NavLink to='/studetails'><button className='btn btn-primary'>NO</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Deletestu