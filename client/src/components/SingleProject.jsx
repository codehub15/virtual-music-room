import React, { useState, useEffect, useContext } from 'react'
import WaveformPlaylist from 'waveform-playlist'
import { Link } from 'react-router-dom'
import TrackUpload from "./TrackUpload"

export default class SingleProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.fetchProject();
        // this.initWaveformPlaylist();
    }

    initWaveformPlaylist = () => {
        const p = WaveformPlaylist({
            samplesPerPixel: 3000,
            mono: true,
            waveHeight: 70,
            container: document.getElementById("waveform-playlist"),
            state: "cursor",
            colors: {
                waveOutlineColor: "#E0EFF1",
                timeColor: "grey",
                fadeColor: "black"
            },
            controls: {
                show: true,
                width: 200
            },
            zoomLevels: [500, 1000, 3000, 5000]
        });

        this.setPlaylist(p);
    } 
    
    fetchProject = () => {
        fetch("http://localhost:5000/projects/" + this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            this.setProject(data.project)
        });
    }

    setProject = (project) => this.setState({ project });

    setPlaylist = (playlist) => this.setState({ playlist });

    render() {
        const { project } = this.state;

        if (!project) {
            return "Loading";
        }

        return (
            <div style={{ flex: "1 1", width: "90%" }}>
                <h2>{project.name}</h2>
                <Link to="/projects">Back</Link>
                <br/><br/><br/>
                <div id="waveform-playlist" />
                <TrackUpload projectId={project._id} />
                {
                    project.tracks.map((track) => (
                        <li>
                            {track.trackName}
                        </li>
                    ))
                }
            </div>
        )
    }
}
