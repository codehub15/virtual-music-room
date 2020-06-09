import React, { useContext } from 'react'
import AuthContext from '../context/authContext'


export default function Logout() {
    const { setIsLoggedIn } = useContext(AuthContext)
    setIsLoggedIn(false)

    return (
        <div className="component-container">
            <p>You have successfully logged out.</p>
        </div>
    )
}
