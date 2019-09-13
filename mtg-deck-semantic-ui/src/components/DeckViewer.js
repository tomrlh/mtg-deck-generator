import React from 'react'
import DeckCard from './DeckCard'
import { Card } from 'semantic-ui-react'
import { Subscribe } from 'unstated'
import DeckContainer from '../unstated/containers/DeckContainer'

const DeckViewer = (props) => {
    return <Subscribe to={[DeckContainer]}>
        {deckState => (
            <div>
                <Card.Group itemsPerRow={3} style={{height: '400px', overflowY: 'scroll'}}>
                    {deckState.state.deck.length > 0 ? (
                        deckState.state.deck.map(card => <DeckCard key={card.id} card={card}/>)
                    ) : (
                        <div>No cards in the deck.</div>
                    )}

                </Card.Group>
            </div>
        )}
    </Subscribe>
}

export default DeckViewer