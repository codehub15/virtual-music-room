import React, { useContext } from 'react'
import TextParticles from './TextParticles'
import AudioRoom from './AudioRoom'
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
                    <h1>- Virtual Music Room -</h1>
                </div>
                <div className="particles-map">
                    <SearchUser />
                    <TextParticles />
                </div>
                <AudioRoom />
            </div>
        </div>
    )
}

export default Homepage
