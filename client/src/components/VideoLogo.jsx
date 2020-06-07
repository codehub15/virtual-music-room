import React from 'react'

function VideoLogo() {
    return (
        <div>
            <video width="320" height="240" controls>
                <source src={VideoLogo} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoLogo
