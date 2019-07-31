import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import { Subscribe } from 'unstated'
import DeckContainer from '../unstated/containers/DeckContainer'

class DeckViewer extends React.Component {
	render() {
		return (
			<Subscribe to={[DeckContainer]}>
				{deckState => (
					<div>
						<h4>Deck choosen</h4>
						<Link to='/'>← return</Link>
						<br/>
							{deckState.state.deck.length > 0 ? (
								<div className="playingCards">
									{deckState.state.deck.map((card, idx) => (
										<Card key={idx} card={card} hasRemove={true} big={true}/>
									))}
								</div>
							)
							: (
								<p>no cards added</p>
							)}
					</div>
				)}
			</Subscribe>
		)
	}
}

export default DeckViewer