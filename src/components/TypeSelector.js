import React from 'react'
import axios from 'axios'

class TypeSelector extends React.Component {
	state = {
		types: [],
		selectedType: '',
	}

	setSelectedType = type => {
		if(type && type !== 'none') {
			this.setState({ selectedType: type })
		}
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
				<h4>Types of cards</h4>
				{this.state.types.length > 0 ? (
					<div style={{width: '80%'}}>
						{this.state.types.map((item, idx) => (
							<div style={{display: 'inline'}} key={idx}>
								<input type="radio" name="selectedType" value={item} onClick={event => {this.setSelectedType(event.target.value)}}/>
								{item}
							</div>
						))}
						<div style={{display: 'inline'}}>
							<input 
								type="radio" 
								name="none" 
								value="none"
								onClick={event => {this.setSelectedType(event.target.value)}}/>
							None
						</div>
					</div>
				) : (
					<p>loading...</p>
				)}

			</div>
		)
	}
}

export default TypeSelector