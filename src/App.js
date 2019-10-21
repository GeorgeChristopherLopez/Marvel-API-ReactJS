import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CharacterPanel from './components/CharacterPanel/CharacterPanel';
import ShowcaseCarousel from './components/ShowcaseCarousel/ShowcaseCarousel';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from './components/News/News';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Comics from './components/ComicDetails/Comics';


function App() {
    return (
      <Router>
      <div className="App">
                <Header />
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
                            <CharacterDetails/>
                               <Comics/>
                         
                        </React.Fragment>

                    )}
                />

                <Footer />
      </div>
      </Router>
  );
}

export default App;
