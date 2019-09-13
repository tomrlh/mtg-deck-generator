import React from 'react'
import DeckCard from './DeckCard'
import { Card } from 'semantic-ui-react'

const CardsViewer = (props) => {
    return <div>
        <Card.Group itemsPerRow={6} style={{height: '400px', overflowY: 'scroll'}}>
            {props.cardsFound.length > 0 ? (
                props.cardsFound.map(card => <DeckCard 
                    key={card.id} 
                    card={card} 
                    addCard={props.addCard} 
                    removeCard={props.removeCard}/>
                )
            ) : (
                <div>No cards found.</div>
            )}
        </Card.Group>
    </div>
}

export default CardsViewer