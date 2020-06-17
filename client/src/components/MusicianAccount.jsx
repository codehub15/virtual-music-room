import React, { useState, useContext, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../context/authContext'
import ProfileImg from './ProfileImg'
import Flags from 'country-flag-icons/react/3x2'


export default function MusicianAccount() {
    const { isLoggedIn, token, userCountry, setUserCountry } = useContext(AuthContext)
    const [musicianData, setMusicianData] = useState()

    useEffect(() => {
        fetch("http://localhost:5000/users/currentUser", {
            headers: {
                'x-auth': token,
            },
        })
            .then(res => res.json())
            .then(data => {
                setMusicianData(data.user)
            })
    }, [token])

    if (!musicianData) {
        return "loading"
    }

    console.log("musicianData:", musicianData)
    setUserCountry(musicianData.country)
    console.log("userCountry:", userCountry)

    //let flag = musicianData.country.toString();
    //console.log("flag:", typeof flag)

    return (
        <div className="musician-container-account-outer">
            <h2>My Account</h2>
            {isLoggedIn ? (<div className="musician-account-container">
                <div className="account">
                    
                    <div className="musician-account">
                        {<h3>{musicianData.name}</h3>}
                        {<img src={musicianData.profileImage} alt="Profile" width="150" height="150" />}
                        
                        {<p>Email: {musicianData.email}</p>}
                        {<p>Level: {musicianData.level}</p>}
                        {<p>{}</p>}
                        <Flags.DE title="United States" className="country-flag" />
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
