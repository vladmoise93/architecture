import React from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom';
import Home from './pages/home';

function App() {
	return (
		<Router>
			<Home />
		</Router>
	);
}

export default App;
