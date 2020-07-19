import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Nav from './components/nav';
import Contact from './pages/contact';
import './App.scss';

function App() {
	return (
		<Router>
			<Nav />
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/projects">
				<Projects />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/contact">
				<Contact />
			</Route>
		</Router>
	);
}

export default App;
