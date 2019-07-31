import React from 'react'
import { styles } from '../styles'
import { Subscribe } from 'unstated'
import DeckContainer from '../unstated/containers/DeckContainer'

class Card extends React.Component {
	state = {
		query: '',
	}

	render() {
		const big = this.props.big ? 'big' : ''
		return (
			<Subscribe to={[DeckContainer]}>
				{deckState => (
					<a className={'card ' + big} href="#/">
						<img
							style={styles.cardInline}
							src={this.props.card.imageUrl}
							alt={this.props.card.name}
						/>
						{this.props.hasAdd &&
							<div >
								<button onClick={() => {deckState.addCardToDeck(this.props.card)}}>
									add
								</button>
							</div>
						}
						{this.props.hasRemove &&
							<div >
								<button onClick={() => {deckState.removeCardFromDeck(this.props.card)}}>
									remove
								</button>
							</div>
						}
					</a>
				)}
			</Subscribe>
		)
	}
}

Card.defaultProps = {
	hasAdd: false,
	hasRemove: false
}

export default Card