import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../context/authContext'


export default function MusicianProfile(props) {
    const { isLoggedIn, token } = useContext(AuthContext)
    const [user, setUser] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/users/" + props.match.params.id, {
                headers: {
                    'x-auth': token,
                },
            })
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
            })
    }, [props.match.params.id, token])

    if (!user) {
        return "Loading";
    }

    return (
        <div className="musician-container">
            <h2>Musician Profile</h2>

            <div className="musician">
                {<img src={user.profileImage} alt="Profile" width="100" height="100" />}
                <h3>{user.name}</h3>

                <p>{isLoggedIn ? "Online" : "Offline"} </p>
            </div>
        </div>
    )
}
