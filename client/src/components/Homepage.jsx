import React from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'
import MultiTracks from './MultiTracks'
// import CheckWave from './CheckWave'
import gifLogo from '../assets/gifLogo.gif'


function Homepage() {
    return (
        <div className="home-component">
            <div className="gif-logo-div">
                <img src={gifLogo} alt="Title Logo" className="gif-logo" width="600" height="55" />
            </div>
            <div className="slogan">
                <h1>The Musicians Community</h1>
                {/* <h2>The Musicians Community</h2> */}
            </div>
            <div className="particles-map">
                <TextParticles />
            </div>
            <AudioRoom />
            {/* <CheckWave /> */}
        </div>
    )
}

export default Homepage
