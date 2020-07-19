import React, { useEffect } from 'react';
import '../styles/about.scss';
import checkImg from '../assets/Checkmark-Icon.png';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function About() {
	useEffect(() => {
		gsap
			.timeline()
			.fromTo('.section1_a h1', 1, { x: -300 }, { opacity: 1, x: 0 })
			.fromTo('.section2_a h1', 0.5, { x: -300 }, { opacity: 1, x: 0 })
			.fromTo(
				'.section2_a p',
				0.5,
				{ y: -60 },
				{ opacity: 1, y: 0, stagger: { amount: 0.8 }, ease: 'power4.out' }
			);
	}, []);

	useEffect(() => {
		const sections = document.querySelectorAll('section');

		const options = { root: null, threshold: 0.99, rootMargin: '-150px' };

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				if (entry.target.className === 'section3_a') section3();
				if (entry.target.className === 'section4_a') section4();
				if (entry.target.className === 'section5_a') section5();
				if (entry.target.className === 'section6_a') section6();
				observer.unobserve(entry.target);
			}, options);
		});
		sections.forEach((section) => {
			observer.observe(section);
		});
	}, []);

	return (
		<div className="App">
			<section className="section1_a">
				<h1>
					Our collective expertise supports communities <span>every step</span> of the way.
				</h1>
			</section>
			<section className="section2_a">
				<div className="container">
					<h1>
						We're a group of family businesses working together to <span>make communities better.</span>
					</h1>
					<div>
						<p>
							We're a sum of parts with similar values and a shared dream. Our dream is to be the one and
							only resource a community needs to plan, build, and manage high-quality
							developments—housing, mixed-use, or completely custom—that are made to last and remove
							barriers for healthy, scalable growth.
						</p>
						<p>
							Our developments are the result of careful listening, thoughtful planning, and the right
							projects in the right places. With so much attention to detail and the drive to provide
							rationale-based solutions, we've helped communities enjoy the growth they deserve. One
							development at a time.
						</p>
					</div>
				</div>
			</section>

			<section className="section3_a">
				<div className="container">
					<h1>
						<span>MEET THE PARTNERS</span> BEHIND OUR COMPANY.
					</h1>
					<p>
						Our combined expertise, shared values, and past successes make us uniquely qualified to form
						partnerships for the long haul and provide communities with a unified plan, build, manage
						approach.
					</p>
					<div>
						<div className="circle">
							<img
								src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
								alt=""
							/>
							<h1>Brent T. Brown</h1>
						</div>
						<div className="circle">
							<img
								src="https://images.unsplash.com/photo-1574027059879-d37e8aab2a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2008&q=80"
								alt=""
							/>
							<h1>Dusty D. Emmert</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="section4_a">
				<div className="container">
					<h1>
						Whatever solutions <span>your community needs </span>to grow and thrive, we develop them.
					</h1>
					<p>
						When we meet with community leaders to find out what pressing needs they have that we can help
						develop, our priority is to listen and learn. By asking communities to share their challenges
						and goals with us, we can identify the best possible plan for a solution that fulfills an
						immediate need and plays an important role in future growth.
					</p>
					<div className="imageContainer">
						<div>
							<img src={checkImg} alt="" />
							<h1>Community-first planning</h1>
						</div>
						<div>
							<img src={checkImg} alt="" />
							<h1>Custom approach and solutions</h1>
						</div>
						<div>
							<img src={checkImg} alt="" />
							<h1>Combined expertise and experience</h1>
						</div>
						<div>
							<img src={checkImg} alt="" />
							<h1>Facilitator for every resource needed</h1>
						</div>
						<div>
							<img src={checkImg} alt="" />
							<h1>Committed to preservation</h1>
						</div>
						<div>
							<img src={checkImg} alt="" />
							<h1>Serving local businesses first</h1>
						</div>
					</div>
				</div>
			</section>

			<section className="section5_a">
				<div className="container">
					<h1>
						TOGETHER, WE FACILITATE <span>EVERY LAST RESOURCE</span> NEEDED FOR COMMUNITY-BUILDING
						DEVELOPMENTS.
					</h1>
					<p>
						Our three-dimensional approach helps us ensure the communities we're working with don't have to
						shoulder the burden of finding answers or resources on their own. Not at the first collaborative
						meeting, not in the middle of construction, and not after the ribbon cutting. We're your
						partners for life so you can spend more time doing what you do best: working to improve your
						community.
					</p>
					<div className="center">
						<div>
							<div className="circle">
								<img
									src="https://images.unsplash.com/photo-1471970394675-613138e45da3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
									alt=""
								/>
								<h1>Plan</h1>
							</div>
						</div>
						<div>
							<div className="circle">
								<img
									src="https://images.unsplash.com/photo-1509395731449-4f6efe781cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
									alt=""
								/>
								<h1>Build</h1>
							</div>
						</div>
						<div>
							<div className="circle">
								<img
									src="https://images.unsplash.com/photo-1567016515344-5e3b0d67bb75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
									alt=""
								/>
								<h1>Manage</h1>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section6_a">
				<div className="container">
					<h1>
						Community members and movers and shakers alike <span>trust in our approach.</span>
					</h1>
					<div>
						<p>
							Our approach to planning, building, and managing developments has resulted in community
							milestones like more diverse residential options, places for local businesses to set up
							shop, and efficient solutions for housing shortages.
						</p>
					</div>
				</div>
			</section>
			<section className="section6" style={{ marginTop: 200 }}>
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

	function section3() {
		gsap.fromTo('.section3_a h1', { y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section3_a p', { y: -50 }, { delay: 0.7, opacity: 1, y: 0 });
		gsap.fromTo(
			'.section3_a .circle',
			{ x: 200 },
			{ delay: 0.7, duration: 1, opacity: 1, x: 0, stagger: { amount: 0.5 }, ease: 'power3.inOut' }
		);
	}
	function section4() {
		gsap.fromTo('.section4_a h1', 1, { y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section4_a p', 1, { x: 400 }, { delay: 0.5, opacity: 1, x: 0 });
		gsap.fromTo(
			'.section4_a .imageContainer div',
			1,
			{ x: 200 },
			{ delay: 0.5, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
		);
	}

	function section5() {
		gsap.fromTo('.section5_a h1', 1, { y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section5_a p', 1, { x: 100 }, { opacity: 1, x: 0 });
		gsap.fromTo(
			'.section5_a .circle',
			1,
			{ y: 100 },
			{ opacity: 1, y: 0, stagger: { amount: 1.2 }, ease: 'power4.in' }
		);
	}
	function section6() {
		gsap.fromTo('.section6_a h1', 1, { y: 100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section6_a div p', 1, { x: 100 }, { delay: 1, opacity: 1, x: 0 });
		gsap.to('.section6_a ', 1, { opacity: 1, y: 0, stagger: { amount: 1.2 }, ease: 'power4.in' });
	}
}
