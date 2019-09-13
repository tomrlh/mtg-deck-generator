import React from 'react'
import axios from 'axios'
import { Icon, Input, Loader } from 'semantic-ui-react'
import { Subscribe } from 'unstated'
import SearchContainer from '../unstated/containers/SearchContainer'

class SearchField extends React.Component {
	state = {
        query: '',
        isLoading: false
	}

	searchCards = query => {
        this.setState({isLoading: true})
		console.log('searching...')
		return axios.get(`https://api.magicthegathering.io/v1/cards?name=${query}`, { headers: { 'Access-Control-Allow-Origin': '*'}})
		.then(response => {
            // console.log(response.data.cards)
            // this.props.setCardsFound(response.data.cards)
            this.setState({isLoading: false})
            return response.data.cards
		})
		.catch(error => {console.log(error)})
    }
    
	render() {
		return (
            <Subscribe to={[SearchContainer]}>
                {searchState => (
                    <div>
                        <Input
                            icon={<Icon name='search' inverted circular link
                            onClick={async () => {
                                let cards = await this.searchCards(this.state.query)
                                searchState.setCardsFound(cards)                                
                            }}/>
                        }
                            placeholder='Search...' value={this.state.query}
                            onChange={event => {this.setState({ query: event.target.value })}}
                        />
                        <Loader active inline style={{display: this.state.isLoading ? 'inline' : 'none'}}/>
                    </div>
                )}
            </Subscribe>
        )
    }
}

export default SearchField