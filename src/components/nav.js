import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';
import logo from '../assets/logo.png';

export default function Nav() {
	return (
		<div className="nav">
			<ul>
				<li className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />
						Arhitecture Agency
					</Link>
				</li>
				<li>
					<Link to="">About</Link>
					<Link to="">Projects</Link>
					<Link to="">
						<button>Contact Us</button>
					</Link>
				</li>
			</ul>
		</div>
	);
}
