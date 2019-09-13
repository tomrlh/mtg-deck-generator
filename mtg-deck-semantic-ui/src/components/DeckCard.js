import React from 'react';
import { Button, Card } from 'semantic-ui-react'
import { Subscribe } from 'unstated'
import DeckContainer from '../unstated/containers/DeckContainer'

const DeckCard = (props) => {
    return <Subscribe to={[DeckContainer]}>
        {deckState => (
            <Card
                image={props.card.imageUrl}
                extra={<div className='ui two buttons'>
                    <Button basic color='green' icon='plus' onClick={() => deckState.addCard(props.card)}/>
                    <Button basic color='red' icon='close' onClick={() => deckState.removeCard(props.card)}/>
                </div>}
            />
        )}
    </Subscribe>
};

export default DeckCard;