import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


class ShowcaseCarousel extends Component {
   

    render() {
        const Marvelkey = '099657800af174d95a17e1f2b89db4fa';
        const newsKey = '0f5aaaf46c6943a196e19b750f199b32';
        var url = 'https://newsapi.org/v2/everything?' +
     
            'q=marvel&' +
            'from=2019-09-26&' +
            'sortBy=popularity&' +
            'apiKey=0f5aaaf46c6943a196e19b750f199b32';

        var req = new Request(url);

        fetch(req)
            .then(function (response) {
                let data = response.json();
                console.log(data);
            })

        return (

            <Carousel className="showcaseCarousel"style={carouselStyle} >

                <Carousel.Item >
                    <div className="row">
                        <div  style={caption} >
                            <h3>Captain America</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        <div>
                            <img
                                className="carousel-img"
                                src="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg"
                                alt="First slide"
                            />
                        </div>
                    </div>




                                                                
                    </Carousel.Item>

                <Carousel.Item >
                    <div className="row">
                        <div className="col-xs-8" style={caption} >
                            <h3>Captain America</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        <div className="col-xs-4">
                            <img
                        
                                src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg"
                                alt="First slide"
                            />
                        </div>
                    </div>

                    </Carousel.Item>
                <Carousel.Item>
                    <div className="row" >
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



const image = {
    width: '66%',
  
}

const caption = {
    margin: '2rem 1.5rem 0',

    width: '33%'
}



