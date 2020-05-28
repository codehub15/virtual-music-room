import React from 'react';
import Draggable from 'react-draggable';

class AudioRoom extends React.Component {
    constructor(props) {
        super(props);

        this.a1 = React.createRef();
        this.a2 = React.createRef();
        this.a3 = React.createRef();
        this.a4 = React.createRef();
    }

    playAll = () => {
        this.a1.current.play();
        this.a2.current.play();
        this.a3.current.play();
        this.a4.current.play();
    };

    handleDrag = (event, data) => {
        const x = (data.x + 100) * 0.5;
        const y = (data.y + 100) * 0.5;

        let vol1 = (100 - x) / 100;
        let vol2 = (100 - y) / 100;
        let vol3 = x / 100;
        let vol4 = y / 100;

        this.a1.current.volume = vol1;
        this.a2.current.volume = vol2;
        this.a3.current.volume = vol3;
        this.a4.current.volume = vol4;
    };

    render() {
        return (
            <div className="audioRoom-control" >
                <Draggable
                    bounds={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    onDrag={this.handleDrag}
                    onStart={this.playAll}
                >
                    <div className="audioRoom-control__knob" />
                </Draggable>

                <audio ref={this.a1} preload="true" loop id="a1">
                    <source src="audios/Violin pizzicatto clip 07 03 2012.wav" type="audio/wav" />
                    {/** <source src="audios/Harpeggiator clip 07 03 2012.wav" type="audio/wav" /> */}
                </audio>
                <audio ref={this.a2} preload="true" loop id="a2">
                    {/**  <source src="audios/MONGONGO DRUMS.mp3" type="audio/mpeg" /> */}
                    <source src="audios/Long Drum beat police clip 07 03 2012.wav" type="audio/wav" />
                    {/** <source src="audios/Drum ezdrummer clip 07 03 2012.wav" type="audio/wav" /> */}
                </audio>
                <audio ref={this.a3} preload="true" loop id="a3">
                    <source src="audios/Pick bass clip 07 03 2012.wav" type="audio/wav" />
                </audio>
                <audio ref={this.a4} preload="true" loop id="a4">
                    {/**<source src="audios/MONGONGO TECLAT.mp3" type="audio/mpeg" /> */}
                    <source src="audios/piano quartet principal clip 07 03 2012.wav" type="audio/wav" />
                    {/** <source src="audios/piano arpeggio clip 07 03 2012.wav" type="audio/wav" /> */}
                </audio>
            </div>
        );
    }
}

export default AudioRoom;