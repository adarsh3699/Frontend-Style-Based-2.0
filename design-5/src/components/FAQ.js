import React from 'react';
import downArrow from '../image/downArrow.svg';

function FAQ() {
	const faqArray = [
		'Can education flashcards be used for all age groups?',
		'How do education flashcards work?',
		'Can education flashcards be used for test preparation?',
	];
	return (
		<div className="mt-20">
			<div className="font-bold text-5xl text-gradient mb-5">FAQ</div>
			{faqArray.map((item, index) => (
				<Accordion key={index} item={item} />
			))}
		</div>
	);
}

function Accordion({ item }) {
	return (
		<div className="rounded-xl border-2 border-sky-600 px-5 py-4 mb-5 md:w-2/3 w-full flex justify-between">
			{item}
			<img src={downArrow} alt="downArrow" />
		</div>
	);
}

export default FAQ;
