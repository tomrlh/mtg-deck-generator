import React from 'react';
import { Header } from 'semantic-ui-react'
import SearchField from './components/SearchField'
import DeckViewer from './components/DeckViewer'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    cardsFound: []
  }

  setCardsFound = (cards) => {
    this.setState({ cardsFound: cards})
  }

  render() {
    return (
        <div className="App">
          <SearchField setCardsFound={this.setCardsFound}/>
          {this.state.cardsFound.length}
        </div>
    );
  }
}

export default App;
