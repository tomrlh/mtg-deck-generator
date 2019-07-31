import React from 'react'
import CardFinder from './CardFinder'
import CardsViewer from './CardsViewer'
import DeckMinimized from './DeckMinimized'

class MainView extends React.Component {
	render() {
		return (
			<div>
				<CardFinder/>

				<CardsViewer/>

				<DeckMinimized/>
			</div>
		)
	}
}

export default MainView