import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/authContext'


export default function Logout() {
    const { isLoggedIn, setIsLoggedIn, setToken } = useContext(AuthContext)
    setIsLoggedIn(false)
    setToken()

    if (isLoggedIn) {
        alert("You have successfully logged out.")
    }

    return (
        <div className="component-container">
            <p>You have successfully logged out.</p>
            <Redirect to="/" />
        </div>
    )
}
