import { Container } from 'unstated'

class SearchContainer extends Container {
	state = { searchResult: [] }

	setSearchResult = cards => {
		console.log('cards found: ', cards)
		this.setState({ searchResult: cards })
	}
}

export default SearchContainer