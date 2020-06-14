import React, { useContext } from 'react'
import AuthContext from '../context/authContext'


export default function Logout() {
    const { setIsLoggedIn, setToken } = useContext(AuthContext)
    setIsLoggedIn(false)
    setToken()
    
    return (
        <div className="component-container">
            <p>You have successfully logged out.</p>
        </div>
    )
}
