import React, { useState, useEffect, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../context/authContext'


export default function MusicianAccount(props) {
    const { isLoggedIn, token } = useContext(AuthContext)
    const [allMusicians, setAllMusicians] = useState([])

    useEffect(() => {
        fetch("/users", {
            headers: {
                'x-auth': token,
            }
        })
            .then(res => res.json())
            .then(data => {
                setAllMusicians(data.users)
            })
    }, [token])

    console.log(allMusicians);

    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }

    if (!allMusicians) {
        return "loading"
    }

    const allMusiciansData = allMusicians && allMusicians.map((musician, i) => {
        return (
            <div key={i} className="musician">
                {<img src={musician.profileImage} alt="Profile" width="150" height="100" />}
                <h3>{musician.name}</h3>
                {/**  <p>{musician.email} </p> */}
                <p>Level: {musician.level} </p>
                <p>Role: {musician.role} </p>

                <Link to={"/profile/" + musician._id} className="btn-visit">view</Link>
            </div>
        )
    })


    return (
        <div>
            <div className="musician-container">
                <h2>- All Musicians -</h2>
                <div className="musician-profile">
                    {allMusiciansData}
                </div>
            </div>
        </div>
    )
}