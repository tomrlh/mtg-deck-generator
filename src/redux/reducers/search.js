const search = (state = {}, action) => {
	switch (action.type) {
		case 'SET_SELECTED_TYPE':
			return {
				...state,
				selectedType: action.selectedType
			}
		case 'SET_SEARCH_RESULT':
			return {
				...state,
				searchResult: action.cards
			}
		case 'IS_LOADING_RESULT':
			return {
				...state,
				isLoadingResult: action.flag
			}
		default:
			return state
	}
}

export default search