import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary-subtle">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand" to={"/home"}>
                        <i className="fa-solid fa-house"></i>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to={"/home"} >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/cart"}>Cart</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2">
                            <li className="nav-item">
                                <NavLink className="nav-link " to={"/logIn"}>Log In</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to={"/register"}>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
