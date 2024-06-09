import React from 'react';

import homeIcon from '../image/homeIcon.svg';
import rightArrow from '../image/rightArrow.svg';

function PageAddress() {
	return (
		<div className="flex items-center mb-10">
			<Address>
				<img src={homeIcon} className="md:h-6 h-4" alt="homeIcon" />
			</Address>
			<Address>Flashcard</Address>
			<Address>Mathematics</Address>
			<Address isLast={true}>Relation and Function</Address>
		</div>
	);
}

function Address({ children, isLast }) {
	return (
		<div
			className={`flex items-center md:text-base text-sm ${
				isLast ? 'text-[#06286E] font-semibold' : 'text-[#696671]'
			}`}
		>
			{children}
			{!isLast && <img src={rightArrow} alt="homeIcon" />}
		</div>
	);
}

export default PageAddress;
