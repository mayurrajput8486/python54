import React from 'react'
import java from '../../assets/java-course.jpg'
import python from '../../assets//python-course.jpg'
import react from '../../assets//react.png'

import aws from '../../assets//aws.png'
import datascience from '../../assets//data.jpeg'
import cpp from '../../assets//CPP.jpg'

import dsa from '../../assets//Data-Structure-1-1.jpg'
import azure from '../../assets//AZURE.jpg'
import soft from '../../assets//st.jpeg'
import { NavLink } from 'react-router-dom'



const Courses = () => {
    return (
        <div>
            <div className='bg-dark'>
                <h2 className='text-center p-3 text-light'>Explore Our </h2>
                <h1 className='text-center'>
                    <span className='text-info'>Popular Courses</span> <span className='text-warning'>Build For Everyone</span>
                </h1>

                <div className='d-flex justify-content-evenly mt-5'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={react} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">MERN STACK</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={java} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={python} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-evenly mt-5'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={aws} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: '20rem' }}>
                        <img src={datascience} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Data Analytics</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ width: '20rem' }}>
                        <img src={azure} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-evenly mt-5 pb-5'>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={cpp} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={dsa} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem' }}>
                        <img src={soft} className="card-img-top" alt="..." height={200} />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className='text-center'>
                                <NavLink to="/register" className="btn btn-primary mb-2 w-100">Register</NavLink>
                            </div>
                            <div className='text-center'>
                                <a href="" className="btn btn-warning w-100" target='_blank' download>Syllabus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Courses