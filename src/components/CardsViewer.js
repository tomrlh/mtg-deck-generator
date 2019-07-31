import React from 'react'
import { connect } from 'react-redux'
import { styles } from '../styles'
import Card from './Card'

class CardsViewer extends React.Component {

	render() {
		return (
			<div>
				<h4>Cards found</h4>
				<div className="playingCards">
					<div style={styles.resultsViewer}>
						{this.props.searchResult.length > 0 ? (
							<div>
								{this.props.searchResult.map((card, idx) => (
									<Card key={idx} card={card} hasAdd={true}/>
								))}
							</div>
						)
						: (
							<p>no cards found</p>
						)}
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		searchResult: state.search.searchResult,
		deck: state.deck.deck
	}
}

CardsViewer.defaultProps = {
	searchResult: []
}

export default connect(mapStateToProps)(CardsViewer)
