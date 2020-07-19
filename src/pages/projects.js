import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/projects.scss';
import { Link } from 'react-router-dom';

export default function Projects() {
	useEffect(() => {
		gsap.fromTo('.section1_p h1', 1, { opacity: 0, x: -60 }, { opacity: 1, x: 0 });
		gsap.fromTo('.section1_p span', 2, { opacity: 0, x: -60 }, { delay: 1, opacity: 1, x: 0 });
		gsap.fromTo('.section1_p h2', 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });
		section2();
	}, []);

	const imageList = [
		{
			src:
				'https://images.unsplash.com/photo-1582569464441-7f24a3cb0d96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
			title: 'Boomer Town Luxury Studios',
			location: 'Springfield, Missouri'
		},
		{
			src:
				'https://images.unsplash.com/photo-1567927235410-1d2a4c2a92c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
			title: 'Galloway Creek',
			location: 'Springfield, Missouri'
		},
		{
			src:
				'https://images.unsplash.com/photo-1579120959854-fbd00eceb0ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
			title: 'The Highline Apartments',
			location: 'Springfield, Missouri'
		},
		{
			src:
				'https://images.unsplash.com/photo-1466063642146-4b20cdabe9aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1517&q=80',
			title: 'Greenway Studios',
			location: 'Springfield, Missouri'
		}
	];

	const galery = imageList.map((img, i) => (
		<div className="galeryImg" key={i}>
			<h1>{img.title}</h1>
			<h2>{img.location}</h2>
			<button>Learn More</button>
			<img src={img.src} alt={i} />
		</div>
	));

	return (
		<div className="App">
			<section className="section1_p">
				<div className="flex">
					<div>
						<h1>
							We facilitate developments that help communities <span>thrive.</span>
						</h1>
					</div>
				</div>
			</section>
			<section className="section2_p">
				<h1 className="title">
					Take a look at our growing <span> development portfolio.</span>
				</h1>
				<div className="images">{galery}</div>
			</section>
			<section className="section3_p">
				<div className="flex">
					<h1>
						Take the first step toward a development that ignites limitless potential in your community. Get
						in touch.
					</h1>
					<Link
						to="/contact"
						onClick={() =>
							window.scroll({
								top: 0
							})}
					>
						<button>Contact us</button>
					</Link>
				</div>
			</section>
		</div>
	);

	function section2() {
		gsap.fromTo('.section2_p .title', 1, { opacity: 0, x: -900 }, { opacity: 1, x: 0 });
	}
}
