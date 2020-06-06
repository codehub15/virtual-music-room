import React from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'
import Title from './Title'
import MultiTracks from './MultiTracks'
import CheckWave from './CheckWave'


function Homepage() {
    return (
        <div className="home-component">
            {/** <Title /> */}
            <div className="slogan">
                <h1>The Musicians Community</h1>
                {/* <h2>The Musicians Community</h2> */}
            </div>
            <div className="particles-map">
                <TextParticles />
            </div>
            <AudioRoom />


            <CheckWave />
        </div>
    )
}

export default Homepage
