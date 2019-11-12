import React, { Component } from 'react';




class CharacterDetails extends Component {



    constructor(props) {
        super(props)
        this.state = {
            character: '',
            error: false,
           

        }
                       
        // searchTerm
        const searchTerm = props.searchTerm;

        // api request details
        const ts = 'timestamp';
        const publicKey = '099657800af174d95a17e1f2b89db4fa';
        //  const privateKey = '3416fc3f058a9ed4b162bd282d08b9b49d62075d';
        //  hash is an MD5 of ts + privatekey + publickey
        const hash = 'f257af55c3ae44ed8630b7928124f143';

               
        // sinister six spiderman comic
        const url = 'https://gateway.marvel.com/v1/public/characters?' +
                `name=${searchTerm}&` +
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
                    <div className="comics" style={comicsStyle}>
                            <div><img style={{ height: '50vh' }} src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg" /></div>
                            <div><h5 style={{ height: '50vh', textAlign: "center", padding: '1rem', paddingTop: '10rem' }}>Spider-Man</h5></div>

      
      
                    </div>
                </div>
            </section>



        );


    }

}

export default CharacterDetails;


const comicsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
}


