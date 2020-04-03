import React from 'react'
import { Link, useLocation } from "react-router-dom";

function NavBar( props ) {
    const location = useLocation();

    return (
        <div class="container-fluid navParent ">
            <nav class="navBar">
                <ul class="d-flex justify-content-around">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand">Sara</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ProjectPage" className={location.pathname === "/ProjectPage" ? "nav-link active" : "nav-link"}>
                        Project
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/ContactPage" className={location.pathname === "/ContactPage" ? "nav-link active" : "nav-link"}>
                        Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
