import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'

class DeckMinimized extends React.Component {
	render() {
		console.log(this.props.deck)
		return (
			<div>
				<h4>Deck preview</h4>

				<div className="playingCards">
					{this.props.deck.length > 0 ? (
						<ul className="deck">
							{this.props.deck.map((card, idx) => (
								<li key={idx}>
									<div class="card mtgBack"></div>
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
		)
	}
}

function mapStateToProps(state) {
	return {
		deck: state.deck.deck
	}
}

DeckMinimized.defaultProps = {
	deck: []
}

export default connect(mapStateToProps)(DeckMinimized)