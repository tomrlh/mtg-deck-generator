import { Container } from 'unstated'

class SearchContainer extends Container {
    state = {
        deck: []
    }

    addCard = (card) => {
        this.state.deck.push(card)
        this.setState({ deck: this.state.deck})
    }

    removeCard = (cardToRemove) => {
        this.setState({ deck: this.state.deck.filter(card => card.id !== cardToRemove.id)})
    }
}

export default SearchContainer