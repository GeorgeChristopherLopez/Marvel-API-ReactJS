import React, { Component } from 'react';
import '../App.css';


class Showcase extends Component {
    render() {
        return (
            <section style={showcaseSectionStyle} className="showcase">

                <div className="container">
                   <h1>Avengers</h1>
                    <div style={showcaseStyle}>
                <div className="hero-card">
                    <img style={imageStyle} src="https://res.cloudinary.com/pixelastic-marvel/image/fetch/w_200,q_90,c_scale,f_auto/http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg" />
                    <div>   <p style={captionStyle}>Iron Man</p></div>
                </div>
                <div className="hero-card">
                            <img style={imageStyle} src="https://res.cloudinary.com/pixelastic-marvel/image/fetch/w_200,q_90,c_scale,f_auto/http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_xlarge.jpg" />
                    <div>   <p style={captionStyle}>Captain America</p></div>
                </div>
                <div className="hero-card">
                            <img style={imageStyle} src="https://res.cloudinary.com/pixelastic-marvel/image/fetch/w_200,q_90,c_scale,f_auto/http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/standard_xlarge.jpg" />
                    <div>   <p style={captionStyle}>Thor</p></div>
                </div>
                <div className="hero-card">
                            <img style={imageStyle} src="https://res.cloudinary.com/pixelastic-marvel/image/fetch/w_200,q_90,c_scale,f_auto/http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg" />
                    <div>   <p style={captionStyle}>Hulk</p></div>
                </div>
                <div className="hero-card">
                            <img style={imageStyle} src="http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg" />
                    <div>   <p style={captionStyle}>Black Widow</p></div>
                </div>
                <div className="hero-card">
                            <img style={imageStyle} src="http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b.jpg" />
                    <div>   <p style={captionStyle}>Hawkeye</p></div>
                </div>
                    </div>
                    </div>
            </section>


        );


    }

}

export default Showcase;

const showcaseSectionStyle = {
    background: 'black'
}

const showcaseStyle = {
  
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)'
  
}

const imageStyle = {
    width: '100%'
}

const captionStyle = {
    background: 'red',
    color: 'white',
    width: '100%'
}
