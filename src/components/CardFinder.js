import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setSearchResult } from '../redux/actions'

class CardFinder extends React.Component {
	state = {
		query: 'archangel',
	}

	searchCards = query => {
		axios.get(`https://api.magicthegathering.io/v1/cards?name=${query}`)
		.then(response => {
			console.log(response.data.cards)
			this.props.dispatch(setSearchResult(response.data.cards))
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
						onClick={() => {this.searchCards(this.state.query)}}/>
				</div>
			</div>
		)
	}
}

export default connect()(CardFinder)