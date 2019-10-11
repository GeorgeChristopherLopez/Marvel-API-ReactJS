import React, { Component } from 'react';

class CarouselItems extends Component {
    render() {

        return <div key={this.props.character.id} className={"carousel-item " + (this.props.character.id === 0 ? 'active' : '')}>
            <div style={carouselItemInner}>
                <div className="caption">
                    <h3>{this.props.character.name}</h3>
                    <p>{this.props.character.description}</p>
                </div>
                <img src={this.props.image} className="rounded img-fluid" alt={this.props.character.name} />
            </div>
        </div>
    }
}

export default CarouselItems;



const carouselItemInner = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'



}