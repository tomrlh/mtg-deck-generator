export const addCardToDeck = card => ({
	type: 'ADD_CARD_TO_DECK',
	card
})

export const removeCardFromDeck = card => ({
	type: 'REMOVE_CARD_FROM_DECK',
	card
})

export const setSearchResult = cards => ({
	type: 'SET_SEARCH_RESULT',
	cards
})
