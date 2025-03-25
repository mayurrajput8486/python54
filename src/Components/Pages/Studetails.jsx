import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Studetails = () => {
    const [students,setStudents] = useState([])
    const navigate = useNavigate()
    const getDetails = async() =>{
        const res = await axios.get('http://localhost:8005/students')
        //console.log(res)
        const result = res.data
        //console.log(result)
        setStudents(result)
    }

    useEffect(()=>{
        getDetails()
    },[])

    const logoutHandler = () =>{
        navigate('/admin')
    }

  return (
    <div>
        <h1 className='text-center mb-3'>Students Details :</h1>
        <table className='table mb-4'>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Full Name</th>
                    <th>Course</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>State</th>
                    <th>City</th>
                    <th>DOB</th>
                    <th>Pincode</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((stu, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{stu.first_name} {stu.last_name}</td>
                                <td>{stu.course}</td>
                                <td>{stu.address}</td>
                                <td>{stu.gender}</td>
                                <td>{stu.state}</td>
                                <td>{stu.city}</td>
                                <td>{stu.dob}</td>
                                <td>{stu.pincode}</td>
                                <td>{stu.email}</td>
                                <td>
                                    <NavLink to={`/update/${stu.id}`}><button className='btn btn-warning'>Edit</button></NavLink>
                                    <NavLink to={`/delete/${stu.id}`}><button className='btn btn-danger'>Delete </button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div className='text-center'>
            <button className='btn btn-danger' onClick={logoutHandler}>LOGOUT</button>
        </div>
    </div>
  )
}

export default Studetails