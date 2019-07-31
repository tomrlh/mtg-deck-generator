import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './cards.css'
import Routes from './components/Routes'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes/>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'))
serviceWorker.unregister()