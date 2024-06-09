import React from 'react';

import aboutImage from '../../images/founder.webp';

const About = () => {
	return (
		<section className="about" id="about">
			<div className="max-width">
				<h2 className="title">About</h2>
				<div className="about-content">
					<div className="column left">
						<img src={aboutImage} alt="" />
					</div>
					<div className="column right">
						<div className="text">BharatPe's cofounder and MD Ashneer Grover</div>
						<p>
							BharatPe founder Ashneer Grover accused unnamed detractors of fanning the flames that led to
							him going on leave until the end of March. Grover also said he would be happy being just a
							shareholder and founder of BharatPe if he didn’t enjoy the same freedom going forward.
						</p>
						<br />
						<p>
							Having come in for immense criticism for allegedly abusing and threatening a Kotak Mahindra
							Bank employee last October, Grover said he wasn’t seeking damages from the bank over the
							Nykaa IPO financing matter, which was the genesis of the public scandal.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
