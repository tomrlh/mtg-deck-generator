const search = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SEARCH_RESULT':
			console.log('cards found: ', action.cards)
			return {
				...state,
				searchResult: action.cards
			}
		default:
			return state
	}
}

export default search