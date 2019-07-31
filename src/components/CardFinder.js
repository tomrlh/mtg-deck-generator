import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setSearchResult } from '../redux/actions'

class CardFinder extends React.Component {
	state = {
		query: '',
	}

	searchCards = query => {
		console.log('searching...')
		return axios.get(`https://api.magicthegathering.io/v1/cards?name=${query}`, { headers: { 'Access-Control-Allow-Origin': '*'}})
		.then(response => {
			return response.data.cards
		})
		.catch(error => {console.log(error)})
	}

	render() {
		return (
			<div>
				<h4>Cards search</h4>
				<div>
					<input 
						type="text" value={this.state.query}
						onChange={event => {this.setState({ query: event.target.value })}}
					/>
					<input 
						type="button"
						value="Search"
						onClick={async () => {
							let cards = await this.searchCards(this.state.query)
							this.props.dispatch(setSearchResult(cards))
						}}/>
				</div>
			</div>
		)
	}
}

export default connect()(CardFinder)