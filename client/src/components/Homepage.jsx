import React from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'

function Homepage() {
    return (
        <div className="home-component">
            <div className="particles-map">
                <TextParticles />
            </div>
            <AudioRoom />
        </div>
    )
}

export default Homepage
