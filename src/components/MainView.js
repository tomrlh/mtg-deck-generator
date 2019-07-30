import React from 'react'
import { getTypes } from './APIRequests'
import axios from 'axios'

class MainView extends React.Component {
	state = {
		types: []
	}

	componentDidMount() {
		axios.get('https://api.magicthegathering.io/v1/types')
		.then(response => {
			console.log(response.data.types)
			this.setState({ types: response.data.types })
		})
		.catch(error => {console.log(error)})
	}

	render() {
		return (
			<div>
				{this.state.types &&
					<ul>
						{this.state.types.map((item, idx) => (
							<li key={idx}>{item}</li>
						))}
					</ul>
				}
			</div>
		)
	}
}

export default MainView