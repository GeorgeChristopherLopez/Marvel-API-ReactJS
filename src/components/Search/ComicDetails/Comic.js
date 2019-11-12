import React, { Component } from 'react';

class Comic extends Component {
    render() {

        return <div className="comic">
            <div>
                <img src={this.props.image} alt="img" style={comicImage} />
            </div>
            <div>
                <p>{this.props.title}</p>
                </div>
            </div>
    }
}

export default Comic;

const comicImage = {
    width: '100%'
}