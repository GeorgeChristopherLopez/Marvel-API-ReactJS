import React, { Component } from 'react';
import CarouselItem from './CarouselItem'


class ShowcaseCarousel extends Component {
    constructor(props) {
        super(props)


        this.state = {
            characters: null,
            carouselItems: <React.Fragment>    <div className="carousel-item active">
                <div style={carouselItemInner}>
                    <div className="caption">
                        <h5>Spider-Man</h5>
                        <p>Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.</p>
                    </div>
                    <img src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg" alt="..." />
                </div>
            </div>

                <div className="carousel-item">
                    <div style={carouselItemInner}>

                        <div className='caption'>
                            <h5>Mary Jane Watson</h5>
                            <p>Mary Jane Watson was the guiding light in Peter Parker's life, and their love had overcome countless obstacles.</p>
                        </div>
                        <img src="http://i.annihil.us/u/prod/marvel/i/mg/2/03/528d33d000749.jpg" alt="..." />
                    </div>
                </div>

                <div className="carousel-item">

                    <div style={carouselItemInner}>

                        <div className="caption">
                            <h5>Iron Man</h5>
                            <p>something something ironman something something</p>
                        </div>
                        <div>
                            <img src="http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6.jpg" alt="..." /></div>



                    </div>
                </div>



                </React.Fragment>
        }


        this.performSearch();

    }

    performSearch() {
        // api request details
        const ts = 'timestamp';
        const publicKey = '099657800af174d95a17e1f2b89db4fa';
        //  const privateKey = '3416fc3f058a9ed4b162bd282d08b9b49d62075d';
        //  hash is an MD5 of ts + privatekey + publickey
        const hash = 'f257af55c3ae44ed8630b7928124f143';

        // sinister six spiderman comic
        const url = 'https://gateway.marvel.com/v1/public/comics/6746/characters?' +
            `ts=${ts}&` +
            `apikey=${publicKey}&` +
            `hash=${hash}`;

        // converts API response into array
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let results = data.data.results;
                console.log(results);
    


                let items = []
                results.reverse().forEach((character, i) => {
                    character.id = i;

                    const item = <CarouselItem
                        key={character.id}
                        character={character}
                        extension='.jpg'
                        image={character.thumbnail.path + '.jpg'}
                       />
                    items.push(item)
                   
                });
                this.setState({ carouselItems: items });
                console.log(items);
            })

     

    }



    render() {

        
       
       
 


    



    

        return (

            <section style={carouselStyle}>
                <h1>Spotlight: Spiderman</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    {/*CAROUSEL INNER*/}
                    <div className="carousel-inner">

                    {/*CAROUSEL ITEMS*/}
                     {this.state.carouselItems}



                    </div>
                    {/*end of carousel inner*/}



                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
            </section>



        );


    }

}

export default ShowcaseCarousel;

const carouselStyle = {
    background: '#2F2F2F',
    padding: '1rem',
    color: '#fff',
    minHeight: '350px'

}

const carouselItemInner = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'



}

