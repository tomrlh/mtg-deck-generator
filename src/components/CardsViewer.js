import React from 'react'
import { styles } from '../styles'
import Card from './Card'
import { Subscribe } from 'unstated'
import SearchContainer from '../unstated/containers/SearchContainer'

class CardsViewer extends React.Component {

	render() {
		return (
			<Subscribe to={[SearchContainer]}>
				{searchState => (
					<div>
						<h4>Cards found</h4>
						<div className="playingCards">
							<div style={styles.resultsViewer}>
								{searchState.state.searchResult.length > 0 ? (
									<div>
										{searchState.state.searchResult.map((card, idx) => (
											<Card key={idx} card={card} hasAdd={true}/>
										))}
									</div>
								)
								: (
									<p>no cards found</p>
								)}
							</div>
						</div>
					</div>
				)}
			</Subscribe>
		)
	}
}

export default CardsViewer
