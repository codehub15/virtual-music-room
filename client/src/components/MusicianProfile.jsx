import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../context/authContext'


export default function MusicianProfile(props) {
    const { isLoggedIn, token } = useContext(AuthContext)
    const [user, setUser] = useState()
    console.log("checking user:",user);

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

    console.log("user data:", user);

    return (
        <div className="musician-container">
            <h2>Musician Profile</h2>

            <div className="musician-profile-container">
                <h3>{user.name}</h3>
                {<img src={user.profileImage} alt="Profile" width="100" height="100" />}
                <p>Expertise/Role:  {user.role}</p>
                <p>Level: {user.level}</p>
                
                
                <p>{user.tracks[0].trackName} </p>
                <p>{isLoggedIn ? "Online" : "Offline"} </p>

                <a href={"mailto:" + user.email} className="btn-link-mailto">send me a message</a>
            </div>
        </div>
    )
}