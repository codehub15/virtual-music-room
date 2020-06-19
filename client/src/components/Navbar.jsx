import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function Navbar() {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <nav>
            <ul>
                <li className="link-background">
                    <NavLink className="main-nav-link middle" to="/" exact activeClassName="active">VMR Home</NavLink>
                </li>
                {
                    isLoggedIn && (
                        <>
                            <li className="link-background">
                                <NavLink className="main-nav-link middle" to="/musicians" exact activeClassName="active">Musicians</NavLink>
                            </li>
                            <li className="link-background">
                                <NavLink className="main-nav-link middle" to="/projects" exact activeClassName="active">Projects</NavLink>
                            </li>
                        </>
                    )
                }
                {!isLoggedIn ? (
                    <div className="nav-li-div nav-item-left">
                        <li className="link-background">
                            <NavLink className="main-nav-link middle" to="/signup" exact activeClassName="active">Sign up</NavLink>
                        </li>
                        <li className="link-background">
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
