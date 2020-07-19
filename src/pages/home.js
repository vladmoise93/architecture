import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import '../styles/home.scss';
import { Link } from 'react-router-dom';

function Home() {
	const [ counter, setCounter ] = useState(0);

	// Top animations on first load
	useEffect(() => {
		gsap.fromTo('.section1 h1', 1, { opacity: 0, x: -60 }, { opacity: 1, x: 0 });
		gsap.fromTo('.section1', 1, { backgroundPosition: '0 0%' }, { opacity: 1, backgroundPosition: '0 55%' });
		gsap.fromTo('.section1 span', 2, { opacity: 0, x: -60 }, { delay: 1, opacity: 1, x: 0 });
		gsap.fromTo('.section1 h2', 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });
	}, []);

	// Intersection observer for animations on scroll
	useEffect(() => {
		const sections = document.querySelectorAll('section');

		const options = { root: null, threshold: 0.99, rootMargin: '-150px' };

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				if (entry.target.className === 'section2') section2();
				if (entry.target.className === 'section3') section3();
				if (entry.target.className === 'section4') section4();
				if (entry.target.className === 'section5') section5();
				observer.unobserve(entry.target);
			}, options);
		});
		sections.forEach((section) => {
			observer.observe(section);
		});
	}, []);

	// Image swap animations on button click
	useEffect(
		() => {
			let element = document.querySelector('.flexImagesSec4');
			const currentElement = element.children[counter];
			const currentElementSize = currentElement.clientWidth;

			if (counter < element.length - 1) {
				gsap.to(element, 1, {
					x: -currentElementSize * counter,
					duration: 1.5,
					ease: 'elastic.inOut(1, 1)'
				});
			}
			if (counter >= 0) {
				gsap.to(element, 1, {
					x: -currentElementSize * counter,
					duration: 1.5,
					ease: 'elastic.inOut(1, 1)'
				});
			}
		},
		[ counter ]
	);

	const imageDescSec3 = [
		'Studio Units',
		'Mixed Use',
		'1, 2 & 3 Bedrooms',
		'Student Housing',
		'Commercial Spaces',
		'Custom Approach'
	];
	const section3ImageCase = [ 1, 2, 3, 4, 5, 6 ].map((image, index) => {
		return (
			<div key={image}>
				<img src={require(`../assets/1_${image}.jpg`)} alt="" />
				<h3>{imageDescSec3[index]}</h3>
			</div>
		);
	});

	const imageDescSec4 = [
		'The Highline Apartments',
		'Galloway Creek',
		'Boomer Town Luxury Studios',
		'Luxury Apartments in a Natural Setting',
		'Mixed-Use in a Booming Neighborhood',
		'Studio Development Close to Campus'
	];
	const section4ImageCase = [ 1, 2, 3 ].map((image, index) => {
		return (
			<div key={image} className="imageSec4">
				<img src={require(`../assets/2_${image}.png`)} alt="" />
				<h1>{imageDescSec4[index]}</h1>
				<h2>{imageDescSec4[index + 2]}</h2>
				<button>Learn More</button>
			</div>
		);
	});

	const imageDescSec5 = [
		'Fully managed developments',
		'Clean, modern, adaptable builds',
		'Supports local business growth',
		'Built to preserve surroundings',
		'Successful pre-leasing and lease up record',
		'Functional and thoughtfully designed'
	];
	const section5ImageCase = [ 1, 2, 3, 4, 5, 6 ].map((image, index) => {
		return (
			<div key={image} className="gifs">
				<img src={require(`../assets/gifs/${index + 1}.gif`)} alt="" />
				<h3>{imageDescSec5[index]}</h3>
			</div>
		);
	});

	return (
		<div className="App">
			<section className="section1">
				<div className="flex">
					<div>
						<h1>
							Facilitating <span>vibrant</span> growth for communities
						</h1>
						<h2>OUR DEVELOPMENTS IGNITE LIMITLESS POTENTIAL IN THE PLACES THAT NEED THEM MOST.</h2>
					</div>
				</div>
			</section>
			<section className="section2">
				<div className="flex">
					<div>
						<h1>
							Whatever solutions your community needs, <span>we develop them</span>.
						</h1>
					</div>
					<div>
						<p>
							At our Development Group, we facilitate every resource it takes to plan and create
							high-quality developments, from site selection to design and construction to
							happily-ever-after property management. Over the past five years, we’ve completed over $50
							million in development projects for communities across multiple states.
						</p>
						<p>
							We’re passionate about using our expertise to build multi-family and mixed-use developments
							that bring affordable housing solutions to communities that need them. How do we know what
							those solutions are? By listening. By getting to know what communities need. By being a
							trusted partner.
						</p>
						<Link
							to="/about"
							onClick={() =>
								window.scroll({
									top: 0
								})}
						>
							<button className="lm">Learn More</button>
						</Link>
					</div>
				</div>
			</section>
			<section className="section3">
				<div className="flex">
					<div>
						<h1>
							OUR DEVELOPMENTS ARE PERFECT SPACES FOR <span>LIVING, WORKING, GROWING</span> COMMUNITIES.
						</h1>
						<p>
							Our <span>planning, building, and management</span> capabilities give the communities we
							work with developments that meet their unique needs and goals. From micro-efficiency studio
							developments perfect for independent students to luxury apartments with working
							professionals in mind, our unique approach gives us the resources and partnerships we need
							to help communities set their sights on the future.
						</p>
						<div className="flex flexImages">{section3ImageCase}</div>
					</div>
				</div>
			</section>
			<section className="section4">
				<div className="flex">
					<div className="content">
						<h1>
							We're focused on facilitating developments that <span>help cities thrive. </span>
						</h1>
						<p>
							Our partnerships with communities have allowed us to use a common-sense approach to plan,
							build, and manage properties based on real community needs. Our developments have been{' '}
							<span>100% pre-leased before completion, jump-started neighborhood revivals</span>, and{' '}
							<span>expanded campus communities.</span>
						</p>
						<Link
							to="/projects"
							onClick={() =>
								window.scroll({
									top: 0
								})}
						>
							<button>SEE PROJECTS</button>
						</Link>
					</div>
					<div className="buttonLR">
						<button
							className="buttonL"
							onClick={() => (counter > 0 ? setCounter(counter - 1) : setCounter(0))}
						>
							{'<'}
						</button>
						<button
							className="buttonR"
							onClick={() => (counter < 2 ? setCounter(counter + 1) : setCounter(2))}
						>
							{'>'}
						</button>
					</div>
					<div className="flexImagesSec4">{section4ImageCase}</div>
				</div>
			</section>
			<section className="section5">
				<div>
					<div className="flex">
						<h1>
							We're passionate about planning, building, and managing developments{' '}
							<span>with long-term value.</span>
						</h1>
						<div className="flexImages">{section5ImageCase}</div>
					</div>
				</div>
			</section>
			<section className="section6">
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
		gsap.fromTo('.section2 h1', 1, { opacity: 0, x: -300 }, { opacity: 1, x: 0 });
		gsap.fromTo(
			'.section2 p',
			1,
			{ opacity: 0, y: -60 },
			{ delay: 0.5, opacity: 1, y: 0, stagger: { amount: 0.8 }, ease: 'power4.out' }
		);
		gsap.fromTo(
			'.section2 button',
			1,
			{ y: 60 },
			{ delay: 1, opacity: 1, y: 0, stagger: { amount: 0.8 }, ease: 'power4.out' }
		);
	}
	function section3() {
		gsap.fromTo('.section3 h1', 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section3 p', 1, { opacity: 0, y: -100 }, { delay: 0.5, opacity: 1, y: 0 });
		gsap.fromTo(
			'.section3 .flexImages div',
			1,
			{ opacity: 0, x: 200 },
			{ delay: 0.5, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
		);
		gsap.fromTo(
			'.section3 h3',
			1,
			{ opacity: 0, x: 200 },
			{ delay: 0.5, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
		);
	}
	function section4() {
		gsap
			.timeline()
			.fromTo('.section4 .content h1', 0.5, { x: -200 }, { opacity: 1, x: 0 })
			.fromTo('.section4 .content p', 0.5, { x: -200 }, { opacity: 1, x: 0 })
			.fromTo('.section4 .content button', 0.5, { x: -200 }, { opacity: 1, x: 0 })
			.fromTo('.section4 .content button', 0.5, { y: 100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section4 .buttonL', 0.5, { x: -2000 }, { delay: 2, opacity: 1, x: 0 });
		gsap.fromTo('.section4 .buttonR', 0.5, { x: 2000 }, { delay: 2, opacity: 1, x: 0 });
		gsap
			.timeline()
			.fromTo(
				'.section4 .imageSec4',
				0.5,
				{ x: 200 },
				{ delay: 1, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
			)
			.fromTo(
				[ '.section4 .imageSec4 h1', '.section4 .imageSec4 h2', '.section4 .imageSec4 button' ],
				0.5,
				{ y: 100 },
				{ opacity: 1, y: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
			);
	}

	function section5() {
		gsap.fromTo('.section5 h1', 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section5 h3', 1, { opacity: 0 }, { opacity: 1, y: 0 });
		gsap.fromTo(
			'.section5 div',
			1,
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, stagger: { amount: 1.2 }, ease: 'power4.in' }
		);
	}
}

export default Home;
