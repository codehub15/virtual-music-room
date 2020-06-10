import React, { useContext } from 'react'
import AuthContext from '../context/authContext'


export default function MusicianProfile(props) {
    const { isLoggedIn, userId, allMusicians } = useContext(AuthContext)
    let user = allMusicians.find(u => u._id === userId)

    return (
        <div className="musician-container">
            <h2>Musician Profile</h2>

            <div className="musician">
                {<img src={user.profileImgName} alt="Profile Image" width="100" height="100" />}
                <h3>{user.name}</h3>

                <p>{isLoggedIn ? "Online" : "Offline"} </p>
            </div>
        </div>
    )
}
