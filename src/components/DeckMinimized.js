import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom' 

class DeckMinimized extends React.Component {
	render() {
		return (
			<div>
				<h4>Deck preview</h4>

				<div className="playingCards">
					{this.props.total > 0 ? (
						<ul className="deck">
							{[...Array(this.props.total)].map((card, idx) => (
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
		)
	}
}

function mapStateToProps(state) {
	return {
		total: state.deck.total
	}
}

DeckMinimized.defaultProps = {
	total: 0
}

export default connect(mapStateToProps)(DeckMinimized)