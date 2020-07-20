import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function Navbar() {
    const { isLoggedIn } = useContext(AuthContext)
    const [navbarToggle, setNavbarToggle] = useState(false)

    return (
        <nav className="navbar">
            <span class="navbar-toggle-icon" id="js-navbar-toggle"
                onClick={() => { setNavbarToggle((navbarToggle) => !navbarToggle) }}

            >
                <i class="fas fa-bars"></i>
            </span>
            <NavLink className="main-nav-link middle logo" to="/" exact activeClassName="active">VMR Home</NavLink>
            <ul className={`main-nav ${navbarToggle ? "toggle" : ""}`}
                onMouseLeave={() => { setNavbarToggle(false) }}
            >
                {/**   
                <li className="link-background">
                    <NavLink className="main-nav-link middle logo" to="/" exact activeClassName="active">VMR Home</NavLink>
                </li>
                */}
                {
                    isLoggedIn && (
                        <>
                            <li className="link-background">
                                <NavLink className="main-nav-link middle" to="/musicians" exact activeClassName="active">Musicians</NavLink>
                            </li>
                            <li className="link-background">
                                <NavLink className="main-nav-link middle" to="/projects" exact activeClassName="active">Projects</NavLink>
                            </li>
                            <li className="link-background">
                                <NavLink className="main-nav-link middle" to="/service" exact activeClassName="active">Services</NavLink>
                            </li>
                        </>
                    )
                }
                {!isLoggedIn ? (
                    <div className="nav-li-div nav-item-left">
                        <li className="link-background nav-item-auth">
                            <NavLink className="main-nav-link middle" to="/signup" exact activeClassName="active">Sign up</NavLink>
                        </li>
                        <li className="link-background nav-item-auth login">
                            <NavLink className="main-nav-link middle" to="/login" exact activeClassName="active">Login</NavLink>
                        </li>
                    </div>
                ) : (
                        <div className="nav-li-div">
                            <li className="link-background">
                                <NavLink className="main-nav-link middle" to="/musicianAccount" exact activeClassName="active">My Account</NavLink>
                            </li>

                            <li className="link-background nav-item-left">
                                <NavLink className="main-nav-link middle" to="/logout" exact activeClassName="active">Logout</NavLink>
                            </li>
                        </div>
                    )
                }
            </ul>
        </nav>
    )
}
