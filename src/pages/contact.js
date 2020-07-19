import React, { useEffect, useRef } from 'react';
import '../styles/contact.scss';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Contact() {
	const formRef = useRef(null);

	useEffect(() => {
		gsap.timeline().fromTo('.section1_c h1', 1, { x: -300 }, { opacity: 1, x: 0 });
		gsap.fromTo([ '.section2_c h1' ], 0.5, { x: -100 }, { opacity: 1, x: 0 });
		gsap.fromTo(
			[ '.section2_c p', '.section2_c button', '.section2_c svg' ],
			0.5,
			{ y: -60 },
			{ opacity: 1, y: 0, stagger: { amount: 0.8 }, ease: 'power4.out' }
		);
		gsap.fromTo(
			[ 'label', 'select', 'textarea', 'input' ],
			0.5,
			{ x: 250 },
			{ opacity: 1, x: 0, stagger: { amount: 0.8 }, ease: 'power4.out' }
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
				if (entry.target.className === 'section3_c') section3();
				if (entry.target.className === 'section4_c') section4();
				observer.unobserve(entry.target);
			}, options);
		});
		sections.forEach((section) => {
			observer.observe(section);
		});
	}, []);

	const handleSubmit = (e) => {
		gsap.to('.submitted', 0.2, { opacity: 1, y: window.innerHeight / 2, visibility: 'visible' });
	};

	const inputField = (e) => {
		if (e.target.value == null) alert();
	};

	return (
		<div className="App">
			<section className="section1_c">
				<div className="submitted">
					<svg className="svg-icon" viewBox="0 0 20 20">
						<path d="M9.917,0.875c-5.086,0-9.208,4.123-9.208,9.208c0,5.086,4.123,9.208,9.208,9.208s9.208-4.122,9.208-9.208
								C19.125,4.998,15.003,0.875,9.917,0.875z M9.917,18.141c-4.451,0-8.058-3.607-8.058-8.058s3.607-8.057,8.058-8.057
								c4.449,0,8.057,3.607,8.057,8.057S14.366,18.141,9.917,18.141z M13.851,6.794l-5.373,5.372L5.984,9.672
								c-0.219-0.219-0.575-0.219-0.795,0c-0.219,0.22-0.219,0.575,0,0.794l2.823,2.823c0.02,0.028,0.031,0.059,0.055,0.083
								c0.113,0.113,0.263,0.166,0.411,0.162c0.148,0.004,0.298-0.049,0.411-0.162c0.024-0.024,0.036-0.055,0.055-0.083l5.701-5.7
								c0.219-0.219,0.219-0.575,0-0.794C14.425,6.575,14.069,6.575,13.851,6.794z" />
					</svg>
					<h1>
						Thank you
						<br />
						The form was submitted successfully.
					</h1>
					<button
						onClick={(e) => {
							e.target.parentElement.style.visibility = 'hidden';
						}}
						className="close"
					>
						X
					</button>
				</div>
				<h1>
					Let's talk about <span>your</span> project.
				</h1>
			</section>
			<section className="section2_c">
				<div className="container">
					<div>
						<h1>Arhitecture Agency</h1>
						<div>
							<div style={{ display: 'flex', alignItems: 'center', fontWeight: 100 }}>
								<svg className="svg-icon" viewBox="0 0 20 20" width="40px" opacity="0">
									<path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589" />
								</svg>
								<p style={{ margin: 35 }}>
									3938 S. Lone Pine Avenue <br /> Suite 101 <br /> Springfield, MO 65804
								</p>
							</div>
							<button style={{ margin: '0 70px', color: 'white', fontWeight: 600, letterSpacing: 2 }}>
								Get directions
							</button>
						</div>
						<div>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<svg className="svg-icon" viewBox="0 0 30 30" width="40px" opacity="0">
									<path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
								</svg>
								<p
									style={{
										margin: '80px 35px',
										padding: 0,
										borderBottom: '2px solid #bdd631',
										fontWeight: 100
									}}
								>
									417-999-9998
								</p>
							</div>
						</div>
					</div>
					<form
						style={{ display: 'flex', flexDirection: 'column' }}
						onSubmit={(e) => handleSubmit()}
						ref={formRef}
					>
						<label>I'M INTERESTED IN…</label>
						<select required="" onChange={(e) => inputField(e)}>
							<option value="defaultValue">Select an interest…</option>
							<option value="project">A new project</option>
							<option value="invest">Investing in an existing project</option>
							<option value="other">Other (Let us know in your message)</option>
						</select>

						<label>NAME</label>
						<input onChange={(e) => inputField(e)} type="text" placeholder="Enter your name..." />

						<label>PHONE</label>
						<input onChange={(e) => inputField(e)} type="text" placeholder="Enter your phone number..." />

						<label>EMAIL ADDRESS</label>
						<input onChange={(e) => inputField(e)} type="email" placeholder="Enter your email address..." />

						<label>MESSAGE</label>
						<textarea placeholder="How can we help you?" />

						<label>
							<input type="checkbox" />
							Sign me up for news and updates.
						</label>

						<button type="submit" style={{ color: 'white', fontWeight: 600, letterSpacing: 2 }}>
							SEND MESSAGE
						</button>
					</form>
				</div>
			</section>

			<section className="section3_c">
				<div className="container">
					<h1>
						REACH OUT DIRECTLY TO ONE OF OUR<span> EXPERIENCED PARTNERS.</span>
					</h1>
					<p />
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

			<section className="section4_c">
				<div className="container">
					<h1>We're a group of family businesses working together to make communities better.</h1>
					<p>
						We're a sum of parts with similar values and a shared dream. Our dream is to be the one and only
						resource a community needs to plan, build, and manage high-quality developments—housing,
						mixed-use, or completely custom—that are made to last and remove barriers for healthy, scalable
						growth. Our developments are the result of careful listening, thoughtful planning, and the right
						projects in the right places. With so much attention to detail and the drive to provide
						rationale-based solutions, we've helped communities enjoy the growth they deserve. One
						development at a time.
					</p>
				</div>
			</section>
			<section className="section5_c" style={{ marginTop: 200 }}>
				<div className="flex">
					<h1>
						Find out more about how our plan, build, manage process improves communities, one development at
						a time.
					</h1>
					<button
						onClick={() =>
							formRef.current.scrollIntoView({
								behavior: 'smooth'
							})}
					>
						Contact us
					</button>
				</div>
			</section>
		</div>
	);

	function section3() {
		gsap.fromTo('.section3_c h1', { y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section3_c p', { y: -50 }, { delay: 0.7, opacity: 1, y: 0 });
		gsap.fromTo(
			'.section3_c .circle',
			{ x: 200 },
			{ delay: 0.7, duration: 1, opacity: 1, x: 0, stagger: { amount: 0.5 }, ease: 'power3.inOut' }
		);
	}
	function section4() {
		gsap.fromTo('.section4_c h1', 1, { y: -100 }, { opacity: 1, y: 0 });
		gsap.fromTo('.section4_c p', 1, { x: 400 }, { delay: 0.5, opacity: 1, x: 0 });
		gsap.fromTo(
			'.section4_c .imageContainer div',
			1,
			{ x: 200 },
			{ delay: 0.5, opacity: 1, x: 0, stagger: { amount: 1.5 }, ease: 'power3.inOut' }
		);
	}
}
