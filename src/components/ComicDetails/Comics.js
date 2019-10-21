import React, { Component } from 'react';
import Comic from './Comic';



class Comics extends Component {
    state = {
        posts:
            <React.Fragment>
                <div className="news-card">
                    <div className="thumbnail"><img src=" http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt="img" /></div>
                    <div className="title"><p>Powers of X Just Galaxy Brained This Shit</p></div>
                </div>


                <div className="news-card">
                    <div className="thumbnail"><img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/spiderman-farfromhome-charity.jpg" alt="img" /></div>
                    <div className="title"><p>Spider-Man Will Stay in the Marvel Cinematic Universe As Disney and Sony Announce New Deal</p></div>
                </div>


                <div className="news-card" >
                    <div className="thumbnail"><img src="https://nerdist.com/wp-content/uploads/2019/09/HOUSE_POWER_OF_X_HC.jpg" alt="img" /></div>
                    <div className="title"><p>Which 7 X-Men Characters are the Mystery Mutants of POWERS OF X?</p></div>
                </div>
            </React.Fragment>,
        error: false

    }


    componentDidMount() {
        // api request details
        const ts = 'timestamp';
        const publicKey = '099657800af174d95a17e1f2b89db4fa';
        //  const privateKey = '3416fc3f058a9ed4b162bd282d08b9b49d62075d';
        //  hash is an MD5 of ts + privatekey + publickey
        const hash = 'f257af55c3ae44ed8630b7928124f143';

        // sinister six spiderman comic
        const url = 'https://gateway.marvel.com/v1/public/characters/1009610/comics?' +
         
            `ts=${ts}&` +
            `apikey=${publicKey}&` +
            `hash=${hash}`;

        // converts API response into array
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                /*   let results = data.data.results;
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
                 console.log(items);*/
            })



    }

    render() {


        return (


            <section className="comics-section">
                <div className="container">
                    <h1>Comics</h1>
                    <div className="comics" style={comicsStyle}>
                        {this.state.posts}


                    </div>
                </div>
            </section>



        );


    }

}

export default Comics;




const comicsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '2rem'
}
