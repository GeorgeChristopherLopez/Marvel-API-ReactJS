import React, { Component } from 'react';
import CharacterDetails from './CharacterDetails/CharacterDetails';
import Comics from './ComicDetails/Comics';

class Search extends Component {
    constructor(props) {
        super(props)

     

        this.state = {
            characterID : null
        }

        const searchTerm = props.searchTerm;
       this.characterSearch(searchTerm);
      //  this.comicsSearch(characterid); 
    }




    characterSearch(searchTerm) {
     
    }

    render() {
        return (
            <React.Fragment>
                <CharacterDetails
                    searchTerm={this.state.searchTerm}


                />
                < Comics
                    searchTerm={this.state.searchTerm}


                />
            </React.Fragment>

        );

    }

}

export default Search;
