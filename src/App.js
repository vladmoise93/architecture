import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/nav';
import './App.scss';

function App() {
	return (
		<Router>
			<Nav />
			<Home />
		</Router>
	);
}

export default App;
