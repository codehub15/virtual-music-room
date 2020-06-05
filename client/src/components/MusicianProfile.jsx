import React, { useContext } from 'react'
import AuthContext from '../context/authContext'


export default function MusicianProfile(props) {
    const { isLoggedIn, userId, allMusicians } = useContext(AuthContext)

    let user = allMusicians.find(u => u._id === userId)

    // console.log("user id:", userId)
    // console.log("user:", user)

    return (
        <div className="musician-container">
            <h2>Musician Profile</h2>

            <div className="musician">
                <h3>{user.name}</h3>

                <p>{isLoggedIn ? "Online" : "Offline"} </p>
            </div>
        </div>
    )
}
