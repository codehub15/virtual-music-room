import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { Link } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function MusicianAccount() {
    const { isLoggedIn, userId } = useContext(AuthContext)
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
                <div>
                    <div className="musician-account">
                        {<h3>{musicianData.name}</h3>}
                        {<p>Email: {musicianData.email}</p>}
                        {<p>Level: {musicianData.level}</p>}
                        {<p>Id: {musicianData._id}</p>}
                    </div>
                    <div>
                        <h3>Account Manager</h3>
                        <Link to="/delete-account">delete account</Link>
                        <br />
                        <Link to="/edit-account">edit</Link>
                    </div>
                </div>
            </div>) : (<Redirect to="/home" />)
            }
        </div>
    )
}
