import React, { useState, useContext, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import { Link } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function MusicianAccount() {
    const { isLoggedIn, userId, name, setName, setUserEmail } = useContext(AuthContext)
    const [musicianData, setMusicianData] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/users/" + userId)
            .then(res => res.json())
            .then(data => {
                setMusicianData(data.user)
                setName(data.user.name)
                setUserEmail(data.user.email)
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
                    <div>
                        <div className="musician-account">
                            {<img src={musicianData.profileImgName} alt="Profile Image" width="150" height="150" />}
                            {<h3>{musicianData.name}</h3>}
                            {<p>Email: {musicianData.email}</p>}
                            {<p>Level: {musicianData.level}</p>}
                            {<p>Id: {musicianData._id}</p>}
                        </div>

                        <div className="profile-img-container">
                            <h3>Upload Profile Image</h3>

                        </div>
                    </div>
                </div>
                <div className="account-manager">
                    <h3>Account Manager</h3>
                    <Link to="/delete-account">delete account</Link>
                    <br />
                    <Link to="/edit-account">edit account</Link>
                </div>
            </div>) : (<Redirect to="/home" />)
            }
        </div>
    )
}
