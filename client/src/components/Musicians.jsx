import React, { useState, useEffect } from 'react'


export default function MusicianAccount(props) {
    const [allMusicians, setAllMusicians] = useState([])

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

    const allMusiciansData = allMusicians && allMusicians.map((musician, i) => {
        return (
            <div key={i} className="musician">
                <h3>{musician.name}</h3>
                <p>{musician._id} </p>
                <p>{musician.email} </p>
                <p>Level: {musician.level} </p>
            </div>
        )
    })


    return (
        <div className="musician-container">
            <h2>All Musicians</h2>
            <div className="musician-profile">
                {allMusiciansData}
            </div>
        </div>
    )
}