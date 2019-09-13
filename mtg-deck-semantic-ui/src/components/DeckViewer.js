import React from 'react'
import DeckCard from './DeckCard'
import { Card } from 'semantic-ui-react'

const DeckViewer = (props) => {
    return <div>
        <Card.Group itemsPerRow={3} style={{height: '400px', overflowY: 'scroll'}}>
            {props.deck.length > 0 ? (
                props.deck.map(card => <DeckCard key={card.id} card={card} addCard={props.addCard} removeCard={props.removeCard}/>)
            ) : (
                <div>No cards in the deck.</div>
            )}

        </Card.Group>
    </div>
}

export default DeckViewer