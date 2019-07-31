import { Container } from 'unstated'

class DeckContainer extends Container {
	state = {deck: [], total: 0}

	addCardToDeck = card => {
		this.state.deck.push(card)
		console.log('card added: ', card.name)
		this.setState({
			deck: this.state.deck,
			total: this.state.deck.length
		})
	}

	removeCardFromDeck = cardToRemove => {
		let filteredDeck = this.state.deck.filter(card => card.id !== cardToRemove.id)
		console.log('card removed: ', cardToRemove.name)
		this.setState({
			deck: filteredDeck,
			total: filteredDeck.length
		})
	}
}

export default DeckContainer