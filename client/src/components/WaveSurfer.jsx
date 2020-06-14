import React from 'react';
import ReactDOM from 'react-dom';
import WaveSurfer from 'react-wavesurfer';

require('wavesurfer.js');

class WaveSurfer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            pos: 0
        };
        this.handleTogglePlay = this.handleTogglePlay.bind(this);
        this.handlePosChange = this.handlePosChange.bind(this);
    }
    handleTogglePlay() {
        this.setState({
            playing: !this.state.playing
        });
    }
    handlePosChange(e) {
        this.setState({
            pos: e.originalArgs[0]
        });
    }
    render() {
        return (
            <div>
                <WaveSurfer
                    audioFile={'path/to/audio/file.mp3'}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}
                />
            </div>
        );
    }
}

export default WaveSurfer;