import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class DeckViewer extends React.Component {
	render() {
		return (
			<div>
				<h4>Deck choosen</h4>
				<Link to='/'>← return</Link>
				<br/>
					{this.props.deck.length > 0 ? (
						<div className="playingCards">
							{this.props.deck.map((card, idx) => (
								<Card key={idx} card={card} hasRemove={true} big={true}/>
							))}
						</div>
					)
					: (
						<p>no cards added</p>
					)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		deck: state.deck.deck
	}
}

DeckViewer.defaultProps = {
	deck: []
}

export default connect(mapStateToProps)(DeckViewer)