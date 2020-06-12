import React, { useState, useContext, useEffect } from 'react'

export default function GetTrack() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/track")
            .then(res => res.json())
            .then(data => {
                console.log("data:", data)
                setTracks(data.tracks)
            })
    }, [])

    if (!tracks) {
        return "loading"
    }

    console.log("tracks:", tracks)

    return (
        <div>
            <h2>Get Track</h2>
            {tracks.trackName}
        </div>
    )
}
