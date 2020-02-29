import React from 'react';
import './App.scss';
import Nav from './components/nav';
import { HashRouter as Router } from 'react-router-dom';
import img1_1 from './assets/1_1.jpg';
import img1_2 from './assets/1_2.jpg';
import img1_3 from './assets/1_3.jpg';
import img1_4 from './assets/1_4.jpg';
import img1_5 from './assets/1_5.jpg';
import img1_6 from './assets/1_6.jpg';

import img2_2 from './assets/2_2.png';
import img2_3 from './assets/2_3.png';
import img2_4 from './assets/2_4.png';

import img3_1 from './assets/gifs/1.gif';
import img3_2 from './assets/gifs/2.gif';
import img3_3 from './assets/gifs/3.gif';
import img3_4 from './assets/gifs/4.gif';
import img3_5 from './assets/gifs/5.gif';
import img3_6 from './assets/gifs/6.gif';

function App() {
	return (
		<Router>
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

				<section>
					<div className="container">
						<h1>
							Whatever solutions your community needs,<span> we develop them.</span>
						</h1>
						<div>
							<p>
								At Greenway Development Group, we facilitate every resource it takes to plan and create
								high-quality developments, from site selection to design and construction to
								happily-ever-after property management. Over the past five years, we’ve completed over
								$50 million in development projects for communities across multiple states.
							</p>

							<p>
								We’re passionate about using our expertise to build multi-family and mixed-use
								developments that bring affordable housing solutions to communities that need them. How
								do we know what those solutions are? By listening. By getting to know what communities
								need. By being a trusted partner.
							</p>
							<button>Learn More</button>
						</div>
					</div>
				</section>
				<section>
					<div className="content">
						<h1>
							OUR DEVELOPMENTS ARE PERFECT SPACES FOR{' '}
							<span className="color">LIVING, WORKING, GROWING COMMUNITIES.</span>
						</h1>
						<p>
							Our <span className="underline">planning, building, and management</span> capabilities give
							the communities we work with developments that meet their unique needs and goals. From
							micro-efficiency studio developments perfect for independent students to luxury apartments
							with working professionals in mind, our unique approach gives us the resources and
							partnerships we need to help communities set their sights on the future.
						</p>
					</div>
					<div className="images">
						<div className="container">
							<img src={img1_1} alt="" />
							<div className="wrapper">
								<h3>Studio Units</h3>
							</div>
						</div>
						<div className="container">
							<img src={img1_2} alt="" />
							<div className="wrapper">
								<h3>1, 2, &amp; 3 Bedrooms</h3>
							</div>
						</div>
						<div className="container">
							<img src={img1_3} alt="" />
							<div className="wrapper">
								<h3>Mixed Use</h3>
							</div>
						</div>
						<div className="container">
							<img src={img1_4} alt="" />
							<div className="wrapper">
								<h3>Student Housing</h3>
							</div>
						</div>
						<div className="container">
							<img src={img1_5} alt="" />
							<div className="wrapper">
								<h3>Commercial Spaces</h3>
							</div>
						</div>
						<div className="container">
							<img src={img1_6} alt="" />
							<div className="wrapper">
								<h3>Custom Approach</h3>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<h1>
							We're focused on facilitating developments that <span>help cities thrive.</span>
						</h1>
						<div>
							<p>
								Our partnerships with communities have allowed us to use a common-sense approach to
								plan, build, and manage properties based on real community needs. Our developments have
								been 100% pre-leased before completion, jump-started neighborhood revivals, and expanded
								campus communities.
							</p>
							<button>Learn More</button>
						</div>
					</div>
					<div className="images">
						<div className="container2">
							<img src={img2_2} alt="" />
							<div className="wrapper">
								<h1>The Highline Apartments</h1>
								<h2>Luxury Apartments in a Natural Setting</h2>
								<button>Learn More</button>
							</div>
						</div>
						<div className="container2">
							<img src={img2_3} alt="" />
							<div className="wrapper">
								<h1>Galloway Creek</h1>
								<h2>Mixed-Use in a Booming Neighborhood</h2>
								<button>Learn More</button>
							</div>
						</div>
						<div className="container2">
							<img src={img2_4} alt="" />
							<div className="wrapper">
								<h1>Boomer Town Luxury Studios</h1>
								<h2>Studio Development Close to Campus</h2>
								<button>Learn More</button>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="wrapper">
						<h1>
							We're passionate about planning, building, and managing developments
							<span>with long-term value.</span>
						</h1>
					</div>
					<div className="content">
						<div>
							<img src={img3_1} alt="" />
							<h3>
								Fully managed <tr /> developments
							</h3>
						</div>
						<div>
							<img src={img3_2} alt="" />
							<h3>Clean, modern, adaptable builds</h3>
						</div>
						<div>
							<img src={img3_3} alt="" />
							<h3>Supports local business growth</h3>
						</div>
						<div>
							<img src={img3_4} alt="" />
							<h3>Built to preserve surroundings</h3>
						</div>
						<div>
							<img src={img3_5} alt="" />
							<h3>Successful pre-leasing and lease up record</h3>
						</div>
						<div>
							<img src={img3_6} alt="" />
							<h3>Functional and thoughtfully designed</h3>
						</div>
					</div>
				</section>
				<section>
					<h1>
						Take the first step toward a development that ignites limitless potential in your community. Get
						in touch.
					</h1>
					<button>Contact us</button>
				</section>
			</div>
		</Router>
	);
}

export default App;
