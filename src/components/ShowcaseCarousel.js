import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


class ShowcaseCarousel extends Component {
   

    render() {
        const key = '099657800af174d95a17e1f2b89db4fa';
        return (

            <Carousel className="showcaseCarousel"style={carouselStyle} >
                <Carousel.Item >

                    <div className="row" style={row}>
                        <div className="col-xs-8" style={caption}>
                            <div >
                                <h3>Iron Man</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                        </div>
                        <div className="col-xs-4"  >
                        <img
                            className="carousel-img"
                        src="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
                            alt="First slide"
                        />
                        </div>
                   </div>

                    </Carousel.Item>

                <Carousel.Item >
                    <div className="row" style={row}>
                        <div className="col-xs-8" style={caption} >
                            <h3>Captain America</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        <div className="col-xs-4">
                            <img
                                className="carousel-img"
                                src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg"
                                alt="First slide"
                            />
                        </div>
                    </div>

                    </Carousel.Item>
                <Carousel.Item>
                    <div className="row" style={row}>
                        <div className="col-xs-6" style={caption}>
                            <h3>THOR</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        <div className="col-xs-6" >
                            <img
                                className="carousel-img"
                                src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_xlarge.jpg"
                                alt="First slide"
                            />
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>




        );


    }

}

export default ShowcaseCarousel;

const carouselStyle = {
    background: 'red',
    padding: '5rem',
  

}

const item = {
    margin: '0rem 5rem'
}

const caption = {
    margin : '0',
    padding: '1rem',
    width: '55%'
}

const row = {
    margin: '1rem 2rem'
 
}

