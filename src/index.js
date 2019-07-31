import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './cards.css'
import Routes from './components/Routes'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'unstated'

ReactDOM.render(
	<Provider>
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'))
serviceWorker.unregister()