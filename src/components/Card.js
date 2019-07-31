import React from 'react'
import { styles } from '../styles'
import { connect } from 'react-redux'
import { addCardToDeck, removeCardFromDeck } from '../redux/actions'

class Card extends React.Component {
	state = {
		query: '',
	}

	render() {
		const big = this.props.big ? 'big' : ''
		return (
			<a className={'card ' + big} href="#/">
				<img
					style={styles.cardInline}
					src={this.props.card.imageUrl}
					alt={this.props.card.name}
				/>
				{this.props.hasAdd &&
					<div >
						<button onClick={() => {this.props.dispatch(addCardToDeck(this.props.card))}}>
							add
						</button>
					</div>
				}
				{this.props.hasRemove &&
					<div >
						<button onClick={() => {this.props.dispatch(removeCardFromDeck(this.props.card))}}>
							remove
						</button>
					</div>
				}
			</a>
		)
	}
}

Card.defaultProps = {
	hasAdd: false,
	hasRemove: false
}

export default connect()(Card)