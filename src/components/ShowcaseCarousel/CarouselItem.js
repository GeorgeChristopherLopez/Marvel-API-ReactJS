import React, { Component } from 'react';

class CarouselItems extends Component {
    render() {

        return <div key={this.props.character.id} className={"carousel-item " + (this.props.character.id === 0 ? 'active' : '')} >
            <div>
                <div style={{ background: ` linear-gradient( rgba(17,26,48,0.3), rgba(17,26,48,0.3) ),url(${this.props.image}) center`, backgroundSize: '100% 100%', height: '60vh', borderRadius: '50%' }} >
                    <div style={{ height: '60vh', borderRadius: '50%', padding: '10rem', paddingTop: '12rem', textAlign: 'center' }}>
                    <h3>{this.props.character.name}</h3>
                    <p>{this.props.character.description}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CarouselItems;









