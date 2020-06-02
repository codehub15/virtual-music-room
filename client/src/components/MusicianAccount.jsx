import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import AuthContext from '../context/authContext'


export default function MusicianAccount(props) {
    const { isLoggedIn, userId, setUserId } = useContext(AuthContext)
    const [musicianData, setMusicianData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/users/" + userId)
            .then(res => res.json())
            .then(data => {
                setMusicianData(data.user)
            })
    }, [])


    if (!musicianData) {
        return "loading"
    }


    return (
        <div className="musician-container">
            {isLoggedIn ? (<div className="musician-account-container">
                <h2>My Account</h2>
                <div className="musician-account">
                    {<h3>{musicianData.name}</h3>}
                    {<p>Email: {musicianData.email}</p>}
                    {<p>Level: {musicianData.level}</p>}
                    {<p>Id: {musicianData._id}</p>}
                </div>
            </div>) : (<Redirect to="/home" />)
            }
        </div>
    )
}
