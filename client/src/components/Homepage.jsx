import React from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'

function Homepage() {
    return (
        <div className="home-component">
            <div className="slogan">
                <h1>Virtual Music Room</h1>
                <h2>The Musicians Community</h2>
            </div>
            <div className="particles-map">
                <TextParticles />
            </div>
            <AudioRoom />
        </div>
    )
}

export default Homepage
