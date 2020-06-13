import React, { useState, useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../context/authContext'
import ProfileImg from './ProfileImg'

export default function MusicianAccount() {
    const { isLoggedIn, token } = useContext(AuthContext)
    const [musicianData, setMusicianData] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/users/" + token, {
                headers: {
                    'x-auth': token,
                },
            })
            .then(res => res.json())
            .then(data => {
                setMusicianData(data.user)
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
                    <div className="musician-account">
                        {<img src={musicianData.profileImage} alt="Profile" width="150" height="150" />}
                        {<h3>{musicianData.name}</h3>}
                        {<p>Email: {musicianData.email}</p>}
                        {<p>Level: {musicianData.level}</p>}
                        {<p>{}</p>}
                    </div>
                </div>
                <div className="account-manager">
                    <h2>Account Manager</h2>
                    <Link to="/delete-account"><i className="fas fa-user-times"></i> delete account</Link>
                    <br />
                    <Link to="/edit-account"><i className="fas fa-user-edit"></i> edit account</Link>

                    <div className="profile-img-container">
                        <h3>Upload Profile Image</h3>
                        <ProfileImg userId={musicianData._id} />
                    </div>
                </div>
            </div>) : (<Redirect to="/" />)
            }
        </div>
    )
}
