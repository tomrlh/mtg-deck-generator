import React from 'react';
import SearchField from './components/SearchField'
import CardsViewer from './components/CardsViewer'
import DeckViewer from './components/DeckViewer'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <SearchField setCardsFound={this.setCardsFound}/>
          <br/>
          <CardsViewer/>
          <br/>
          <hr/>
          <br/>
          <DeckViewer/>
        </div>
    );
  }
}

export default App;
