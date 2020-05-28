import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function Navbar() {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <nav>
            <ul>
                <li>
                    <NavLink className="main-nav-link" to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink className="main-nav-link" to="/musicians" exact activeClassName="active">Musicians</NavLink>
                </li>
                {!isLoggedIn ? (
                    <div className="nav-li-div">
                        <li>
                            <NavLink className="main-nav-link" to="/signup" exact activeClassName="active">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink className="main-nav-link" to="/login" exact activeClassName="active">Login</NavLink>
                        </li>
                    </div>
                ) : (
                        <div className="nav-li-div">
                            <li>
                                <NavLink className="main-nav-link" to="/musicianAccount" exact activeClassName="active">My Account</NavLink>
                            </li>

                            <li>
                                <NavLink className="main-nav-link" to="/logout" exact activeClassName="active">Logout</NavLink>
                            </li>
                        </div>
                    )
                }
            </ul>
        </nav>
    )
}
