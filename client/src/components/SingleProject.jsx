import React, { useContext } from 'react'
import WaveformPlaylist from 'waveform-playlist'
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom'
import TrackUpload from "./TrackUpload"
import AuthContext from '../context/authContext'
import '../style/Project.scss'

class SingleProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.playlist = React.createRef();
    }

    componentDidMount() {
        this.fetchProject();
    }

    componentWillUnmount() {
        this.stop();
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

        playlist.load(tracks).then(() => {
            this.setPlaylist(playlist.getEventEmitter());
        });
    }

    fetchProject = () => {
        fetch("http://localhost:5000/projects/" + this.props.match.params.id, {
            headers: {
                'x-auth': this.props.token,
            },
        })
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

    delete = () => {
        if (window.confirm("Delete project?")) {
            fetch("http://localhost:5000/projects/" + this.props.match.params.id, {
                method: 'DELETE',
                headers: {
                    'x-auth': this.props.token,
                },
            }).then(() => {
                this.props.history.push("/projects");
            });
        }
    };


    render() {
        const { project } = this.state;

        if (!this.props.isLoggedIn) {
            return <Redirect to="/login" />;
        }

        if (!project) {
            return "Loading";
        }

        console.log("project:", project);
        console.log("props:", this.props)


        return (
            <div className="single-project-container" style={{ flex: "1 1", width: "90%" }}>
                <div className="project-title">
                    <p>Project:</p> <h2>{project.name} </h2>
                    <h3> by {project.owner.name}</h3>
                </div>
                <Link to="/projects" className="back-btn">Back to all projects</Link>
                <br />
                <br />
                <button onClick={this.delete} className="btn btn-warning btn-delete-project" type="button">
                    Delete
                </button>
                <br /><br /><br />

                <div className="track">
                    {
                        this.state.playlist && (
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button onClick={this.play} type="button" className="btn btn-info play">Play</button>
                                <button onClick={this.pause} type="button" className="btn btn-secondary pause">Pause</button>
                                <button onClick={this.stop} type="button" className="btn btn-danger stop">Stop</button>
                            </div>
                        )
                    }
                    <div ref={this.playlist}></div>
                    <TrackUpload projectId={project._id} />
                </div>
            </div>
        )
    }
}

export default withRouter(SingleProject);
