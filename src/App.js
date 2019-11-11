import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterPanel from './components/CharacterPanel/CharacterPanel';
import ShowcaseCarousel from './components/ShowcaseCarousel/ShowcaseCarousel';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News/News';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Comics from './components/ComicDetails/Comics';


class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: 'spider-man',
            characterID: '1009610',
            showingSearchBar: false

        }

    }


    showingSearchBarHandler = () => {
        this.setState({ showingSearchBar: !this.state.showingSearchBar })
    }

    searchChangeHandler = (e) => {
        this.setState({ searchTerm: e.target.value })

    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Header
                        show={this.state.showingSearchBar}
                        changed={this.searchChangeHandler}
                        clicked={this.showingSearchBarHandler}
                    />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <CharacterPanel />
                            <ShowcaseCarousel />
                            <News />
                        </React.Fragment>

                    )} />

                    <Route
                        path="/search"
                        render={props => (
                            <React.Fragment>
                                <CharacterDetails
                                    searchTerm={this.state.searchTerm}
                                    characterID={this.state.characterID}
                                
                                 />
                                 < Comics
                                    searchTerm={this.state.searchTerm}
                                    characterID={this.state.characterID}
                                   
                                 />
                            </React.Fragment>

                        )}
                    />

                    <Footer />
                </div>
            </Router>
        );
    }

}

export default App;
