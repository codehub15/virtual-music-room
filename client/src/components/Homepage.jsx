import React from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'
import Title from './Title'
import MultiTracks from './MultiTracks'
// import CheckWave from './CheckWave'
// import VideoLogo from './VideoLogo'
// import newlogo from '../assets/newlogo.gif'


function Homepage() {
    return (
        <div className="home-component">
            {/** <Title /> 
            <VideoLogo />*/}
            {/* <img src={newlogo} alt="" /> */}
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
