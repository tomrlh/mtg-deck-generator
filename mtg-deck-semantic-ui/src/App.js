import React from 'react';
import SearchField from './components/SearchField'
import CardsViewer from './components/CardsViewer'
import DeckViewer from './components/DeckViewer'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = {
    cardsFound: [],
    deck: []
  }

  setCardsFound = (cards) => {
    this.setState({ cardsFound: cards})
  }

  addCard = (card) => {
    this.state.deck.push(card)
    this.setState({ deck: this.state.deck})
  }

  removeCard = (cardToRemove) => {
    this.setState({ deck: this.state.deck.filter(card => card.id !== cardToRemove.id)})
  }


  render() {
    return (
        <div className="App">
          <SearchField setCardsFound={this.setCardsFound}/>
          <br/>
          <CardsViewer 
            cardsFound={this.state.cardsFound}
            addCard={this.addCard}
            removeCard={this.removeCard}
          />
          <br/>
          <hr/>
          <br/>
          <DeckViewer
            deck={this.state.deck}
            addCard={this.addCard}
            removeCard={this.removeCard}
          />
        </div>
    );
  }
}

export default App;
