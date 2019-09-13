import { Container } from 'unstated'

class SearchContainer extends Container {
    state = {
        cardsFound: []
    }

    setCardsFound = (cards) => {
        this.setState({cardsFound: cards})
    }
}

export default SearchContainer