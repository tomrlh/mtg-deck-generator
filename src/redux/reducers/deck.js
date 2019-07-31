const deck = (state = {deck: []}, action) => {
	switch (action.type) {
		case 'ADD_CARD_TO_DECK':
			state.deck.push(action.card)
			console.log(state.deck)
			console.log('card added')
			return {
				...state,
				deck: state.deck
			}
		case 'REMOVE_CARD_FROM_DECK':
			return {
				...state,
				deck: state.deck.filter(card => card !== action.card)
			}
		default:
			return state
	}
}

export default deck