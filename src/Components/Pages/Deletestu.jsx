import React from 'react'

const Deletestu = () => {
  return (
    <div>
        <div className='bg-dark p-4 w-50 mx-auto text-warning mt-4 mb-4 rounded-5'>
            <h1 className='text-center'>Delete Record For :</h1>
            <h2>Unique ID - </h2>
            <h2>Full Name - </h2>
            <div className='text-center mt-4'>
                <button className='btn btn-danger me-3'>YES</button>
                <button className='btn btn-primary'>NO</button>
            </div>
        </div>
    </div>
  )
}

export default Deletestu