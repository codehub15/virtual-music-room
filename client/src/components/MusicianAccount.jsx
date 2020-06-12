import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { Link } from 'react-router-dom'
import AuthContext from '../context/authContext'
import ProfileImg from './ProfileImg'

export default function MusicianAccount() {
    const { isLoggedIn, userId, name, setName, setUserEmail } = useContext(AuthContext)
    const [musicianData, setMusicianData] = useState([])
    const [msg, setMsg] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/users/" + userId)
            .then(res => res.json())
            .then(data => {
                if (data.user) {
                    setMusicianData(data.user)
                    setName(data.user.name)
                    setUserEmail(data.user.email)
                }
                else {
                    setMsg("Loading...")
                }
            })
    }, [])


    if (!musicianData) {
        return "loading"
    }


    return (
        <div className="musician-container-account">
            {isLoggedIn ? (<div className="musician-account-container">
                <div className="account">
                    <h2>My Account</h2>
                    <div className="msg"><p>{msg}</p></div>
                    <div className="musician-account">
                        {<img src={musicianData.profileImgName} alt="Profile Image" width="150" height="150" />}
                        {<h3>{musicianData.name}</h3>}
                        {<p>Email: {musicianData.email}</p>}
                        {<p>Level: {musicianData.level}</p>}
                        {<p>{}</p>}
                    </div>
                </div>
                <div className="account-manager">
                    <h2>Account Manager</h2>
                    <Link to="/delete-account"><i class="fas fa-user-times"></i> delete account</Link>
                    <br />
                    <Link to="/edit-account"><i class="fas fa-user-edit"></i> edit account</Link>

                    <div className="profile-img-container">
                        <h3>Upload Profile Image</h3>
                        <ProfileImg />
                    </div>
                </div>
            </div>) : (<Redirect to="/" />)
            }
        </div>
    )
}
