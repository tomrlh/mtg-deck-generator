import React from 'react'
import axios from 'axios'
import { Icon, Input } from 'semantic-ui-react'

class SearchField extends React.Component {
	state = {
		query: '',
	}

	searchCards = query => {
		console.log('searching...')
		return axios.get(`https://api.magicthegathering.io/v1/cards?name=${query}`, { headers: { 'Access-Control-Allow-Origin': '*'}})
		.then(response => {
            console.log(response.data.cards)
			this.props.setCardsFound(response.data.cards)
		})
		.catch(error => {console.log(error)})
    }
    
	render() {
		return (
            <Input
                icon={<Icon name='search' inverted circular link onClick={() => this.searchCards(this.state.query)}/>}
                placeholder='Search...' value={this.state.query}
                onChange={event => {this.setState({ query: event.target.value })}}
            />
        )
    }
}

export default SearchField