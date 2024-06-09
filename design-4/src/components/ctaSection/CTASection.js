import React from 'react';

const CTASection = ({ handleClickOpen }) => {
	return (
		<section className="cta_section">
			<div className="max-width">
				<div className="cta_section_table">
					<div className="cta_section_table_left">
						<div className="cta_section_table_left_title">Crash course Launch Offer (Save INR 1799)</div>
						<div className="cta_section_table_left_text">
							<li>Learn the toolkit of the professionals in just 3 hours</li>
							<li>Enjoy the discounted price of 2 299</li>
							<li>The launch offer expires soon, grab your seat NOW!</li>
						</div>
					</div>
					<div className="cta_section_table_right">
						<div className="cta_section_table_right_title">Price of the Program</div>
						<div className="cta_section_table_right_price">
							<div className="cta_section_table_right_main_price">₹ 499</div>{' '}
							<div className="cta_section_table_right_cross_price">₹ 1999</div>
						</div>
						<div className="cta_section_table_right_btn" onClick={handleClickOpen}>
							Register Now
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
