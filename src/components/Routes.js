import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainView from './MainView'
import DeckViewer from './DeckViewer'

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={MainView}/>
				<Route path='/deck' component={DeckViewer}/>
			</Switch>
		</div>
	)
}

export default Routes