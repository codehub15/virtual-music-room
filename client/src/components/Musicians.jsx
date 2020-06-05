import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function MusicianAccount(props) {
    const { isLoggedIn, userId, setUserId, setClickProfile,
        allMusicians, setAllMusicians
    } = useContext(AuthContext)


    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => {
                setAllMusicians(data.users)
            })
    }, [])


    if (!allMusicians) {
        return "loading"
    }


    const openProfile = (id) => {
        console.log(id)
        let mid = allMusicians && allMusicians.map((musician, i) => {
            if (id === musician._id) {
                setClickProfile(true)
                setUserId(musician._id)
            }
        })
        return mid
    }


    const allMusiciansData = allMusicians && allMusicians.map((musician, i) => {
        return (
            <div key={i} className="musician">
                <h3>{musician.name}</h3>
                <p>{musician.email} </p>
                <p>Level: {musician.level} </p>
                <p>Role: {musician.role} </p>

                <Link to="/profile" onClick={() => { openProfile(musician._id) }}>view</Link>
            </div>
        )
    })


    return (
        <div>
            <div className="musician-container">
                <h2>All Musicians</h2>
                <div className="musician-profile">
                    {allMusiciansData}
                </div>
            </div>
        </div>
    )
}