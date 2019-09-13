import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const DeckCard = (props) => {
    const extra = (
        <div className='ui two buttons'>
            <Button basic color='green' icon='plus' onClick={() => props.addCard(props.card)}/>
            <Button basic color='red' icon='close' onClick={() => props.removeCard(props.card)}/>
        </div>
    )
    return <Card
        image={props.card.imageUrl}
        extra={extra}
    />
};

export default DeckCard;