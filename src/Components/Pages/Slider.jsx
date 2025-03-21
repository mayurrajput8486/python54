import React from 'react'
import python from '../../assets/python.png'
import java from '../../assets/java.png'
import students from '../../assets/students.jpg'
const Slider = () => {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={python} className="d-block w-100" alt="python-banner" height={350}/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={java} className="d-block w-100" alt="java-banner" height={350}/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={students} className="d-block w-100" alt="students" height={350}/>
                    </div>            
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
  )
}

export default Slider