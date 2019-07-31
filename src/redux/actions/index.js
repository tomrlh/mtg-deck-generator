export const addCardToDeck = card => ({
  type: 'ADD_CARD_TO_DECK',
  card
})

export const removeCardFromDeck = card => ({
  type: 'REMOVE_CARD_FROM_DECK',
  card
})

export const setSelectedType = selectedType => ({
  type: 'SET_SELECTED_TYPE',
  selectedType
})

export const setSearchResult = cards => ({
  type: 'SET_SEARCH_RESULT',
  cards
})

export const isLoadingResult = flag => ({
  type: 'IS_LOADING_RESULT',
  isLoadingResult: flag
})