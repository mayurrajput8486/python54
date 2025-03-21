import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-warning fw-bold fs-4" to="/home">CJC</NavLink>
                    <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-light fs-5 btn btn-outline-secondary" aria-current="page" to="/home">
                                <i className="bi bi-house text-light"></i><br/>
                                Home
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-light fs-5 btn btn-outline-secondary" to="/about">
                                <i className="bi bi-amazon"></i><br/>
                                About
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-light fs-5 btn btn-outline-secondary" to="/register">
                                <i className="bi bi-credit-card-fill"></i><br/>
                                Register
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-light fs-5 btn btn-outline-secondary" to="/admin">
                                <i className="bi bi-incognito"></i><br/>
                                Admin
                                </NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link text-light fs-5 btn btn-outline-secondary" to="/contact">
                                <i className="bi bi-telephone"></i><br/>
                                Contact
                                </NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar