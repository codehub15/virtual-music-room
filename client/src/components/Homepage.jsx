import React from 'react'
import TextParticles from './private/TextParticles'
import AudioRoom from './private/AudioRoom'
import gifLogo from '../img/vmr.gif'
import SearchUser from './SearchUser'


function Homepage() {
    return (
        <div className="home-component">
            <div className="gif-logo-div">
                <img src={gifLogo} alt="Title Logo" className="gif-logo" width="450" height="50" />
            </div>
            <div className="body-background">
                <div className="slogan">
                    <h1>Virtual Music Room</h1>
                </div>
                <div className="particles-map">
                    <SearchUser />
                    <TextParticles />
                </div>
                <div className="text-room">
                    <i class="fa fa-arrow-circle-down first-icon" aria-hidden="true"></i>
                    <p>Drag the play button and position yourself in the room </p>
                    <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                </div>
                <AudioRoom />
            </div>
        </div>
    )
}

export default Homepage
