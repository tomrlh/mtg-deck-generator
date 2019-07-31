const deck = (state = {deck: [], total: 0}, action) => {
	switch (action.type) {
		case 'ADD_CARD_TO_DECK':
			state.deck.push(action.card)
			console.log('card added: ', action.card.name)
			return {
				...state,
				deck: state.deck,
				total: state.deck.length,
			}
		case 'REMOVE_CARD_FROM_DECK':
			let filteredDeck = state.deck.filter(card => card.id !== action.card.id)
			console.log('card removed: ', action.card.name)
			return {
				...state,
				deck: filteredDeck,
				total: filteredDeck.length,
			}
		default:
			return state
	}
}

export default deck