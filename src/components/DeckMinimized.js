import React from 'react'
import { Link } from 'react-router-dom'
import { Subscribe } from 'unstated'
import DeckContainer from '../unstated/containers/DeckContainer'

class DeckMinimized extends React.Component {
	render() {
		return (
			<Subscribe to={[DeckContainer]}>
				{deckState => (
					<div>
						<h4>Deck preview</h4>

						<div className="playingCards">
							{deckState.state.total > 0 ? (
								<ul className="deck">
									{[...Array(deckState.state.total)].map((card, idx) => (
										<li key={idx}>
											<div className="card mtgBack"></div>
										</li>
									))}
								</ul>
							)
							: (
								<p>no cards added</p>
							)}
						</div>
							<Link to='/deck'>view deck details →</Link>
					</div>
				)}
			</Subscribe>
		)
	}
}

export default DeckMinimized