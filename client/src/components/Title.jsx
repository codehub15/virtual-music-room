import React, { Component } from 'react'
import titleCanvas from '../js/titleCanvas';


export default class Title extends Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        titleCanvas(this.canvas.current);
    }

    render() {
        return (
            <div className="title-container">
                <canvas ref={this.canvas} width={300} height={300} />
            </div>
        )
    }
}
