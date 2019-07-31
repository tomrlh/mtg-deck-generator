import React from 'react'
import TypeSelector from './TypeSelector'
import CardFinder from './CardFinder'
import CardsViewer from './CardsViewer'
import DeckMinimized from './DeckMinimized'
import DeckViewer from './DeckViewer'
import { Link } from 'react-router-dom'

class MainView extends React.Component {
	render() {
		return (
			<div>
				<TypeSelector/>

				<CardFinder/>

				<CardsViewer/>

				<Link to='/deck'>view deck details →</Link>
			</div>
		)
	}
}

export default MainView