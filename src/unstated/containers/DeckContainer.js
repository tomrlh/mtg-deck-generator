import { Container } from 'unstated'

class DeckContainer extends Container {
	state = { deck: [] }
	addCardToDeck = card => {
		this.state.deck.push(card)
		this.setState({ deck: this.state.deck })
	}

	removeCardFromDeck = cardToRemove => {
		this.setState({ deck: this.state.deck.filter(card => card.id !== cardToRemove.id) })
	}
}

export default DeckContainer