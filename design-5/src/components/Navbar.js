import React from 'react';

import Logo from '../image/brandLogo.svg';

function Navbar() {
	return (
		<div className="sticky top-0 py-5 lg:px-20 sm:px-10 px-5 flex items-center bg-[#f9f9f9]">
			<div className="flex-1">
				<img src={Logo} className="md:h-8 h-5" alt="Logo" />
			</div>
			<NavButton name="Home" />
			<NavButton name="Flashcard" />
			<NavButton name="Contact" />
			<NavButton name="FAQ" />

			<button className="bg-gradient-to-b from-blue-900 to-blue-600 rounded-full py-2 px-10 text-white">
				Login
			</button>
		</div>
	);
}

function NavButton({ name }) {
	return (
		<a href="/" className="md:mr-10 mr-5  md:block hidden  text-[#3A3740]">
			{name}
		</a>
	);
}

export default Navbar;
