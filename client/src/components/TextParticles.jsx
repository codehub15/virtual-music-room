import React from 'react';

import textParticles from '../js/textParticles';

export default class TextParticles extends React.Component {
    constructor(props) {
        super(props);

        this.canvas = React.createRef();
    }


setSize = () => {
        const reset = textParticles(this.canvas.current);

    this.canvas.current.width = window.innerWidth;
    this.canvas.current.height = window.innerHeight;

    reset();
}

    componentDidMount() {


        this.setSize();

        // This was in the textParticles, but window events should be attached in the componentDidMount
        window.addEventListener('resize', this.setSize);
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.setSize);
    }

    render() {
        return (
            <canvas ref={this.canvas} width={300} height={300} />
        );
    }
}