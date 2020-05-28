import React from 'react';

import textParticles from '../textParticles';

export default class TextParticles extends React.Component {
    constructor(props) {
        super(props);

        this.canvas = React.createRef(); // https://reactjs.org/docs/refs-and-the-dom.html
    }

    componentDidMount() {
        const reset = textParticles(this.canvas.current);

        const setSize = () => {
            this.canvas.current.width = window.innerWidth;
            this.canvas.current.height = window.innerHeight;

            reset();
        }

        setSize();

        // This was in the textParticles, but window events should be attached in the componentDidMount
        window.addEventListener('resize', setSize);
    }

    render() {
        return (
            <canvas ref={this.canvas} width={300} height={300} />
        );
    }
}