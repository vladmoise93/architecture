import React, { useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import Nav from '../components/nav';
import gsap from 'gsap';

function Home() {
	const [ section2Flag, setSection2Flag ] = useState(false);
	const [ section3Flag, setSection3Flag ] = useState(false);
	const [ section4Flag, setSection4Flag ] = useState(false);
	const [ section5Flag, setSection5Flag ] = useState(false);

	const section2Ref = useRef(null);
	const section3Ref = useRef(null);
	const section4Ref = useRef(null);
	const section5Ref = useRef(null);

	const intersection2 = useIntersection(section2Ref, {
		root: null,
		rootMargin: '200px',
		threshold: 0.9
	});
	const intersection3 = useIntersection(section3Ref, {
		root: null,
		rootMargin: '600px',
		threshold: 0.9
	});
	const intersection4 = useIntersection(section4Ref, {
		root: null,
		rootMargin: '600px',
		threshold: 0.9
	});
	const intersection5 = useIntersection(section5Ref, {
		root: null,
		rootMargin: '400px',
		threshold: 0.9
	});

	if (section2Flag == false) {
		if (intersection2 && intersection2.intersectionRatio > 0.9) section2();
	}
	if (section3Flag == false) {
		if (intersection3 && intersection3.intersectionRatio > 0.9) section3();
	}
	if (section4Flag == false) {
		if (intersection4 && intersection4.intersectionRatio > 0.9) section4();
	}
	if (section5Flag == false) {
		if (intersection5 && intersection5.intersectionRatio > 0.9) section5();
	}

	useEffect(() => {
		gsap.fromTo('.intro h1', 1, { opacity: 0, x: -60 }, { opacity: 1, x: 0 });
		gsap.fromTo('.intro span', 2, { opacity: 0, x: -60 }, { delay: 1, opacity: 1, x: 0 });
		gsap.fromTo('.intro h3', 1, { opacity: 0, y: 60 }, { opacity: 1, y: 0 });
	}, []);

	//
	//
	//
	//
	//
	//

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
			<div key={image} className="container">
				<img src={require(`../assets/1_${image}.jpg`)} alt="" />
				<div className="wrapper">
					<h3>{imageDescSec3[index]}</h3>
				</div>
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
			<div key={image} className="container2">
				<img src={require(`../assets/2_${image}.png`)} alt="" />
				<div className="wrapper">
					<h1>{imageDescSec4[index]}</h1>
					<h2>{imageDescSec4[index + 2]}</h2>
					<button>Learn More</button>
				</div>
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
				<img src={require(`../assets/gifs/${image}.gif`)} alt="" />
				<h3>{imageDescSec5[index]}</h3>
			</div>
		);
	});

	return (
		<div className="App">
			<section>
				<Nav />

				<div className="intro">
					<h1>
						Facilitating <span>vibrant</span> growth for communities
					</h1>
					<h3> OUR DEVELOPMENTS IGNITE LIMITLESS POTENTIAL IN THE PLACES THAT NEED THEM MOST.</h3>
				</div>
			</section>

			<section className="section2" ref={section2Ref}>
				<div className="container">
					<h1>
						Whatever solutions your community needs,<span> we develop them.</span>
					</h1>
					<div>
						<p>
							At Greenway Development Group, we facilitate every resource it takes to plan and create
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
						<button>Learn More</button>
					</div>
				</div>
			</section>
			<section className="section3" ref={section3Ref}>
				<div className="content">
					<h1>
						OUR DEVELOPMENTS ARE PERFECT SPACES FOR
						<span className="color">LIVING, WORKING, GROWING COMMUNITIES.</span>
					</h1>
					<p>
						Our <span className="underline">planning, building, and management</span> capabilities give the
						communities we work with developments that meet their unique needs and goals. From
						micro-efficiency studio developments perfect for independent students to luxury apartments with
						working professionals in mind, our unique approach gives us the resources and partnerships we
						need to help communities set their sights on the future.
					</p>
				</div>
				<div className="images">{section3ImageCase}</div>
			</section>

			<section className="section4" ref={section4Ref}>
				<div className="container">
					<h1>
						We're focused on facilitating developments that <span>help cities thrive.</span>
					</h1>
					<div>
						<p>
							Our partnerships with communities have allowed us to use a common-sense approach to plan,
							build, and manage properties based on real community needs. Our developments have been 100%
							pre-leased before completion, jump-started neighborhood revivals, and expanded campus
							communities.
						</p>
						<button>Learn More</button>
					</div>
				</div>
				<div className="images">{section4ImageCase}</div>
			</section>
			<section className="section5" ref={section5Ref}>
				<div className="wrapper">
					<h1>
						We're passionate about planning, building, and managing developments
						<span>with long-term value.</span>
					</h1>
				</div>
				<div className="content">{section5ImageCase}</div>
			</section>
			<section className="section6">
				<h1>
					Take the first step toward a development that ignites limitless potential in your community. Get in
					touch.
				</h1>
				<button>Contact us</button>
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
		setSection2Flag(true);
	}
	function section3() {
		gsap.fromTo('.section3 h1', 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section3 p', 1, { opacity: 0, y: -100 }, { delay: 0.5, opacity: 1, y: 0 });
		gsap.fromTo(
			'.section3 .images .container',
			1,
			{ opacity: 0, x: 200 },
			{ delay: 0.5, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
		);
		setSection3Flag(true);
	}
	function section4() {
		gsap.fromTo('.section4 h1', 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section4 p', 1, { opacity: 0, x: 400 }, { delay: 0.5, opacity: 1, x: 0 });
		gsap.fromTo('.section4 button', 1, { opacity: 0, x: 400 }, { delay: 0.5, opacity: 1, x: 0 });
		gsap.fromTo(
			'.section4 .images .container2',
			1,
			{ opacity: 0, x: 200 },
			{ delay: 0.5, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
		);
		setSection4Flag(true);
	}

	function section5() {
		gsap.fromTo('.section5 h1', 1, { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo(
			'.section5 .gifs',
			1,
			{ opacity: 0, y: 100 },
			{ opacity: 1, y: 0, stagger: { amount: 1.2 }, ease: 'power4.in' }
		);
		setSection5Flag(true);
	}
}

export default Home;
