import React, { Component } from 'react';
import Comic from './Comic';



class Comics extends Component {
    state = {
        comics: '',
              error: false

    }

   
    constructor(props) {
        super(props)
        const searchTerm = props.searchTerm;
        const characterID = props.characterID;
        // api request details
        const ts = 'timestamp';
        const publicKey = '099657800af174d95a17e1f2b89db4fa';
        //  const privateKey = '3416fc3f058a9ed4b162bd282d08b9b49d62075d';
        //  hash is an MD5 of ts + privatekey + publickey
        const hash = 'f257af55c3ae44ed8630b7928124f143';

        // sinister six spiderman comic
        const url = 'https://gateway.marvel.com/v1/public/characters/' +
            `${characterID}` +
            `/comics?` +
            `ts=${ts}&` +
            `apikey=${publicKey}&` +
            `hash=${hash}`;
        console.log(characterID);
        // converts API response into array
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let results = data.data.results;
                 console.log(results);
          
               let items = []
                 results.reverse().forEach((comic, i) => {
                     comic.id = i;

                     const item = <Comic
                         key={comic.id}
                         comic={comic}
                         extension='.jpg'
                         image={comic.thumbnail.path + '.jpg'}
                     />
                     items.push(item)

                 });
                 this.setState({ comics: items });
                 console.log(items);
            })
    }

    render() {
        return (
            <section className="comics-section" style={comicSectionStyle}>
                <div className="container">
                    <h1>Comics</h1>
                    <div className="comics" style={comicsStyle}>
                        {this.state.comics}
                    </div>
                </div>
            </section>
        );
    }
}

export default Comics;

const comicsStyle = {
    width: '100%',
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(5, 1fr)',
    fontSize: '.5rem'
}

const comicSectionStyle = {
    
}