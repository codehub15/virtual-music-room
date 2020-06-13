import React from 'react'
import WaveformPlaylist from 'waveform-playlist'
import { Link, Redirect } from 'react-router-dom'
import TrackUpload from "./TrackUpload"

export default class SingleProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.playlist = React.createRef();
    }

    componentDidMount() {
        this.fetchProject();
    }

    initWaveformPlaylist = () => {
       const playlist = WaveformPlaylist({
           samplesPerPixel: 1000,
           waveHeight: 100,
           container: this.playlist.current,
           timescale: true,
           state: 'cursor',
           isAutomaticScroll: true,
           colors: {
               waveOutlineColor: '#E0EFF1'
           },
           controls: {
               show: true, //whether or not to include the track controls
               width: 200 //width of controls in pixels
           },
           zoomLevels: [500, 1000, 3000, 5000]
        });

        const tracks = this.state.project.tracks.map((track) => {
            return {
                src: "/uploads/tracks/" + track.path,
                name: track.trackName,
                gain: 0.8,
            };
        });
        
        playlist.load(tracks).then(()=>{
            this.setPlaylist(playlist.getEventEmitter());
        });
    } 
    
    fetchProject = () => {
        fetch("http://localhost:5000/projects/" + this.props.match.params.id)
        .then(res => res.json())
        .then(data => {
            this.setProject(data.project)
        });
    }

    setProject = (project) => this.setState({ project }, this.initWaveformPlaylist);

    setPlaylist = (playlist) => this.setState({ playlist });

    emit = (action) => this.state.playlist.emit(action);

    play = () => this.emit("play");

    stop = () => this.emit("stop");

    pause = () => this.emit("pause");

    render() {
        const { project } = this.state;

        if (!this.props.isLoggedIn) {
            return <Redirect to="/login" />;
        }

        if (!project) {
            return "Loading";
        }

        return (
            <div style={{ flex: "1 1", width: "90%" }}>
                <h2>{project.name}</h2>
                <Link to="/projects">Back</Link>
                <br/><br/><br/>
                {
                    this.state.playlist && (
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button onClick={this.play} type="button" className="btn btn-info">Play</button>
                            <button onClick={this.pause} type="button" className="btn btn-secondary">Pause</button>
                            <button onClick={this.stop} type="button" className="btn btn-danger">Stop</button>
                        </div>
                    )
                }
                <div ref={this.playlist}></div>
                <TrackUpload projectId={project._id} />
            </div>
        )
    }
}
