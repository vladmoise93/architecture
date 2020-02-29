import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../assets/logo.png';

export default function Nav() {
	return (
		<div className="nav">
			<ul>
				<li className="logo">
					<Link to="/" />
					<img src={logo} alt="a" />
					Arhitecture Agency
				</li>
				<li className="logo">
					<Link to="">About</Link>
				</li>
				<li className="logo">
					<Link to="">Projects</Link>
				</li>
				<li className="contact">
					<Link to="">
						<button>Contact Us</button>
					</Link>
				</li>
			</ul>
		</div>
	);
}
