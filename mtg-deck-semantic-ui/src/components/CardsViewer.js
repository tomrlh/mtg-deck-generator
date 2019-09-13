import React from 'react'
import DeckCard from './DeckCard'
import { Card } from 'semantic-ui-react'
import { Subscribe } from 'unstated'
import SearchContainer from '../unstated/containers/SearchContainer'

const CardsViewer = (props) => {
    return <Subscribe to={[SearchContainer]}>
        {searchState => (
            <div>
                <Card.Group itemsPerRow={6} style={{height: '400px', overflowY: 'scroll'}}>
                    {searchState.state.cardsFound.length > 0 ? (
                        searchState.state.cardsFound.map(card => <DeckCard 
                            key={card.id} 
                            card={card}
                        />
                        )
                    ) : (
                        <div>No cards found.</div>
                    )}
                </Card.Group>
            </div>
        )}
    </Subscribe>
}

export default CardsViewer