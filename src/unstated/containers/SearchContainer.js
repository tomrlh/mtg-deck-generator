import { Container } from 'unstated'

class SearchContainer extends Container {
	state = { searchResult: [] }

	setSearchResult = cards => ({
		this.setState({ searchResult: cards })
	})
}

export default SearchContainer